const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const Timing = require('../types/Timing');
const Ratio = require('../types/Ratio');

class Administration {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// schedule		0..1	Timing	Scheduled frequency of enteral feeding
	set schedule(schedule) {
		this._schedule = new Timing(schedule);
	}

	get schedule() {
		return this._schedule;
	}

	// quantity		0..1	SimpleQuantity	The volume of formula to provide
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// rate[x]		0..1		Speed with which the formula is provided per period of time
	// rateQuantity			SimpleQuantity
	set rateQuantity(rateQuantity) {
		this._rateQuantity = rateQuantity;
	}

	get rateQuantity() {
		return this._rateQuantity;
	}

	// rateRatio			Ratio
	set rateRatio(rateRatio) {
		this._rateRatio = new Ratio(rateRatio);
	}

	get rateRatio() {
		return this._rateRatio;
	}

	toJSON() {
		return {
			schedule: this._schedule,
			quantity: this._quantity,
			rateQuantity: this._rateQuantity,
			rateRatio: this._rateRatio,
		};
	}
}

class EnteralFormula {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// baseFormulaType	Σ	0..1	CodeableConcept	Type of enteral or infant formula
	// Enteral Formula Type Codes (Example)
	set baseFormulaType(baseFormulaType) {
		this._baseFormulaType = new CodeableConcept(baseFormulaType);
	}

	get baseFormulaType() {
		return this._baseFormulaType;
	}

	// baseFormulaProductName		0..1	string	Product or brand name of the enteral or infant formula
	set baseFormulaProductName(baseFormulaProductName) {
		this._baseFormulaProductName = baseFormulaProductName;
	}

	get baseFormulaProductName() {
		return this._baseFormulaProductName;
	}

	// additiveType		0..1	CodeableConcept	Type of modular component to add to the feeding
	// Enteral Formula Additive Type Code (Example)
	set additiveType(additiveType) {
		this._additiveType = new CodeableConcept(additiveType);
	}

	get additiveType() {
		return this._additiveType;
	}

	// additiveProductName		0..1	string	Product or brand name of the modular additive
	set additiveProductName(additiveProductName) {
		this._additiveProductName = additiveProductName;
	}

	get additiveProductName() {
		return this._additiveProductName;
	}

	// caloricDensity		0..1	SimpleQuantity	Amount of energy per specified volume that is required
	set caloricDensity(caloricDensity) {
		this._caloricDensity = caloricDensity;
	}

	get caloricDensity() {
		return this._caloricDensity;
	}

	// routeofAdministration		0..1	CodeableConcept	How the formula should enter the patient's gastrointestinal tract
	// Enteral Route Codes (Extensible)
	set routeofAdministration(routeofAdministration) {
		this._routeofAdministration = new CodeableConcept(routeofAdministration);
	}

	get routeofAdministration() {
		return this._routeofAdministration;
	}

	// maxVolumeToDeliver		0..1	SimpleQuantity	Upper limit on formula volume per unit of time
	set maxVolumeToDeliver(maxVolumeToDeliver) {
		this._maxVolumeToDeliver = maxVolumeToDeliver;
	}

	get maxVolumeToDeliver() {
		return this._maxVolumeToDeliver;
	}

	// administrationInstruction	Σ	0..1	string	Formula feeding instructions expressed as text
	set administrationInstruction(administrationInstruction) {
		this._administrationInstruction = administrationInstruction;
	}

	get administrationInstruction() {
		return this._administrationInstruction;
	}

	// administration		0..*	BackboneElement	Formula feeding instruction as structured data
	set administration(administration) {
		if (Array.isArray(administration)) {
			this._administration = administration.map((i) => new Administration(i));
		} else {
			this._administration = [new Administration(administration)];
		}
	}

	get administration() {
		return this._administration;
	}

	toJSON() {
		return {
			baseFormulaType: this._baseFormulaType,
			baseFormulaProductName: this._baseFormulaProductName,
			additiveType: this._additiveType,
			additiveProductName: this._additiveProductName,
			caloricDensity: this._caloricDensity,
			routeofAdministration: this._routeofAdministration,
			maxVolumeToDeliver: this._maxVolumeToDeliver,
			administrationInstruction: this._administrationInstruction,
			administration: this._administration,
		};
	}
}

class Supplement {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	0..1	CodeableConcept	Type of supplement product requested
	// Supplement Type Codes (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// productName		0..1	string	Product or brand name of the nutritional supplement
	set productName(productName) {
		this._productName = productName;
	}

	get productName() {
		return this._productName;
	}

	// schedule		0..*	Timing	Scheduled frequency of supplement
	set schedule(schedule) {
		if (Array.isArray(schedule)) {
			this._schedule = schedule.map((i) => new Timing(i));
		} else {
			this._schedule = [new Timing(schedule)];
		}
	}

	get schedule() {
		return this._schedule;
	}

	// quantity		0..1	SimpleQuantity	Amount of the nutritional supplement
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// instruction	Σ	0..1	string	Instructions or additional information about the oral supplement
	set instruction(instruction) {
		this._instruction = instruction;
	}

	get instruction() {
		return this._instruction;
	}

	toJSON() {
		return {
			type: this._type,
			productName: this._productName,
			schedule: this._schedule,
			quantity: this._quantity,
			instruction: this._instruction,
		};
	}
}

class Texture {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// modifier		0..1	CodeableConcept	Code to indicate how to alter the texture of the foods, e.g. pureed
	// Texture Modifier Codes (Example)
	set modifier(modifier) {
		this._modifier = new CodeableConcept(modifier);
	}

	get modifier() {
		return this._modifier;
	}

	// foodType		0..1	CodeableConcept	Concepts that are used to identify an entity that is ingested for nutritional purposes
	// Texture Modified Food Type Codes (Example)
	set foodType(foodType) {
		this._foodType = new CodeableConcept(foodType);
	}

	get foodType() {
		return this._foodType;
	}

	toJSON() {
		return {
			modifier: this._modifier,
			foodType: this._foodType,
		};
	}
}

class Nutrient {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// modifier		0..1	CodeableConcept	Type of nutrient that is being modified
	// Nutrient Modifier Codes (Example)
	set modifier(modifier) {
		this._modifier = new CodeableConcept(modifier);
	}

	get modifier() {
		return this._modifier;
	}

	// amount		0..1	SimpleQuantity	Quantity of the specified nutrient
	set amount(amount) {
		this._amount = amount;
	}

	get amount() {
		return this._amount;
	}

	toJSON() {
		return {
			modifier: this._modifier,
			amount: this._amount,
		};
	}
}

class OralDiet {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	0..*	CodeableConcept	Type of oral diet or diet restrictions that describe what can be consumed orally
	// Diet Codes (Example)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// schedule		0..*	Timing	Scheduled frequency of diet
	set schedule(schedule) {
		if (Array.isArray(schedule)) {
			this._schedule = schedule.map((i) => new Timing(i));
		} else {
			this._schedule = [new Timing(schedule)];
		}
	}

	get schedule() {
		return this._schedule;
	}

	// fluidConsistencyType		0..*	CodeableConcept	The required consistency of fluids and liquids provided to the patient
	// Fluid Consistency Type Codes (Example)
	set fluidConsistencyType(fluidConsistencyType) {
		if (Array.isArray(fluidConsistencyType)) {
			this._fluidConsistencyType = fluidConsistencyType.map((i) => new CodeableConcept(i));
		} else {
			this._fluidConsistencyType = [new CodeableConcept(fluidConsistencyType)];
		}
	}

	get fluidConsistencyType() {
		return this._fluidConsistencyType;
	}

	// instruction	Σ	0..1	string	Instructions or additional information about the oral diet
	set instruction(instruction) {
		this._instruction = instruction;
	}

	get instruction() {
		return this._instruction;
	}

	// nutrient		0..*	BackboneElement	Required nutrient modifications
	set nutrient(nutrient) {
		if (Array.isArray(nutrient)) {
			this._nutrient = nutrient.map((i) => new Nutrient(i));
		} else {
			this._nutrient = [new Nutrient(nutrient)];
		}
	}

	get nutrient() {
		return this._nutrient;
	}

	// texture		0..*	BackboneElement	Required texture modifications
	set texture(texture) {
		if (Array.isArray(texture)) {
			this._texture = texture.map((i) => new Texture(i));
		} else {
			this._texture = [new Texture(texture)];
		}
	}

	get texture() {
		return this._texture;
	}

	toJSON() {
		return {
			type: this._type,
			schedule: this._schedule,
			fluidConsistencyType: this._fluidConsistencyType,
			instruction: this._instruction,
			nutrient: this._nutrient,
			texture: this._texture,
		};
	}
}

class NutritionOrder extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'NutritionOrder';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Identifiers assigned to this order
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error
	// NutritionOrderStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// patient	Σ	1..1	Reference(Patient)	The person who requires the diet, formula or nutritional supplement
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// encounter		0..1	Reference(Encounter)	The encounter associated with this nutrition order
	set encounter(encounter) {
		this._encounter = new Reference(encounter);
	}

	get encounter() {
		return this._encounter;
	}

	// dateTime	Σ	1..1	dateTime	Date and time the nutrition order was requested
	set dateTime(dateTime) {
		this._dateTime = dateTime;
	}

	get dateTime() {
		return this._dateTime;
	}

	// orderer	Σ	0..1	Reference(Practitioner)	Who ordered the diet, formula or nutritional supplement
	set orderer(orderer) {
		this._orderer = new Reference(orderer);
	}

	get orderer() {
		return this._orderer;
	}

	// allergyIntolerance		0..*	Reference(AllergyIntolerance)	List of the patient's food and nutrition-related allergies and intolerances
	set allergyIntolerance(allergyIntolerance) {
		if (Array.isArray(allergyIntolerance)) {
			this._allergyIntolerance = allergyIntolerance.map((i) => new Reference(i));
		} else {
			this._allergyIntolerance = [new Reference(allergyIntolerance)];
		}
	}

	get allergyIntolerance() {
		return this._allergyIntolerance;
	}

	// foodPreferenceModifier		0..*	CodeableConcept	Order-specific modifier about the type of food that should be given
	// Diet (Example)
	set foodPreferenceModifier(foodPreferenceModifier) {
		if (Array.isArray(foodPreferenceModifier)) {
			this._foodPreferenceModifier = foodPreferenceModifier.map((i) => new CodeableConcept(i));
		} else {
			this._foodPreferenceModifier = [new CodeableConcept(foodPreferenceModifier)];
		}
	}

	get foodPreferenceModifier() {
		return this._foodPreferenceModifier;
	}

	// excludeFoodModifier		0..*	CodeableConcept	Order-specific modifier about the type of food that should not be given
	// Food Type Codes (Example)
	set excludeFoodModifier(excludeFoodModifier) {
		if (Array.isArray(excludeFoodModifier)) {
			this._excludeFoodModifier = excludeFoodModifier.map((i) => new CodeableConcept(i));
		} else {
			this._excludeFoodModifier = [new CodeableConcept(excludeFoodModifier)];
		}
	}

	get excludeFoodModifier() {
		return this._excludeFoodModifier;
	}

	// oralDiet	I	0..1	BackboneElement	Oral diet components
	set oralDiet(oralDiet) {
		this._oralDiet = new OralDiet(oralDiet);
	}

	get oralDiet() {
		return this._oralDiet;
	}

	// supplement	I	0..*	BackboneElement	Supplement components
	set supplement(supplement) {
		if (Array.isArray(supplement)) {
			this._supplement = supplement.map((i) => new Supplement(i));
		} else {
			this._supplement = [new Supplement(supplement)];
		}
	}

	get supplement() {
		return this._supplement;
	}

	// enteralFormula	I	0..1	BackboneElement	Enteral formula components
	set enteralFormula(enteralFormula) {
		this._enteralFormula = new EnteralFormula(enteralFormula);
	}

	get enteralFormula() {
		return this._enteralFormula;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			patient: this._patient,
			encounter: this._encounter,
			dateTime: this._dateTime,
			orderer: this._orderer,
			allergyIntolerance: this._allergyIntolerance,
			foodPreferenceModifier: this._foodPreferenceModifier,
			excludeFoodModifier: this._excludeFoodModifier,
			oralDiet: this._oralDiet,
			supplement: this._supplement,
			enteralFormula: this._enteralFormula,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.NutritionOrder = NutritionOrder;
module.exports.OralDiet = OralDiet;
module.exports.Nutrient = Nutrient;
module.exports.Texture = Texture;
module.exports.Supplement = Supplement;
module.exports.EnteralFormula = EnteralFormula;
module.exports.Administration = Administration;
