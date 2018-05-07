const BackboneElement = require('./BackboneElement');
const Quantity = require('./Quantity');
const CodeableConcept = require('./CodeableConcept');
const Range = require('./Range');

class Observation_ReferenceRange extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Observation_ReferenceRange';
	}

	// The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
	get low () {
		return this._low;
	}

	set low ( new_value ) {
		this._low = new Quantity(new_value);
	}

	// The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
	get high () {
		return this._high;
	}

	set high ( new_value ) {
		this._high = new Quantity(new_value);
	}

	// Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.
	get appliesTo () {
		return this._appliesTo;
	}

	set appliesTo ( new_value ) {
		this._appliesTo = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
	get age () {
		return this._age;
	}

	set age ( new_value ) {
		this._age = new Range(new_value);
	}

	// Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			low: this._low,
			high: this._high,
			type: this._type,
			appliesTo: this._appliesTo,
			age: this._age,
			text: this._text
		});
	}

}

module.exports = Observation_ReferenceRange;
