const BackboneElement = require('./BackboneElement');
const TestReport_Action2 = require('./TestReport_Action2');

class TestReport_Teardown extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestReport_Teardown';
	}

	// The teardown action will only contain an operation.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new TestReport_Action2(val)) : [new TestReport_Action2(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			action: this._action
		});
	}

}

module.exports = TestReport_Teardown;
