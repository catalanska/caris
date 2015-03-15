var global = require('./init');

var app = global.app;
var igClient = global.igClient;

var mongodb, igCollection;

global.mongoClient.connect(global.mongoUrl, function(err, db) {
    mongodb = db;
    igCollection = db.collection('instagram');
    console.log("Connected correctly to server");
});

app.get('/ig_images', function (req, res) {
    igCollection.find({}).limit(30).toArray(function(err, docs) {
        res.json(docs);
    });

});

app.get('/ig_images/update', function (req, res) {
    getAllPhotos();
    res.send('Hello World!');
});


var getAllPhotos = function(){
    igClient.tag_media_recent('lavellana', findMorePhotos);
};

var findMorePhotos = function(err, medias, pagination, remaining, limit){
    for(idx in medias){
        igCollection.insert(
            medias[idx]
            , function(err, result) {
                if(err) console.log("Error while insert "+err);
            });
    }
    if(pagination.next) {
        pagination.next(findMorePhotos);
    }
};
