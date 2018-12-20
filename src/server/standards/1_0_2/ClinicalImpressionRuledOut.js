const BackboneElement = require('./BackboneElement');

class ClinicalImpressionRuledOut extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClinicalImpressionRuledOut';
		Object.assign(this, opt);
	}

	// This is a ClinicalImpressionRuledOut resource
	static get __resourceType() {
		return 'ClinicalImpressionRuledOut';
	}

	// Specific text of code for diagnosis.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__item = new CodeableConcept(new_value);
	}

	// Grounds for elimination.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		this.__reason = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			item: this.__item && this.__item.toJSON(),
			reason: this.__reason,
		});
	}
}

module.exports = ClinicalImpressionRuledOut;
