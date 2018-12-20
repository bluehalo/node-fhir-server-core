const BackboneElement = require('./BackboneElement');

class NutritionOrderEnteralFormula extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrderEnteralFormula';
		Object.assign(this, opt);
	}

	// This is a NutritionOrderEnteralFormula resource
	static get __resourceType() {
		return 'NutritionOrderEnteralFormula';
	}

	// The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
	get baseFormulaType() {
		return this.__baseFormulaType;
	}

	set baseFormulaType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__baseFormulaType = new CodeableConcept(new_value);
	}

	// The product or brand name of the enteral or infant formula product such as \'ACME Adult Standard Formula\'.
	get baseFormulaProductName() {
		return this.__baseFormulaProductName;
	}

	set baseFormulaProductName(new_value) {
		this.__baseFormulaProductName = new_value;
	}

	// Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
	get additiveType() {
		return this.__additiveType;
	}

	set additiveType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__additiveType = new CodeableConcept(new_value);
	}

	// The product or brand name of the type of modular component to be added to the formula.
	get additiveProductName() {
		return this.__additiveProductName;
	}

	set additiveProductName(new_value) {
		this.__additiveProductName = new_value;
	}

	// The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.
	get caloricDensity() {
		return this.__caloricDensity;
	}

	set caloricDensity(new_value) {
		const Quantity = require('./Quantity');
		this.__caloricDensity = new Quantity(new_value);
	}

	// The route or physiological path of administration into the patient\'s gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
	get routeofAdministration() {
		return this.__routeofAdministration;
	}

	set routeofAdministration(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__routeofAdministration = new CodeableConcept(new_value);
	}

	// Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
	get administration() {
		return this.__administration;
	}

	set administration(new_value) {
		const NutritionOrderEnteralFormulaAdministration = require('./NutritionOrderEnteralFormulaAdministration');
		this.__administration = Array.isArray(new_value)
			? new_value.map(val => new NutritionOrderEnteralFormulaAdministration(val))
			: [new NutritionOrderEnteralFormulaAdministration(new_value)];
	}

	// The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
	get maxVolumeToDeliver() {
		return this.__maxVolumeToDeliver;
	}

	set maxVolumeToDeliver(new_value) {
		const Quantity = require('./Quantity');
		this.__maxVolumeToDeliver = new Quantity(new_value);
	}

	// Free text formula administration, feeding instructions or additional instructions or information.
	get administrationInstruction() {
		return this.__administrationInstruction;
	}

	set administrationInstruction(new_value) {
		this.__administrationInstruction = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			baseFormulaType: this.__baseFormulaType && this.__baseFormulaType.toJSON(),
			baseFormulaProductName: this.__baseFormulaProductName,
			additiveType: this.__additiveType && this.__additiveType.toJSON(),
			additiveProductName: this.__additiveProductName,
			caloricDensity: this.__caloricDensity && this.__caloricDensity.toJSON(),
			routeofAdministration: this.__routeofAdministration && this.__routeofAdministration.toJSON(),
			administration: this.__administration && this.__administration.map(v => v.toJSON()),
			maxVolumeToDeliver: this.__maxVolumeToDeliver && this.__maxVolumeToDeliver.toJSON(),
			administrationInstruction: this.__administrationInstruction,
		});
	}
}

module.exports = NutritionOrderEnteralFormula;
