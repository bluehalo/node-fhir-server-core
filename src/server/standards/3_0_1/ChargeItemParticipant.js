const BackboneElement = require('./BackboneElement');

class ChargeItemParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ChargeItemParticipant';
		Object.assign(this, opt);
	}

	// This is a ChargeItemParticipant resource
	static get __resourceType() {
		return 'ChargeItemParticipant';
	}

	// Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.).
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
	}

	// The device, practitioner, etc. who performed or participated in the service.
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

module.exports = ChargeItemParticipant;
