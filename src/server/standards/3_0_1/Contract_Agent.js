const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class Contract_Agent extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Agent';
	}

	// Who or what parties are assigned roles in this Contract.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	// Role type of agent assigned roles in this Contract.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			actor: this._actor && this._actor.toJSON(),
			role: this._role && this._role.map(v => v.toJSON())
		});
	}

}

module.exports = Contract_Agent;
