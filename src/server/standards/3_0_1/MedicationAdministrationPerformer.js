const BackboneElement = require('./BackboneElement');

class MedicationAdministrationPerformer extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationAdministrationPerformer';
		Object.assign(this, opt);
	}

	// This is a MedicationAdministrationPerformer resource
	static get __resourceType() {
		return 'MedicationAdministrationPerformer';
	}

	// The device, practitioner, etc. who performed the action.
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

module.exports = MedicationAdministrationPerformer;
