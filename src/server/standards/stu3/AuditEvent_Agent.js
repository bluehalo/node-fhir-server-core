const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Identifier = require('./Identifier');
const Coding = require('./Coding');
const AuditEvent_Network = require('./AuditEvent_Network');

class AuditEvent_Agent extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AuditEvent_Agent';
	}

	// The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		this._role = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Direct reference to a resource that identifies the agent.
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new Reference(new_value);
	}

	// Unique identifier for the user actively participating in the event.
	get userId () {
		return this._userId;
	}

	set userId ( new_value ) {
		this._userId = new Identifier(new_value);
	}

	// Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
	get altId () {
		return this._altId;
	}

	set altId ( new_value ) {
		this._altId = new_value;
	}

	// Human-meaningful name for the agent.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Indicator that the user is or is not the requestor, or initiator, for the event being audited.
	get requestor () {
		return this._requestor;
	}

	set requestor ( new_value ) {
		this._requestor = new_value;
	}

	// Where the event occurred.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.
	get policy () {
		return this._policy;
	}

	set policy ( new_value ) {
		this._policy = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Type of media involved. Used when the event is about exporting/importing onto media.
	get media () {
		return this._media;
	}

	set media ( new_value ) {
		this._media = new Coding(new_value);
	}

	// Logical network location for application activity, if the activity has a network location.
	get network () {
		return this._network;
	}

	set network ( new_value ) {
		this._network = new AuditEvent_Network(new_value);
	}

	// The reason (purpose of use), specific to this agent, that was used during the event being recorded.
	get purposeOfUse () {
		return this._purposeOfUse;
	}

	set purposeOfUse ( new_value ) {
		this._purposeOfUse = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
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
			purposeOfUse: this._purposeOfUse
		});
	}

}

module.exports = AuditEvent_Agent;
