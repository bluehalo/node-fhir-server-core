const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const Reference = require('../types/Reference');

class Binary extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Binary';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// contentType	Σ	1..1	code	MimeType of the binary content
	// MimeType  (Required)
	set contentType(contentType) {
		this._contentType = new Code(contentType);
	}

	get contentType() {
		return this._contentType;
	}

	// securityContext	Σ	0..1	Reference(Any)	Access Control Management
	set securityContext(securityContext) {
		this._securityContext = new Reference(securityContext);
	}

	get securityContext() {
		return this._securityContext;
	}

	// content		1..1	base64Binary	The actual content
	set content(content) {
		this._content = content;
	}

	get content() {
		return this._content;
	}

	toJSON() {
		const json = {
			contentType: this._contentType,
			securityContext: this._securityContext,
			content: this._content,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Binary = Binary;
