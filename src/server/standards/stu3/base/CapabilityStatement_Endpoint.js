const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class CapabilityStatement_Endpoint extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Endpoint';
	}

	// A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
	get protocol () {
		return this._protocol;
	}

	set protocol ( new_value ) {
		this._protocol = new Coding(new_value);
	}

	// The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			protocol: this._protocol,
			address: this._address
		});
	}

}

module.exports = CapabilityStatement_Endpoint;
