const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const NutritionOrder_OralDiet = require('./NutritionOrder_OralDiet');
const NutritionOrder_Supplement = require('./NutritionOrder_Supplement');
const NutritionOrder_EnteralFormula = require('./NutritionOrder_EnteralFormula');

class NutritionOrder extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'NutritionOrder';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'NutritionOrder';
	}

	// This is a NutritionOrder resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['NutritionOrder'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this order by the order sender or by the order receiver.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The workflow status of the nutrition order/request.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['proposed', 'draft', 'planned', 'requested', 'active', 'on-hold', 'completed', 'cancelled', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// An encounter that provides additional information about the healthcare context in which this request is made.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		this._encounter = new Reference(new_value);
	}

	// The date and time that this nutrition order was requested.
	get dateTime () {
		return this._dateTime;
	}

	set dateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field dateTime`);
		}
		this._dateTime = new_value;
	}

	// The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
	get orderer () {
		return this._orderer;
	}

	set orderer ( new_value ) {
		this._orderer = new Reference(new_value);
	}

	// A link to a record of allergies or intolerances  which should be included in the nutrition order.
	get allergyIntolerance () {
		return this._allergyIntolerance;
	}

	set allergyIntolerance ( new_value ) {
		this._allergyIntolerance = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
	get foodPreferenceModifier () {
		return this._foodPreferenceModifier;
	}

	set foodPreferenceModifier ( new_value ) {
		this._foodPreferenceModifier = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
	get excludeFoodModifier () {
		return this._excludeFoodModifier;
	}

	set excludeFoodModifier ( new_value ) {
		this._excludeFoodModifier = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Diet given orally in contrast to enteral (tube) feeding.
	get oralDiet () {
		return this._oralDiet;
	}

	set oralDiet ( new_value ) {
		this._oralDiet = new NutritionOrder_OralDiet(new_value);
	}

	// Oral nutritional products given in order to add further nutritional value to the patient's diet.
	get supplement () {
		return this._supplement;
	}

	set supplement ( new_value ) {
		this._supplement = Array.isArray(new_value) ? new_value.map(val => new NutritionOrder_Supplement(val)) : [new NutritionOrder_Supplement(new_value)];
	}

	// Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
	get enteralFormula () {
		return this._enteralFormula;
	}

	set enteralFormula ( new_value ) {
		this._enteralFormula = new NutritionOrder_EnteralFormula(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			patient: this._patient && this._patient.toJSON(),
			encounter: this._encounter && this._encounter.toJSON(),
			dateTime: this._dateTime,
			orderer: this._orderer && this._orderer.toJSON(),
			allergyIntolerance: this._allergyIntolerance && this._allergyIntolerance.map(v => v.toJSON()),
			foodPreferenceModifier: this._foodPreferenceModifier && this._foodPreferenceModifier.map(v => v.toJSON()),
			excludeFoodModifier: this._excludeFoodModifier && this._excludeFoodModifier.map(v => v.toJSON()),
			oralDiet: this._oralDiet && this._oralDiet.toJSON(),
			supplement: this._supplement && this._supplement.map(v => v.toJSON()),
			enteralFormula: this._enteralFormula && this._enteralFormula.toJSON()
		});
	}

}

module.exports = NutritionOrder;
