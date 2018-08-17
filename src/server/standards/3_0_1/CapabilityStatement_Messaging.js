const BackboneElement = require('./BackboneElement');
const CapabilityStatement_Endpoint = require('./CapabilityStatement_Endpoint');
const CapabilityStatement_SupportedMessage = require('./CapabilityStatement_SupportedMessage');
const CapabilityStatement_Event = require('./CapabilityStatement_Event');

class CapabilityStatement_Messaging extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Messaging';
	}

	// An endpoint (network accessible address) to which messages and/or replies are to be sent.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Endpoint(val)) : [new CapabilityStatement_Endpoint(new_value)];
	}

	// Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
	get reliableCache () {
		return this._reliableCache;
	}

	set reliableCache ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field reliableCache`);
		}
		this._reliableCache = new_value;
	}

	// Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	// References to message definitions for messages this system can send or receive.
	get supportedMessage () {
		return this._supportedMessage;
	}

	set supportedMessage ( new_value ) {
		this._supportedMessage = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_SupportedMessage(val)) : [new CapabilityStatement_SupportedMessage(new_value)];
	}

	// A description of the solution's support for an event at this end-point.
	get event () {
		return this._event;
	}

	set event ( new_value ) {
		this._event = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Event(val)) : [new CapabilityStatement_Event(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			endpoint: this._endpoint && this._endpoint.map(v => v.toJSON()),
			reliableCache: this._reliableCache,
			documentation: this._documentation,
			supportedMessage: this._supportedMessage && this._supportedMessage.map(v => v.toJSON()),
			event: this._event && this._event.map(v => v.toJSON())
		});
	}

}

module.exports = CapabilityStatement_Messaging;
