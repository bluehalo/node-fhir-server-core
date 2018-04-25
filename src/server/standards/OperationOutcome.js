const Issue = require('./stu3/base/types/Issue');
const { STU3 } = require('../../constants');

/* eslint-disable no-useless-escape */
let div_content = (severity, diagnostics) =>
	'<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\">'
	+ `<table border=\"0\"><tr><td style=\"font-weight: bold;\">${severity}</td>`
	+ `<td><pre>${diagnostics}</pre></td></tr></table></div>`;
/* eslint-enable no-useless-escape */

class OperationOutcome extends Error {

	constructor(options) {
		super(options.message || 'HTTP 500 Internal Server Error');

		this._statusCode = options.statusCode || 500;
		this._message = options.message || 'HTTP 500 Internal Server Error';
		this._resourceType = STU3.RESOURCE_TYPES.OPERATIONOUTCOME;

		// if the options are provided, pass them in to create a new issue
		this._issue = options.code && options.severity ? new Issue(options) : {};
	}

	issue (options) {
		this._issue = new Issue(options);
	}

	get message () {
		return this._message;
	}

	set message (message) {
		this._message = message;
	}

	get statusCode () {
		return this._statusCode;
	}

	set statusCode (statusCode) {
		this._statusCode = statusCode;
	}

	toJSON() {
		let severity = this._issue.severity;
		let diagnostics = this._issue.diagnostics || this._message;

		return {
			resourceType: this._resourceType,
			text: {
				status: 'generated',
				div: div_content(severity, diagnostics)
			},
			issue: [this._issue]
		};
	}

}

module.exports = OperationOutcome;
