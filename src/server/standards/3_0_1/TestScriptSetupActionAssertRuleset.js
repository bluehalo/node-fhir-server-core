const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class TestScriptSetupActionAssertRuleset extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionAssertRuleset';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionAssertRuleset resource
	static get __resourceType() {
		return 'TestScriptSetupActionAssertRuleset';
	}

	// The TestScript.ruleset id value this assert will evaluate.
	get rulesetId() {
		return this.__rulesetId;
	}

	set rulesetId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field rulesetId`);
		}
		this.__rulesetId = new_value;
	}

	// The referenced rule within the external ruleset template.
	get rule() {
		return this.__rule;
	}

	set rule(new_value) {
		const TestScriptSetupActionAssertRulesetRule = require('./TestScriptSetupActionAssertRulesetRule');
		this.__rule = Array.isArray(new_value)
			? new_value.map(val => new TestScriptSetupActionAssertRulesetRule(val))
			: [new TestScriptSetupActionAssertRulesetRule(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			rulesetId: this.__rulesetId,
			rule: this.__rule && this.__rule.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptSetupActionAssertRuleset;
