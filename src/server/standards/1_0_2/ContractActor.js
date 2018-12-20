const BackboneElement = require('./BackboneElement');

class ContractActor extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractActor';
		Object.assign(this, opt);
	}

	// This is a ContractActor resource
	static get __resourceType() {
		return 'ContractActor';
	}

	// Who or what actors are assigned roles in this Contract.
	get entity() {
		return this.__entity;
	}

	set entity(new_value) {
		const Reference = require('./Reference');
		this.__entity = new Reference(new_value);
	}

	// Role type of actors assigned roles in this Contract.
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

module.exports = ContractActor;
