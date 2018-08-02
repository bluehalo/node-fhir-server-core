const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Range = require('./Range');
const Period = require('./Period');

class Group_Characteristic extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Group_Characteristic';
	}

	// A code that identifies the kind of trait being asserted.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		this._valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
	get valueRange () {
		return this._valueRange;
	}

	set valueRange ( new_value ) {
		this._valueRange = new Range(new_value);
	}

	// If true, indicates the characteristic is one that is NOT held by members of the group.
	get exclude () {
		return this._exclude;
	}

	set exclude ( new_value ) {
		this._exclude = new_value;
	}

	// The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code && this._code.toJSON(),
			valueCodeableConcept: this._valueCodeableConcept && this._valueCodeableConcept.toJSON(),
			valueBoolean: this._valueBoolean,
			valueQuantity: this._valueQuantity && this._valueQuantity.toJSON(),
			valueRange: this._valueRange && this._valueRange.toJSON(),
			exclude: this._exclude,
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = Group_Characteristic;
