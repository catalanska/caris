var global = require('./init');

var app = global.app;
var igClient = global.igClient;

var mongodb, igCollection, subscriptionsCollection;

global.mongoClient.connect(global.mongoUrl, function(err, db) {
    mongodb = db;
    igCollection = db.collection('instagram');
    subscriptionsCollection = db.collection('subscriptions');
    console.log("Connected correctly to server");
});

// To retrieve list and return to client
app.get('/ping', function (req, res) {
        res.end('PONG');
});

app.route('/taggedPhotos')
    .get(function (req, res) { // To retrieve list and return to client
        igCollection.find({show: true}).sort({created_time: -1}).toArray(function (err, docs) {
            res.json(docs);
        });
    }
);

app.route('/taggedPhotos/:id')
    .put(function (req, res) { // To update taggedPhoto
        igCollection.update({id: req.params.id}, {$set: req.body}, function (err, result) {
            if(err){ console.log(err);res.status(500); }
            else res.status(200);
            res.end();
        });
    }
);

app.route('/taggedPhotoSubscription')
    .get(function (req, res) { // To confirm subscription
        res.send(req.query['hub.challenge']);
    })
    .post(function (req, res) { // To receive updates from IG
        var subscriptions = req.body;
        for(idx in subscriptions){
            getSubscription(subscriptions[idx].object_id, function(subscription){
                getNewTaggedPhotos(subscription);
            });
        }
        res.json('OK');
    }
);

// Subscription creation & first import
// curl -H "Content-Type: application/json" -d '{"tag":"esteryjavi"}' http://localhost:3000/createTaggedPhotoSubscription
app.post('/createTaggedPhotoSubscription', function (req, res) {
    var tag = req.body.tag;
    // Create subscription
    igClient.add_tag_subscription(tag, 'http://www.esteryjaviycomieronperdices.es/taggedPhotoSubscription', [], function(err, result, remaining, limit){
        if(err) console.log("Error creting subscription: "+err);
        initSubscription(tag,function(subscription){
            console.log(subscription);
            getNewTaggedPhotos(subscription);
        });
    });
    res.json('OK');
});


var getNewTaggedPhotos = function(subscription) {
    igClient.tag_media_recent(subscription.tag, {min_tag_id: subscription.minTagId}, function (err, medias, pagination, remaining, limit) {
        storeNewTaggedPhotos(subscription, medias, pagination);
    });
};

var storeNewTaggedPhotos = function(subscription, photos, pagination){
    for (idx in photos) {
        insertPhotoInDB(photos[idx]);
    }
    if (pagination) {
        updateSubscription(subscription, pagination.min_tag_id, function() {
            if (pagination.next) pagination.next(function (err, photos, pagination, remaining, limit){ storeNewTaggedPhotos(subscription, photos, pagination) });
        });
    }
};

var insertPhotoInDB = function(data){
    data.show = true;
    igCollection.insert(data, function(err, result) {
            if(err) console.log("Error while insert "+err);
    });
};

var initSubscription = function(tag, callback){
    subscriptionsCollection.insert({'tag': tag}, function(err, result) {
        if(err) console.log(err);
        callback(result[0]);
    });
};

var getSubscription = function(tag, callback){
    subscriptionsCollection.find({'tag': tag}).limit(1).toArray(function(err, config) {
      callback(config[0]);
    });
};

var updateSubscription = function(subscription, minTagId, callback){
    subscription.minTagId = minTagId;
    console.log(subscription);
    subscriptionsCollection.update({_id:subscription._id}, subscription, function(err, config){
        if(err) console.log(err);
        callback();
    });
};
