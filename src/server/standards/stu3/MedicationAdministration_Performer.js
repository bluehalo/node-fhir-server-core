const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class MedicationAdministration_Performer extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationAdministration_Performer';
	}

	// The device, practitioner, etc. who performed the action.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	// The organization the device or practitioner was acting on behalf of.
	get onBehalfOf () {
		return this._onBehalfOf;
	}

	set onBehalfOf ( new_value ) {
		this._onBehalfOf = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			actor: this._actor,
			onBehalfOf: this._onBehalfOf
		});
	}

}

module.exports = MedicationAdministration_Performer;
