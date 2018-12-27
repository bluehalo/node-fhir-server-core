const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class ConformanceMessaging extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceMessaging';
		Object.assign(this, opt);
	}

	// This is a ConformanceMessaging resource
	static get __resourceType() {
		return 'ConformanceMessaging';
	}

	// An endpoint (network accessible address) to which messages and/or replies are to be sent.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const ConformanceMessagingEndpoint = require('./ConformanceMessagingEndpoint');
		this.__endpoint = Array.isArray(new_value)
			? new_value.map(val => new ConformanceMessagingEndpoint(val))
			: [new ConformanceMessagingEndpoint(new_value)];
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

	// Documentation about the system\'s messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// A description of the solution\'s support for an event at this end-point.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const ConformanceMessagingEvent = require('./ConformanceMessagingEvent');
		this.__event = Array.isArray(new_value)
			? new_value.map(val => new ConformanceMessagingEvent(val))
			: [new ConformanceMessagingEvent(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
			reliableCache: this.__reliableCache,
			documentation: this.__documentation,
			event: this.__event && this.__event.map(v => v.toJSON()),
		});
	}
}

module.exports = ConformanceMessaging;
