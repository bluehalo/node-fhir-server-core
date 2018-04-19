const Element = require('./types/Element');
const Code = require('./types/Code');
const Attachment = require('./types/Attachment');
const Reference = require('./types/Reference');

class RelatedArtifact extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
	// RelatedArtifactType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// display	Σ	0..1	string	Brief description of the related artifact
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// citation	Σ	0..1	string	Bibliographic citation for the artifact
	set citation(citation) {
		this._citation = citation;
	}

	get citation() {
		return this._citation;
	}

	// url	Σ	0..1	uri	Where the artifact can be accessed
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// document	Σ	0..1	Attachment	What document is being referenced
	set document(document) {
		this._document = new Attachment(document);
	}

	get document() {
		return this._document;
	}

	// resource	Σ	0..1	Reference(Any)	What resource is being referenced
	set resource(resource) {
		this._resource = new Reference(resource);
	}

	get resource() {
		return this._resource;
	}

	toJSON() {
		const json = {
			type: this._type,
			display: this._display,
			citation: this._citation,
			url: this._url,
			document: this._document,
			resource: this._resource,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = RelatedArtifact;
