const BackboneElement = require('./BackboneElement');

class ContractRule extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractRule';
		Object.assign(this, opt);
	}

	// This is a ContractRule resource
	static get __resourceType() {
		return 'ContractRule';
	}

	// Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
	get contentAttachment() {
		return this.__contentAttachment;
	}

	set contentAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__contentAttachment = new Attachment(new_value);
	}

	// Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
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

module.exports = ContractRule;
