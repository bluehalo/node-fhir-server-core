const BackboneElement = require('./BackboneElement');

class TestScriptRuleParam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptRuleParam';
		Object.assign(this, opt);
	}

	// This is a TestScriptRuleParam resource
	static get __resourceType() {
		return 'TestScriptRuleParam';
	}

	// Descriptive name for this parameter that matches the external assert rule parameter name.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The explicit or dynamic value for the parameter that will be passed on to the external rule template.
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

module.exports = TestScriptRuleParam;
