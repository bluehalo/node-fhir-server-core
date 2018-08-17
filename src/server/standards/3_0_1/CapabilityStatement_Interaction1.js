const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Interaction1 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Interaction1';
	}

	// A coded identifier of the operation, supported by the system.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['transaction', 'batch', 'search-system', 'history-system'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field code`);
		}
		this._code = new_value;
	}

	// Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			documentation: this._documentation
		});
	}

}

module.exports = CapabilityStatement_Interaction1;
