const BackboneElement = require('./BackboneElement');
const InstantScalar = require('./scalars/Instant.scalar');

class AuditEventEvent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEventEvent';
		Object.assign(this, opt);
	}

	// This is a AuditEventEvent resource
	static get __resourceType() {
		return 'AuditEventEvent';
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
	get dateTime() {
		return this.__dateTime;
	}

	set dateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateTime`);
		}
		this.__dateTime = new_value;
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
		const Coding = require('./Coding');
		this.__purposeOfEvent = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			subtype: this.__subtype && this.__subtype.map(v => v.toJSON()),
			action: this.__action,
			dateTime: this.__dateTime,
			outcome: this.__outcome,
			outcomeDesc: this.__outcomeDesc,
			purposeOfEvent: this.__purposeOfEvent && this.__purposeOfEvent.map(v => v.toJSON()),
		});
	}
}

module.exports = AuditEventEvent;
