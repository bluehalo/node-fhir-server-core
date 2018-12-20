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

	// Specific text of code for finding or diagnosis.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__item = new CodeableConcept(new_value);
	}

	// Which investigations support finding or diagnosis.
	get cause() {
		return this.__cause;
	}

	set cause(new_value) {
		this.__cause = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			item: this.__item && this.__item.toJSON(),
			cause: this.__cause,
		});
	}
}

module.exports = ClinicalImpressionFinding;
