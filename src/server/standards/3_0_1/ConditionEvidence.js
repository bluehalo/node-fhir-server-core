const BackboneElement = require('./BackboneElement');

class ConditionEvidence extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConditionEvidence';
		Object.assign(this, opt);
	}

	// This is a ConditionEvidence resource
	static get __resourceType() {
		return 'ConditionEvidence';
	}

	// A manifestation or symptom that led to the recording of this condition.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Links to other relevant information, including pathology reports.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const Reference = require('./Reference');
		this.__detail = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.map(v => v.toJSON()),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = ConditionEvidence;
