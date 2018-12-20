const BackboneElement = require('./BackboneElement');

class ContractLegal extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractLegal';
		Object.assign(this, opt);
	}

	// This is a ContractLegal resource
	static get __resourceType() {
		return 'ContractLegal';
	}

	// Contract legal text in human renderable form.
	get contentAttachment() {
		return this.__contentAttachment;
	}

	set contentAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__contentAttachment = new Attachment(new_value);
	}

	// Contract legal text in human renderable form.
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

module.exports = ContractLegal;
