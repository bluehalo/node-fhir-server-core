const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class NutritionOrder extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'NutritionOrder';
		Object.assign(this, opt);
	}

	// This is a NutritionOrder resource
	static get __resourceType() {
		return 'NutritionOrder';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__NutritionOrder = new_value;
	}

	// Identifiers assigned to this order by the order sender or by the order receiver.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The workflow status of the nutrition order/request.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// An encounter that provides additional information about the healthcare context in which this request is made.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The date and time that this nutrition order was requested.
	get dateTime() {
		return this.__dateTime;
	}

	set dateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateTime`);
		}
		this.__dateTime = new_value;
	}

	// The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
	get orderer() {
		return this.__orderer;
	}

	set orderer(new_value) {
		const Reference = require('./Reference');
		this.__orderer = new Reference(new_value);
	}

	// A link to a record of allergies or intolerances  which should be included in the nutrition order.
	get allergyIntolerance() {
		return this.__allergyIntolerance;
	}

	set allergyIntolerance(new_value) {
		const Reference = require('./Reference');
		this.__allergyIntolerance = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
	get foodPreferenceModifier() {
		return this.__foodPreferenceModifier;
	}

	set foodPreferenceModifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__foodPreferenceModifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
	get excludeFoodModifier() {
		return this.__excludeFoodModifier;
	}

	set excludeFoodModifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__excludeFoodModifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Diet given orally in contrast to enteral (tube) feeding.
	get oralDiet() {
		return this.__oralDiet;
	}

	set oralDiet(new_value) {
		const NutritionOrderOralDiet = require('./NutritionOrderOralDiet');
		this.__oralDiet = new NutritionOrderOralDiet(new_value);
	}

	// Oral nutritional products given in order to add further nutritional value to the patient\'s diet.
	get supplement() {
		return this.__supplement;
	}

	set supplement(new_value) {
		const NutritionOrderSupplement = require('./NutritionOrderSupplement');
		this.__supplement = Array.isArray(new_value)
			? new_value.map(val => new NutritionOrderSupplement(val))
			: [new NutritionOrderSupplement(new_value)];
	}

	// Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
	get enteralFormula() {
		return this.__enteralFormula;
	}

	set enteralFormula(new_value) {
		const NutritionOrderEnteralFormula = require('./NutritionOrderEnteralFormula');
		this.__enteralFormula = new NutritionOrderEnteralFormula(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			dateTime: this.__dateTime,
			orderer: this.__orderer && this.__orderer.toJSON(),
			allergyIntolerance: this.__allergyIntolerance && this.__allergyIntolerance.map(v => v.toJSON()),
			foodPreferenceModifier: this.__foodPreferenceModifier && this.__foodPreferenceModifier.map(v => v.toJSON()),
			excludeFoodModifier: this.__excludeFoodModifier && this.__excludeFoodModifier.map(v => v.toJSON()),
			oralDiet: this.__oralDiet && this.__oralDiet.toJSON(),
			supplement: this.__supplement && this.__supplement.map(v => v.toJSON()),
			enteralFormula: this.__enteralFormula && this.__enteralFormula.toJSON(),
		});
	}
}

module.exports = NutritionOrder;
