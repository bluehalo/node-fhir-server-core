const BackboneElement = require('./BackboneElement');

class PlanDefinitionGoalTarget extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PlanDefinitionGoalTarget';
		Object.assign(this, opt);
	}

	// This is a PlanDefinitionGoalTarget resource
	static get __resourceType() {
		return 'PlanDefinitionGoalTarget';
	}

	// The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level.
	get measure() {
		return this.__measure;
	}

	set measure(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__measure = new CodeableConcept(new_value);
	}

	// The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
	get detailQuantity() {
		return this.__detailQuantity;
	}

	set detailQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__detailQuantity = new Quantity(new_value);
	}

	// The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
	get detailRange() {
		return this.__detailRange;
	}

	set detailRange(new_value) {
		const Range = require('./Range');
		this.__detailRange = new Range(new_value);
	}

	// The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
	get detailCodeableConcept() {
		return this.__detailCodeableConcept;
	}

	set detailCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__detailCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the timeframe after the start of the goal in which the goal should be met.
	get due() {
		return this.__due;
	}

	set due(new_value) {
		const Duration = require('./Duration');
		this.__due = new Duration(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			measure: this.__measure && this.__measure.toJSON(),
			detailQuantity: this.__detailQuantity && this.__detailQuantity.toJSON(),
			detailRange: this.__detailRange && this.__detailRange.toJSON(),
			detailCodeableConcept: this.__detailCodeableConcept && this.__detailCodeableConcept.toJSON(),
			due: this.__due && this.__due.toJSON(),
		});
	}
}

module.exports = PlanDefinitionGoalTarget;
