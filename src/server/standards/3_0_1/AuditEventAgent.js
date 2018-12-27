const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class AuditEventAgent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEventAgent';
		Object.assign(this, opt);
	}

	// This is a AuditEventAgent resource
	static get __resourceType() {
		return 'AuditEventAgent';
	}

	// The security role that the user was acting under, that come from local codes defined by the access control security system (e.g. RBAC, ABAC) used in the local context.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Direct reference to a resource that identifies the agent.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		const Reference = require('./Reference');
		this.__reference = new Reference(new_value);
	}

	// Unique identifier for the user actively participating in the event.
	get userId() {
		return this.__userId;
	}

	set userId(new_value) {
		const Identifier = require('./Identifier');
		this.__userId = new Identifier(new_value);
	}

	// Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
	get altId() {
		return this.__altId;
	}

	set altId(new_value) {
		this.__altId = new_value;
	}

	// Human-meaningful name for the agent.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Indicator that the user is or is not the requestor, or initiator, for the event being audited.
	get requestor() {
		return this.__requestor;
	}

	set requestor(new_value) {
		this.__requestor = new_value;
	}

	// Where the event occurred.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.
	get policy() {
		return this.__policy;
	}

	set policy(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field policy`);
		}
		this.__policy = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Type of media involved. Used when the event is about exporting/importing onto media.
	get media() {
		return this.__media;
	}

	set media(new_value) {
		const Coding = require('./Coding');
		this.__media = new Coding(new_value);
	}

	// Logical network location for application activity, if the activity has a network location.
	get network() {
		return this.__network;
	}

	set network(new_value) {
		const AuditEventAgentNetwork = require('./AuditEventAgentNetwork');
		this.__network = new AuditEventAgentNetwork(new_value);
	}

	// The reason (purpose of use), specific to this agent, that was used during the event being recorded.
	get purposeOfUse() {
		return this.__purposeOfUse;
	}

	set purposeOfUse(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__purposeOfUse = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			role: this.__role && this.__role.map(v => v.toJSON()),
			reference: this.__reference && this.__reference.toJSON(),
			userId: this.__userId && this.__userId.toJSON(),
			altId: this.__altId,
			name: this.__name,
			requestor: this.__requestor,
			location: this.__location && this.__location.toJSON(),
			policy: this.__policy,
			media: this.__media && this.__media.toJSON(),
			network: this.__network && this.__network.toJSON(),
			purposeOfUse: this.__purposeOfUse && this.__purposeOfUse.map(v => v.toJSON()),
		});
	}
}

module.exports = AuditEventAgent;
