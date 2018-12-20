const BackboneElement = require('./BackboneElement');

class CapabilityStatementMessagingEvent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementMessagingEvent';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementMessagingEvent resource
	static get __resourceType() {
		return 'CapabilityStatementMessagingEvent';
	}

	// A coded identifier of a supported messaging event.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = new Coding(new_value);
	}

	// The impact of the content of the message.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		this.__category = new_value;
	}

	// The mode of this event declaration - whether an application is a sender or receiver.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// A resource associated with the event.  This is the resource that defines the event.
	get focus() {
		return this.__focus;
	}

	set focus(new_value) {
		this.__focus = new_value;
	}

	// Information about the request for this event.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Information about the response for this event.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		const Reference = require('./Reference');
		this.__response = new Reference(new_value);
	}

	// Guidance on how this event is handled, such as internal system trigger points, business rules, etc.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			category: this.__category,
			mode: this.__mode,
			focus: this.__focus,
			request: this.__request && this.__request.toJSON(),
			response: this.__response && this.__response.toJSON(),
			documentation: this.__documentation,
		});
	}
}

module.exports = CapabilityStatementMessagingEvent;
