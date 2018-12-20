const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class TestScriptSetupActionAssertRule extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionAssertRule';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionAssertRule resource
	static get __resourceType() {
		return 'TestScriptSetupActionAssertRule';
	}

	// The TestScript.rule id value this assert will evaluate.
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
		const TestScriptSetupActionAssertRuleParam = require('./TestScriptSetupActionAssertRuleParam');
		this.__param = Array.isArray(new_value)
			? new_value.map(val => new TestScriptSetupActionAssertRuleParam(val))
			: [new TestScriptSetupActionAssertRuleParam(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			ruleId: this.__ruleId,
			param: this.__param && this.__param.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptSetupActionAssertRule;
