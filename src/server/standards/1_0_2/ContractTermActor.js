const BackboneElement = require('./BackboneElement');

class ContractTermActor extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractTermActor';
		Object.assign(this, opt);
	}

	// This is a ContractTermActor resource
	static get __resourceType() {
		return 'ContractTermActor';
	}

	// The actor assigned a role in this Contract Provision.
	get entity() {
		return this.__entity;
	}

	set entity(new_value) {
		const Reference = require('./Reference');
		this.__entity = new Reference(new_value);
	}

	// Role played by the actor assigned this role in this Contract Provision.
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
			entity: this.__entity && this.__entity.toJSON(),
			role: this.__role && this.__role.map(v => v.toJSON()),
		});
	}
}

module.exports = ContractTermActor;
