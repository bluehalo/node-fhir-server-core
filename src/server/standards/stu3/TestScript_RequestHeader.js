const BackboneElement = require('./BackboneElement');

class TestScript_RequestHeader extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_RequestHeader';
	}

	// The HTTP header field e.g. "Accept".
	get field () {
		return this._field;
	}

	set field ( new_value ) {
		this._field = new_value;
	}

	// The value of the header e.g. "application/fhir+xml".
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			field: this._field,
			value: this._value
		});
	}

}

module.exports = TestScript_RequestHeader;
