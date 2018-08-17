const BackboneElement = require('./BackboneElement');
const TestScript_Param1 = require('./TestScript_Param1');

class TestScript_Rule1 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Rule1';
	}

	// Id of the referenced rule within the external ruleset template.
	get ruleId () {
		return this._ruleId;
	}

	set ruleId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field ruleId`);
		}
		this._ruleId = new_value;
	}

	// Each rule template can take one or more parameters for rule evaluation.
	get param () {
		return this._param;
	}

	set param ( new_value ) {
		this._param = Array.isArray(new_value) ? new_value.map(val => new TestScript_Param1(val)) : [new TestScript_Param1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			ruleId: this._ruleId,
			param: this._param && this._param.map(v => v.toJSON())
		});
	}

}

module.exports = TestScript_Rule1;
