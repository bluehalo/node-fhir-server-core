const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Range = require('./Range');
const Duration = require('./Duration');

class Goal_Target extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Goal_Target';
	}

	// The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
	get measure () {
		return this._measure;
	}

	set measure ( new_value ) {
		this._measure = new CodeableConcept(new_value);
	}

	// The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
	get detailQuantity () {
		return this._detailQuantity;
	}

	set detailQuantity ( new_value ) {
		this._detailQuantity = new Quantity(new_value);
	}

	// The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
	get detailRange () {
		return this._detailRange;
	}

	set detailRange ( new_value ) {
		this._detailRange = new Range(new_value);
	}

	// The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.
	get detailCodeableConcept () {
		return this._detailCodeableConcept;
	}

	set detailCodeableConcept ( new_value ) {
		this._detailCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates either the date or the duration after start by which the goal should be met.
	get dueDate () {
		return this._dueDate;
	}

	set dueDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field dueDate`);
		}
		this._dueDate = new_value;
	}

	// Indicates either the date or the duration after start by which the goal should be met.
	get dueDuration () {
		return this._dueDuration;
	}

	set dueDuration ( new_value ) {
		this._dueDuration = new Duration(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			measure: this._measure,
			detailQuantity: this._detailQuantity,
			detailRange: this._detailRange,
			detailCodeableConcept: this._detailCodeableConcept,
			dueDate: this._dueDate,
			dueDuration: this._dueDuration
		});
	}

}

module.exports = Goal_Target;
