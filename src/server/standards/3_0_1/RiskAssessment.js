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

	// Business identifier assigned to the risk assessment.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A reference to the request that is fulfilled by this risk assessment.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = new Reference(new_value);
	}

	// A reference to a resource that this risk assessment is part of, such as a Procedure.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = new Reference(new_value);
	}

	// The status of the RiskAssessment, using the same statuses as an Observation.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The algorithm, process or mechanism used to evaluate the risk.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// The type of the risk assessment performed.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The patient or group the risk assessment applies to.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The encounter where the assessment was performed.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The date (and possibly time) the risk assessment was performed.
	get occurrenceDateTime() {
		return this.__occurrenceDateTime;
	}

	set occurrenceDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this.__occurrenceDateTime = new_value;
	}

	// The date (and possibly time) the risk assessment was performed.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const Reference = require('./Reference');
		this.__condition = new Reference(new_value);
	}

	// The provider or software application that performed the assessment.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// The reason the risk assessment was performed.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// The reason the risk assessment was performed.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
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

	// Additional comments about the risk assessment.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			basedOn: this.__basedOn && this.__basedOn.toJSON(),
			parent: this.__parent && this.__parent.toJSON(),
			status: this.__status,
			method: this.__method && this.__method.toJSON(),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			condition: this.__condition && this.__condition.toJSON(),
			performer: this.__performer && this.__performer.toJSON(),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			basis: this.__basis && this.__basis.map(v => v.toJSON()),
			prediction: this.__prediction && this.__prediction.map(v => v.toJSON()),
			mitigation: this.__mitigation,
			comment: this.__comment,
		});
	}
}

module.exports = RiskAssessment;
