//requires
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
//location of the mongoDB named 'test'
var url = 'mongodb://localhost:27017/test';

//To return all documents in a collection, call the find method without
//a criteria document.
var findRestaurants = function(db, callback) {
	var cursor = db.collection('restaurants').find( );
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if (doc != null) {
			console.dir(doc);
		} else {
			callback();
		}
	});
};

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurants(db, function() {
		db.close();
	});
});
