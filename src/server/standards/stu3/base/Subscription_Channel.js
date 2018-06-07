const BackboneElement = require('./BackboneElement');

class Subscription_Channel extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Subscription_Channel';
	}

	// The type of channel to send notifications on.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['rest-hook', 'websocket', 'email', 'sms', 'message'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The uri that describes the actual end-point to send messages to.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = new_value;
	}

	// The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification.
	get payload () {
		return this._payload;
	}

	set payload ( new_value ) {
		this._payload = new_value;
	}

	// Additional headers / information to send as part of the notification.
	get header () {
		return this._header;
	}

	set header ( new_value ) {
		this._header = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			endpoint: this._endpoint,
			payload: this._payload,
			header: this._header
		});
	}

}

module.exports = Subscription_Channel;
