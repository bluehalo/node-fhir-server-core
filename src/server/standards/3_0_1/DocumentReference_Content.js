const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Coding = require('./Coding');

class DocumentReference_Content extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentReference_Content';
	}

	// The document or URL of the document along with critical metadata to prove content has integrity.
	get attachment () {
		return this._attachment;
	}

	set attachment ( new_value ) {
		this._attachment = new Attachment(new_value);
	}

	// An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
	get format () {
		return this._format;
	}

	set format ( new_value ) {
		this._format = new Coding(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			attachment: this._attachment && this._attachment.toJSON(),
			format: this._format && this._format.toJSON()
		});
	}

}

module.exports = DocumentReference_Content;
