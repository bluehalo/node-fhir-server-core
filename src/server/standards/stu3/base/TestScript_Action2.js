const BackboneElement = require('./BackboneElement');
const TestScript_Operation = require('./TestScript_Operation');

class TestScript_Action2 extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Action2';
	}

	// An operation would involve a REST request to a server.
	get operation () {
		return this._operation;
	}

	set operation ( new_value ) {
		this._operation = new TestScript_Operation(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			operation: this._operation
		});
	}

}

module.exports = TestScript_Action2;
