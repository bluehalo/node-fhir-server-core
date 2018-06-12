const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class MessageHeader_Response extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MessageHeader_Response';
	}

	// The MessageHeader.id of the message to which this message is a response.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field identifier`);
		}
		this._identifier = new_value;
	}

	// Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ok', 'transient-error', 'fatal-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field code`);
		}
		this._code = new_value;
	}

	// Full details of any issues found in the message.
	get details () {
		return this._details;
	}

	set details ( new_value ) {
		this._details = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			code: this._code,
			details: this._details
		});
	}

}

module.exports = MessageHeader_Response;
