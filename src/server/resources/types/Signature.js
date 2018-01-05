const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));
const Coding = require(path.resolve('./src/server/resources/types/Coding'));
const Code = require(path.resolve('./src/server/resources/types/Code'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));


// Signature	Σ		Element	A digital Signature - XML DigSig, JWT, Graphical image of signature, etc.
class Signature extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}
	// type	Σ	1..*	Coding	Indication of the reason the entity signed the object(s)
	// Signature Type Codes (Preferred)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((x) => new Coding(x));
		} else {
			this._type = [new Coding(type)];
		}
	}

	get type() {
		return this._type;
	}

	// when	Σ	1..1	instant	When the signature was created
	set when(when) {
		this._when = when;
	}

	get when() {
		return this._when;
	}

	// who[x]	Σ	1..1		Who signed the signature
	// whoUri			uri
	set whoUri(whoUri) {
		this._whoUri = whoUri;
	}

	get whoUri() {
		return this._whoUri;
	}

	// whoReference			Reference(Practitioner | RelatedPerson | Patient | Device | Organization)
	set whoReference(whoReference) {
		this._whoReference = new Reference(whoReference);
	}

	get whoReference() {
		return this._whoReference;
	}

	// contentType	Σ	1..1	code	The technical format of the signature
	// MimeType  (Required)
	set contentType(contentType) {
		this._contentType = new Code(contentType);
	}

	get contentType() {
		return this._contentType;
	}

	// blob	Σ	1..1	base64Binary	The actual signature content (XML DigSig. JWT, picture, etc.)
	set blob(blob) {
		this._blob = blob;
	}

	get blob() {
		return this._blob;
	}

	toJSON() {
		const json = {
			type: this._type,
			when: this._when,
			whoUri: this._whoUri,
			whoReference: this._whoReference,
			contentType: this._contentType,
			blob: this._blob
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Signature;
