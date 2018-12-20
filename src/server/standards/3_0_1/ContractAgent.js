const BackboneElement = require('./BackboneElement');

class ContractAgent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractAgent';
		Object.assign(this, opt);
	}

	// This is a ContractAgent resource
	static get __resourceType() {
		return 'ContractAgent';
	}

	// Who or what parties are assigned roles in this Contract.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// Role type of agent assigned roles in this Contract.
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

module.exports = ContractAgent;
