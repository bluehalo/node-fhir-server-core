const BackboneElement = require('./BackboneElement');

class TestScriptTestAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptTestAction';
		Object.assign(this, opt);
	}

	// This is a TestScriptTestAction resource
	static get __resourceType() {
		return 'TestScriptTestAction';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = TestScriptTestAction;
