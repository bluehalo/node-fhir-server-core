const BackboneElement = require('./BackboneElement');

class SubstanceIngredient extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SubstanceIngredient';
		Object.assign(this, opt);
	}

	// This is a SubstanceIngredient resource
	static get __resourceType() {
		return 'SubstanceIngredient';
	}

	// The amount of the ingredient in the substance - a concentration ratio.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Ratio = require('./Ratio');
		this.__quantity = new Ratio(new_value);
	}

	// Another substance that is a component of this substance.
	get substanceCodeableConcept() {
		return this.__substanceCodeableConcept;
	}

	set substanceCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__substanceCodeableConcept = new CodeableConcept(new_value);
	}

	// Another substance that is a component of this substance.
	get substanceReference() {
		return this.__substanceReference;
	}

	set substanceReference(new_value) {
		const Reference = require('./Reference');
		this.__substanceReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			quantity: this.__quantity && this.__quantity.toJSON(),
			substanceCodeableConcept: this.__substanceCodeableConcept && this.__substanceCodeableConcept.toJSON(),
			substanceReference: this.__substanceReference && this.__substanceReference.toJSON(),
		});
	}
}

module.exports = SubstanceIngredient;
