const BackboneElement = require('./BackboneElement');

class RiskAssessmentPrediction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RiskAssessmentPrediction';
		Object.assign(this, opt);
	}

	// This is a RiskAssessmentPrediction resource
	static get __resourceType() {
		return 'RiskAssessmentPrediction';
	}

	// One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// How likely is the outcome (in the specified timeframe).
	get probabilityDecimal() {
		return this.__probabilityDecimal;
	}

	set probabilityDecimal(new_value) {
		this.__probabilityDecimal = new_value;
	}

	// How likely is the outcome (in the specified timeframe).
	get probabilityRange() {
		return this.__probabilityRange;
	}

	set probabilityRange(new_value) {
		const Range = require('./Range');
		this.__probabilityRange = new Range(new_value);
	}

	// How likely is the outcome (in the specified timeframe).
	get probabilityCodeableConcept() {
		return this.__probabilityCodeableConcept;
	}

	set probabilityCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__probabilityCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
	get relativeRisk() {
		return this.__relativeRisk;
	}

	set relativeRisk(new_value) {
		this.__relativeRisk = new_value;
	}

	// Indicates the period of time or age range of the subject to which the specified probability applies.
	get whenPeriod() {
		return this.__whenPeriod;
	}

	set whenPeriod(new_value) {
		const Period = require('./Period');
		this.__whenPeriod = new Period(new_value);
	}

	// Indicates the period of time or age range of the subject to which the specified probability applies.
	get whenRange() {
		return this.__whenRange;
	}

	set whenRange(new_value) {
		const Range = require('./Range');
		this.__whenRange = new Range(new_value);
	}

	// Additional information explaining the basis for the prediction.
	get rationale() {
		return this.__rationale;
	}

	set rationale(new_value) {
		this.__rationale = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			outcome: this.__outcome && this.__outcome.toJSON(),
			probabilityDecimal: this.__probabilityDecimal,
			probabilityRange: this.__probabilityRange && this.__probabilityRange.toJSON(),
			probabilityCodeableConcept: this.__probabilityCodeableConcept && this.__probabilityCodeableConcept.toJSON(),
			relativeRisk: this.__relativeRisk,
			whenPeriod: this.__whenPeriod && this.__whenPeriod.toJSON(),
			whenRange: this.__whenRange && this.__whenRange.toJSON(),
			rationale: this.__rationale,
		});
	}
}

module.exports = RiskAssessmentPrediction;
