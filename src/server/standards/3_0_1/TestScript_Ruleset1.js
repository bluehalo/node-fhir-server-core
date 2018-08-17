const BackboneElement = require('./BackboneElement');
const TestScript_Rule3 = require('./TestScript_Rule3');

class TestScript_Ruleset1 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Ruleset1';
	}

	// The TestScript.ruleset id value this assert will evaluate.
	get rulesetId () {
		return this._rulesetId;
	}

	set rulesetId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field rulesetId`);
		}
		this._rulesetId = new_value;
	}

	// The referenced rule within the external ruleset template.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = Array.isArray(new_value) ? new_value.map(val => new TestScript_Rule3(val)) : [new TestScript_Rule3(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			rulesetId: this._rulesetId,
			rule: this._rule && this._rule.map(v => v.toJSON())
		});
	}

}

module.exports = TestScript_Ruleset1;
