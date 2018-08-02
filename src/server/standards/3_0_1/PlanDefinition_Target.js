const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Range = require('./Range');
const Duration = require('./Duration');

class PlanDefinition_Target extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PlanDefinition_Target';
	}

	// The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level.
	get measure () {
		return this._measure;
	}

	set measure ( new_value ) {
		this._measure = new CodeableConcept(new_value);
	}

	// The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
	get detailQuantity () {
		return this._detailQuantity;
	}

	set detailQuantity ( new_value ) {
		this._detailQuantity = new Quantity(new_value);
	}

	// The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
	get detailRange () {
		return this._detailRange;
	}

	set detailRange ( new_value ) {
		this._detailRange = new Range(new_value);
	}

	// The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
	get detailCodeableConcept () {
		return this._detailCodeableConcept;
	}

	set detailCodeableConcept ( new_value ) {
		this._detailCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the timeframe after the start of the goal in which the goal should be met.
	get due () {
		return this._due;
	}

	set due ( new_value ) {
		this._due = new Duration(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			measure: this._measure && this._measure.toJSON(),
			detailQuantity: this._detailQuantity && this._detailQuantity.toJSON(),
			detailRange: this._detailRange && this._detailRange.toJSON(),
			detailCodeableConcept: this._detailCodeableConcept && this._detailCodeableConcept.toJSON(),
			due: this._due && this._due.toJSON()
		});
	}

}

module.exports = PlanDefinition_Target;
