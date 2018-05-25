const Element = require('./Element');
const Coding = require('./Coding');
const Reference = require('./Reference');

class Signature extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Signature';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Signature';
	}

	// An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// When the digital signature was signed.
	get when () {
		return this._when;
	}

	set when ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._when = new_value;
	}

	// A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
	get whoUri () {
		return this._whoUri;
	}

	set whoUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._whoUri = new_value;
	}

	// A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
	get whoReference () {
		return this._whoReference;
	}

	set whoReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._whoReference = new Reference(new_value);
	}

	// A reference to an application-usable description of the identity that is represented by the signature.
	get onBehalfOfUri () {
		return this._onBehalfOfUri;
	}

	set onBehalfOfUri ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onBehalfOfUri = new_value;
	}

	// A reference to an application-usable description of the identity that is represented by the signature.
	get onBehalfOfReference () {
		return this._onBehalfOfReference;
	}

	set onBehalfOfReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onBehalfOfReference = new Reference(new_value);
	}

	// A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.
	get contentType () {
		return this._contentType;
	}

	set contentType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field contentType`);
		}
		this._contentType = new_value;
	}

	// The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.
	get blob () {
		return this._blob;
	}

	set blob ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._blob = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type.map(v => v.toJSON()),
			when: this.when,
			whoUri: this.whoUri,
			whoReference: this.whoReference && this.whoReference.toJSON(),
			onBehalfOfUri: this.onBehalfOfUri,
			onBehalfOfReference: this.onBehalfOfReference && this.onBehalfOfReference.toJSON(),
			contentType: this.contentType,
			blob: this.blob
		});
	}

}

module.exports = Signature;
