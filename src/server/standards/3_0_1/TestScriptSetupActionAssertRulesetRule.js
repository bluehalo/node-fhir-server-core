const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class TestScriptSetupActionAssertRulesetRule extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionAssertRulesetRule';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionAssertRulesetRule resource
	static get __resourceType() {
		return 'TestScriptSetupActionAssertRulesetRule';
	}

	// Id of the referenced rule within the external ruleset template.
	get ruleId() {
		return this.__ruleId;
	}

	set ruleId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field ruleId`);
		}
		this.__ruleId = new_value;
	}

	// Each rule template can take one or more parameters for rule evaluation.
	get param() {
		return this.__param;
	}

	set param(new_value) {
		const TestScriptSetupActionAssertRulesetRuleParam = require('./TestScriptSetupActionAssertRulesetRuleParam');
		this.__param = Array.isArray(new_value)
			? new_value.map(val => new TestScriptSetupActionAssertRulesetRuleParam(val))
			: [new TestScriptSetupActionAssertRulesetRuleParam(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			ruleId: this.__ruleId,
			param: this.__param && this.__param.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptSetupActionAssertRulesetRule;
