const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class Quantity extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Quantity';
		Object.assign(this, opt);
	}

	// This is a Quantity resource
	static get __resourceType() {
		return 'Quantity';
	}

	// The value of the measured amount. The value includes an implicit precision in the presentation of the value.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	// How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.
	get comparator() {
		return this.__comparator;
	}

	set comparator(new_value) {
		this.__comparator = new_value;
	}

	// A human-readable form of the unit.
	get unit() {
		return this.__unit;
	}

	set unit(new_value) {
		this.__unit = new_value;
	}

	// The identification of the system that provides the coded form of the unit.
	get system() {
		return this.__system;
	}

	set system(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field system`);
		}
		this.__system = new_value;
	}

	// A computer processable form of the unit in some unit representation system.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			value: this.__value,
			comparator: this.__comparator,
			unit: this.__unit,
			system: this.__system,
			code: this.__code,
		});
	}
}

module.exports = Quantity;
