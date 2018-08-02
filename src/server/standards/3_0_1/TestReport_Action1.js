const BackboneElement = require('./BackboneElement');
const TestReport_Operation = require('./TestReport_Operation');
const TestReport_Assert = require('./TestReport_Assert');

class TestReport_Action1 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestReport_Action1';
	}

	// An operation would involve a REST request to a server.
	get operation () {
		return this._operation;
	}

	set operation ( new_value ) {
		this._operation = new TestReport_Operation(new_value);
	}

	// The results of the assertion performed on the previous operations.
	get assert () {
		return this._assert;
	}

	set assert ( new_value ) {
		this._assert = new TestReport_Assert(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			operation: this._operation && this._operation.toJSON(),
			assert: this._assert && this._assert.toJSON()
		});
	}

}

module.exports = TestReport_Action1;
