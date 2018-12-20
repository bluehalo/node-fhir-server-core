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

	// Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.
	get appliesTo() {
		return this.__appliesTo;
	}

	set appliesTo(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__appliesTo = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
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
			type: this.__type && this.__type.toJSON(),
			appliesTo: this.__appliesTo && this.__appliesTo.map(v => v.toJSON()),
			age: this.__age && this.__age.toJSON(),
			text: this.__text,
		});
	}
}

module.exports = ObservationReferenceRange;
