const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class MessageDefinition_AllowedResponse extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MessageDefinition_AllowedResponse';
	}

	// A reference to the message definition that must be adhered to by this supported response.
	get message () {
		return this._message;
	}

	set message ( new_value ) {
		this._message = new Reference(new_value);
	}

	// Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
	get situation () {
		return this._situation;
	}

	set situation ( new_value ) {
		this._situation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			message: this._message && this._message.toJSON(),
			situation: this._situation
		});
	}

}

module.exports = MessageDefinition_AllowedResponse;
