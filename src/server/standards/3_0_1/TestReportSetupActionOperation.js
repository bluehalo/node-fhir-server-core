const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class TestReportSetupActionOperation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportSetupActionOperation';
		Object.assign(this, opt);
	}

	// This is a TestReportSetupActionOperation resource
	static get __resourceType() {
		return 'TestReportSetupActionOperation';
	}

	// The result of this operation.
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
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field detail`);
		}
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

module.exports = TestReportSetupActionOperation;
