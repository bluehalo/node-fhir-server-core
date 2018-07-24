const BackboneElement = require('./BackboneElement');

class TestScript_Param2 extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Param2';
	}

	// Descriptive name for this parameter that matches the external assert rule parameter name.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The value for the parameter that will be passed on to the external rule template.
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

module.exports = TestScript_Param2;
