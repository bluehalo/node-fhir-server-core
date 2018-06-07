const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const RiskAssessment_Prediction = require('./RiskAssessment_Prediction');

class RiskAssessment extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RiskAssessment';
	}

	// This is a RiskAssessment resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['RiskAssessment'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Business identifier assigned to the risk assessment.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// A reference to the request that is fulfilled by this risk assessment.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = new Reference(new_value);
	}

	// A reference to a resource that this risk assessment is part of, such as a Procedure.
	get parent () {
		return this._parent;
	}

	set parent ( new_value ) {
		this._parent = new Reference(new_value);
	}

	// The status of the RiskAssessment, using the same statuses as an Observation.
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

	// The algorithm, process or mechanism used to evaluate the risk.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		this._method = new CodeableConcept(new_value);
	}

	// The type of the risk assessment performed.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The patient or group the risk assessment applies to.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter where the assessment was performed.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The date (and possibly time) the risk assessment was performed.
	get occurrenceDateTime () {
		return this._occurrenceDateTime;
	}

	set occurrenceDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this._occurrenceDateTime = new_value;
	}

	// The date (and possibly time) the risk assessment was performed.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = new Reference(new_value);
	}

	// The provider or software application that performed the assessment.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = new Reference(new_value);
	}

	// The reason the risk assessment was performed.
	get reasonCodeableConcept () {
		return this._reasonCodeableConcept;
	}

	set reasonCodeableConcept ( new_value ) {
		this._reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// The reason the risk assessment was performed.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = new Reference(new_value);
	}

	// Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).
	get basis () {
		return this._basis;
	}

	set basis ( new_value ) {
		this._basis = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Describes the expected outcome for the subject.
	get prediction () {
		return this._prediction;
	}

	set prediction ( new_value ) {
		this._prediction = Array.isArray(new_value) ? new_value.map(val => new RiskAssessment_Prediction(val)) : [new RiskAssessment_Prediction(new_value)];
	}

	// A description of the steps that might be taken to reduce the identified risk(s).
	get mitigation () {
		return this._mitigation;
	}

	set mitigation ( new_value ) {
		this._mitigation = new_value;
	}

	// Additional comments about the risk assessment.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			basedOn: this._basedOn,
			parent: this._parent,
			status: this._status,
			method: this._method,
			code: this._code,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			condition: this._condition,
			performer: this._performer,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			basis: this._basis,
			prediction: this._prediction,
			mitigation: this._mitigation,
			comment: this._comment
		});
	}

}

module.exports = RiskAssessment;
