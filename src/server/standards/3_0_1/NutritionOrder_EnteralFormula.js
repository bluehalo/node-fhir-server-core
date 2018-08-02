const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const NutritionOrder_Administration = require('./NutritionOrder_Administration');

class NutritionOrder_EnteralFormula extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder_EnteralFormula';
	}

	// The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
	get baseFormulaType () {
		return this._baseFormulaType;
	}

	set baseFormulaType ( new_value ) {
		this._baseFormulaType = new CodeableConcept(new_value);
	}

	// The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
	get baseFormulaProductName () {
		return this._baseFormulaProductName;
	}

	set baseFormulaProductName ( new_value ) {
		this._baseFormulaProductName = new_value;
	}

	// Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
	get additiveType () {
		return this._additiveType;
	}

	set additiveType ( new_value ) {
		this._additiveType = new CodeableConcept(new_value);
	}

	// The product or brand name of the type of modular component to be added to the formula.
	get additiveProductName () {
		return this._additiveProductName;
	}

	set additiveProductName ( new_value ) {
		this._additiveProductName = new_value;
	}

	// The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
	get caloricDensity () {
		return this._caloricDensity;
	}

	set caloricDensity ( new_value ) {
		this._caloricDensity = new Quantity(new_value);
	}

	// The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
	get routeofAdministration () {
		return this._routeofAdministration;
	}

	set routeofAdministration ( new_value ) {
		this._routeofAdministration = new CodeableConcept(new_value);
	}

	// Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
	get administration () {
		return this._administration;
	}

	set administration ( new_value ) {
		this._administration = Array.isArray(new_value) ? new_value.map(val => new NutritionOrder_Administration(val)) : [new NutritionOrder_Administration(new_value)];
	}

	// The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
	get maxVolumeToDeliver () {
		return this._maxVolumeToDeliver;
	}

	set maxVolumeToDeliver ( new_value ) {
		this._maxVolumeToDeliver = new Quantity(new_value);
	}

	// Free text formula administration, feeding instructions or additional instructions or information.
	get administrationInstruction () {
		return this._administrationInstruction;
	}

	set administrationInstruction ( new_value ) {
		this._administrationInstruction = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			baseFormulaType: this._baseFormulaType && this._baseFormulaType.toJSON(),
			baseFormulaProductName: this._baseFormulaProductName,
			additiveType: this._additiveType && this._additiveType.toJSON(),
			additiveProductName: this._additiveProductName,
			caloricDensity: this._caloricDensity && this._caloricDensity.toJSON(),
			routeofAdministration: this._routeofAdministration && this._routeofAdministration.toJSON(),
			administration: this._administration && this._administration.map(v => v.toJSON()),
			maxVolumeToDeliver: this._maxVolumeToDeliver && this._maxVolumeToDeliver.toJSON(),
			administrationInstruction: this._administrationInstruction
		});
	}

}

module.exports = NutritionOrder_EnteralFormula;
