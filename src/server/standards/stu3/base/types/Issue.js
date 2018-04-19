const CodeableConcept = require('./CodeableConcept');
const { ISSUE } = require('../../../../../constants');

// If we do not understand the error severity, it's more than likely
// an unexpected error and we will give it the highest severity
let issueSeverity = severity => {
	return Object.values(ISSUE.SEVERITY).indexOf(severity) === -1
		? ISSUE.SEVERITY.FATAL
		: severity;
};

// If we do not understand the error code, it's more than likely
// an unexpected error and we will give it a generic processing code
// See https://www.hl7.org/fhir/valueset-issue-type.html
let issueType = code => {
	return Object.values(ISSUE.CODE).indexOf(code) === -1
		? ISSUE.CODE.PROCESSING
		: code;
};

class Issue {

	constructor(options) {
		// Severity & Code are required
		this._severity = issueSeverity(options.severity);
		this._code = issueType(options.code);
		// The rest are optional
		this._details = new CodeableConcept(options.details);
		this._diagnostics = options.diagnostics;
		this._expression = options.expression;
		this._location = options.location;
	}

	get severity () {
		return this._severity;
	}

	set severity (severity) {
		this._severity = issueSeverity(severity);
	}

	get code () {
		return this._code;
	}

	set code (code) {
		this._code = issueType(code);
	}

	get details () {
		return this._details;
	}

	set details (details) {
		this._details = new CodeableConcept(details);
	}

	get diagnostics () {
		return this._diagnostics;
	}

	set diagnostics (diagnostics) {
		this._diagnostics = diagnostics;
	}

	get expression () {
		return this._expression;
	}

	set expression (expression) {
		this._expression = expression;
	}

	get location () {
		return this._location;
	}

	set location (location) {
		this._location = location;
	}

	toJSON () {
		let response = {
			severity: this._severity,
			code: this._code
		};

		if (this._diagnostics) { response.diagnostics = this._diagnostics; }
		if (this._expression) { response.expression = this._expression; }
		if (this._location) { response.location = this._location; }
		if (Object.keys(this._details).length) { response.details = this._details; }

		return response;
	}

}

module.exports = Issue;
