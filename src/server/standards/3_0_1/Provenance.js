const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class Provenance extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Provenance';
		Object.assign(this, opt);
	}

	// This is a Provenance resource
	static get __resourceType() {
		return 'Provenance';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Provenance = new_value;
	}

	// The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The period during which the activity occurred.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The instant of time at which the activity was recorded.
	get recorded() {
		return this.__recorded;
	}

	set recorded(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field recorded`);
		}
		this.__recorded = new_value;
	}

	// Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
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

	// Where the activity occurred, if relevant.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// The reason that the activity was taking place.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const Coding = require('./Coding');
		this.__reason = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
	get activity() {
		return this.__activity;
	}

	set activity(new_value) {
		const Coding = require('./Coding');
		this.__activity = new Coding(new_value);
	}

	// An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
	get agent() {
		return this.__agent;
	}

	set agent(new_value) {
		const ProvenanceAgent = require('./ProvenanceAgent');
		this.__agent = Array.isArray(new_value)
			? new_value.map(val => new ProvenanceAgent(val))
			: [new ProvenanceAgent(new_value)];
	}

	// An entity used in this activity.
	get entity() {
		return this.__entity;
	}

	set entity(new_value) {
		const ProvenanceEntity = require('./ProvenanceEntity');
		this.__entity = Array.isArray(new_value)
			? new_value.map(val => new ProvenanceEntity(val))
			: [new ProvenanceEntity(new_value)];
	}

	// A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
	get signature() {
		return this.__signature;
	}

	set signature(new_value) {
		const Signature = require('./Signature');
		this.__signature = Array.isArray(new_value) ? new_value.map(val => new Signature(val)) : [new Signature(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			target: this.__target && this.__target.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			recorded: this.__recorded,
			policy: this.__policy,
			location: this.__location && this.__location.toJSON(),
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			activity: this.__activity && this.__activity.toJSON(),
			agent: this.__agent && this.__agent.map(v => v.toJSON()),
			entity: this.__entity && this.__entity.map(v => v.toJSON()),
			signature: this.__signature && this.__signature.map(v => v.toJSON()),
		});
	}
}

module.exports = Provenance;
