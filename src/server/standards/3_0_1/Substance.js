const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Substance_Instance = require('./Substance_Instance');
const Substance_Ingredient = require('./Substance_Ingredient');

class Substance extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Substance';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Substance';
	}

	// This is a Substance resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Substance'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique identifier for the substance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A code to indicate if the substance is actively used.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'inactive', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A code (or set of codes) that identify this substance.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// A description of the substance - its appearance, handling requirements, and other usage notes.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
	get instance () {
		return this._instance;
	}

	set instance ( new_value ) {
		this._instance = Array.isArray(new_value) ? new_value.map(val => new Substance_Instance(val)) : [new Substance_Instance(new_value)];
	}

	// A substance can be composed of other substances.
	get ingredient () {
		return this._ingredient;
	}

	set ingredient ( new_value ) {
		this._ingredient = Array.isArray(new_value) ? new_value.map(val => new Substance_Ingredient(val)) : [new Substance_Ingredient(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			category: this._category && this._category.map(v => v.toJSON()),
			code: this._code && this._code.toJSON(),
			description: this._description,
			instance: this._instance && this._instance.map(v => v.toJSON()),
			ingredient: this._ingredient && this._ingredient.map(v => v.toJSON())
		});
	}

}

module.exports = Substance;
