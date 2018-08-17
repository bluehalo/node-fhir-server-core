const BackboneElement = require('./BackboneElement');
const TestScript_Action = require('./TestScript_Action');

class TestScript_Setup extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Setup';
	}

	// Action would contain either an operation or an assertion.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new TestScript_Action(val)) : [new TestScript_Action(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			action: this._action && this._action.map(v => v.toJSON())
		});
	}

}

module.exports = TestScript_Setup;
