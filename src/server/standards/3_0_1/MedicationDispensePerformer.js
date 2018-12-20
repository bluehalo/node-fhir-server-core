const BackboneElement = require('./BackboneElement');

class MedicationDispensePerformer extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationDispensePerformer';
		Object.assign(this, opt);
	}

	// This is a MedicationDispensePerformer resource
	static get __resourceType() {
		return 'MedicationDispensePerformer';
	}

	// The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf() {
		return this.__onBehalfOf;
	}

	set onBehalfOf(new_value) {
		const Reference = require('./Reference');
		this.__onBehalfOf = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			actor: this.__actor && this.__actor.toJSON(),
			onBehalfOf: this.__onBehalfOf && this.__onBehalfOf.toJSON(),
		});
	}
}

module.exports = MedicationDispensePerformer;
