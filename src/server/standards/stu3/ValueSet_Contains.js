const BackboneElement = require('./BackboneElement');
const ValueSet_Designation = require('./ValueSet_Designation');

class ValueSet_Contains extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Contains';
	}

	// An absolute URI which is the code system in which the code for this item in the expansion is defined.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
	get abstract () {
		return this._abstract;
	}

	set abstract ( new_value ) {
		this._abstract = new_value;
	}

	// If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data.
	get inactive () {
		return this._inactive;
	}

	set inactive ( new_value ) {
		this._inactive = new_value;
	}

	// The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// The recommended display for this item in the expansion.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	// Additional representations for this item - other languages, aliases, specialized purposes, used for particular purposes, etc. These are relevant when the conditions of the expansion do not fix to a single correct representation.
	get designation () {
		return this._designation;
	}

	set designation ( new_value ) {
		this._designation = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Designation(val)) : [new ValueSet_Designation(new_value)];
	}

	// Other codes and entries contained under this entry in the hierarchy.
	get contains () {
		return this._contains;
	}

	set contains ( new_value ) {
		this._contains = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Contains(val)) : [new ValueSet_Contains(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			system: this._system,
			abstract: this._abstract,
			inactive: this._inactive,
			version: this._version,
			code: this._code,
			display: this._display,
			designation: this._designation,
			contains: this._contains
		});
	}

}

module.exports = ValueSet_Contains;
