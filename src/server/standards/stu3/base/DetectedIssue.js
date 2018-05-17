const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const DetectedIssue_Mitigation = require('./DetectedIssue_Mitigation');

class DetectedIssue extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DetectedIssue';
	}

	// This is a DetectedIssue resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DetectedIssue'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Business identifier associated with the detected issue record.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Indicates the status of the detected issue.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Identifies the general type of issue identified.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
	get severity () {
		return this._severity;
	}

	set severity ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['high', 'moderate', 'low'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field severity`);
		}
		this._severity = new_value;
	}

	// Indicates the patient whose record the detected issue is associated with.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The date or date-time when the detected issue was initially identified.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = new Reference(new_value);
	}

	// Indicates the resource representing the current activity or proposed activity that is potentially problematic.
	get implicated () {
		return this._implicated;
	}

	set implicated ( new_value ) {
		this._implicated = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A textual explanation of the detected issue.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = new_value;
	}

	// The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new_value;
	}

	// Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
	get mitigation () {
		return this._mitigation;
	}

	set mitigation ( new_value ) {
		this._mitigation = Array.isArray(new_value) ? new_value.map(val => new DetectedIssue_Mitigation(val)) : [new DetectedIssue_Mitigation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			severity: this._severity,
			patient: this._patient,
			date: this._date,
			author: this._author,
			implicated: this._implicated,
			detail: this._detail,
			reference: this._reference,
			mitigation: this._mitigation
		});
	}

}

module.exports = DetectedIssue;
