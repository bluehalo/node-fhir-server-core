const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class Contract_Rule extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Rule';
	}

	// Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
	get contentAttachment () {
		return this._contentAttachment;
	}

	set contentAttachment ( new_value ) {
		this._contentAttachment = new Attachment(new_value);
	}

	// Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
	get contentReference () {
		return this._contentReference;
	}

	set contentReference ( new_value ) {
		this._contentReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			contentAttachment: this._contentAttachment && this._contentAttachment.toJSON(),
			contentReference: this._contentReference && this._contentReference.toJSON()
		});
	}

}

module.exports = Contract_Rule;
