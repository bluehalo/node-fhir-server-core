const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');

class Subscription extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Subscription';
		Object.assign(this, opt);
	}

	// This is a Subscription resource
	static get __resourceType() {
		return 'Subscription';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Subscription = new_value;
	}

	// The status of the subscription, which marks the server state for managing the subscription.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// The time for the server to turn the subscription off.
	get end() {
		return this.__end;
	}

	set end(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field end`);
		}
		this.__end = new_value;
	}

	// A description of why this subscription is defined.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		this.__reason = new_value;
	}

	// The rules that the server should use to determine when to generate notifications for this subscription.
	get criteria() {
		return this.__criteria;
	}

	set criteria(new_value) {
		this.__criteria = new_value;
	}

	// A record of the last error that occurred when the server processed a notification.
	get error() {
		return this.__error;
	}

	set error(new_value) {
		this.__error = new_value;
	}

	// Details where to send notifications when resources are received that meet the criteria.
	get channel() {
		return this.__channel;
	}

	set channel(new_value) {
		const SubscriptionChannel = require('./SubscriptionChannel');
		this.__channel = new SubscriptionChannel(new_value);
	}

	// A tag to add to any resource that matches the criteria, after the subscription is processed.
	get tag() {
		return this.__tag;
	}

	set tag(new_value) {
		const Coding = require('./Coding');
		this.__tag = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			status: this.__status,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			end: this.__end,
			reason: this.__reason,
			criteria: this.__criteria,
			error: this.__error,
			channel: this.__channel && this.__channel.toJSON(),
			tag: this.__tag && this.__tag.map(v => v.toJSON()),
		});
	}
}

module.exports = Subscription;
