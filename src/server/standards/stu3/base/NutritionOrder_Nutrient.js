const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');

class NutritionOrder_Nutrient extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder_Nutrient';
	}

	// The nutrient that is being modified such as carbohydrate or sodium.
	get modifier () {
		return this._modifier;
	}

	set modifier ( new_value ) {
		this._modifier = new CodeableConcept(new_value);
	}

	// The quantity of the specified nutrient to include in diet.
	get amount () {
		return this._amount;
	}

	set amount ( new_value ) {
		this._amount = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			modifier: this._modifier,
			amount: this._amount
		});
	}

}

module.exports = NutritionOrder_Nutrient;
