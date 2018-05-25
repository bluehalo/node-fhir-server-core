const DomainResource = require('./DomainResource');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Medication_Ingredient = require('./Medication_Ingredient');
const Medication_Package = require('./Medication_Package');
const Attachment = require('./Attachment');

class Medication extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Medication';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Medication';
	}

	// This is a Medication resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['Medication'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = new CodeableConcept(new_value);
	}

	// A code to indicate if the medication is in active use.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'inactive', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Set to true if the item is attributable to a specific manufacturer.
	get isBrand () {
		return this._isBrand;
	}

	set isBrand ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._isBrand = new_value;
	}

	// Set to true if the medication can be obtained without an order from a prescriber.
	get isOverTheCounter () {
		return this._isOverTheCounter;
	}

	set isOverTheCounter ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._isOverTheCounter = new_value;
	}

	// Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
	get manufacturer () {
		return this._manufacturer;
	}

	set manufacturer ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._manufacturer = new Reference(new_value);
	}

	// Describes the form of the item.  Powder; tablets; capsule.
	get form () {
		return this._form;
	}

	set form ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._form = new CodeableConcept(new_value);
	}

	// Identifies a particular constituent of interest in the product.
	get ingredient () {
		return this._ingredient;
	}

	set ingredient ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._ingredient = Array.isArray(new_value) ? new_value.map(val => new Medication_Ingredient(val)) : [new Medication_Ingredient(new_value)];
	}

	// Information that only applies to packages (not products).
	get package () {
		return this._package;
	}

	set package ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._package = new Medication_Package(new_value);
	}

	// Photo(s) or graphic representation(s) of the medication.
	get image () {
		return this._image;
	}

	set image ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._image = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			code: this.code && this.code.toJSON(),
			status: this.status,
			isBrand: this.isBrand,
			isOverTheCounter: this.isOverTheCounter,
			manufacturer: this.manufacturer && this.manufacturer.toJSON(),
			form: this.form && this.form.toJSON(),
			ingredient: this.ingredient && this.ingredient.map(v => v.toJSON()),
			package: this.package && this.package.toJSON(),
			image: this.image && this.image.map(v => v.toJSON())
		});
	}

}

module.exports = Medication;
