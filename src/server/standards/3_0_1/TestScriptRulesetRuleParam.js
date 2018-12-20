const BackboneElement = require('./BackboneElement');

class TestScriptRulesetRuleParam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptRulesetRuleParam';
		Object.assign(this, opt);
	}

	// This is a TestScriptRulesetRuleParam resource
	static get __resourceType() {
		return 'TestScriptRulesetRuleParam';
	}

	// Descriptive name for this parameter that matches the external assert ruleset rule parameter name.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The value for the parameter that will be passed on to the external ruleset rule template.
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

module.exports = TestScriptRulesetRuleParam;
