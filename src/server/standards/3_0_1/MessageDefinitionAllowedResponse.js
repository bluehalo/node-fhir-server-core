const BackboneElement = require('./BackboneElement');

class MessageDefinitionAllowedResponse extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageDefinitionAllowedResponse';
		Object.assign(this, opt);
	}

	// This is a MessageDefinitionAllowedResponse resource
	static get __resourceType() {
		return 'MessageDefinitionAllowedResponse';
	}

	// A reference to the message definition that must be adhered to by this supported response.
	get message() {
		return this.__message;
	}

	set message(new_value) {
		const Reference = require('./Reference');
		this.__message = new Reference(new_value);
	}

	// Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
	get situation() {
		return this.__situation;
	}

	set situation(new_value) {
		this.__situation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			message: this.__message && this.__message.toJSON(),
			situation: this.__situation,
		});
	}
}

module.exports = MessageDefinitionAllowedResponse;
