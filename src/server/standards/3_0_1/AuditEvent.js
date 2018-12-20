const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');

class AuditEvent extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEvent';
		Object.assign(this, opt);
	}

	// This is a AuditEvent resource
	static get __resourceType() {
		return 'AuditEvent';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__AuditEvent = new_value;
	}

	// Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// Identifier for the category of event.
	get subtype() {
		return this.__subtype;
	}

	set subtype(new_value) {
		const Coding = require('./Coding');
		this.__subtype = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Indicator for type of action performed during the event that generated the audit.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		this.__action = new_value;
	}

	// The time when the event occurred on the source.
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

	// Indicates whether the event succeeded or failed.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		this.__outcome = new_value;
	}

	// A free text description of the outcome of the event.
	get outcomeDesc() {
		return this.__outcomeDesc;
	}

	set outcomeDesc(new_value) {
		this.__outcomeDesc = new_value;
	}

	// The purposeOfUse (reason) that was used during the event being recorded.
	get purposeOfEvent() {
		return this.__purposeOfEvent;
	}

	set purposeOfEvent(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__purposeOfEvent = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// An actor taking an active role in the event or activity that is logged.
	get agent() {
		return this.__agent;
	}

	set agent(new_value) {
		const AuditEventAgent = require('./AuditEventAgent');
		this.__agent = Array.isArray(new_value)
			? new_value.map(val => new AuditEventAgent(val))
			: [new AuditEventAgent(new_value)];
	}

	// The system that is reporting the event.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const AuditEventSource = require('./AuditEventSource');
		this.__source = new AuditEventSource(new_value);
	}

	// Specific instances of data or objects that have been accessed.
	get entity() {
		return this.__entity;
	}

	set entity(new_value) {
		const AuditEventEntity = require('./AuditEventEntity');
		this.__entity = Array.isArray(new_value)
			? new_value.map(val => new AuditEventEntity(val))
			: [new AuditEventEntity(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			type: this.__type && this.__type.toJSON(),
			subtype: this.__subtype && this.__subtype.map(v => v.toJSON()),
			action: this.__action,
			recorded: this.__recorded,
			outcome: this.__outcome,
			outcomeDesc: this.__outcomeDesc,
			purposeOfEvent: this.__purposeOfEvent && this.__purposeOfEvent.map(v => v.toJSON()),
			agent: this.__agent && this.__agent.map(v => v.toJSON()),
			source: this.__source && this.__source.toJSON(),
			entity: this.__entity && this.__entity.map(v => v.toJSON()),
		});
	}
}

module.exports = AuditEvent;
