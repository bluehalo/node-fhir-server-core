const BackboneElement = require('./BackboneElement');

class AuditEvent_Detail extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'AuditEvent_Detail';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AuditEvent_Detail';
	}

	// The type of extra detail provided in the value.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = new_value;
	}

	// The details, base64 encoded. Used to carry bulk information.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this.type,
			value: this.value
		});
	}

}

module.exports = AuditEvent_Detail;
