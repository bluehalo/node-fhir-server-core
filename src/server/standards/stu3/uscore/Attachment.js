const Element = require('./Element');

class Attachment extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Attachment';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Attachment';
	}

	// Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
	get contentType () {
		return this._contentType;
	}

	set contentType ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field contentType`);
		}
		this._contentType = new_value;
	}

	// The human language of the content. The value can be any valid value according to BCP 47.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this._language = new_value;
	}

	// The actual data of the attachment - a sequence of bytes. In XML, represented using base64.
	get data () {
		return this._data;
	}

	set data ( new_value ) {
		this._data = new_value;
	}

	// An alternative location where the data can be accessed.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// The number of bytes of data that make up this attachment (before base64 encoding, if that is done).
	get size () {
		return this._size;
	}

	set size ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field size`);
		}
		this._size = new_value;
	}

	// The calculated hash of the data using SHA-1. Represented using base64.
	get hash () {
		return this._hash;
	}

	set hash ( new_value ) {
		this._hash = new_value;
	}

	// A label or set of text to display in place of the data.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The date that the attachment was first created.
	get creation () {
		return this._creation;
	}

	set creation ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field creation`);
		}
		this._creation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			contentType: this.contentType,
			language: this.language,
			data: this.data,
			url: this.url,
			size: this.size,
			hash: this.hash,
			title: this.title,
			creation: this.creation
		});
	}

}

module.exports = Attachment;
