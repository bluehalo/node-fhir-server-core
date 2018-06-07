const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class CapabilityStatement_SupportedMessage extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_SupportedMessage';
	}

	// The mode of this event declaration - whether application is sender or receiver.
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

	// Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			mode: this._mode,
			definition: this._definition
		});
	}

}

module.exports = CapabilityStatement_SupportedMessage;
