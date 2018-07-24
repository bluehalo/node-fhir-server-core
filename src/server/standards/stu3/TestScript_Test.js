const BackboneElement = require('./BackboneElement');
const TestScript_Action1 = require('./TestScript_Action1');

class TestScript_Test extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Test';
	}

	// The name of this test used for tracking/logging purposes by test engines.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short description of the test used by test engines for tracking and reporting purposes.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Action would contain either an operation or an assertion.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new TestScript_Action1(val)) : [new TestScript_Action1(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			description: this._description,
			action: this._action
		});
	}

}

module.exports = TestScript_Test;
