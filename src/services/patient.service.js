const path = require('path');
const mongo = require(path.resolve('./src/services/mongo.client'));
const { Patient } = require(path.resolve('./src/server/resources/Patient'));

/**
 *
 * @param {*} req
 * @param {*} logger
 */
module.exports.getCount = (req, logger) => new Promise((resolve, reject) => {
	const db = mongo.getClient();
	const collection = db.collection('patient');

	collection.find({}).count(function (e, count) {
		if (e) {
			logger.error(e);
			reject(e);
		} else {
			resolve(count);
		}
	});
});

/**
 *
 * @param {*} req
 * @param {*} logger
 */
module.exports.getPatientById = (req, logger) => new Promise((resolve, reject) => {
	if (req.params.id) {
		// Use connect method to connect to the server
		const db = mongo.getClient();
		const collection = db.collection('patient');

		collection.findOne({id: req.params.id}, function (e, patient) {
			if (e) {
				logger.error(e);
				reject(e);
			}

			if (patient) {
				resolve(new Patient(patient));
			} else {
				// return empty so controller can respond with not found
				resolve();
			}
		});
	} else {
		reject('ID not specified');
	}
});

/**
 *
 * @param {*} req
 * @param {*} logger
 */
module.exports.getPatient = (req, logger) => new Promise((resolve, reject) => {

	const params = req.query;
	const options = {};

	if (params.id) {
		options.id = params.id;
	}

	if (params.identifier) {
		options.identifier = [];
		const parts = params.identifier.split('|');

		const identifier = {};
		identifier.system = parts[0];
		identifier.value = parts[1];

		options.identifier.push(identifier);
	}

	const name = {};

	if (params.name) {
		name.text = params.name;
	}

	if (params.family) {
		name.family = [params.family];
	}

	if (params.given) {
		name.given = [params.given];
	}

	if (params.gender) {
		options.gender = params.gender;
	}

	if (name.text || name.given || name.family) {
		options.name = [name];
	}

	if (params.birthdate) {
		options.birthDate = params.birthdate;
	}

	// Use connect method to connect to the server
	const db = mongo.getClient();
	const collection = db.collection('patient');
	collection.find(options).toArray(function (e, patients) {
		if (e) {
			logger.error(e);
			reject(e);
		}

		if (patients && patients.length > 0) {
			resolve(patients.map((p) => new Patient(p)));
		} else {
			resolve([]);
		}
	});
});
