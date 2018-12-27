const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class SubscriptionChannel extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SubscriptionChannel';
		Object.assign(this, opt);
	}

	// This is a SubscriptionChannel resource
	static get __resourceType() {
		return 'SubscriptionChannel';
	}

	// The type of channel to send notifications on.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The uri that describes the actual end-point to send messages to.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field endpoint`);
		}
		this.__endpoint = new_value;
	}

	// The mime type to send the payload in - either application/fhir+xml, or application/fhir+json. If the payload is not present, then there is no payload in the notification, just a notification.
	get payload() {
		return this.__payload;
	}

	set payload(new_value) {
		this.__payload = new_value;
	}

	// Additional headers / information to send as part of the notification.
	get header() {
		return this.__header;
	}

	set header(new_value) {
		this.__header = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			endpoint: this.__endpoint,
			payload: this.__payload,
			header: this.__header,
		});
	}
}

module.exports = SubscriptionChannel;
