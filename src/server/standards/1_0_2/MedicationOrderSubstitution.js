const BackboneElement = require('./BackboneElement');

class MedicationOrderSubstitution extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationOrderSubstitution';
		Object.assign(this, opt);
	}

	// This is a MedicationOrderSubstitution resource
	static get __resourceType() {
		return 'MedicationOrderSubstitution';
	}

	// A code signifying whether a different drug should be dispensed from what was prescribed.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Indicates the reason for the substitution, or why substitution must or must not be performed.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
		});
	}
}

module.exports = MedicationOrderSubstitution;
