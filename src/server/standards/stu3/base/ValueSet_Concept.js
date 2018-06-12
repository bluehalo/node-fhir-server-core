const BackboneElement = require('./BackboneElement');
const ValueSet_Designation = require('./ValueSet_Designation');

class ValueSet_Concept extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Concept';
	}

	// Specifies a code for the concept to be included or excluded.
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

	// The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	// Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
	get designation () {
		return this._designation;
	}

	set designation ( new_value ) {
		this._designation = Array.isArray(new_value) ? new_value.map(val => new ValueSet_Designation(val)) : [new ValueSet_Designation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			display: this._display,
			designation: this._designation
		});
	}

}

module.exports = ValueSet_Concept;
