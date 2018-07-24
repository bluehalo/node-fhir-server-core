const BackboneElement = require('./BackboneElement');
const Timing = require('./Timing');
const Quantity = require('./Quantity');
const Ratio = require('./Ratio');

class NutritionOrder_Administration extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder_Administration';
	}

	// The time period and frequency at which the enteral formula should be delivered to the patient.
	get schedule () {
		return this._schedule;
	}

	set schedule ( new_value ) {
		this._schedule = new Timing(new_value);
	}

	// The volume of formula to provide to the patient per the specified administration schedule.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
	get rateSimpleQuantity () {
		return this._rateSimpleQuantity;
	}

	set rateSimpleQuantity ( new_value ) {
		this._rateSimpleQuantity = new Quantity(new_value);
	}

	// The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
	get rateRatio () {
		return this._rateRatio;
	}

	set rateRatio ( new_value ) {
		this._rateRatio = new Ratio(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			schedule: this._schedule,
			quantity: this._quantity,
			rateSimpleQuantity: this._rateSimpleQuantity,
			rateRatio: this._rateRatio
		});
	}

}

module.exports = NutritionOrder_Administration;
