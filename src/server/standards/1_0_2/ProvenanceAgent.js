const BackboneElement = require('./BackboneElement');

class ProvenanceAgent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProvenanceAgent';
		Object.assign(this, opt);
	}

	// This is a ProvenanceAgent resource
	static get __resourceType() {
		return 'ProvenanceAgent';
	}

	// The function of the agent with respect to the activity.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const Coding = require('./Coding');
		this.__role = new Coding(new_value);
	}

	// The individual, device or organization that participated in the event.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// The identity of the agent as known by the authorization system.
	get userId() {
		return this.__userId;
	}

	set userId(new_value) {
		const Identifier = require('./Identifier');
		this.__userId = new Identifier(new_value);
	}

	// A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another\'s behest.
	get relatedAgent() {
		return this.__relatedAgent;
	}

	set relatedAgent(new_value) {
		const ProvenanceAgentRelatedAgent = require('./ProvenanceAgentRelatedAgent');
		this.__relatedAgent = Array.isArray(new_value)
			? new_value.map(val => new ProvenanceAgentRelatedAgent(val))
			: [new ProvenanceAgentRelatedAgent(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.toJSON(),
			actor: this.__actor && this.__actor.toJSON(),
			userId: this.__userId && this.__userId.toJSON(),
			relatedAgent: this.__relatedAgent && this.__relatedAgent.map(v => v.toJSON()),
		});
	}
}

module.exports = ProvenanceAgent;
