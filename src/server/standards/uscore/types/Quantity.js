const Element = require('../../generic/types/Element');
const Code = require('../../generic/types/Code');

class Quantity extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// value	SΣ	1..1	decimal	Numerical value (with implicit precision)
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// comparator	?!Σ	0..1	code	< | <= | >= | > - how to understand the value
	// Binding: QuantityComparator (required)
	set comparator(comparator) {
		this._comparator = new Code(comparator);
	}

	get comparator() {
		return this._comparator;
	}

	// unit	SΣ	1..1	string	Unit representation
	set quantityUnit(quantityUnit) {
		this._quantityUnit = quantityUnit;
	}

	get quantityUnit() {
		return this._quantityUnit;
	}

	// system	SΣI	1..1	uri	System that defines coded unit form
	// Fixed Value: http://unitsofmeasure.org
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// code	SΣ	1..1	code	Coded responses from the common UCUM units for vital signs value set.
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		const json = {
			id: this._id,
			value: this._value,
			comparator: this._comparator,
			quantityUnit: this._quantityUnit,
			system: this._system,
			code: this._code,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Quantity;
