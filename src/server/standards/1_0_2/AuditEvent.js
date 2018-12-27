const DomainResource = require('./DomainResource');

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

	// Identifies the name, action type, time, and disposition of the audited event.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const AuditEventEvent = require('./AuditEventEvent');
		this.__event = new AuditEventEvent(new_value);
	}

	// A person, a hardware device or software process.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const AuditEventParticipant = require('./AuditEventParticipant');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new AuditEventParticipant(val))
			: [new AuditEventParticipant(new_value)];
	}

	// Application systems and processes.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const AuditEventSource = require('./AuditEventSource');
		this.__source = new AuditEventSource(new_value);
	}

	// Specific instances of data or objects that have been accessed.
	get object() {
		return this.__object;
	}

	set object(new_value) {
		const AuditEventObject = require('./AuditEventObject');
		this.__object = Array.isArray(new_value)
			? new_value.map(val => new AuditEventObject(val))
			: [new AuditEventObject(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			event: this.__event && this.__event.toJSON(),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			source: this.__source && this.__source.toJSON(),
			object: this.__object && this.__object.map(v => v.toJSON()),
		});
	}
}

module.exports = AuditEvent;
