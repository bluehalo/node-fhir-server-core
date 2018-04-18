//const OperationOutcome = require('../standards/generic/resources/OperationOutcome');
const OperationOutcome = require('../standards/OperationOutcome');

const { ISSUE } = require('../../constants');

// /**
//  * @class ServerError
//  * @summary Extends error to add additional code property
//  */
// class ServerError extends Error {
//   constructor (code, message) {
//     super(message);
//
//     if (Error.captureStackStrace) {
//       Error.captureStackStrace(this, ServerError);
//     }
//
//     this.code = code;
//   }
// }

// Invalid or Missing parameter from request
let invalidParameter = message =>
	new OperationOutcome({
		statusCode: 400,
		code: ISSUE.CODE.INVALID,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message,
		message
	});

// Unauthorized request of some resource
let unauthorized = message =>
	new OperationOutcome({
		statusCode: 401,
		code: ISSUE.CODE.FORBIDDEN,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Unauthorized request',
		message: message || 'Unauthorized request'
	});

let insufficientScope = message =>
	new OperationOutcome({
		statusCode: 403,
		code: ISSUE.CODE.FORBIDDEN,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Insufficient scope',
		message: message || 'Insufficient scope'
	});

let notFound = message =>
	new OperationOutcome({
		statusCode: 404,
		code: ISSUE.CODE.NOT_FOUND,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Not found',
		message: message || 'Not found'
	});

let deleted = message =>
	new OperationOutcome({
		statusCode: 410,
		code: ISSUE.CODE.NOT_FOUND,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Resource deleted',
		message: message || 'Resource deleted'
	});

let internal = message =>
	new OperationOutcome({
		statusCode: 500,
		code: ISSUE.CODE.EXCEPTION,
		severity: ISSUE.SEVERITY.ERROR,
		diagnostics: message || 'Internal server error',
		message: message || 'Internal server error'
	});

let isServerError = err => err instanceof OperationOutcome;

/**
 * @name exports
 * @static
 * @summary Error Configurations
 */
module.exports = {
	invalidParameter,
	unauthorized,
	insufficientScope,
	notFound,
	deleted,
	internal,
	isServerError
	// ServerError
};
