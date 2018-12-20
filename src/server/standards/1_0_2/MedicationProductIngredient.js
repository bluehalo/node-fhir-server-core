const BackboneElement = require('./BackboneElement');

class MedicationProductIngredient extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationProductIngredient';
		Object.assign(this, opt);
	}

	// This is a MedicationProductIngredient resource
	static get __resourceType() {
		return 'MedicationProductIngredient';
	}

	// The actual ingredient - either a substance (simple ingredient) or another medication.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const Reference = require('./Reference');
		this.__item = new Reference(new_value);
	}

	// Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Ratio = require('./Ratio');
		this.__amount = new Ratio(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			item: this.__item && this.__item.toJSON(),
			amount: this.__amount && this.__amount.toJSON(),
		});
	}
}

module.exports = MedicationProductIngredient;
