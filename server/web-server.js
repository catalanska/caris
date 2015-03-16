var global = require('./init');

var app = global.app;
var igClient = global.igClient;

var mongodb, igCollection, configCollection;

global.mongoClient.connect(global.mongoUrl, function(err, db) {
    mongodb = db;
    igCollection = db.collection('instagram');
    configCollection = db.collection('config');
    console.log("Connected correctly to server");
});

// To retieve list and return to client
app.get('/taggedPhotos', function (req, res) {
    igCollection.find({}).limit(30).toArray(function(err, docs) {
        res.json(docs);
    });
});


// To confirm subscription
app.get('/taggedPhotoSubscription', function (req, res) {
    console.log("Confirm tag subscription");
    console.log(req.query);
    res.send(req.query['hub.challenge']);
});

// To receive updates from IG
app.post('/taggedPhotoSubscription', function (req, res) {
    console.log("New tagged Photos");
    console.log(req.body);
    getConfig(function(config){
        getTaggedPhotos(config.tag, config.minTagId);
    });
    res.json('OK');
});

// First import and subscription creation
// curl -H "Content-Type: application/json" -d '{"tag":"prueba012"}' http://localhost:3000/createTaggedPhotoSubscription
app.post('/importTaggedPhotos', function (req, res) {
    var tag = req.body.tag;
    // First import
    initConfig(tag,function(){
        getTaggedPhotos(tag, null);
    });

    res.send('Hello World!');
});

app.post('/createTaggedPhotoSubscription', function (req, res) {
    var tag = req.body.tag;
    // Create subscription
    igClient.add_tag_subscription(tag, 'http://52.11.10.218/api/taggedPhotoSubscription', [], function(err, result, remaining, limit){
        if(err) console.log(err);
    });
    res.send('Hello World!');
});


var getTaggedPhotos = function(tag, minTagId){
    igClient.tag_media_recent(tag, [minTagId], findMoreTaggedPhotos);
};

var findMoreTaggedPhotos = function(err, medias, pagination, remaining, limit){
    for(idx in medias){
        insertPhotoInDB(medias[idx]);
    }
    if(pagination) {
        updateConfig(pagination.min_tag_id, function(){
           if(pagination.next) pagination.next(findMoreTaggedPhotos);
        });
    }
};

var insertPhotoInDB = function(data){
    igCollection.insert(data, function(err, result) {
            if(err) console.log("Error while insert "+err);
    });
};

var initConfig = function(tag, callback){
    configCollection.insert({'tag': tag}, function(err, result) {
        if(err) console.log("Error while insert "+err);
        callback(result);
    });
};

var getConfig = function(callback){
    configCollection.find().limit(1).toArray(function(err, config) {
      callback(config[0]);
    });
};

var updateConfig = function(minTagId, callback){
    getConfig(function(config){
        config["minTagId"] = minTagId;
        configCollection.update({_id:config._id}, config, function(err, config){
            callback();
        });
    });
};
