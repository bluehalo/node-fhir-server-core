const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const TestScript_Rule1 = require('./TestScript_Rule1');

class TestScript_Ruleset extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Ruleset';
	}

	// Reference to the resource (containing the contents of the ruleset needed for assertions).
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = new Reference(new_value);
	}

	// The referenced rule within the external ruleset template.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = Array.isArray(new_value) ? new_value.map(val => new TestScript_Rule1(val)) : [new TestScript_Rule1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resource: this._resource && this._resource.toJSON(),
			rule: this._rule && this._rule.map(v => v.toJSON())
		});
	}

}

module.exports = TestScript_Ruleset;
