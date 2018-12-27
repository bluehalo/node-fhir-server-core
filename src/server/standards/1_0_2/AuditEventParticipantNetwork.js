const BackboneElement = require('./BackboneElement');

class AuditEventParticipantNetwork extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AuditEventParticipantNetwork';
		Object.assign(this, opt);
	}

	// This is a AuditEventParticipantNetwork resource
	static get __resourceType() {
		return 'AuditEventParticipantNetwork';
	}

	// An identifier for the network access point of the user device for the audit event.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		this.__address = new_value;
	}

	// An identifier for the type of network access point that originated the audit event.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			address: this.__address,
			type: this.__type,
		});
	}
}

module.exports = AuditEventParticipantNetwork;
