const Element = require('./Element');
const CodeableConcept = require('./CodeableConcept');
const Timing = require('./Timing');
const Range = require('./Range');
const Quantity = require('./Quantity');
const Ratio = require('./Ratio');

class Dosage extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Dosage';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._text = new_value;
	}

	// Supplemental instruction - e.g. "with meals".
	get additionalInstruction () {
		return this._additionalInstruction;
	}

	set additionalInstruction ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._additionalInstruction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Instructions in terms that are understood by the patient or consumer.
	get patientInstruction () {
		return this._patientInstruction;
	}

	set patientInstruction ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patientInstruction = new_value;
	}

	// When medication should be administered.
	get timing () {
		return this._timing;
	}

	set timing ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._timing = new Timing(new_value);
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
	get asNeededBoolean () {
		return this._asNeededBoolean;
	}

	set asNeededBoolean ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._asNeededBoolean = new_value;
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
	get asNeededCodeableConcept () {
		return this._asNeededCodeableConcept;
	}

	set asNeededCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// Body site to administer to.
	get site () {
		return this._site;
	}

	set site ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._site = new CodeableConcept(new_value);
	}

	// How drug should enter body.
	get route () {
		return this._route;
	}

	set route ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._route = new CodeableConcept(new_value);
	}

	// Technique for administering medication.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._method = new CodeableConcept(new_value);
	}

	// Amount of medication per dose.
	get doseRange () {
		return this._doseRange;
	}

	set doseRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._doseRange = new Range(new_value);
	}

	// Amount of medication per dose.
	get doseSimpleQuantity () {
		return this._doseSimpleQuantity;
	}

	set doseSimpleQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._doseSimpleQuantity = new Quantity(new_value);
	}

	// Upper limit on medication per unit of time.
	get maxDosePerPeriod () {
		return this._maxDosePerPeriod;
	}

	set maxDosePerPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._maxDosePerPeriod = new Ratio(new_value);
	}

	// Upper limit on medication per administration.
	get maxDosePerAdministration () {
		return this._maxDosePerAdministration;
	}

	set maxDosePerAdministration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._maxDosePerAdministration = new Quantity(new_value);
	}

	// Upper limit on medication per lifetime of the patient.
	get maxDosePerLifetime () {
		return this._maxDosePerLifetime;
	}

	set maxDosePerLifetime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._maxDosePerLifetime = new Quantity(new_value);
	}

	// Amount of medication per unit of time.
	get rateRatio () {
		return this._rateRatio;
	}

	set rateRatio ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._rateRatio = new Ratio(new_value);
	}

	// Amount of medication per unit of time.
	get rateRange () {
		return this._rateRange;
	}

	set rateRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._rateRange = new Range(new_value);
	}

	// Amount of medication per unit of time.
	get rateSimpleQuantity () {
		return this._rateSimpleQuantity;
	}

	set rateSimpleQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._rateSimpleQuantity = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this.sequence,
			text: this.text,
			additionalInstruction: this.additionalInstruction && this.additionalInstruction.toJSON(),
			patientInstruction: this.patientInstruction,
			timing: this.timing && this.timing.toJSON(),
			asNeededBoolean: this.asNeededBoolean,
			asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSON(),
			site: this.site && this.site.toJSON(),
			route: this.route && this.route.toJSON(),
			method: this.method && this.method.toJSON(),
			doseRange: this.doseRange && this.doseRange.toJSON(),
			doseSimpleQuantity: this.doseSimpleQuantity && this.doseSimpleQuantity.toJSON(),
			maxDosePerPeriod: this.maxDosePerPeriod && this.maxDosePerPeriod.toJSON(),
			maxDosePerAdministration: this.maxDosePerAdministration && this.maxDosePerAdministration.toJSON(),
			maxDosePerLifetime: this.maxDosePerLifetime && this.maxDosePerLifetime.toJSON(),
			rateRatio: this.rateRatio && this.rateRatio.toJSON(),
			rateRange: this.rateRange && this.rateRange.toJSON(),
			rateSimpleQuantity: this.rateSimpleQuantity && this.rateSimpleQuantity.toJSON()
		});
	}

}

module.exports = Dosage;
