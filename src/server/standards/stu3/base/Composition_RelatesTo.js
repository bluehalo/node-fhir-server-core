const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Reference = require('./Reference');

class Composition_RelatesTo extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Composition_RelatesTo';
	}

	// The type of relationship that this composition has with anther composition or document.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// The target composition/document of this relationship.
	get targetIdentifier () {
		return this._targetIdentifier;
	}

	set targetIdentifier ( new_value ) {
		this._targetIdentifier = new Identifier(new_value);
	}

	// The target composition/document of this relationship.
	get targetReference () {
		return this._targetReference;
	}

	set targetReference ( new_value ) {
		this._targetReference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			targetIdentifier: this._targetIdentifier,
			targetReference: this._targetReference
		});
	}

}

module.exports = Composition_RelatesTo;
