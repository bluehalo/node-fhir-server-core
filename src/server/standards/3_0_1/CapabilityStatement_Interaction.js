const BackboneElement = require('./BackboneElement');

class CapabilityStatement_Interaction extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement_Interaction';
	}

	// Coded identifier of the operation, supported by the system resource.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['read', 'vread', 'update', 'patch', 'delete', 'history-instance', 'history-type', 'create', 'search-type'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field code`);
		}
		this._code = new_value;
	}

	// Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
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

module.exports = CapabilityStatement_Interaction;
