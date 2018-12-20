const BackboneElement = require('./BackboneElement');

class CompositionRelatesTo extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CompositionRelatesTo';
		Object.assign(this, opt);
	}

	// This is a CompositionRelatesTo resource
	static get __resourceType() {
		return 'CompositionRelatesTo';
	}

	// The type of relationship that this composition has with anther composition or document.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// The target composition/document of this relationship.
	get targetIdentifier() {
		return this.__targetIdentifier;
	}

	set targetIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__targetIdentifier = new Identifier(new_value);
	}

	// The target composition/document of this relationship.
	get targetReference() {
		return this.__targetReference;
	}

	set targetReference(new_value) {
		const Reference = require('./Reference');
		this.__targetReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			targetIdentifier: this.__targetIdentifier && this.__targetIdentifier.toJSON(),
			targetReference: this.__targetReference && this.__targetReference.toJSON(),
		});
	}
}

module.exports = CompositionRelatesTo;
