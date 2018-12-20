const Element = require('./Element');
const CodeScalar = require('./scalars/Code.scalar');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');
const UriScalar = require('./scalars/Uri.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Attachment extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Attachment';
		Object.assign(this, opt);
	}

	// This is a Attachment resource
	static get __resourceType() {
		return 'Attachment';
	}

	// Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
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

	// The human language of the content. The value can be any valid value according to BCP 47.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		this.__language = new_value;
	}

	// The actual data of the attachment - a sequence of bytes. In XML, represented using base64.
	get data() {
		return this.__data;
	}

	set data(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field data`);
		}
		this.__data = new_value;
	}

	// An alternative location where the data can be accessed.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// The number of bytes of data that make up this attachment (before base64 encoding, if that is done).
	get size() {
		return this.__size;
	}

	set size(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field size`);
		}
		this.__size = new_value;
	}

	// The calculated hash of the data using SHA-1. Represented using base64.
	get hash() {
		return this.__hash;
	}

	set hash(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field hash`);
		}
		this.__hash = new_value;
	}

	// A label or set of text to display in place of the data.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The date that the attachment was first created.
	get creation() {
		return this.__creation;
	}

	set creation(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field creation`);
		}
		this.__creation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			contentType: this.__contentType,
			language: this.__language,
			data: this.__data,
			url: this.__url,
			size: this.__size,
			hash: this.__hash,
			title: this.__title,
			creation: this.__creation,
		});
	}
}

module.exports = Attachment;
