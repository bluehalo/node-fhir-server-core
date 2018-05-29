const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Ratio = require('./Ratio');

class Medication_Ingredient extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Medication_Ingredient';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Medication_Ingredient';
	}

	// The actual ingredient - either a substance (simple ingredient) or another medication.
	get itemCodeableConcept () {
		return this._itemCodeableConcept;
	}

	set itemCodeableConcept ( new_value ) {
		this._itemCodeableConcept = new CodeableConcept(new_value);
	}

	// The actual ingredient - either a substance (simple ingredient) or another medication.
	get itemReference () {
		return this._itemReference;
	}

	set itemReference ( new_value ) {
		this._itemReference = new Reference(new_value);
	}

	// Indication of whether this ingredient affects the therapeutic action of the drug.
	get isActive () {
		return this._isActive;
	}

	set isActive ( new_value ) {
		this._isActive = new_value;
	}

	// Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
	get amount () {
		return this._amount;
	}

	set amount ( new_value ) {
		this._amount = new Ratio(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			itemCodeableConcept: this._itemCodeableConcept && this._itemCodeableConcept.toJSON(),
			itemReference: this._itemReference && this._itemReference.toJSON(),
			isActive: this._isActive,
			amount: this._amount && this._amount.toJSON()
		});
	}

}

module.exports = Medication_Ingredient;
