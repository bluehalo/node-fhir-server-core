const Element = require('./Element');
const Attachment = require('./Attachment');
const Reference = require('./Reference');

class RelatedArtifact extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'RelatedArtifact';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RelatedArtifact';
	}

	// The type of relationship to the related artifact.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['documentation', 'justification', 'citation', 'predecessor', 'successor', 'derived-from', 'depends-on', 'composed-of'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
	get display () {
		return this._display;
	}

	set display ( new_value ) {
		this._display = new_value;
	}

	// A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.
	get citation () {
		return this._citation;
	}

	set citation ( new_value ) {
		this._citation = new_value;
	}

	// A url for the artifact that can be followed to access the actual content.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// The document being referenced, represented as an attachment. This is exclusive with the resource element.
	get document () {
		return this._document;
	}

	set document ( new_value ) {
		this._document = new Attachment(new_value);
	}

	// The related resource, such as a library, value set, profile, or other knowledge resource.
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			display: this.display,
			citation: this.citation,
			url: this.url,
			document: this.document && this.document.toJSON(),
			resource: this.resource && this.resource.toJSON()
		});
	}

}

module.exports = RelatedArtifact;
