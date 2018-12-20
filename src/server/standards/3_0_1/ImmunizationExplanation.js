const BackboneElement = require('./BackboneElement');

class ImmunizationExplanation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationExplanation';
		Object.assign(this, opt);
	}

	// This is a ImmunizationExplanation resource
	static get __resourceType() {
		return 'ImmunizationExplanation';
	}

	// Reasons why a vaccine was administered.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Reason why a vaccine was not administered.
	get reasonNotGiven() {
		return this.__reasonNotGiven;
	}

	set reasonNotGiven(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonNotGiven = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			reasonNotGiven: this.__reasonNotGiven && this.__reasonNotGiven.map(v => v.toJSON()),
		});
	}
}

module.exports = ImmunizationExplanation;
