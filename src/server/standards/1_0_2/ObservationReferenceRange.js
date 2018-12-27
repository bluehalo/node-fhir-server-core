const BackboneElement = require('./BackboneElement');

class ObservationReferenceRange extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ObservationReferenceRange';
		Object.assign(this, opt);
	}

	// This is a ObservationReferenceRange resource
	static get __resourceType() {
		return 'ObservationReferenceRange';
	}

	// The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
	get low() {
		return this.__low;
	}

	set low(new_value) {
		const Quantity = require('./Quantity');
		this.__low = new Quantity(new_value);
	}

	// The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
	get high() {
		return this.__high;
	}

	set high(new_value) {
		const Quantity = require('./Quantity');
		this.__high = new Quantity(new_value);
	}

	// Code for the meaning of the reference range.
	get meaning() {
		return this.__meaning;
	}

	set meaning(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__meaning = new CodeableConcept(new_value);
	}

	// The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
	get age() {
		return this.__age;
	}

	set age(new_value) {
		const Range = require('./Range');
		this.__age = new Range(new_value);
	}

	// Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of \'Negative\' or a list or table of \'normals\'.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			low: this.__low && this.__low.toJSON(),
			high: this.__high && this.__high.toJSON(),
			meaning: this.__meaning && this.__meaning.toJSON(),
			age: this.__age && this.__age.toJSON(),
			text: this.__text,
		});
	}
}

module.exports = ObservationReferenceRange;
