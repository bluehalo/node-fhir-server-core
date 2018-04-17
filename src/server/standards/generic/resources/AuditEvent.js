const DomainResource = require('../types/DomainResource');
const Coding = require('../types/Coding');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Identifier = require('../types/Identifier');

class Network {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// address		0..1	string	Identifier for the network access point of the user device
	set address(address) {
		this._address = address;
	}

	get address() {
		return this._address;
	}

	// type		0..1	code	The type of network access point
	// AuditEventAgentNetworkType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	toJSON() {
		return {
			address: this._address,
			type: this._type,
		};
	}
}

class Detail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	string	Name of the property
	set type(type) {
		this._type = type;
	}

	get type() {
		return this._type;
	}

	// value		1..1	base64Binary	Property value
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			type: this._type,
			value: this._value,
		};
	}
}

class Entity {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..1	Identifier	Specific instance of object
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// reference	Σ	0..1	Reference(Any)	Specific instance of resource
	set reference(reference) {
		this._reference = new Reference(reference);
	}

	get reference() {
		return this._reference;
	}

	// type		0..1	Coding	Type of entity involved
	// AuditEventEntityType (Extensible)
	set type(type) {
		this._type = new Coding(type);
	}

	get type() {
		return this._type;
	}

	// role		0..1	Coding	What role the entity played
	// AuditEventEntityRole (Extensible)
	set role(role) {
		this._role = new Coding(role);
	}

	get role() {
		return this._role;
	}

	// lifecycle		0..1	Coding	Life-cycle stage for the entity
	// ObjectLifecycleEvents (Extensible)
	set lifecycle(lifecycle) {
		this._lifecycle = new Coding(lifecycle);
	}

	get lifecycle() {
		return this._lifecycle;
	}

	// securityLabel		0..*	Coding	Security labels on the entity
	// All Security Labels (Extensible)
	set securityLabel(securityLabel) {
		if (Array.isArray(securityLabel)) {
			this._securityLabel = securityLabel.map((i) => new Coding(i));
		} else {
			this._securityLabel = [new Coding(securityLabel)];
		}
	}

	get securityLabel() {
		return this._securityLabel;
	}

	// name	ΣI	0..1	string	Descriptor for entity
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	Descriptive text
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// query	ΣI	0..1	base64Binary	Query parameters
	set query(query) {
		this._query = query;
	}

	get query() {
		return this._query;
	}

	// detail		0..*	BackboneElement	Additional Information about the entity
	set detail(detail) {
		if (Array.isArray(detail)) {
			this._detail = detail.map((i) => new Detail(i));
		} else {
			this._detail = [new Detail(detail)];
		}
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			reference: this._reference,
			type: this._type,
			role: this._role,
			lifecycle: this._lifecycle,
			securityLabel: this._securityLabel,
			name: this._name,
			description: this._description,
			query: this._query,
			detail: this._detail,
		};
	}
}

class Source {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// site		0..1	string	Logical source location within the enterprise
	set site(site) {
		this._site = site;
	}

	get site() {
		return this._site;
	}

	// identifier	Σ	1..1	Identifier	The identity of source detecting the event
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// type		0..*	Coding	The type of source where event originated
	// Audit Event Source Type (Extensible)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new Coding(i));
		} else {
			this._type = [new Coding(type)];
		}
	}

	get type() {
		return this._type;
	}

	toJSON() {
		return {
			site: this._site,
			identifier: this._identifier,
			type: this._type,
		};
	}
}

class Agent {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role		0..*	CodeableConcept	Agent role in the event
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

	// reference	Σ	0..1	Reference(Practitioner | Organization | Device | Patient | RelatedPerson)	Direct reference to resource
	set reference(reference) {
		this._reference = new Reference(reference);
	}

	get reference() {
		return this._reference;
	}

	// userId	Σ	0..1	Identifier	Unique identifier for the user
	set userId(userId) {
		this._userId = new Identifier(userId);
	}

	get userId() {
		return this._userId;
	}

	// altId		0..1	string	Alternative User id e.g. authentication
	set altId(altId) {
		this._altId = altId;
	}

	get altId() {
		return this._altId;
	}

	// name		0..1	string	Human-meaningful name for the agent
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// requestor		1..1	boolean	Whether user is initiator
	set requestor(requestor) {
		this._requestor = requestor;
	}

	get requestor() {
		return this._requestor;
	}

	// location		0..1	Reference(Location)	Where
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// policy		0..*	uri	Policy that authorized event
	set policy(policy) {
		this._policy = [].concat(policy);
	}

	get policy() {
		return this._policy;
	}

	// media		0..1	Coding	Type of media
	// Media Type Code (Extensible)
	set media(media) {
		this._media = new Coding(media);
	}

	get media() {
		return this._media;
	}

	// network		0..1	BackboneElement	Logical network location for application activity
	set network(network) {
		this._network = new Network(network);
	}

	get network() {
		return this._network;
	}

	// purposeOfUse		0..*	CodeableConcept	Reason given for this user
	set purposeOfUse(purposeOfUse) {
		if (Array.isArray(purposeOfUse)) {
			this._purposeOfUse = purposeOfUse.map((i) => new CodeableConcept(i));
		} else {
			this._purposeOfUse = [new CodeableConcept(purposeOfUse)];
		}
	}

	get purposeOfUse() {
		return this._purposeOfUse;
	}

	toJSON() {
		return {
			role: this._role,
			reference: this._reference,
			userId: this._userId,
			altId: this._altId,
			name: this._name,
			requestor: this._requestor,
			location: this._location,
			policy: this._policy,
			media: this._media,
			network: this._network,
			purposeOfUse: this._purposeOfUse,
		};
	}
}

class AuditEvent extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'AuditEvent';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// type	Σ	1..1	Coding	Type/identifier of event
	// Audit Event ID (Extensible)
	set type(type) {
		this._type = new Coding(type);
	}

	get type() {
		return this._type;
	}

	// subtype	Σ	0..*	Coding	More specific type/id for the event
	// Audit Event Sub-Type (Extensible)
	set subtype(subtype) {
		if (Array.isArray(subtype)) {
			this._subtype = subtype.map((i) => new Coding(i));
		} else {
			this._subtype = [new Coding(subtype)];
		}
	}

	get subtype() {
		return this._subtype;
	}

	// action	Σ	0..1	code	Type of action performed during the event
	// AuditEventAction (Required)
	set action(action) {
		this._action = new Code(action);
	}

	get action() {
		return this._action;
	}

	// recorded	Σ	1..1	instant	Time when the event occurred on source
	set recorded(recorded) {
		this._recorded = recorded;
	}

	get recorded() {
		return this._recorded;
	}

	// outcome	Σ	0..1	code	Whether the event succeeded or failed
	// AuditEventOutcome (Required)
	set outcome(outcome) {
		this._outcome = new Code(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// outcomeDesc	Σ	0..1	string	Description of the event outcome
	set outcomeDesc(outcomeDesc) {
		this._outcomeDesc = outcomeDesc;
	}

	get outcomeDesc() {
		return this._outcomeDesc;
	}

	// purposeOfEvent	Σ	0..*	CodeableConcept	The purposeOfUse of the event
	// PurposeOfUse (Extensible)
	set purposeOfEvent(purposeOfEvent) {
		if (Array.isArray(purposeOfEvent)) {
			this._purposeOfEvent = purposeOfEvent.map((i) => new CodeableConcept(i));
		} else {
			this._purposeOfEvent = [new CodeableConcept(purposeOfEvent)];
		}
	}

	get purposeOfEvent() {
		return this._purposeOfEvent;
	}

	// agent		1..*	BackboneElement	Actor involved in the event
	// PurposeOfUse (Extensible)
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

	// source		1..1	BackboneElement	Audit Event Reporter
	set source(source) {
		this._source = new Source(source);
	}

	get source() {
		return this._source;
	}

	// entity	I	0..*	BackboneElement	Data or objects used
	// + Either a name or a query (NOT both)
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

	toJSON() {
		const json = {
			type: this._type,
			subtype: this._subtype,
			action: this._action,
			recorded: this._recorded,
			outcome: this._outcome,
			outcomeDesc: this._outcomeDesc,
			purposeOfEvent: this._purposeOfEvent,
			agent: this._agent,
			source: this._source,
			entity: this._entity,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.AuditEvent = AuditEvent;
module.exports.Agent = Agent;
module.exports.Source = Source;
module.exports.Entity = Entity;
module.exports.Detail = Detail;
module.exports.Network = Network;
