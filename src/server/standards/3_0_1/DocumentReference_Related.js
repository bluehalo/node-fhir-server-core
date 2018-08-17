const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Reference = require('./Reference');

class DocumentReference_Related extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentReference_Related';
	}

	// Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
	get ref () {
		return this._ref;
	}

	set ref ( new_value ) {
		this._ref = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier && this._identifier.toJSON(),
			ref: this._ref && this._ref.toJSON()
		});
	}

}

module.exports = DocumentReference_Related;
