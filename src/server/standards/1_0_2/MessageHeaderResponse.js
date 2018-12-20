const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class MessageHeaderResponse extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageHeaderResponse';
		Object.assign(this, opt);
	}

	// This is a MessageHeaderResponse resource
	static get __resourceType() {
		return 'MessageHeaderResponse';
	}

	// The id of the message that this message is a response to.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field identifier`);
		}
		this.__identifier = new_value;
	}

	// Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// Full details of any issues found in the message.
	get details() {
		return this.__details;
	}

	set details(new_value) {
		const Reference = require('./Reference');
		this.__details = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier,
			code: this.__code,
			details: this.__details && this.__details.toJSON(),
		});
	}
}

module.exports = MessageHeaderResponse;
