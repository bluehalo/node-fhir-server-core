const BackboneElement = require('./BackboneElement');

class TestScriptRule extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptRule';
		Object.assign(this, opt);
	}

	// This is a TestScriptRule resource
	static get __resourceType() {
		return 'TestScriptRule';
	}

	// Reference to the resource (containing the contents of the rule needed for assertions).
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const Reference = require('./Reference');
		this.__resource = new Reference(new_value);
	}

	// Each rule template can take one or more parameters for rule evaluation.
	get param() {
		return this.__param;
	}

	set param(new_value) {
		const TestScriptRuleParam = require('./TestScriptRuleParam');
		this.__param = Array.isArray(new_value)
			? new_value.map(val => new TestScriptRuleParam(val))
			: [new TestScriptRuleParam(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resource: this.__resource && this.__resource.toJSON(),
			param: this.__param && this.__param.map(v => v.toJSON()),
		});
	}
}

module.exports = TestScriptRule;
