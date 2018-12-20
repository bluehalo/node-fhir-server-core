const Resource = require('./Resource');
const CodeScalar = require('./scalars/Code.scalar');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');

class Binary extends Resource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Binary';
		Object.assign(this, opt);
	}

	// This is a Binary resource
	static get __resourceType() {
		return 'Binary';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Binary = new_value;
	}

	// MimeType of the binary content represented as a standard MimeType (BCP 13).
	get contentType() {
		return this.__contentType;
	}

	set contentType(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field contentType`);
		}
		this.__contentType = new_value;
	}

	// Treat this binary as if it was this other resource for access control purposes.
	get securityContext() {
		return this.__securityContext;
	}

	set securityContext(new_value) {
		const Reference = require('./Reference');
		this.__securityContext = new Reference(new_value);
	}

	// The actual content, base64 encoded.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field content`);
		}
		this.__content = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			contentType: this.__contentType,
			securityContext: this.__securityContext && this.__securityContext.toJSON(),
			content: this.__content,
		});
	}
}

module.exports = Binary;
