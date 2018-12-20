const BackboneElement = require('./BackboneElement');

class OperationOutcomeIssue extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OperationOutcomeIssue';
		Object.assign(this, opt);
	}

	// This is a OperationOutcomeIssue resource
	static get __resourceType() {
		return 'OperationOutcomeIssue';
	}

	// Indicates whether the issue indicates a variation from successful processing.
	get severity() {
		return this.__severity;
	}

	set severity(new_value) {
		this.__severity = new_value;
	}

	// Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
	get details() {
		return this.__details;
	}

	set details(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__details = new CodeableConcept(new_value);
	}

	// Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
	get diagnostics() {
		return this.__diagnostics;
	}

	set diagnostics(new_value) {
		this.__diagnostics = new_value;
	}

	// For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be \'http.\' + the parameter name.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		this.__location = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A simple FHIRPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			severity: this.__severity,
			code: this.__code,
			details: this.__details && this.__details.toJSON(),
			diagnostics: this.__diagnostics,
			location: this.__location,
			expression: this.__expression,
		});
	}
}

module.exports = OperationOutcomeIssue;
