const BackboneElement = require('./BackboneElement');

class CapabilityStatementMessagingSupportedMessage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementMessagingSupportedMessage';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementMessagingSupportedMessage resource
	static get __resourceType() {
		return 'CapabilityStatementMessagingSupportedMessage';
	}

	// The mode of this event declaration - whether application is sender or receiver.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			mode: this.__mode,
			definition: this.__definition && this.__definition.toJSON(),
		});
	}
}

module.exports = CapabilityStatementMessagingSupportedMessage;
