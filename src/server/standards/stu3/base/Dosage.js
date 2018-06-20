const Element = require('./Element');
const CodeableConcept = require('./CodeableConcept');
const Timing = require('./Timing');
const Range = require('./Range');
const Quantity = require('./Quantity');
const Ratio = require('./Ratio');

class Dosage extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Dosage';
	}

	// Indicates the order in which the dosage instructions should be applied or interpreted.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// Free text dosage instructions e.g. SIG.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// Supplemental instruction - e.g. "with meals".
	get additionalInstruction () {
		return this._additionalInstruction;
	}

	set additionalInstruction ( new_value ) {
		this._additionalInstruction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Instructions in terms that are understood by the patient or consumer.
	get patientInstruction () {
		return this._patientInstruction;
	}

	set patientInstruction ( new_value ) {
		this._patientInstruction = new_value;
	}

	// When medication should be administered.
	get timing () {
		return this._timing;
	}

	set timing ( new_value ) {
		this._timing = new Timing(new_value);
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
	get asNeededBoolean () {
		return this._asNeededBoolean;
	}

	set asNeededBoolean ( new_value ) {
		this._asNeededBoolean = new_value;
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
	get asNeededCodeableConcept () {
		return this._asNeededCodeableConcept;
	}

	set asNeededCodeableConcept ( new_value ) {
		this._asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// Body site to administer to.
	get site () {
		return this._site;
	}

	set site ( new_value ) {
		this._site = new CodeableConcept(new_value);
	}

	// How drug should enter body.
	get route () {
		return this._route;
	}

	set route ( new_value ) {
		this._route = new CodeableConcept(new_value);
	}

	// Technique for administering medication.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		this._method = new CodeableConcept(new_value);
	}

	// Amount of medication per dose.
	get doseRange () {
		return this._doseRange;
	}

	set doseRange ( new_value ) {
		this._doseRange = new Range(new_value);
	}

	// Amount of medication per dose.
	get doseSimpleQuantity () {
		return this._doseSimpleQuantity;
	}

	set doseSimpleQuantity ( new_value ) {
		this._doseSimpleQuantity = new Quantity(new_value);
	}

	// Upper limit on medication per unit of time.
	get maxDosePerPeriod () {
		return this._maxDosePerPeriod;
	}

	set maxDosePerPeriod ( new_value ) {
		this._maxDosePerPeriod = new Ratio(new_value);
	}

	// Upper limit on medication per administration.
	get maxDosePerAdministration () {
		return this._maxDosePerAdministration;
	}

	set maxDosePerAdministration ( new_value ) {
		this._maxDosePerAdministration = new Quantity(new_value);
	}

	// Upper limit on medication per lifetime of the patient.
	get maxDosePerLifetime () {
		return this._maxDosePerLifetime;
	}

	set maxDosePerLifetime ( new_value ) {
		this._maxDosePerLifetime = new Quantity(new_value);
	}

	// Amount of medication per unit of time.
	get rateRatio () {
		return this._rateRatio;
	}

	set rateRatio ( new_value ) {
		this._rateRatio = new Ratio(new_value);
	}

	// Amount of medication per unit of time.
	get rateRange () {
		return this._rateRange;
	}

	set rateRange ( new_value ) {
		this._rateRange = new Range(new_value);
	}

	// Amount of medication per unit of time.
	get rateSimpleQuantity () {
		return this._rateSimpleQuantity;
	}

	set rateSimpleQuantity ( new_value ) {
		this._rateSimpleQuantity = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			text: this._text,
			additionalInstruction: this._additionalInstruction,
			patientInstruction: this._patientInstruction,
			timing: this._timing,
			asNeededBoolean: this._asNeededBoolean,
			asNeededCodeableConcept: this._asNeededCodeableConcept,
			site: this._site,
			route: this._route,
			method: this._method,
			doseRange: this._doseRange,
			doseSimpleQuantity: this._doseSimpleQuantity,
			maxDosePerPeriod: this._maxDosePerPeriod,
			maxDosePerAdministration: this._maxDosePerAdministration,
			maxDosePerLifetime: this._maxDosePerLifetime,
			rateRatio: this._rateRatio,
			rateRange: this._rateRange,
			rateSimpleQuantity: this._rateSimpleQuantity
		});
	}

}

module.exports = Dosage;
