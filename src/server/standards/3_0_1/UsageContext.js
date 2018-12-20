const Element = require('./Element');

class UsageContext extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'UsageContext';
		Object.assign(this, opt);
	}

	// This is a UsageContext resource
	static get __resourceType() {
		return 'UsageContext';
	}

	// A code that identifies the type of context being specified by this usage context.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = new Coding(new_value);
	}

	// A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	get valueCodeableConcept() {
		return this.__valueCodeableConcept;
	}

	set valueCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__valueCodeableConcept = new CodeableConcept(new_value);
	}

	// A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	get valueQuantity() {
		return this.__valueQuantity;
	}

	set valueQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__valueQuantity = new Quantity(new_value);
	}

	// A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	get valueRange() {
		return this.__valueRange;
	}

	set valueRange(new_value) {
		const Range = require('./Range');
		this.__valueRange = new Range(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			valueCodeableConcept: this.__valueCodeableConcept && this.__valueCodeableConcept.toJSON(),
			valueQuantity: this.__valueQuantity && this.__valueQuantity.toJSON(),
			valueRange: this.__valueRange && this.__valueRange.toJSON(),
		});
	}
}

module.exports = UsageContext;
