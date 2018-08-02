const BackboneElement = require('./BackboneElement');
const TestScript_Operation = require('./TestScript_Operation');
const TestScript_Assert = require('./TestScript_Assert');

class TestScript_Action extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Action';
	}

	// The operation to perform.
	get operation () {
		return this._operation;
	}

	set operation ( new_value ) {
		this._operation = new TestScript_Operation(new_value);
	}

	// Evaluates the results of previous operations to determine if the server under test behaves appropriately.
	get assert () {
		return this._assert;
	}

	set assert ( new_value ) {
		this._assert = new TestScript_Assert(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			operation: this._operation && this._operation.toJSON(),
			assert: this._assert && this._assert.toJSON()
		});
	}

}

module.exports = TestScript_Action;
