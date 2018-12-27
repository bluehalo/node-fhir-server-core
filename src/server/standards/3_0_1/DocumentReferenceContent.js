const BackboneElement = require('./BackboneElement');

class DocumentReferenceContent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentReferenceContent';
		Object.assign(this, opt);
	}

	// This is a DocumentReferenceContent resource
	static get __resourceType() {
		return 'DocumentReferenceContent';
	}

	// The document or URL of the document along with critical metadata to prove content has integrity.
	get attachment() {
		return this.__attachment;
	}

	set attachment(new_value) {
		const Attachment = require('./Attachment');
		this.__attachment = new Attachment(new_value);
	}

	// An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
	get format() {
		return this.__format;
	}

	set format(new_value) {
		const Coding = require('./Coding');
		this.__format = new Coding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			attachment: this.__attachment && this.__attachment.toJSON(),
			format: this.__format && this.__format.toJSON(),
		});
	}
}

module.exports = DocumentReferenceContent;
