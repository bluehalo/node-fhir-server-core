const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class CapabilityStatement_Operation extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Operation';
	}

	// The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Where the formal definition can be found.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			definition: this._definition && this._definition.toJSON()
		});
	}

}

module.exports = CapabilityStatement_Operation;
