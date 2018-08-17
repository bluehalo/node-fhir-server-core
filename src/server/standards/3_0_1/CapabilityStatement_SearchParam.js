const BackboneElement = require('./BackboneElement');

class CapabilityStatement_SearchParam extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_SearchParam';
	}

	// The name of the search parameter used in the interface.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new_value;
	}

	// The type of value a search parameter refers to, and how the content is interpreted.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['number', 'date', 'string', 'token', 'reference', 'composite', 'quantity', 'uri'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			definition: this._definition,
			type: this._type,
			documentation: this._documentation
		});
	}

}

module.exports = CapabilityStatement_SearchParam;
