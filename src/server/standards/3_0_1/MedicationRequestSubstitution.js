const BackboneElement = require('./BackboneElement');

class MedicationRequestSubstitution extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationRequestSubstitution';
		Object.assign(this, opt);
	}

	// This is a MedicationRequestSubstitution resource
	static get __resourceType() {
		return 'MedicationRequestSubstitution';
	}

	// True if the prescriber allows a different drug to be dispensed from what was prescribed.
	get allowed() {
		return this.__allowed;
	}

	set allowed(new_value) {
		this.__allowed = new_value;
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
			allowed: this.__allowed,
			reason: this.__reason && this.__reason.toJSON(),
		});
	}
}

module.exports = MedicationRequestSubstitution;
