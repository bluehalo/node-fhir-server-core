const BackboneElement = require('./BackboneElement');

class AuditEvent_Network extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'AuditEvent_Network';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AuditEvent_Network';
	}

	// An identifier for the network access point of the user device for the audit event.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._address = new_value;
	}

	// An identifier for the type of network access point that originated the audit event.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['1', '2', '3', '4', '5'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			address: this.address,
			type: this.type
		});
	}

}

module.exports = AuditEvent_Network;
