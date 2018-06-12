const Resource = require('./Resource');
const Reference = require('./Reference');

class Binary extends Resource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Binary';
	}

	// This is a Binary resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Binary'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// MimeType of the binary content represented as a standard MimeType (BCP 13).
	get contentType () {
		return this._contentType;
	}

	set contentType ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field contentType`);
		}
		this._contentType = new_value;
	}

	// Treat this binary as if it was this other resource for access control purposes.
	get securityContext () {
		return this._securityContext;
	}

	set securityContext ( new_value ) {
		this._securityContext = new Reference(new_value);
	}

	// The actual content, base64 encoded.
	get content () {
		return this._content;
	}

	set content ( new_value ) {
		this._content = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			contentType: this._contentType,
			securityContext: this._securityContext,
			content: this._content
		});
	}

}

module.exports = Binary;
