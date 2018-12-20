const BackboneElement = require('./BackboneElement');

class ClinicalImpressionFinding extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClinicalImpressionFinding';
		Object.assign(this, opt);
	}

	// This is a ClinicalImpressionFinding resource
	static get __resourceType() {
		return 'ClinicalImpressionFinding';
	}

	// Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.
	get itemCodeableConcept() {
		return this.__itemCodeableConcept;
	}

	set itemCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__itemCodeableConcept = new CodeableConcept(new_value);
	}

	// Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.
	get itemReference() {
		return this.__itemReference;
	}

	set itemReference(new_value) {
		const Reference = require('./Reference');
		this.__itemReference = new Reference(new_value);
	}

	// Which investigations support finding or diagnosis.
	get basis() {
		return this.__basis;
	}

	set basis(new_value) {
		this.__basis = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			itemCodeableConcept: this.__itemCodeableConcept && this.__itemCodeableConcept.toJSON(),
			itemReference: this.__itemReference && this.__itemReference.toJSON(),
			basis: this.__basis,
		});
	}
}

module.exports = ClinicalImpressionFinding;
