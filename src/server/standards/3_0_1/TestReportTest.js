const BackboneElement = require('./BackboneElement');

class TestReportTest extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportTest';
		Object.assign(this, opt);
	}

	// This is a TestReportTest resource
	static get __resourceType() {
		return 'TestReportTest';
	}

	// The name of this test used for tracking/logging purposes by test engines.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short description of the test used by test engines for tracking and reporting purposes.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Action would contain either an operation or an assertion.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const TestReportTestAction = require('./TestReportTestAction');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new TestReportTestAction(val))
			: [new TestReportTestAction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			description: this.__description,
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = TestReportTest;
