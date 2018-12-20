const BackboneElement = require('./BackboneElement');

class MedicationDispenseSubstitution extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationDispenseSubstitution';
		Object.assign(this, opt);
	}

	// This is a MedicationDispenseSubstitution resource
	static get __resourceType() {
		return 'MedicationDispenseSubstitution';
	}

	// True if the dispenser dispensed a different drug or product from what was prescribed.
	get wasSubstituted() {
		return this.__wasSubstituted;
	}

	set wasSubstituted(new_value) {
		this.__wasSubstituted = new_value;
	}

	// A code signifying whether a different drug was dispensed from what was prescribed.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The person or organization that has primary responsibility for the substitution.
	get responsibleParty() {
		return this.__responsibleParty;
	}

	set responsibleParty(new_value) {
		const Reference = require('./Reference');
		this.__responsibleParty = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			wasSubstituted: this.__wasSubstituted,
			type: this.__type && this.__type.toJSON(),
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			responsibleParty: this.__responsibleParty && this.__responsibleParty.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationDispenseSubstitution;
