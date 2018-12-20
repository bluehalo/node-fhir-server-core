const BackboneElement = require('./BackboneElement');

class ClinicalImpressionInvestigation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClinicalImpressionInvestigation';
		Object.assign(this, opt);
	}

	// This is a ClinicalImpressionInvestigation resource
	static get __resourceType() {
		return 'ClinicalImpressionInvestigation';
	}

	// A name/code for the group (\'set\') of investigations. Typically, this will be something like \'signs\', \'symptoms\', \'clinical\', \'diagnostic\', but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A record of a specific investigation that was undertaken.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const Reference = require('./Reference');
		this.__item = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
		});
	}
}

module.exports = ClinicalImpressionInvestigation;
