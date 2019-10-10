const Bourne = require('@hapi/bourne');
const { resolveSchema } = require('./resolve.utils.js');
// eslint-disable-next-line no-undef
module.exports = prototypeInjectionHandler = (req, res, next) => {
	try {
		if (req.body && typeof req.body === 'object') {
			Bourne.scan(req.body);
		}
		next();
	} catch (error) {
		let OperationOutcome = require(resolveSchema('3_0_1', 'operationoutcome'));
		let err = new OperationOutcome({
			statusCode: 400,
			issue: [
				{
					severity: 'error',
					code: 'invalid',
					details: {
						text: error.message,
					},
				},
			],
		});
		next(err);
	}
};
