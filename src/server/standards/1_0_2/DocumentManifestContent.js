const BackboneElement = require('./BackboneElement');

class DocumentManifestContent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentManifestContent';
		Object.assign(this, opt);
	}

	// This is a DocumentManifestContent resource
	static get __resourceType() {
		return 'DocumentManifestContent';
	}

	// The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
	get pAttachment() {
		return this.__pAttachment;
	}

	set pAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__pAttachment = new Attachment(new_value);
	}

	// The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
	get pReference() {
		return this.__pReference;
	}

	set pReference(new_value) {
		const Reference = require('./Reference');
		this.__pReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			pAttachment: this.__pAttachment && this.__pAttachment.toJSON(),
			pReference: this.__pReference && this.__pReference.toJSON(),
		});
	}
}

module.exports = DocumentManifestContent;
