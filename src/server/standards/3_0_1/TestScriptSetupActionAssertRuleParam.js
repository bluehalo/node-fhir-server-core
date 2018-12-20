const BackboneElement = require('./BackboneElement');

class TestScriptSetupActionAssertRuleParam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionAssertRuleParam';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionAssertRuleParam resource
	static get __resourceType() {
		return 'TestScriptSetupActionAssertRuleParam';
	}

	// Descriptive name for this parameter that matches the external assert rule parameter name.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The value for the parameter that will be passed on to the external rule template.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			value: this.__value,
		});
	}
}

module.exports = TestScriptSetupActionAssertRuleParam;
