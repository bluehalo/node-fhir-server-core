const BackboneElement = require('./BackboneElement');

class NutritionOrderEnteralFormulaAdministration extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrderEnteralFormulaAdministration';
		Object.assign(this, opt);
	}

	// This is a NutritionOrderEnteralFormulaAdministration resource
	static get __resourceType() {
		return 'NutritionOrderEnteralFormulaAdministration';
	}

	// The time period and frequency at which the enteral formula should be delivered to the patient.
	get schedule() {
		return this.__schedule;
	}

	set schedule(new_value) {
		const Timing = require('./Timing');
		this.__schedule = new Timing(new_value);
	}

	// The volume of formula to provide to the patient per the specified administration schedule.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
	get rateQuantity() {
		return this.__rateQuantity;
	}

	set rateQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__rateQuantity = new Quantity(new_value);
	}

	// The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
	get rateRatio() {
		return this.__rateRatio;
	}

	set rateRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__rateRatio = new Ratio(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			schedule: this.__schedule && this.__schedule.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			rateQuantity: this.__rateQuantity && this.__rateQuantity.toJSON(),
			rateRatio: this.__rateRatio && this.__rateRatio.toJSON(),
		});
	}
}

module.exports = NutritionOrderEnteralFormulaAdministration;
