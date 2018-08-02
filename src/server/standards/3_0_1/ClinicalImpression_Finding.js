const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class ClinicalImpression_Finding extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClinicalImpression_Finding';
	}

	// Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.
	get itemCodeableConcept () {
		return this._itemCodeableConcept;
	}

	set itemCodeableConcept ( new_value ) {
		this._itemCodeableConcept = new CodeableConcept(new_value);
	}

	// Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.
	get itemReference () {
		return this._itemReference;
	}

	set itemReference ( new_value ) {
		this._itemReference = new Reference(new_value);
	}

	// Which investigations support finding or diagnosis.
	get basis () {
		return this._basis;
	}

	set basis ( new_value ) {
		this._basis = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			itemCodeableConcept: this._itemCodeableConcept && this._itemCodeableConcept.toJSON(),
			itemReference: this._itemReference && this._itemReference.toJSON(),
			basis: this._basis
		});
	}

}

module.exports = ClinicalImpression_Finding;
