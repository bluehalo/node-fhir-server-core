const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class Contract_Friendly extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Friendly';
	}

	// Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
	get contentAttachment () {
		return this._contentAttachment;
	}

	set contentAttachment ( new_value ) {
		this._contentAttachment = new Attachment(new_value);
	}

	// Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
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

module.exports = Contract_Friendly;
