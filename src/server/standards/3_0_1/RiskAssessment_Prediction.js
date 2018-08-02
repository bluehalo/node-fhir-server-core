const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Range = require('./Range');
const Period = require('./Period');

class RiskAssessment_Prediction extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RiskAssessment_Prediction';
	}

	// One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// How likely is the outcome (in the specified timeframe).
	get probabilityDecimal () {
		return this._probabilityDecimal;
	}

	set probabilityDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field probabilityDecimal`);
		}
		this._probabilityDecimal = new_value;
	}

	// How likely is the outcome (in the specified timeframe).
	get probabilityRange () {
		return this._probabilityRange;
	}

	set probabilityRange ( new_value ) {
		this._probabilityRange = new Range(new_value);
	}

	// How likely is the outcome (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, high).
	get qualitativeRisk () {
		return this._qualitativeRisk;
	}

	set qualitativeRisk ( new_value ) {
		this._qualitativeRisk = new CodeableConcept(new_value);
	}

	// Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
	get relativeRisk () {
		return this._relativeRisk;
	}

	set relativeRisk ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field relativeRisk`);
		}
		this._relativeRisk = new_value;
	}

	// Indicates the period of time or age range of the subject to which the specified probability applies.
	get whenPeriod () {
		return this._whenPeriod;
	}

	set whenPeriod ( new_value ) {
		this._whenPeriod = new Period(new_value);
	}

	// Indicates the period of time or age range of the subject to which the specified probability applies.
	get whenRange () {
		return this._whenRange;
	}

	set whenRange ( new_value ) {
		this._whenRange = new Range(new_value);
	}

	// Additional information explaining the basis for the prediction.
	get rationale () {
		return this._rationale;
	}

	set rationale ( new_value ) {
		this._rationale = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			outcome: this._outcome && this._outcome.toJSON(),
			probabilityDecimal: this._probabilityDecimal,
			probabilityRange: this._probabilityRange && this._probabilityRange.toJSON(),
			qualitativeRisk: this._qualitativeRisk && this._qualitativeRisk.toJSON(),
			relativeRisk: this._relativeRisk,
			whenPeriod: this._whenPeriod && this._whenPeriod.toJSON(),
			whenRange: this._whenRange && this._whenRange.toJSON(),
			rationale: this._rationale
		});
	}

}

module.exports = RiskAssessment_Prediction;
