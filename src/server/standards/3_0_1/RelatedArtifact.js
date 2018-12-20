const Element = require('./Element');
const UriScalar = require('./scalars/Uri.scalar');

class RelatedArtifact extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RelatedArtifact';
		Object.assign(this, opt);
	}

	// This is a RelatedArtifact resource
	static get __resourceType() {
		return 'RelatedArtifact';
	}

	// The type of relationship to the related artifact.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.
	get citation() {
		return this.__citation;
	}

	set citation(new_value) {
		this.__citation = new_value;
	}

	// A url for the artifact that can be followed to access the actual content.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// The document being referenced, represented as an attachment. This is exclusive with the resource element.
	get document() {
		return this.__document;
	}

	set document(new_value) {
		const Attachment = require('./Attachment');
		this.__document = new Attachment(new_value);
	}

	// The related resource, such as a library, value set, profile, or other knowledge resource.
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const Reference = require('./Reference');
		this.__resource = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			display: this.__display,
			citation: this.__citation,
			url: this.__url,
			document: this.__document && this.__document.toJSON(),
			resource: this.__resource && this.__resource.toJSON(),
		});
	}
}

module.exports = RelatedArtifact;
