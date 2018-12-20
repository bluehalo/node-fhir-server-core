const Element = require('./Element');
const InstantScalar = require('./scalars/Instant.scalar');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');

class Signature extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Signature';
		Object.assign(this, opt);
	}

	// This is a Signature resource
	static get __resourceType() {
		return 'Signature';
	}

	// An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// When the digital signature was signed.
	get when() {
		return this.__when;
	}

	set when(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field when`);
		}
		this.__when = new_value;
	}

	// A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
	get whoUri() {
		return this.__whoUri;
	}

	set whoUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field whoUri`);
		}
		this.__whoUri = new_value;
	}

	// A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
	get whoReference() {
		return this.__whoReference;
	}

	set whoReference(new_value) {
		const Reference = require('./Reference');
		this.__whoReference = new Reference(new_value);
	}

	// A reference to an application-usable description of the identity that is represented by the signature.
	get onBehalfOfUri() {
		return this.__onBehalfOfUri;
	}

	set onBehalfOfUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field onBehalfOfUri`);
		}
		this.__onBehalfOfUri = new_value;
	}

	// A reference to an application-usable description of the identity that is represented by the signature.
	get onBehalfOfReference() {
		return this.__onBehalfOfReference;
	}

	set onBehalfOfReference(new_value) {
		const Reference = require('./Reference');
		this.__onBehalfOfReference = new Reference(new_value);
	}

	// A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.
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

	// The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.
	get blob() {
		return this.__blob;
	}

	set blob(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field blob`);
		}
		this.__blob = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.map(v => v.toJSON()),
			when: this.__when,
			whoUri: this.__whoUri,
			whoReference: this.__whoReference && this.__whoReference.toJSON(),
			onBehalfOfUri: this.__onBehalfOfUri,
			onBehalfOfReference: this.__onBehalfOfReference && this.__onBehalfOfReference.toJSON(),
			contentType: this.__contentType,
			blob: this.__blob,
		});
	}
}

module.exports = Signature;
