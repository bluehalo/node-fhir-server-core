const BackboneElement = require('./BackboneElement');
const TestReport_Operation = require('./TestReport_Operation');

class TestReport_Action2 extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestReport_Action2';
	}

	// An operation would involve a REST request to a server.
	get operation () {
		return this._operation;
	}

	set operation ( new_value ) {
		this._operation = new TestReport_Operation(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			operation: this._operation
		});
	}

}

module.exports = TestReport_Action2;
