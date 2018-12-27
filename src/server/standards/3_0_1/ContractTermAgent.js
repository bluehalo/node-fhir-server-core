const BackboneElement = require('./BackboneElement');

class ContractTermAgent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractTermAgent';
		Object.assign(this, opt);
	}

	// This is a ContractTermAgent resource
	static get __resourceType() {
		return 'ContractTermAgent';
	}

	// The agent assigned a role in this Contract Provision.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// Role played by the agent assigned this role in the execution of this Contract Provision.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			actor: this.__actor && this.__actor.toJSON(),
			role: this.__role && this.__role.map(v => v.toJSON()),
		});
	}
}

module.exports = ContractTermAgent;
