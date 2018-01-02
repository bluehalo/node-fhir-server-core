const path = require('path');
const Code = require(path.resolve('./src/server/resources/types/Code'));
const Element = require(path.resolve('./src/server/resources/types/Element'));

// Quantity	Σ I		Element	A measured or measurable amount
// If a code for the unit is present, the system SHALL also be present
class Quantity extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// value	Σ	0..1	decimal	Numerical value (with implicit precision)
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// comparator	?! Σ	0..1	code	< | <= | >= | > - how to understand the value
	// QuantityComparator (Required)
	set comparator(comparator) {
		const regex = /^(<=|<|>=|>)(\w+)/;

		if (regex.test(comparator)) {
			this._comparator = new Code(comparator);
		} else {
			throw new Error('Invalid comparator');
		}
	}

	get comparator() {
		return this._comparator;
	}

	// unit	Σ	0..1	string	Unit representation
	set unit(unit) {
		this._unit = unit;
	}

	get unit() {
		return this._unit;
	}

	// system	Σ I	0..1	uri	System that defines coded unit form
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// code	Σ	0..1	code	Coded form of the unit
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		return {
			value: this._value,
			comparator: this._comparator,
			unit: this._unit,
			system: this._system,
			code: this._code
		};
	}

}

module.exports = Quantity;
