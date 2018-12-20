const BackboneElement = require('./BackboneElement');

class TestReportSetup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportSetup';
		Object.assign(this, opt);
	}

	// This is a TestReportSetup resource
	static get __resourceType() {
		return 'TestReportSetup';
	}

	// Action would contain either an operation or an assertion.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const TestReportSetupAction = require('./TestReportSetupAction');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new TestReportSetupAction(val))
			: [new TestReportSetupAction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = TestReportSetup;
