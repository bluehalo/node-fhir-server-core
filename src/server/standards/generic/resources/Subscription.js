const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactPoint = require('../types/ContactPoint');
const Coding = require('../types/Coding');

class Channel {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	rest-hook | websocket | email | sms | message
	// SubscriptionChannelType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// endpoint	Σ	0..1	uri	Where the channel points to
	set endpoint(endpoint) {
		this._endpoint = endpoint;
	}

	get endpoint() {
		return this._endpoint;
	}

	// payload	Σ	0..1	string	Mimetype to send, or omit for no payload
	set payload(payload) {
		this._payload = payload;
	}

	get payload() {
		return this._payload;
	}

	// header	Σ	0..*	string	Usage depends on the channel type
	set header(header) {
		this._header = [].concat(header);
	}

	get header() {
		return this._header;
	}

	toJSON() {
		return {
			type: this._type,
			endpoint: this._endpoint,
			payload: this._payload,
			header: this._header,
		};
	}
}

class Subscription extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Subscription';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// status	?!Σ	1..1	code	requested | active | error | off
	// SubscriptionStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// contact	Σ	0..*	ContactPoint	Contact details for source (e.g. troubleshooting)
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactPoint(i));
		} else {
			this._contact = [new ContactPoint(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// end	Σ	0..1	instant	When to automatically delete the subscription
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	// reason	Σ	1..1	string	Description of why this subscription was created
	set reason(reason) {
		this._reason = reason;
	}

	get reason() {
		return this._reason;
	}

	// criteria	Σ	1..1	string	Rule for server push criteria
	set criteria(criteria) {
		this._criteria = criteria;
	}

	get criteria() {
		return this._criteria;
	}

	// error	Σ	0..1	string	Latest error note
	set error(error) {
		this._error = error;
	}

	get error() {
		return this._error;
	}

	// channel	Σ	1..1	BackboneElement	The channel on which to report matches to the criteria
	set channel(channel) {
		this._channel = new Channel(channel);
	}

	get channel() {
		return this._channel;
	}

	// tag	Σ	0..*	Coding	A tag to add to matching resources
	// SubscriptionTag (Example)
	set tag(tag) {
		if (Array.isArray(tag)) {
			this._tag = tag.map((i) => new Coding(i));
		} else {
			this._tag = [new Coding(tag)];
		}
	}

	get tag() {
		return this._tag;
	}

	toJSON() {
		const json = {
			status: this._status,
			contact: this._contact,
			end: this._end,
			reason: this._reason,
			criteria: this._criteria,
			error: this._error,
			channel: this._channel,
			tag: this._tag,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Subscription = Subscription;
module.exports.Channel = Channel;
