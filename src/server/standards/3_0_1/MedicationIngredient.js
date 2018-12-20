const BackboneElement = require('./BackboneElement');

class MedicationIngredient extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationIngredient';
		Object.assign(this, opt);
	}

	// This is a MedicationIngredient resource
	static get __resourceType() {
		return 'MedicationIngredient';
	}

	// The actual ingredient - either a substance (simple ingredient) or another medication.
	get itemCodeableConcept() {
		return this.__itemCodeableConcept;
	}

	set itemCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__itemCodeableConcept = new CodeableConcept(new_value);
	}

	// The actual ingredient - either a substance (simple ingredient) or another medication.
	get itemReference() {
		return this.__itemReference;
	}

	set itemReference(new_value) {
		const Reference = require('./Reference');
		this.__itemReference = new Reference(new_value);
	}

	// Indication of whether this ingredient affects the therapeutic action of the drug.
	get isActive() {
		return this.__isActive;
	}

	set isActive(new_value) {
		this.__isActive = new_value;
	}

	// Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Ratio = require('./Ratio');
		this.__amount = new Ratio(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			itemCodeableConcept: this.__itemCodeableConcept && this.__itemCodeableConcept.toJSON(),
			itemReference: this.__itemReference && this.__itemReference.toJSON(),
			isActive: this.__isActive,
			amount: this.__amount && this.__amount.toJSON(),
		});
	}
}

module.exports = MedicationIngredient;
