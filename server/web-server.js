var global = require('./init');

var app = global.app;
var igClient = global.igClient;

var mongodb, igCollection;

global.mongoClient.connect(global.mongoUrl, function(err, db) {
    mongodb = db;
    igCollection = db.collection('instagram');
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
    var updates = req.body;
    for(idx in updates){
        var update = updates[idx];
        igClient.media(update.object_id, function(err, media, remaining, limit) {
            insertInDB(media.data);
        });
    }
    res.json('OK');
});

// First import and subscription creation
// curl -H "Content-Type: application/json" -d '{"tag":"prueba012"}' http://localhost:3000/createTaggedPhotoSubscription
app.post('/createTaggedPhotoSubscription', function (req, res) {
    var tag = req.body.tag;
    // First import
    getTaggedPhotos(tag);
    // Create subscription
    igClient.add_tag_subscription(tag, 'http://52.11.10.218/api/taggedPhotoSubscription', [], function(err, result, remaining, limit){
        if(err) console.log(err);
    });
    res.send('Hello World!');
});


var getTaggedPhotos = function(tag){
    igClient.tag_media_recent(tag, findMoreTaggedPhotos);
};

var findMoreTaggedPhotos = function(err, medias, pagination, remaining, limit){
    for(idx in medias){
        insertInDB(medias[idx]);
    }
    if(pagination && pagination.next) {
        pagination.next(findMoreTaggedPhotos);
    }
};

var insertInDB = function(data){
    igCollection.insert(
        data
        , function(err, result) {
            if(err) console.log("Error while insert "+err);
        });
};
