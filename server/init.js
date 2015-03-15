var ig = require('instagram-node').instagram();

ig.use({ client_id: 'ead1d24e2cd3494bb254419193ee411a', client_secret: 'cd47fa5782ae4be6aae0ed7ccf0d8638' });


var express = require('express');
var app = express();



var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

});



var mongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var mongoUrl = 'mongodb://localhost:27017/caris';



exports.igClient = ig;
exports.server = server;
exports.app = app;
exports.mongoUrl = mongoUrl;
exports.mongoClient = mongoClient;
