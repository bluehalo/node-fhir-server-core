const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Ratio = require('../types/Ratio');
const Reference = require('../types/Reference');

class Ingredient {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// quantity	Σ	0..1	Ratio	Optional amount (concentration)
	set quantity(quantity) {
		this._quantity = new Ratio(quantity);
	}

	get quantity() {
		return this._quantity;
	}

	// substance[x]	Σ	1..1		A component of the substance
	// Substance Code (Example)
	// substanceCodeableConcept			CodeableConcept
	set substanceCodeableConcept(substanceCodeableConcept) {
		this._substanceCodeableConcept = new CodeableConcept(substanceCodeableConcept);
	}

	get substanceCodeableConcept() {
		return this._substanceCodeableConcept;
	}

	// substanceReference			Reference
	set substanceReference(substanceReference) {
		this._substanceReference = new Reference(substanceReference);
	}

	get substanceReference() {
		return this._substanceReference;
	}

	toJSON() {
		return {
			quantity: this._quantity,
			substanceCodeableConcept: this._substanceCodeableConcept,
			substanceReference: this._substanceReference,
		};
	}
}

class Instance {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..1	Identifier	Identifier of the package/container
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// expiry	Σ	0..1	dateTime	When no longer valid to use
	set expiry(expiry) {
		this._expiry = expiry;
	}

	get expiry() {
		return this._expiry;
	}

	// quantity	Σ	0..1	SimpleQuantity	Amount of substance in the package
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			expiry: this._expiry,
			quantity: this._quantity,
		};
	}
}

class Substance extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Substance';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Unique identifier
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

	// status	Σ	0..1	code	active | inactive | entered-in-error
	// FHIRSubstanceStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..*	CodeableConcept	What class/type of substance this is
	// Substance Category Codes (Extensible)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// code	Σ	1..1	CodeableConcept	What substance this is
	// Substance Code (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// description	Σ	0..1	string	Textual description of the substance, comments
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// instance	Σ	0..*	BackboneElement	If this describes a specific package/container of the substance
	set instance(instance) {
		if (Array.isArray(instance)) {
			this._instance = instance.map((i) => new Instance(i));
		} else {
			this._instance = [new Instance(instance)];
		}
	}

	get instance() {
		return this._instance;
	}

	// ingredient	Σ	0..*	BackboneElement	Composition information about the substance
	set ingredient(ingredient) {
		if (Array.isArray(ingredient)) {
			this._ingredient = ingredient.map((i) => new Ingredient(i));
		} else {
			this._ingredient = [new Ingredient(ingredient)];
		}
	}

	get ingredient() {
		return this._ingredient;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			code: this._code,
			description: this._description,
			instance: this._instance,
			ingredient: this._ingredient,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Substance = Substance;
module.exports.Instance = Instance;
module.exports.Ingredient = Ingredient;
