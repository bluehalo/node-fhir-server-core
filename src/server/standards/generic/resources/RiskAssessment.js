const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Period = require('../types/Period');
const Range = require('../types/Range');

class Prediction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// outcome		1..1	CodeableConcept	Possible outcome for the subject
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// probability[x]	I	0..1		Likelihood of specified outcome
	// + low and high must be percentages, if present
	// probabilityDecimal			decimal
	set probabilityDecimal(probabilityDecimal) {
		this._probabilityDecimal = probabilityDecimal;
	}

	get probabilityDecimal() {
		return this._probabilityDecimal;
	}

	// probabilityRange			Range
	set probabilityRange(probabilityRange) {
		this._probabilityRange = new Range(probabilityRange);
	}

	get probabilityRange() {
		return this._probabilityRange;
	}

	// qualitativeRisk		0..1	CodeableConcept	Likelihood of specified outcome as a qualitative value
	// Risk Probability (Example)
	set qualitativeRisk(qualitativeRisk) {
		this._qualitativeRisk = new CodeableConcept(qualitativeRisk);
	}

	get qualitativeRisk() {
		return this._qualitativeRisk;
	}

	// relativeRisk		0..1	decimal	Relative likelihood
	set relativeRisk(relativeRisk) {
		this._relativeRisk = relativeRisk;
	}

	get relativeRisk() {
		return this._relativeRisk;
	}

	// when[x]		0..1		Timeframe or age range
	// whenPeriod			Period
	set whenPeriod(whenPeriod) {
		this._whenPeriod = new Period(whenPeriod);
	}

	get whenPeriod() {
		return this._whenPeriod;
	}

	// whenRange			Range
	set whenRange(whenRange) {
		this._whenRange = new Range(whenRange);
	}

	get whenRange() {
		return this._whenRange;
	}

	// rationale		0..1	string	Explanation of prediction
	set rationale(rationale) {
		this._rationale = rationale;
	}

	get rationale() {
		return this._rationale;
	}

	toJSON() {
		return {
			outcome: this._outcome,
			probabilityDecimal: this._probabilityDecimal,
			probabilityRange: this._probabilityRange,
			qualitativeRisk: this._qualitativeRisk,
			relativeRisk: this._relativeRisk,
			whenPeriod: this._whenPeriod,
			whenRange: this._whenRange,
			rationale: this._rationale,
		};
	}
}

class RiskAssessment extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'RiskAssessment';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Unique identifier for the assessment
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// basedOn		0..1	Reference(Any)	Request fulfilled by this assessment
	set basedOn(basedOn) {
		this._basedOn = new Reference(basedOn);
	}

	get basedOn() {
		return this._basedOn;
	}

	// parent		0..1	Reference(Any)	Part of this occurrence
	set parent(parent) {
		this._parent = new Reference(parent);
	}

	get parent() {
		return this._parent;
	}

	// status		1..1	code	registered | preliminary | final | amended +
	// ObservationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// method	Σ	0..1	CodeableConcept	Evaluation mechanism
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// code	Σ	0..1	CodeableConcept	Type of assessment
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	0..1	Reference(Patient | Group)	Who/what does assessment apply to?
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Where was assessment performed?
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When was assessment made?
	// occurrenceDateTime			dateTime
	set occurrenceDateTime(occurrenceDateTime) {
		this._occurrenceDateTime = occurrenceDateTime;
	}

	get occurrenceDateTime() {
		return this._occurrenceDateTime;
	}

	// occurrencePeriod			Period
	set occurrencePeriod(occurrencePeriod) {
		this._occurrencePeriod = new Period(occurrencePeriod);
	}

	get occurrencePeriod() {
		return this._occurrencePeriod;
	}

	// condition	Σ	0..1	Reference(Condition)	Condition assessed
	set condition(condition) {
		this._condition = new Reference(condition);
	}

	get condition() {
		return this._condition;
	}

	// performer	Σ	0..1	Reference(Practitioner | Device)	Who did assessment?
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// reason[x]		0..1		Why the assessment was necessary?
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// reasonReference			Reference
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// basis		0..*	Reference(Any)	Information used in assessment
	set basis(basis) {
		if (Array.isArray(basis)) {
			this._basis = basis.map((i) => new Reference(i));
		} else {
			this._basis = [new Reference(basis)];
		}
	}

	get basis() {
		return this._basis;
	}

	// mitigation		0..1	string	How to reduce risk
	set mitigation(mitigation) {
		this._mitigation = mitigation;
	}

	get mitigation() {
		return this._mitigation;
	}

	// comment		0..1	string	Comments on the risk assessment
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// prediction	I	0..*	BackboneElement	Outcome predicted
	// + Must be <= 100
	set prediction(prediction) {
		if (Array.isArray(prediction)) {
			this._prediction = prediction.map((i) => new Prediction(i));
		} else {
			this._prediction = [new Prediction(prediction)];
		}
	}

	get prediction() {
		return this._prediction;
	}

	toJSON() {
		const json = {
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
			mitigation: this._mitigation,
			comment: this._comment,
			prediction: this._prediction,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.RiskAssessment = RiskAssessment;
module.exports.Prediction = Prediction;
