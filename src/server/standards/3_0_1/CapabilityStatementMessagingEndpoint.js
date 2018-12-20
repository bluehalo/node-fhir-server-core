const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class CapabilityStatementMessagingEndpoint extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementMessagingEndpoint';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementMessagingEndpoint resource
	static get __resourceType() {
		return 'CapabilityStatementMessagingEndpoint';
	}

	// A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
	get protocol() {
		return this.__protocol;
	}

	set protocol(new_value) {
		const Coding = require('./Coding');
		this.__protocol = new Coding(new_value);
	}

	// The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field address`);
		}
		this.__address = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			protocol: this.__protocol && this.__protocol.toJSON(),
			address: this.__address,
		});
	}
}

module.exports = CapabilityStatementMessagingEndpoint;
