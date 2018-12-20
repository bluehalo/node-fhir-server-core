const BackboneElement = require('./BackboneElement');

class NutritionOrderOralDietNutrient extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrderOralDietNutrient';
		Object.assign(this, opt);
	}

	// This is a NutritionOrderOralDietNutrient resource
	static get __resourceType() {
		return 'NutritionOrderOralDietNutrient';
	}

	// The nutrient that is being modified such as carbohydrate or sodium.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__modifier = new CodeableConcept(new_value);
	}

	// The quantity of the specified nutrient to include in diet.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Quantity = require('./Quantity');
		this.__amount = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			modifier: this.__modifier && this.__modifier.toJSON(),
			amount: this.__amount && this.__amount.toJSON(),
		});
	}
}

module.exports = NutritionOrderOralDietNutrient;
