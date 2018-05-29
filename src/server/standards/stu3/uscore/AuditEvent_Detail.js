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
		this._type = new_value;
	}

	// The details, base64 encoded. Used to carry bulk information.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			value: this._value
		});
	}

}

module.exports = AuditEvent_Detail;
