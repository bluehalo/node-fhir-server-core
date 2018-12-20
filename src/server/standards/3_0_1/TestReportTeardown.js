const BackboneElement = require('./BackboneElement');

class TestReportTeardown extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportTeardown';
		Object.assign(this, opt);
	}

	// This is a TestReportTeardown resource
	static get __resourceType() {
		return 'TestReportTeardown';
	}

	// The teardown action will only contain an operation.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const TestReportTeardownAction = require('./TestReportTeardownAction');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new TestReportTeardownAction(val))
			: [new TestReportTeardownAction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = TestReportTeardown;
