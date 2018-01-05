const URL = 'mongodb://localhost:27017';
const MongoClient = require('mongodb').MongoClient;

let db;

function connect() {
	MongoClient.connect(URL, function(err, client) {
		console.log('Successfully conencted to Mongo');
		db = client.db('fhir');
	});
}


module.exports.getClient = function() {
	return db;
};

module.exports.initializeMongo = function() {
	connect();
};
