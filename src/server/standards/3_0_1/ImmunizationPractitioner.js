const BackboneElement = require('./BackboneElement');

class ImmunizationPractitioner extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationPractitioner';
		Object.assign(this, opt);
	}

	// This is a ImmunizationPractitioner resource
	static get __resourceType() {
		return 'ImmunizationPractitioner';
	}

	// Describes the type of performance (e.g. ordering provider, administering provider, etc.).
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The device, practitioner, etc. who performed the action.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			actor: this.__actor && this.__actor.toJSON(),
		});
	}
}

module.exports = ImmunizationPractitioner;
