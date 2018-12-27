const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class GoalTarget extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GoalTarget';
		Object.assign(this, opt);
	}

	// This is a GoalTarget resource
	static get __resourceType() {
		return 'GoalTarget';
	}

	// The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
	get measure() {
		return this.__measure;
	}

	set measure(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__measure = new CodeableConcept(new_value);
	}

	// The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
	get detailQuantity() {
		return this.__detailQuantity;
	}

	set detailQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__detailQuantity = new Quantity(new_value);
	}

	// The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
	get detailRange() {
		return this.__detailRange;
	}

	set detailRange(new_value) {
		const Range = require('./Range');
		this.__detailRange = new Range(new_value);
	}

	// The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
	get detailCodeableConcept() {
		return this.__detailCodeableConcept;
	}

	set detailCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__detailCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates either the date or the duration after start by which the goal should be met.
	get dueDate() {
		return this.__dueDate;
	}

	set dueDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dueDate`);
		}
		this.__dueDate = new_value;
	}

	// Indicates either the date or the duration after start by which the goal should be met.
	get dueDuration() {
		return this.__dueDuration;
	}

	set dueDuration(new_value) {
		const Duration = require('./Duration');
		this.__dueDuration = new Duration(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			measure: this.__measure && this.__measure.toJSON(),
			detailQuantity: this.__detailQuantity && this.__detailQuantity.toJSON(),
			detailRange: this.__detailRange && this.__detailRange.toJSON(),
			detailCodeableConcept: this.__detailCodeableConcept && this.__detailCodeableConcept.toJSON(),
			dueDate: this.__dueDate,
			dueDuration: this.__dueDuration && this.__dueDuration.toJSON(),
		});
	}
}

module.exports = GoalTarget;
