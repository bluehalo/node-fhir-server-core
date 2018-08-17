const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const TestScript_Param = require('./TestScript_Param');

class TestScript_Rule extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Rule';
	}

	// Reference to the resource (containing the contents of the rule needed for assertions).
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = new Reference(new_value);
	}

	// Each rule template can take one or more parameters for rule evaluation.
	get param () {
		return this._param;
	}

	set param ( new_value ) {
		this._param = Array.isArray(new_value) ? new_value.map(val => new TestScript_Param(val)) : [new TestScript_Param(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resource: this._resource && this._resource.toJSON(),
			param: this._param && this._param.map(v => v.toJSON())
		});
	}

}

module.exports = TestScript_Rule;
