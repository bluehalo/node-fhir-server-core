const BackboneElement = require('./BackboneElement');

class TestReportSetupAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportSetupAction';
		Object.assign(this, opt);
	}

	// This is a TestReportSetupAction resource
	static get __resourceType() {
		return 'TestReportSetupAction';
	}

	// The operation performed.
	get operation() {
		return this.__operation;
	}

	set operation(new_value) {
		const TestReportSetupActionOperation = require('./TestReportSetupActionOperation');
		this.__operation = new TestReportSetupActionOperation(new_value);
	}

	// The results of the assertion performed on the previous operations.
	get assert() {
		return this.__assert;
	}

	set assert(new_value) {
		const TestReportSetupActionAssert = require('./TestReportSetupActionAssert');
		this.__assert = new TestReportSetupActionAssert(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			operation: this.__operation && this.__operation.toJSON(),
			assert: this.__assert && this.__assert.toJSON(),
		});
	}
}

module.exports = TestReportSetupAction;
