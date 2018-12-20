const BackboneElement = require('./BackboneElement');

class NutritionOrderOralDiet extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrderOralDiet';
		Object.assign(this, opt);
	}

	// This is a NutritionOrderOralDiet resource
	static get __resourceType() {
		return 'NutritionOrderOralDiet';
	}

	// The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
	get schedule() {
		return this.__schedule;
	}

	set schedule(new_value) {
		const Timing = require('./Timing');
		this.__schedule = Array.isArray(new_value) ? new_value.map(val => new Timing(val)) : [new Timing(new_value)];
	}

	// Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
	get nutrient() {
		return this.__nutrient;
	}

	set nutrient(new_value) {
		const NutritionOrderOralDietNutrient = require('./NutritionOrderOralDietNutrient');
		this.__nutrient = Array.isArray(new_value)
			? new_value.map(val => new NutritionOrderOralDietNutrient(val))
			: [new NutritionOrderOralDietNutrient(new_value)];
	}

	// Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
	get texture() {
		return this.__texture;
	}

	set texture(new_value) {
		const NutritionOrderOralDietTexture = require('./NutritionOrderOralDietTexture');
		this.__texture = Array.isArray(new_value)
			? new_value.map(val => new NutritionOrderOralDietTexture(val))
			: [new NutritionOrderOralDietTexture(new_value)];
	}

	// The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
	get fluidConsistencyType() {
		return this.__fluidConsistencyType;
	}

	set fluidConsistencyType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__fluidConsistencyType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Free text or additional instructions or information pertaining to the oral diet.
	get instruction() {
		return this.__instruction;
	}

	set instruction(new_value) {
		this.__instruction = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.map(v => v.toJSON()),
			schedule: this.__schedule && this.__schedule.map(v => v.toJSON()),
			nutrient: this.__nutrient && this.__nutrient.map(v => v.toJSON()),
			texture: this.__texture && this.__texture.map(v => v.toJSON()),
			fluidConsistencyType: this.__fluidConsistencyType && this.__fluidConsistencyType.map(v => v.toJSON()),
			instruction: this.__instruction,
		});
	}
}

module.exports = NutritionOrderOralDiet;
