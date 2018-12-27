const BackboneElement = require('./BackboneElement');

class CommunicationRequestPayload extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CommunicationRequestPayload';
		Object.assign(this, opt);
	}

	// This is a CommunicationRequestPayload resource
	static get __resourceType() {
		return 'CommunicationRequestPayload';
	}

	// The communicated content (or for multi-part communications, one portion of the communication).
	get contentString() {
		return this.__contentString;
	}

	set contentString(new_value) {
		this.__contentString = new_value;
	}

	// The communicated content (or for multi-part communications, one portion of the communication).
	get contentAttachment() {
		return this.__contentAttachment;
	}

	set contentAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__contentAttachment = new Attachment(new_value);
	}

	// The communicated content (or for multi-part communications, one portion of the communication).
	get contentReference() {
		return this.__contentReference;
	}

	set contentReference(new_value) {
		const Reference = require('./Reference');
		this.__contentReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			contentString: this.__contentString,
			contentAttachment: this.__contentAttachment && this.__contentAttachment.toJSON(),
			contentReference: this.__contentReference && this.__contentReference.toJSON(),
		});
	}
}

module.exports = CommunicationRequestPayload;
