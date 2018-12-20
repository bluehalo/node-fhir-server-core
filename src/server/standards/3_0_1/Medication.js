const DomainResource = require('./DomainResource');

class Medication extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Medication';
		Object.assign(this, opt);
	}

	// This is a Medication resource
	static get __resourceType() {
		return 'Medication';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Medication = new_value;
	}

	// A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A code to indicate if the medication is in active use.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Set to true if the item is attributable to a specific manufacturer.
	get isBrand() {
		return this.__isBrand;
	}

	set isBrand(new_value) {
		this.__isBrand = new_value;
	}

	// Set to true if the medication can be obtained without an order from a prescriber.
	get isOverTheCounter() {
		return this.__isOverTheCounter;
	}

	set isOverTheCounter(new_value) {
		this.__isOverTheCounter = new_value;
	}

	// Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
	get manufacturer() {
		return this.__manufacturer;
	}

	set manufacturer(new_value) {
		const Reference = require('./Reference');
		this.__manufacturer = new Reference(new_value);
	}

	// Describes the form of the item.  Powder; tablets; capsule.
	get form() {
		return this.__form;
	}

	set form(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Identifies a particular constituent of interest in the product.
	get ingredient() {
		return this.__ingredient;
	}

	set ingredient(new_value) {
		const MedicationIngredient = require('./MedicationIngredient');
		this.__ingredient = Array.isArray(new_value)
			? new_value.map(val => new MedicationIngredient(val))
			: [new MedicationIngredient(new_value)];
	}

	// Information that only applies to packages (not products).
	get package() {
		return this.__package;
	}

	set package(new_value) {
		const MedicationPackage = require('./MedicationPackage');
		this.__package = new MedicationPackage(new_value);
	}

	// Photo(s) or graphic representation(s) of the medication.
	get image() {
		return this.__image;
	}

	set image(new_value) {
		const Attachment = require('./Attachment');
		this.__image = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			code: this.__code && this.__code.toJSON(),
			status: this.__status,
			isBrand: this.__isBrand,
			isOverTheCounter: this.__isOverTheCounter,
			manufacturer: this.__manufacturer && this.__manufacturer.toJSON(),
			form: this.__form && this.__form.toJSON(),
			ingredient: this.__ingredient && this.__ingredient.map(v => v.toJSON()),
			package: this.__package && this.__package.toJSON(),
			image: this.__image && this.__image.map(v => v.toJSON()),
		});
	}
}

module.exports = Medication;
