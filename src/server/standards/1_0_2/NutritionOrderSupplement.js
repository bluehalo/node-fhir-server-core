const BackboneElement = require('./BackboneElement');

class NutritionOrderSupplement extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrderSupplement';
		Object.assign(this, opt);
	}

	// This is a NutritionOrderSupplement resource
	static get __resourceType() {
		return 'NutritionOrderSupplement';
	}

	// The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The product or brand name of the nutritional supplement such as \'Acme Protein Shake\'.
	get productName() {
		return this.__productName;
	}

	set productName(new_value) {
		this.__productName = new_value;
	}

	// The time period and frequency at which the supplement(s) should be given.
	get schedule() {
		return this.__schedule;
	}

	set schedule(new_value) {
		const Timing = require('./Timing');
		this.__schedule = Array.isArray(new_value) ? new_value.map(val => new Timing(val)) : [new Timing(new_value)];
	}

	// The amount of the nutritional supplement to be given.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// Free text or additional instructions or information pertaining to the oral supplement.
	get instruction() {
		return this.__instruction;
	}

	set instruction(new_value) {
		this.__instruction = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			productName: this.__productName,
			schedule: this.__schedule && this.__schedule.map(v => v.toJSON()),
			quantity: this.__quantity && this.__quantity.toJSON(),
			instruction: this.__instruction,
		});
	}
}

module.exports = NutritionOrderSupplement;
