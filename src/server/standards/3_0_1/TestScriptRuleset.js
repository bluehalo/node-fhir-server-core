const BackboneElement = require('./BackboneElement');

class TestScriptRuleset extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptRuleset';
		Object.assign(this, opt);
	}

	// This is a TestScriptRuleset resource
	static get __resourceType() {
		return 'TestScriptRuleset';
	}

	// Reference to the resource (containing the contents of the ruleset needed for assertions).
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const Reference = require('./Reference');
		this.__resource = new Reference(new_value);
	}

	// The referenced rule within the external ruleset template.
	get rule() {
		return this.__rule;
	}

	set rule(new_value) {
		const TestScriptRulesetRule = require('./TestScriptRulesetRule');
		this.__rule = Array.isArray(new_value)
			? new_value.map(val => new TestScriptRulesetRule(val))
			: [new TestScriptRulesetRule(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resource: this.__resource && this.__resource.toJSON(),
			rule: this.__rule && this.__rule.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptRuleset;
