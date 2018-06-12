const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class Contract_Legal extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Legal';
	}

	// Contract legal text in human renderable form.
	get contentAttachment () {
		return this._contentAttachment;
	}

	set contentAttachment ( new_value ) {
		this._contentAttachment = new Attachment(new_value);
	}

	// Contract legal text in human renderable form.
	get contentReference () {
		return this._contentReference;
	}

	set contentReference ( new_value ) {
		this._contentReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			contentAttachment: this._contentAttachment,
			contentReference: this._contentReference
		});
	}

}

module.exports = Contract_Legal;
