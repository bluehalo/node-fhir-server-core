const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Immunization_Practitioner extends BackboneElement {

	constructor ( opts ) {
		super( opts );
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._role = new CodeableConcept(new_value);
	}

	// The device, practitioner, etc. who performed the action.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._actor = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this.role && this.role.toJSON(),
			actor: this.actor && this.actor.toJSON()
		});
	}

}

module.exports = Immunization_Practitioner;
