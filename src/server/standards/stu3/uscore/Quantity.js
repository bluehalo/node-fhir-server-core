const Element = require('./Element');

class Quantity extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Quantity';
	}

	// The value of the measured amount. The value includes an implicit precision in the presentation of the value.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this._value = new_value;
	}

	// How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
	get comparator () {
		return this._comparator;
	}

	set comparator ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['<', '<=', '>=', '>'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field comparator`);
		}
		this._comparator = new_value;
	}

	// A human-readable form of the unit.
	get unit () {
		return this._unit;
	}

	set unit ( new_value ) {
		this._unit = new_value;
	}

	// The identification of the system that provides the coded form of the unit.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		this._system = new_value;
	}

	// A computer processable form of the unit in some unit representation system.
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

	toJSON () {
		return Object.assign(super.toJSON(), {
			value: this._value,
			comparator: this._comparator,
			unit: this._unit,
			system: this._system,
			code: this._code
		});
	}

}

module.exports = Quantity;
