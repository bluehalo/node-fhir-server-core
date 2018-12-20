const BackboneElement = require('./BackboneElement');

class MedicationPackageContent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationPackageContent';
		Object.assign(this, opt);
	}

	// This is a MedicationPackageContent resource
	static get __resourceType() {
		return 'MedicationPackageContent';
	}

	// Identifies one of the items in the package.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const Reference = require('./Reference');
		this.__item = new Reference(new_value);
	}

	// The amount of the product that is in the package.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Quantity = require('./Quantity');
		this.__amount = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			item: this.__item && this.__item.toJSON(),
			amount: this.__amount && this.__amount.toJSON(),
		});
	}
}

module.exports = MedicationPackageContent;
