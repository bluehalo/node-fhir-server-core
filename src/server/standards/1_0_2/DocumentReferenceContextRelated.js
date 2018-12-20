const BackboneElement = require('./BackboneElement');

class DocumentReferenceContextRelated extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentReferenceContextRelated';
		Object.assign(this, opt);
	}

	// This is a DocumentReferenceContextRelated resource
	static get __resourceType() {
		return 'DocumentReferenceContextRelated';
	}

	// Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
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

module.exports = DocumentReferenceContextRelated;
