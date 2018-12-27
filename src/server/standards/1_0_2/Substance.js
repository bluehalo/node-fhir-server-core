const DomainResource = require('./DomainResource');

class Substance extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Substance';
		Object.assign(this, opt);
	}

	// This is a Substance resource
	static get __resourceType() {
		return 'Substance';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Substance = new_value;
	}

	// Unique identifier for the substance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A code (or set of codes) that identify this substance.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A description of the substance - its appearance, handling requirements, and other usage notes.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
	get instance() {
		return this.__instance;
	}

	set instance(new_value) {
		const SubstanceInstance = require('./SubstanceInstance');
		this.__instance = Array.isArray(new_value)
			? new_value.map(val => new SubstanceInstance(val))
			: [new SubstanceInstance(new_value)];
	}

	// A substance can be composed of other substances.
	get ingredient() {
		return this.__ingredient;
	}

	set ingredient(new_value) {
		const SubstanceIngredient = require('./SubstanceIngredient');
		this.__ingredient = Array.isArray(new_value)
			? new_value.map(val => new SubstanceIngredient(val))
			: [new SubstanceIngredient(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			category: this.__category && this.__category.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			description: this.__description,
			instance: this.__instance && this.__instance.map(v => v.toJSON()),
			ingredient: this.__ingredient && this.__ingredient.map(v => v.toJSON()),
		});
	}
}

module.exports = Substance;
