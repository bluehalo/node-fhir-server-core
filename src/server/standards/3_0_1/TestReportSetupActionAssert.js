const BackboneElement = require('./BackboneElement');

class TestReportSetupActionAssert extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportSetupActionAssert';
		Object.assign(this, opt);
	}

	// This is a TestReportSetupActionAssert resource
	static get __resourceType() {
		return 'TestReportSetupActionAssert';
	}

	// The result of this assertion.
	get result() {
		return this.__result;
	}

	set result(new_value) {
		this.__result = new_value;
	}

	// An explanatory message associated with the result.
	get message() {
		return this.__message;
	}

	set message(new_value) {
		this.__message = new_value;
	}

	// A link to further details on the result.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		this.__detail = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			result: this.__result,
			message: this.__message,
			detail: this.__detail,
		});
	}
}

module.exports = TestReportSetupActionAssert;
