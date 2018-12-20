const BackboneElement = require('./BackboneElement');

class ContractFriendly extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractFriendly';
		Object.assign(this, opt);
	}

	// This is a ContractFriendly resource
	static get __resourceType() {
		return 'ContractFriendly';
	}

	// Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
	get contentAttachment() {
		return this.__contentAttachment;
	}

	set contentAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__contentAttachment = new Attachment(new_value);
	}

	// Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
	get contentReference() {
		return this.__contentReference;
	}

	set contentReference(new_value) {
		const Reference = require('./Reference');
		this.__contentReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			contentAttachment: this.__contentAttachment && this.__contentAttachment.toJSON(),
			contentReference: this.__contentReference && this.__contentReference.toJSON(),
		});
	}
}

module.exports = ContractFriendly;
