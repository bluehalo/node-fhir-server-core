const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class RiskAssessment extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RiskAssessment';
		Object.assign(this, opt);
	}

	// This is a RiskAssessment resource
	static get __resourceType() {
		return 'RiskAssessment';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__RiskAssessment = new_value;
	}

	// The patient or group the risk assessment applies to.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The date (and possibly time) the risk assessment was performed.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const Reference = require('./Reference');
		this.__condition = new Reference(new_value);
	}

	// The encounter where the assessment was performed.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The provider or software application that performed the assessment.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// Business identifier assigned to the risk assessment.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The algorithm, process or mechanism used to evaluate the risk.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).
	get basis() {
		return this.__basis;
	}

	set basis(new_value) {
		const Reference = require('./Reference');
		this.__basis = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Describes the expected outcome for the subject.
	get prediction() {
		return this.__prediction;
	}

	set prediction(new_value) {
		const RiskAssessmentPrediction = require('./RiskAssessmentPrediction');
		this.__prediction = Array.isArray(new_value)
			? new_value.map(val => new RiskAssessmentPrediction(val))
			: [new RiskAssessmentPrediction(new_value)];
	}

	// A description of the steps that might be taken to reduce the identified risk(s).
	get mitigation() {
		return this.__mitigation;
	}

	set mitigation(new_value) {
		this.__mitigation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			subject: this.__subject && this.__subject.toJSON(),
			date: this.__date,
			condition: this.__condition && this.__condition.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			performer: this.__performer && this.__performer.toJSON(),
			identifier: this.__identifier && this.__identifier.toJSON(),
			method: this.__method && this.__method.toJSON(),
			basis: this.__basis && this.__basis.map(v => v.toJSON()),
			prediction: this.__prediction && this.__prediction.map(v => v.toJSON()),
			mitigation: this.__mitigation,
		});
	}
}

module.exports = RiskAssessment;
