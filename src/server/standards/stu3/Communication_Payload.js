const BackboneElement = require('./BackboneElement');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class Communication_Payload extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Communication_Payload';
	}

	// A communicated content (or for multi-part communications, one portion of the communication).
	get contentString () {
		return this._contentString;
	}

	set contentString ( new_value ) {
		this._contentString = new_value;
	}

	// A communicated content (or for multi-part communications, one portion of the communication).
	get contentAttachment () {
		return this._contentAttachment;
	}

	set contentAttachment ( new_value ) {
		this._contentAttachment = new Attachment(new_value);
	}

	// A communicated content (or for multi-part communications, one portion of the communication).
	get contentReference () {
		return this._contentReference;
	}

	set contentReference ( new_value ) {
		this._contentReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			contentString: this._contentString,
			contentAttachment: this._contentAttachment,
			contentReference: this._contentReference
		});
	}

}

module.exports = Communication_Payload;
