const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class CapabilityStatementMessaging extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementMessaging';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementMessaging resource
	static get __resourceType() {
		return 'CapabilityStatementMessaging';
	}

	// An endpoint (network accessible address) to which messages and/or replies are to be sent.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const CapabilityStatementMessagingEndpoint = require('./CapabilityStatementMessagingEndpoint');
		this.__endpoint = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementMessagingEndpoint(val))
			: [new CapabilityStatementMessagingEndpoint(new_value)];
	}

	// Length if the receiver\'s reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
	get reliableCache() {
		return this.__reliableCache;
	}

	set reliableCache(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field reliableCache`);
		}
		this.__reliableCache = new_value;
	}

	// Documentation about the system\'s messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// References to message definitions for messages this system can send or receive.
	get supportedMessage() {
		return this.__supportedMessage;
	}

	set supportedMessage(new_value) {
		const CapabilityStatementMessagingSupportedMessage = require('./CapabilityStatementMessagingSupportedMessage');
		this.__supportedMessage = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementMessagingSupportedMessage(val))
			: [new CapabilityStatementMessagingSupportedMessage(new_value)];
	}

	// A description of the solution\'s support for an event at this end-point.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const CapabilityStatementMessagingEvent = require('./CapabilityStatementMessagingEvent');
		this.__event = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementMessagingEvent(val))
			: [new CapabilityStatementMessagingEvent(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
			reliableCache: this.__reliableCache,
			documentation: this.__documentation,
			supportedMessage: this.__supportedMessage && this.__supportedMessage.map(v => v.toJSON()),
			event: this.__event && this.__event.map(v => v.toJSON()),
		});
	}
}

module.exports = CapabilityStatementMessaging;
