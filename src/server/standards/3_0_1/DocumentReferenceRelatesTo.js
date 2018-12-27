const BackboneElement = require('./BackboneElement');

class DocumentReferenceRelatesTo extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentReferenceRelatesTo';
		Object.assign(this, opt);
	}

	// This is a DocumentReferenceRelatesTo resource
	static get __resourceType() {
		return 'DocumentReferenceRelatesTo';
	}

	// The type of relationship that this document has with anther document.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// The target document of this relationship.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			target: this.__target && this.__target.toJSON(),
		});
	}
}

module.exports = DocumentReferenceRelatesTo;
