const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Consent_Actor extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Consent_Actor';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Consent_Actor';
	}

	// How the individual is involved in the resources content that is described in the consent.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = new CodeableConcept(new_value);
	}

	// The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this.role && this.role.toJSON(),
			reference: this.reference && this.reference.toJSON()
		});
	}

}

module.exports = Consent_Actor;
