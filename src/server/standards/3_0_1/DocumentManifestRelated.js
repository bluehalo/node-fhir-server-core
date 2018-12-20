const BackboneElement = require('./BackboneElement');

class DocumentManifestRelated extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentManifestRelated';
		Object.assign(this, opt);
	}

	// This is a DocumentManifestRelated resource
	static get __resourceType() {
		return 'DocumentManifestRelated';
	}

	// Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Related Resource to this DocumentManifest. For example, Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.
	get ref() {
		return this.__ref;
	}

	set ref(new_value) {
		const Reference = require('./Reference');
		this.__ref = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			ref: this.__ref && this.__ref.toJSON(),
		});
	}
}

module.exports = DocumentManifestRelated;
