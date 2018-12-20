const BackboneElement = require('./BackboneElement');

class NutritionOrderOralDietTexture extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrderOralDietTexture';
		Object.assign(this, opt);
	}

	// This is a NutritionOrderOralDietTexture resource
	static get __resourceType() {
		return 'NutritionOrderOralDietTexture';
	}

	// Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__modifier = new CodeableConcept(new_value);
	}

	// The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.
	get foodType() {
		return this.__foodType;
	}

	set foodType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__foodType = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			modifier: this.__modifier && this.__modifier.toJSON(),
			foodType: this.__foodType && this.__foodType.toJSON(),
		});
	}
}

module.exports = NutritionOrderOralDietTexture;
