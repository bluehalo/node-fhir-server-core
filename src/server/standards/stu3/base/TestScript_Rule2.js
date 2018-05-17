const BackboneElement = require('./BackboneElement');
const TestScript_Param2 = require('./TestScript_Param2');

class TestScript_Rule2 extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Rule2';
	}

	// The TestScript.rule id value this assert will evaluate.
	get ruleId () {
		return this._ruleId;
	}

	set ruleId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field ruleId`);
		}
		this._ruleId = new_value;
	}

	// Each rule template can take one or more parameters for rule evaluation.
	get param () {
		return this._param;
	}

	set param ( new_value ) {
		this._param = Array.isArray(new_value) ? new_value.map(val => new TestScript_Param2(val)) : [new TestScript_Param2(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			ruleId: this._ruleId,
			param: this._param
		});
	}

}

module.exports = TestScript_Rule2;
