const BackboneElement = require('./BackboneElement');

class HealthcareServiceServiceType extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'HealthcareServiceServiceType';
		Object.assign(this, opt);
	}

	// This is a HealthcareServiceServiceType resource
	static get __resourceType() {
		return 'HealthcareServiceServiceType';
	}

	// The specific type of service being delivered or performed.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Collection of specialties handled by the service site. This is more of a medical term.
	get specialty() {
		return this.__specialty;
	}

	set specialty(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialty = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
		});
	}
}

module.exports = HealthcareServiceServiceType;
