const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');

class Issue {
	constructor(obj) {
		Object.assign(this, obj);
	}
	
	// severity	?!Σ	1..1	code	fatal | error | warning | information
	// IssueSeverity (Required)
	set severity(severity) {
		this._severity = new Code(severity);
	}
	
	get severity() {
		return this._severity;
	}
	
	// code	Σ	1..1	code	Error or warning code
	// IssueType (Required)
	set code(code) {
		this._code = new Code(code);
	}
	
	get code() {
		return this._code;
	}
	
	// details	Σ	0..1	CodeableConcept	Additional details about the error
	// Operation Outcome Codes (Example)
	set details(details) {
		this._details = new CodeableConcept(details);
	}
	
	get details() {
		return this._details;
	}
	
	// diagnostics	Σ	0..1	string	Additional diagnostic information about the issue
	set diagnostics(diagnostics) {
		this._diagnostics = diagnostics;
	}
	
	get diagnostics() {
		return this._diagnostics;
	}
	
	// location	Σ	0..*	string	Path of element(s) related to issue
	set location(location) {
		this._location = [].concat(location);
	}
	
	get location() {
		return this._location;
	}
	
	// expression	Σ	0..*	string	FHIRPath of element(s) related to issue
	set expression(expression) {
		this._expression = [].concat(expression);
	}
	
	get expression() {
		return this._expression;
	}
	
	toJSON() {
		return {
			severity: this._severity,
			code: this._code,
			details: this._details,
			diagnostics: this._diagnostics,
			location: this._location,
			expression: this._expression,
		};
	}
}

class OperationOutcome extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'OperationOutcome';
		Object.assign(this, obj);
	}
	
	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}
	
	get resourceType() {
		return this._resourceType;
	}
	
	// issue	Σ	1..*	BackboneElement	A single issue associated with the action
	set issue(issue) {
		if (Array.isArray(issue)) {
			this._issue = issue.map((i) => new Issue(i));
		} else {
			this._issue = [new Issue(issue)];
		}
	}
	
	get issue() {
		return this._issue;
	}
	
	toJSON() {
		const json = {
			issue: this._issue,
		};
		
		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.OperationOutcome = OperationOutcome;
module.exports.Issue = Issue;
