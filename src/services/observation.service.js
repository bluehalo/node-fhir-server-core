const path = require('path');
const dateUtils = require(path.resolve('./src/server/utils/date.utils'));
const mongo = require(path.resolve('./src/services/mongo.client'));

const Observation = require(path.resolve('./src/server/resources/Observation'));

/**
 *
 * @param {*} req
 * @param {*} logger
 */
module.exports.getCount = (req, logger) => new Promise((resolve, reject) => {

	const db = mongo.getClient();
	const collection = db.collection('observation');
	collection.find(req.params).count(function (e, count) {
		if (e) {
			logger.error(e);
			reject(e);
		}
		resolve(count);
	});
});

/**
 *
 * @param {*} req
 * @param {*} logger
 */
module.exports.getObservationByID = (req, logger) => new Promise((resolve, reject) => {
	if (req.params.id) {
		// Use connect method to connect to the server
		const db = mongo.getClient();
		const collection = db.collection('observation');

		collection.findOne({id: `${req.params.id}`}, function (e, observation) {
			if (e) {
				logger.error(e);
				reject(e);
			}
			if (observation) {
				resolve(new Observation(observation));
			} else {
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
module.exports.getObservation = (req, logger) => new Promise((resolve, reject) => {

	const params = req.query;

	if (!params.patient) {
		reject('');
	}

	// minimum options
	const options = { subject: {reference: `Patient/${params.patient}`}};

	// category
	if (params.category) {
		options['category.coding.code'] = params.category;
	}

	if (params.date) {
		const date = dateUtils.validateDate(params.date);

		try {
			if (date) {
				options.effectiveDateTime = date;
			} else {
				reject('Invalid Date');
			}
		} catch (err) {
			logger.error(err);
			reject(err);
		}
	}

	if (params.code) {
		const codes = params.code.split(',');
		options['code.coding.code'] = {$in: codes};
	}

	// Use connect method to connect to the server
	const db = mongo.getClient();
	const collection = db.collection('observation');
	collection.find(options).toArray(function (e, observations) {
		if (e) {
			logger.error(e);
			reject(e);
		}
		if (observations && observations.length > 0) {
			resolve(observations.map((ob) => new Observation(ob)));
		} else {
			resolve([]);
		}
	});
});
