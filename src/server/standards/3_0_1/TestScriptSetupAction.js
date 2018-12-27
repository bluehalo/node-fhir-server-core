const BackboneElement = require('./BackboneElement');

class TestScriptSetupAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupAction';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupAction resource
	static get __resourceType() {
		return 'TestScriptSetupAction';
	}

	// The operation to perform.
	get operation() {
		return this.__operation;
	}

	set operation(new_value) {
		const TestScriptSetupActionOperation = require('./TestScriptSetupActionOperation');
		this.__operation = new TestScriptSetupActionOperation(new_value);
	}

	// Evaluates the results of previous operations to determine if the server under test behaves appropriately.
	get assert() {
		return this.__assert;
	}

	set assert(new_value) {
		const TestScriptSetupActionAssert = require('./TestScriptSetupActionAssert');
		this.__assert = new TestScriptSetupActionAssert(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			operation: this.__operation && this.__operation.toJSON(),
			assert: this.__assert && this.__assert.toJSON(),
		});
	}
}

module.exports = TestScriptSetupAction;
