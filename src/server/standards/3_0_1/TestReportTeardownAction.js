const BackboneElement = require('./BackboneElement');

class TestReportTeardownAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestReportTeardownAction';
		Object.assign(this, opt);
	}

	// This is a TestReportTeardownAction resource
	static get __resourceType() {
		return 'TestReportTeardownAction';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = TestReportTeardownAction;
