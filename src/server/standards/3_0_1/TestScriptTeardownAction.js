const BackboneElement = require('./BackboneElement');

class TestScriptTeardownAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptTeardownAction';
		Object.assign(this, opt);
	}

	// This is a TestScriptTeardownAction resource
	static get __resourceType() {
		return 'TestScriptTeardownAction';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = TestScriptTeardownAction;
