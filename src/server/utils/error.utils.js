const { resolveFromVersion } = require('./resolve.utils');
const { ISSUE, VERSIONS } = require('../../constants');

// Helper to determine which operation outcome to retrieve
let getErrorConstructor = version => {
	switch (version) {
		case VERSIONS.STU3:
			return require(resolveFromVersion(version, 'uscore/OperationOutcome'));
		default:
			return require(resolveFromVersion(VERSIONS.STU3, 'uscore/OperationOutcome'));
	}
};

/* eslint-disable no-useless-escape */
let div_content = (severity, diagnostics) =>
	'<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\">'
	+ `<table border=\"0\"><tr><td style=\"font-weight: bold;\">${severity}</td>`
	+ `<td><pre>${diagnostics}</pre></td></tr></table></div>`;
/* eslint-enable no-useless-escape */

// Invalid or Missing parameter from request
let invalidParameter = (message, version) => {
	let ErrorConstructor = getErrorConstructor(version);
	return new ErrorConstructor({
		statusCode: 400,
		text: {
			status: 'generated',
			div: div_content(ISSUE.SEVERITY.ERROR, message)
		},
		issue: {
			code: ISSUE.CODE.INVALID,
			severity: ISSUE.SEVERITY.ERROR,
			diagnostics: message
		}
	});
};

// Unauthorized request of some resource
let unauthorized = (message, version) => {
	let ErrorConstructor = getErrorConstructor(version);
	return new ErrorConstructor({
		statusCode: 401,
		text: {
			status: 'generated',
			div: div_content(ISSUE.SEVERITY.ERROR, message || 'Unauthorized request')
		},
		issue: {
			code: ISSUE.CODE.FORBIDDEN,
			severity: ISSUE.SEVERITY.ERROR,
			diagnostics: message || '401: Unauthorized request'
		}
	});
};

let insufficientScope = (message, version) => {
	let ErrorConstructor = getErrorConstructor(version);
	return new ErrorConstructor({
		statusCode: 403,
		text: {
			status: 'generated',
			div: div_content(ISSUE.SEVERITY.ERROR, message || 'Insufficient scope')
		},
		issue: {
			code: ISSUE.CODE.FORBIDDEN,
			severity: ISSUE.SEVERITY.ERROR,
			diagnostics: message || '403: Insufficient scope'
		}
	});
};

let notFound = (message, version) => {
	let ErrorConstructor = getErrorConstructor(version);
	return new ErrorConstructor({
		statusCode: 404,
		text: {
			status: 'generated',
			div: div_content(ISSUE.SEVERITY.ERROR, message || 'Not found')
		},
		issue: {
			code: ISSUE.CODE.NOT_FOUND,
			severity: ISSUE.SEVERITY.ERROR,
			diagnostics: message || '404: Not found'
		}
	});
};

let deleted = (message, version) => {
	let ErrorConstructor = getErrorConstructor(version);
	return new ErrorConstructor({
		statusCode: 410,
		text: {
			status: 'generated',
			div: div_content(ISSUE.SEVERITY.ERROR, message || 'Resource deleted')
		},
		issue: {
			code: ISSUE.CODE.NOT_FOUND,
			severity: ISSUE.SEVERITY.ERROR,
			diagnostics: message || '410: Resource deleted'
		}
	});
};

let internal = (message, version) => {
	let ErrorConstructor = getErrorConstructor(version);
	return new ErrorConstructor({
		statusCode: 500,
		text: {
			status: 'generated',
			div: div_content(ISSUE.SEVERITY.ERROR, message || 'Internal server error')
		},
		issue: {
			code: ISSUE.CODE.EXCEPTION,
			severity: ISSUE.SEVERITY.ERROR,
			diagnostics: message || '500: Internal server error'
		}
	});
};

let isServerError = (err, version) => err instanceof getErrorConstructor(version);

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
};
