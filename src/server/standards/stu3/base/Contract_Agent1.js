const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class Contract_Agent1 extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Agent1';
	}

	// The agent assigned a role in this Contract Provision.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	// Role played by the agent assigned this role in the execution of this Contract Provision.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			actor: this._actor,
			role: this._role
		});
	}

}

module.exports = Contract_Agent1;
