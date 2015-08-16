var mongo = require('mongodb').MongoClient;
var age = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	var parrots = db.collection('parrots');
	parrots.find({
		age: {
			$gt: +age
		}
	}, {
		_id: 0
		, name: 1
		, age: 1
	}).toArray(function(err, documents) {
		console.log(documents);
		db.close()
	})
})