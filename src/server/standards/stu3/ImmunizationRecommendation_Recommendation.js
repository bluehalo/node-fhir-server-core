const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const ImmunizationRecommendation_DateCriterion = require('./ImmunizationRecommendation_DateCriterion');
const ImmunizationRecommendation_Protocol = require('./ImmunizationRecommendation_Protocol');
const Reference = require('./Reference');

class ImmunizationRecommendation_Recommendation extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImmunizationRecommendation_Recommendation';
	}

	// The date the immunization recommendation was created.
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

	// Vaccine that pertains to the recommendation.
	get vaccineCode () {
		return this._vaccineCode;
	}

	set vaccineCode ( new_value ) {
		this._vaccineCode = new CodeableConcept(new_value);
	}

	// The targeted disease for the recommendation.
	get targetDisease () {
		return this._targetDisease;
	}

	set targetDisease ( new_value ) {
		this._targetDisease = new CodeableConcept(new_value);
	}

	// The next recommended dose number (e.g. dose 2 is the next recommended dose).
	get doseNumber () {
		return this._doseNumber;
	}

	set doseNumber ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field doseNumber`);
		}
		this._doseNumber = new_value;
	}

	// Vaccine administration status.
	get forecastStatus () {
		return this._forecastStatus;
	}

	set forecastStatus ( new_value ) {
		this._forecastStatus = new CodeableConcept(new_value);
	}

	// Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
	get dateCriterion () {
		return this._dateCriterion;
	}

	set dateCriterion ( new_value ) {
		this._dateCriterion = Array.isArray(new_value) ? new_value.map(val => new ImmunizationRecommendation_DateCriterion(val)) : [new ImmunizationRecommendation_DateCriterion(new_value)];
	}

	// Contains information about the protocol under which the vaccine was administered.
	get protocol () {
		return this._protocol;
	}

	set protocol ( new_value ) {
		this._protocol = new ImmunizationRecommendation_Protocol(new_value);
	}

	// Immunization event history that supports the status and recommendation.
	get supportingImmunization () {
		return this._supportingImmunization;
	}

	set supportingImmunization ( new_value ) {
		this._supportingImmunization = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
	get supportingPatientInformation () {
		return this._supportingPatientInformation;
	}

	set supportingPatientInformation ( new_value ) {
		this._supportingPatientInformation = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			date: this._date,
			vaccineCode: this._vaccineCode,
			targetDisease: this._targetDisease,
			doseNumber: this._doseNumber,
			forecastStatus: this._forecastStatus,
			dateCriterion: this._dateCriterion,
			protocol: this._protocol,
			supportingImmunization: this._supportingImmunization,
			supportingPatientInformation: this._supportingPatientInformation
		});
	}

}

module.exports = ImmunizationRecommendation_Recommendation;
