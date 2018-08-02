const BackboneElement = require('./BackboneElement');
const Ratio = require('./Ratio');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Substance_Ingredient extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Substance_Ingredient';
	}

	// The amount of the ingredient in the substance - a concentration ratio.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Ratio(new_value);
	}

	// Another substance that is a component of this substance.
	get substanceCodeableConcept () {
		return this._substanceCodeableConcept;
	}

	set substanceCodeableConcept ( new_value ) {
		this._substanceCodeableConcept = new CodeableConcept(new_value);
	}

	// Another substance that is a component of this substance.
	get substanceReference () {
		return this._substanceReference;
	}

	set substanceReference ( new_value ) {
		this._substanceReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			quantity: this._quantity && this._quantity.toJSON(),
			substanceCodeableConcept: this._substanceCodeableConcept && this._substanceCodeableConcept.toJSON(),
			substanceReference: this._substanceReference && this._substanceReference.toJSON()
		});
	}

}

module.exports = Substance_Ingredient;
