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
	get itemCodeableConcept() {
		return this.__itemCodeableConcept;
	}

	set itemCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__itemCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies one of the items in the package.
	get itemReference() {
		return this.__itemReference;
	}

	set itemReference(new_value) {
		const Reference = require('./Reference');
		this.__itemReference = new Reference(new_value);
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
			itemCodeableConcept: this.__itemCodeableConcept && this.__itemCodeableConcept.toJSON(),
			itemReference: this.__itemReference && this.__itemReference.toJSON(),
			amount: this.__amount && this.__amount.toJSON(),
		});
	}
}

module.exports = MedicationPackageContent;
