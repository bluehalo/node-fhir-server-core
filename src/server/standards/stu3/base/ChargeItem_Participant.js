const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class ChargeItem_Participant extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ChargeItem_Participant';
	}

	// Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.).
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	// The device, practitioner, etc. who performed or participated in the service.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this._role,
			actor: this._actor
		});
	}

}

module.exports = ChargeItem_Participant;
