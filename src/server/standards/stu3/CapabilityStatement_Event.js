const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');
const Reference = require('./Reference');

class CapabilityStatement_Event extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Event';
	}

	// A coded identifier of a supported messaging event.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new Coding(new_value);
	}

	// The impact of the content of the message.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Consequence', 'Currency', 'Notification'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field category`);
		}
		this._category = new_value;
	}

	// The mode of this event declaration - whether an application is a sender or receiver.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['sender', 'receiver'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// A resource associated with the event.  This is the resource that defines the event.
	get focus () {
		return this._focus;
	}

	set focus ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field focus`);
		}
		this._focus = new_value;
	}

	// Information about the request for this event.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = new Reference(new_value);
	}

	// Information about the response for this event.
	get response () {
		return this._response;
	}

	set response ( new_value ) {
		this._response = new Reference(new_value);
	}

	// Guidance on how this event is handled, such as internal system trigger points, business rules, etc.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			category: this._category,
			mode: this._mode,
			focus: this._focus,
			request: this._request,
			response: this._response,
			documentation: this._documentation
		});
	}

}

module.exports = CapabilityStatement_Event;
