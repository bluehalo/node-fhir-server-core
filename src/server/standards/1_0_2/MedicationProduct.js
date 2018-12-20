const BackboneElement = require('./BackboneElement');

class MedicationProduct extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationProduct';
		Object.assign(this, opt);
	}

	// This is a MedicationProduct resource
	static get __resourceType() {
		return 'MedicationProduct';
	}

	// Describes the form of the item.  Powder; tablets; carton.
	get form() {
		return this.__form;
	}

	set form(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Identifies a particular constituent of interest in the product.
	get ingredient() {
		return this.__ingredient;
	}

	set ingredient(new_value) {
		const MedicationProductIngredient = require('./MedicationProductIngredient');
		this.__ingredient = Array.isArray(new_value)
			? new_value.map(val => new MedicationProductIngredient(val))
			: [new MedicationProductIngredient(new_value)];
	}

	// Information about a group of medication produced or packaged from one production run.
	get batch() {
		return this.__batch;
	}

	set batch(new_value) {
		const MedicationProductBatch = require('./MedicationProductBatch');
		this.__batch = Array.isArray(new_value)
			? new_value.map(val => new MedicationProductBatch(val))
			: [new MedicationProductBatch(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			form: this.__form && this.__form.toJSON(),
			ingredient: this.__ingredient && this.__ingredient.map(v => v.toJSON()),
			batch: this.__batch && this.__batch.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationProduct;
