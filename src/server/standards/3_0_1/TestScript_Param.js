const BackboneElement = require('./BackboneElement');

class TestScript_Param extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Param';
	}

	// Descriptive name for this parameter that matches the external assert rule parameter name.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The explicit or dynamic value for the parameter that will be passed on to the external rule template.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			value: this._value
		});
	}

}

module.exports = TestScript_Param;
