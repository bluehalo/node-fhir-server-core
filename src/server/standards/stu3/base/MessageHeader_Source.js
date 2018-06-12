const BackboneElement = require('./BackboneElement');
const ContactPoint = require('./ContactPoint');

class MessageHeader_Source extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MessageHeader_Source';
	}

	// Human-readable name for the source system.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// May include configuration or other information useful in debugging.
	get software () {
		return this._software;
	}

	set software ( new_value ) {
		this._software = new_value;
	}

	// Can convey versions of multiple systems in situations where a message passes through multiple hands.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// An e-mail, phone, website or other contact point to use to resolve issues with message communications.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = new ContactPoint(new_value);
	}

	// Identifies the routing target to send acknowledgements to.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			software: this._software,
			version: this._version,
			contact: this._contact,
			endpoint: this._endpoint
		});
	}

}

module.exports = MessageHeader_Source;
