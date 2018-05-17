const BackboneElement = require('./BackboneElement');
const TestScript_Action2 = require('./TestScript_Action2');

class TestScript_Teardown extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Teardown';
	}

	// The teardown action will only contain an operation.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new TestScript_Action2(val)) : [new TestScript_Action2(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			action: this._action
		});
	}

}

module.exports = TestScript_Teardown;
