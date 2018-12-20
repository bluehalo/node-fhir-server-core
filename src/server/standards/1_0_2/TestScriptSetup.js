const BackboneElement = require('./BackboneElement');

class TestScriptSetup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetup';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetup resource
	static get __resourceType() {
		return 'TestScriptSetup';
	}

	// Action would contain either an operation or an assertion.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const TestScriptSetupAction = require('./TestScriptSetupAction');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new TestScriptSetupAction(val))
			: [new TestScriptSetupAction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptSetup;
