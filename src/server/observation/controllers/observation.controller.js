const path = require('path');
const { ServerError } = require(path.resolve('./src/server/utils/error.utils'));

module.exports.getObservation = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		// @TODO Validate arguments and response
		/**
		* return service.getObservation(req, logger)
		*		.then(sanitizeResponse) // Only show the user what they are allowed to see
		*		.then(validateResponse); // Make sure the response data conforms to the spec
		*/
		return service.getObservation(req, logger)
			.then(() => {
				res.send('Here is your observation args' + JSON.stringify(req.query));
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};
};
