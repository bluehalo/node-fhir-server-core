const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Immunization_Practitioner extends BackboneElement {

	constructor ( opts ) {
		super();
		this._resourceType = 'Immunization_Practitioner';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Immunization_Practitioner';
	}

	// Describes the type of performance (e.g. ordering provider, administering provider, etc.).
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	// The device, practitioner, etc. who performed the action.
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

module.exports = Immunization_Practitioner;
