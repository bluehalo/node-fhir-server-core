const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ImmunizationRecommendationRecommendation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationRecommendationRecommendation';
		Object.assign(this, opt);
	}

	// This is a ImmunizationRecommendationRecommendation resource
	static get __resourceType() {
		return 'ImmunizationRecommendationRecommendation';
	}

	// The date the immunization recommendation was created.
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

	// Vaccine that pertains to the recommendation.
	get vaccineCode() {
		return this.__vaccineCode;
	}

	set vaccineCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__vaccineCode = new CodeableConcept(new_value);
	}

	// This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).
	get doseNumber() {
		return this.__doseNumber;
	}

	set doseNumber(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field doseNumber`);
		}
		this.__doseNumber = new_value;
	}

	// Vaccine administration status.
	get forecastStatus() {
		return this.__forecastStatus;
	}

	set forecastStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__forecastStatus = new CodeableConcept(new_value);
	}

	// Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
	get dateCriterion() {
		return this.__dateCriterion;
	}

	set dateCriterion(new_value) {
		const ImmunizationRecommendationRecommendationDateCriterion = require('./ImmunizationRecommendationRecommendationDateCriterion');
		this.__dateCriterion = Array.isArray(new_value)
			? new_value.map(val => new ImmunizationRecommendationRecommendationDateCriterion(val))
			: [new ImmunizationRecommendationRecommendationDateCriterion(new_value)];
	}

	// Contains information about the protocol under which the vaccine was administered.
	get protocol() {
		return this.__protocol;
	}

	set protocol(new_value) {
		const ImmunizationRecommendationRecommendationProtocol = require('./ImmunizationRecommendationRecommendationProtocol');
		this.__protocol = new ImmunizationRecommendationRecommendationProtocol(new_value);
	}

	// Immunization event history that supports the status and recommendation.
	get supportingImmunization() {
		return this.__supportingImmunization;
	}

	set supportingImmunization(new_value) {
		const Reference = require('./Reference');
		this.__supportingImmunization = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
	get supportingPatientInformation() {
		return this.__supportingPatientInformation;
	}

	set supportingPatientInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingPatientInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			date: this.__date,
			vaccineCode: this.__vaccineCode && this.__vaccineCode.toJSON(),
			doseNumber: this.__doseNumber,
			forecastStatus: this.__forecastStatus && this.__forecastStatus.toJSON(),
			dateCriterion: this.__dateCriterion && this.__dateCriterion.map(v => v.toJSON()),
			protocol: this.__protocol && this.__protocol.toJSON(),
			supportingImmunization: this.__supportingImmunization && this.__supportingImmunization.map(v => v.toJSON()),
			supportingPatientInformation:
				this.__supportingPatientInformation && this.__supportingPatientInformation.map(v => v.toJSON()),
		});
	}
}

module.exports = ImmunizationRecommendationRecommendation;
