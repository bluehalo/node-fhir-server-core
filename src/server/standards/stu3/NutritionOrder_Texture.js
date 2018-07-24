const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class NutritionOrder_Texture extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder_Texture';
	}

	// Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
	get modifier () {
		return this._modifier;
	}

	set modifier ( new_value ) {
		this._modifier = new CodeableConcept(new_value);
	}

	// The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
	get foodType () {
		return this._foodType;
	}

	set foodType ( new_value ) {
		this._foodType = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			modifier: this._modifier,
			foodType: this._foodType
		});
	}

}

module.exports = NutritionOrder_Texture;
