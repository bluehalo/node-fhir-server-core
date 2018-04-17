const DomainResource = require('../types/DomainResource');
const Reference = require('../types/Reference');
const Period = require('../types/Period');
const Coding = require('../types/Coding');
const Signature = require('../types/Signature');
const CodeableConcept = require('../types/CodeableConcept');
const Code = require('../types/Code');
const Identifier = require('../types/Identifier');

class Entity {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role	Σ	1..1	code	derivation | revision | quotation | source | removal
	// ProvenanceEntityRole (Required)
	set role(role) {
		this._role = new Code(role);
	}

	get role() {
		return this._role;
	}

	// what[x]	Σ	1..1		Identity of entity
	// whatUri			uri
	set whatUri(whatUri) {
		this._whatUri = whatUri;
	}

	get whatUri() {
		return this._whatUri;
	}

	// whatReference			Reference
	set whatReference(whatReference) {
		this._whatReference = new Reference(whatReference);
	}

	get whatReference() {
		return this._whatReference;
	}

	// whatIdentifier			Identifier
	set whatIdentifier(whatIdentifier) {
		this._whatIdentifier = new Identifier(whatIdentifier);
	}

	get whatIdentifier() {
		return this._whatIdentifier;
	}

	// agent		0..*	see agent	Entity is attributed to this agent
	set agent(agent) {
		this._agent = [].concat(agent);
	}

	get agent() {
		return this._agent;
	}

	toJSON() {
		return {
			role: this._role,
			whatUri: this._whatUri,
			whatReference: this._whatReference,
			whatIdentifier: this._whatIdentifier,
			agent: this._agent,
		};
	}
}

class Agent {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role	Σ	0..*	CodeableConcept	What the agents role was
	// SecurityRoleType (Extensible)
	set role(role) {
		if (Array.isArray(role)) {
			this._role = role.map((i) => new CodeableConcept(i));
		} else {
			this._role = [new CodeableConcept(role)];
		}
	}

	get role() {
		return this._role;
	}

	// who[x]	Σ	1..1		Who participated
	// whoUri			uri
	set whoUri(whoUri) {
		this._whoUri = whoUri;
	}

	get whoUri() {
		return this._whoUri;
	}

	// whoReference			Reference
	set whoReference(whoReference) {
		this._whoReference = new Reference(whoReference);
	}

	get whoReference() {
		return this._whoReference;
	}

	// onBehalfOf[x]		0..1		Who the agent is representing
	// onBehalfOfUri			uri
	set onBehalfOfUri(onBehalfOfUri) {
		this._onBehalfOfUri = onBehalfOfUri;
	}

	get onBehalfOfUri() {
		return this._onBehalfOfUri;
	}

	// onBehalfOfReference			Reference
	set onBehalfOfReference(onBehalfOfReference) {
		this._onBehalfOfReference = new Reference(onBehalfOfReference);
	}

	get onBehalfOfReference() {
		return this._onBehalfOfReference;
	}

	// relatedAgentType		0..1	CodeableConcept	Type of relationship between agents
	// v3 Code System RoleLinkType (Example)
	set relatedAgentType(relatedAgentType) {
		this._relatedAgentType = new CodeableConcept(relatedAgentType);
	}

	get relatedAgentType() {
		return this._relatedAgentType;
	}

	toJSON() {
		return {
			role: this._role,
			whoUri: this._whoUri,
			whoReference: this._whoReference,
			onBehalfOfUri: this._onBehalfOfUri,
			onBehalfOfReference: this._onBehalfOfReference,
			relatedAgentType: this._relatedAgentType,
		};
	}
}

class Provenance extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Provenance';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// target	Σ	1..*	Reference(Any)	Target Reference(s) (usually version specific)
	set target(target) {
		if (Array.isArray(target)) {
			this._target = target.map((i) => new Reference(i));
		} else {
			this._target = [new Reference(target)];
		}
	}

	get target() {
		return this._target;
	}

	// period		0..1	Period	When the activity occurred
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// recorded	Σ	1..1	instant	When the activity was recorded / updated
	set recorded(recorded) {
		this._recorded = recorded;
	}

	get recorded() {
		return this._recorded;
	}

	// policy		0..*	uri	Policy or plan the activity was defined by
	set policy(policy) {
		this._policy = [].concat(policy);
	}

	get policy() {
		return this._policy;
	}

	// location		0..1	Reference(Location)	Where the activity occurred, if relevant
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// reason		0..*	Coding	Reason the activity is occurring
	// PurposeOfUse (Extensible)
	set reason(reason) {
		if (Array.isArray(reason)) {
			this._reason = reason.map((i) => new Coding(i));
		} else {
			this._reason = [new Coding(reason)];
		}
	}

	get reason() {
		return this._reason;
	}

	// activity		0..1	Coding	Activity that occurred
	// ProvenanceActivityType (Extensible)
	set activity(activity) {
		this._activity = new Coding(activity);
	}

	get activity() {
		return this._activity;
	}

	// agent		1..*	BackboneElement	Actor involved
	set agent(agent) {
		if (Array.isArray(agent)) {
			this._agent = agent.map((i) => new Agent(i));
		} else {
			this._agent = [new Agent(agent)];
		}
	}

	get agent() {
		return this._agent;
	}

	// entity		0..*	BackboneElement	An entity used in this activity
	set entity(entity) {
		if (Array.isArray(entity)) {
			this._entity = entity.map((i) => new Entity(i));
		} else {
			this._entity = [new Entity(entity)];
		}
	}

	get entity() {
		return this._entity;
	}

	// signature		0..*	Signature	Signature on target
	set signature(signature) {
		if (Array.isArray(signature)) {
			this._signature = signature.map((i) => new Signature(i));
		} else {
			this._signature = [new Signature(signature)];
		}
	}

	get signature() {
		return this._signature;
	}

	toJSON() {
		const json = {
			target: this._target,
			period: this._period,
			recorded: this._recorded,
			policy: this._policy,
			location: this._location,
			reason: this._reason,
			activity: this._activity,
			agent: this._agent,
			entity: this._entity,
			signature: this._signature,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Provenance = Provenance;
module.exports.Agent = Agent;
module.exports.Entity = Entity;
