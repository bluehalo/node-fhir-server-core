const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Timing = require('./Timing');
const NutritionOrder_Nutrient = require('./NutritionOrder_Nutrient');
const NutritionOrder_Texture = require('./NutritionOrder_Texture');

class NutritionOrder_OralDiet extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder_OralDiet';
	}

	// The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
	get schedule () {
		return this._schedule;
	}

	set schedule ( new_value ) {
		this._schedule = Array.isArray(new_value) ? new_value.map(val => new Timing(val)) : [new Timing(new_value)];
	}

	// Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
	get nutrient () {
		return this._nutrient;
	}

	set nutrient ( new_value ) {
		this._nutrient = Array.isArray(new_value) ? new_value.map(val => new NutritionOrder_Nutrient(val)) : [new NutritionOrder_Nutrient(new_value)];
	}

	// Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
	get texture () {
		return this._texture;
	}

	set texture ( new_value ) {
		this._texture = Array.isArray(new_value) ? new_value.map(val => new NutritionOrder_Texture(val)) : [new NutritionOrder_Texture(new_value)];
	}

	// The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
	get fluidConsistencyType () {
		return this._fluidConsistencyType;
	}

	set fluidConsistencyType ( new_value ) {
		this._fluidConsistencyType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Free text or additional instructions or information pertaining to the oral diet.
	get instruction () {
		return this._instruction;
	}

	set instruction ( new_value ) {
		this._instruction = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.map(v => v.toJSON()),
			schedule: this._schedule && this._schedule.map(v => v.toJSON()),
			nutrient: this._nutrient && this._nutrient.map(v => v.toJSON()),
			texture: this._texture && this._texture.map(v => v.toJSON()),
			fluidConsistencyType: this._fluidConsistencyType && this._fluidConsistencyType.map(v => v.toJSON()),
			instruction: this._instruction
		});
	}

}

module.exports = NutritionOrder_OralDiet;
