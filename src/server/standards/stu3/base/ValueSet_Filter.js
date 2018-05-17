const BackboneElement = require('./BackboneElement');

class ValueSet_Filter extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Filter';
	}

	// A code that identifies a property defined in the code system.
	get property () {
		return this._property;
	}

	set property ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field property`);
		}
		this._property = new_value;
	}

	// The kind of operation to perform as a part of the filter criteria.
	get op () {
		return this._op;
	}

	set op ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['=', 'is-a', 'descendent-of', 'is-not-a', 'regex', 'in', 'not-in', 'generalizes', 'exists'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field op`);
		}
		this._op = new_value;
	}

	// The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value when the operation is 'regex', or one of the values (true and false), when the operation is 'exists'.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			property: this._property,
			op: this._op,
			value: this._value
		});
	}

}

module.exports = ValueSet_Filter;
