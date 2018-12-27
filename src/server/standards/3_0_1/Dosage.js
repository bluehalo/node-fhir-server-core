const Element = require('./Element');

class Dosage extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Dosage';
		Object.assign(this, opt);
	}

	// This is a Dosage resource
	static get __resourceType() {
		return 'Dosage';
	}

	// Indicates the order in which the dosage instructions should be applied or interpreted.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		this.__sequence = new_value;
	}

	// Free text dosage instructions e.g. SIG.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// Supplemental instruction - e.g. \'with meals\'.
	get additionalInstruction() {
		return this.__additionalInstruction;
	}

	set additionalInstruction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__additionalInstruction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Instructions in terms that are understood by the patient or consumer.
	get patientInstruction() {
		return this.__patientInstruction;
	}

	set patientInstruction(new_value) {
		this.__patientInstruction = new_value;
	}

	// When medication should be administered.
	get timing() {
		return this.__timing;
	}

	set timing(new_value) {
		const Timing = require('./Timing');
		this.__timing = new Timing(new_value);
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
	get asNeededBoolean() {
		return this.__asNeededBoolean;
	}

	set asNeededBoolean(new_value) {
		this.__asNeededBoolean = new_value;
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
	get asNeededCodeableConcept() {
		return this.__asNeededCodeableConcept;
	}

	set asNeededCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// Body site to administer to.
	get site() {
		return this.__site;
	}

	set site(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__site = new CodeableConcept(new_value);
	}

	// How drug should enter body.
	get route() {
		return this.__route;
	}

	set route(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__route = new CodeableConcept(new_value);
	}

	// Technique for administering medication.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// Amount of medication per dose.
	get doseRange() {
		return this.__doseRange;
	}

	set doseRange(new_value) {
		const Range = require('./Range');
		this.__doseRange = new Range(new_value);
	}

	// Amount of medication per dose.
	get doseQuantity() {
		return this.__doseQuantity;
	}

	set doseQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__doseQuantity = new Quantity(new_value);
	}

	// Upper limit on medication per unit of time.
	get maxDosePerPeriod() {
		return this.__maxDosePerPeriod;
	}

	set maxDosePerPeriod(new_value) {
		const Ratio = require('./Ratio');
		this.__maxDosePerPeriod = new Ratio(new_value);
	}

	// Upper limit on medication per administration.
	get maxDosePerAdministration() {
		return this.__maxDosePerAdministration;
	}

	set maxDosePerAdministration(new_value) {
		const Quantity = require('./Quantity');
		this.__maxDosePerAdministration = new Quantity(new_value);
	}

	// Upper limit on medication per lifetime of the patient.
	get maxDosePerLifetime() {
		return this.__maxDosePerLifetime;
	}

	set maxDosePerLifetime(new_value) {
		const Quantity = require('./Quantity');
		this.__maxDosePerLifetime = new Quantity(new_value);
	}

	// Amount of medication per unit of time.
	get rateRatio() {
		return this.__rateRatio;
	}

	set rateRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__rateRatio = new Ratio(new_value);
	}

	// Amount of medication per unit of time.
	get rateRange() {
		return this.__rateRange;
	}

	set rateRange(new_value) {
		const Range = require('./Range');
		this.__rateRange = new Range(new_value);
	}

	// Amount of medication per unit of time.
	get rateQuantity() {
		return this.__rateQuantity;
	}

	set rateQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__rateQuantity = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			text: this.__text,
			additionalInstruction: this.__additionalInstruction && this.__additionalInstruction.map(v => v.toJSON()),
			patientInstruction: this.__patientInstruction,
			timing: this.__timing && this.__timing.toJSON(),
			asNeededBoolean: this.__asNeededBoolean,
			asNeededCodeableConcept: this.__asNeededCodeableConcept && this.__asNeededCodeableConcept.toJSON(),
			site: this.__site && this.__site.toJSON(),
			route: this.__route && this.__route.toJSON(),
			method: this.__method && this.__method.toJSON(),
			doseRange: this.__doseRange && this.__doseRange.toJSON(),
			doseQuantity: this.__doseQuantity && this.__doseQuantity.toJSON(),
			maxDosePerPeriod: this.__maxDosePerPeriod && this.__maxDosePerPeriod.toJSON(),
			maxDosePerAdministration: this.__maxDosePerAdministration && this.__maxDosePerAdministration.toJSON(),
			maxDosePerLifetime: this.__maxDosePerLifetime && this.__maxDosePerLifetime.toJSON(),
			rateRatio: this.__rateRatio && this.__rateRatio.toJSON(),
			rateRange: this.__rateRange && this.__rateRange.toJSON(),
			rateQuantity: this.__rateQuantity && this.__rateQuantity.toJSON(),
		});
	}
}

module.exports = Dosage;
