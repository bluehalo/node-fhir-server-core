const BackboneElement = require('./BackboneElement');

class GroupCharacteristic extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GroupCharacteristic';
		Object.assign(this, opt);
	}

	// This is a GroupCharacteristic resource
	static get __resourceType() {
		return 'GroupCharacteristic';
	}

	// A code that identifies the kind of trait being asserted.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.
	get valueCodeableConcept() {
		return this.__valueCodeableConcept;
	}

	set valueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__valueCodeableConcept = new CodeableConcept(new_value);
	}

	// The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.
	get valueRange() {
		return this.__valueRange;
	}

	set valueRange(new_value) {
		const Range = require('./Range');
		this.__valueRange = new Range(new_value);
	}

	// If true, indicates the characteristic is one that is NOT held by members of the group.
	get exclude() {
		return this.__exclude;
	}

	set exclude(new_value) {
		this.__exclude = new_value;
	}

	// The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.toJSON(),
			valueBoolean: this.__valueBoolean,
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueRange: this.__valueRange && this.__valueRange.toJSON(),
			exclude: this.__exclude,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = GroupCharacteristic;
