const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class MessageHeaderSource extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageHeaderSource';
		Object.assign(this, opt);
	}

	// This is a MessageHeaderSource resource
	static get __resourceType() {
		return 'MessageHeaderSource';
	}

	// Human-readable name for the source system.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// May include configuration or other information useful in debugging.
	get software() {
		return this.__software;
	}

	set software(new_value) {
		this.__software = new_value;
	}

	// Can convey versions of multiple systems in situations where a message passes through multiple hands.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// An e-mail, phone, website or other contact point to use to resolve issues with message communications.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__contact = new ContactPoint(new_value);
	}

	// Identifies the routing target to send acknowledgements to.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field endpoint`);
		}
		this.__endpoint = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			software: this.__software,
			version: this.__version,
			contact: this.__contact && this.__contact.toJSON(),
			endpoint: this.__endpoint,
		});
	}
}

module.exports = MessageHeaderSource;
