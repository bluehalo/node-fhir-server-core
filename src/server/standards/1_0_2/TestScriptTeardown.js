const BackboneElement = require('./BackboneElement');

class TestScriptTeardown extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptTeardown';
		Object.assign(this, opt);
	}

	// This is a TestScriptTeardown resource
	static get __resourceType() {
		return 'TestScriptTeardown';
	}

	// The teardown action will only contain an operation.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const TestScriptTeardownAction = require('./TestScriptTeardownAction');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new TestScriptTeardownAction(val))
			: [new TestScriptTeardownAction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptTeardown;
