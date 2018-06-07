const DomainResource = require('./DomainResource');
const ContactPoint = require('./ContactPoint');
const Subscription_Channel = require('./Subscription_Channel');
const Coding = require('./Coding');

class Subscription extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Subscription';
	}

	// This is a Subscription resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Subscription'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The status of the subscription, which marks the server state for managing the subscription.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['requested', 'active', 'error', 'off'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// The time for the server to turn the subscription off.
	get end () {
		return this._end;
	}

	set end ( new_value ) {
		this._end = new_value;
	}

	// A description of why this subscription is defined.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new_value;
	}

	// The rules that the server should use to determine when to generate notifications for this subscription.
	get criteria () {
		return this._criteria;
	}

	set criteria ( new_value ) {
		this._criteria = new_value;
	}

	// A record of the last error that occurred when the server processed a notification.
	get error () {
		return this._error;
	}

	set error ( new_value ) {
		this._error = new_value;
	}

	// Details where to send notifications when resources are received that meet the criteria.
	get channel () {
		return this._channel;
	}

	set channel ( new_value ) {
		this._channel = new Subscription_Channel(new_value);
	}

	// A tag to add to any resource that matches the criteria, after the subscription is processed.
	get tag () {
		return this._tag;
	}

	set tag ( new_value ) {
		this._tag = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			status: this._status,
			contact: this._contact,
			end: this._end,
			reason: this._reason,
			criteria: this._criteria,
			error: this._error,
			channel: this._channel,
			tag: this._tag
		});
	}

}

module.exports = Subscription;
