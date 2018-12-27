const BackboneElement = require('./BackboneElement');

class CarePlanParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CarePlanParticipant';
		Object.assign(this, opt);
	}

	// This is a CarePlanParticipant resource
	static get __resourceType() {
		return 'CarePlanParticipant';
	}

	// Indicates specific responsibility of an individual within the care plan; e.g. \'Primary physician\', \'Team coordinator\', \'Caregiver\', etc.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The specific person or organization who is participating/expected to participate in the care plan.
	get member() {
		return this.__member;
	}

	set member(new_value) {
		const Reference = require('./Reference');
		this.__member = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			member: this.__member && this.__member.toJSON(),
		});
	}
}

module.exports = CarePlanParticipant;
