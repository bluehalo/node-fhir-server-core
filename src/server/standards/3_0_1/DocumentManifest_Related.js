const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Reference = require('./Reference');

class DocumentManifest_Related extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentManifest_Related';
	}

	// Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Related Resource to this DocumentManifest. For example, Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.
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

module.exports = DocumentManifest_Related;
