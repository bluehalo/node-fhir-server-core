const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class DocumentManifest_Content extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentManifest_Content';
	}

	// The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
	get pAttachment () {
		return this._pAttachment;
	}

	set pAttachment ( new_value ) {
		this._pAttachment = new Attachment(new_value);
	}

	// The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
	get pReference () {
		return this._pReference;
	}

	set pReference ( new_value ) {
		this._pReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			pAttachment: this._pAttachment,
			pReference: this._pReference
		});
	}

}

module.exports = DocumentManifest_Content;
