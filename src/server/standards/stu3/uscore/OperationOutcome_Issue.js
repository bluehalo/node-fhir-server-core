const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class OperationOutcome_Issue extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'OperationOutcome_Issue';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'OperationOutcome_Issue';
	}

	// Indicates whether the issue indicates a variation from successful processing.
	get severity () {
		return this._severity;
	}

	set severity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['fatal', 'error', 'warning', 'information'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field severity`);
		}
		this._severity = new_value;
	}

	// Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['invalid', 'structure', 'required', 'value', 'invariant', 'security', 'login', 'unknown', 'expired', 'forbidden', 'suppressed', 'processing', 'not-supported', 'duplicate', 'not-found', 'too-long', 'code-invalid', 'extension', 'too-costly', 'business-rule', 'conflict', 'incomplete', 'transient', 'lock-error', 'no-store', 'exception', 'timeout', 'throttled', 'informational'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field code`);
		}
		this._code = new_value;
	}

	// Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
	get details () {
		return this._details;
	}

	set details ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._details = new CodeableConcept(new_value);
	}

	// Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
	get diagnostics () {
		return this._diagnostics;
	}

	set diagnostics ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._diagnostics = new_value;
	}

	// For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._location = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A simple FHIRPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._expression = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			severity: this.severity,
			code: this.code,
			details: this.details && this.details.toJSON(),
			diagnostics: this.diagnostics,
			location: this.location,
			expression: this.expression
		});
	}

}

module.exports = OperationOutcome_Issue;
