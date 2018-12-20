const BackboneElement = require('./BackboneElement');

class TestReportTestAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportTestAction';
		Object.assign(this, opt);
	}

	// This is a TestReportTestAction resource
	static get __resourceType() {
		return 'TestReportTestAction';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = TestReportTestAction;
