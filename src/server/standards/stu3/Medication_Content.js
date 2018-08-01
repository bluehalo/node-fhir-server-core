const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Quantity = require('./Quantity');

class Medication_Content extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Medication_Content';
	}

	// Identifies one of the items in the package.
	get itemCodeableConcept () {
		return this._itemCodeableConcept;
	}

	set itemCodeableConcept ( new_value ) {
		this._itemCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies one of the items in the package.
	get itemReference () {
		return this._itemReference;
	}

	set itemReference ( new_value ) {
		this._itemReference = new Reference(new_value);
	}

	// The amount of the product that is in the package.
	get amount () {
		return this._amount;
	}

	set amount ( new_value ) {
		this._amount = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
			amount: this._amount
		});
	}

}

module.exports = Medication_Content;
