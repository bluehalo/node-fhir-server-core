const BackboneElement = require('./BackboneElement');

class TestReport_Operation extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestReport_Operation';
	}

	// The result of this operation.
	get result () {
		return this._result;
	}

	set result ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['pass', 'skip', 'fail', 'warning', 'error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field result`);
		}
		this._result = new_value;
	}

	// An explanatory message associated with the result.
	get message () {
		return this._message;
	}

	set message ( new_value ) {
		this._message = new_value;
	}

	// A link to further details on the result.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		this._detail = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			result: this._result,
			message: this._message,
			detail: this._detail
		});
	}

}

module.exports = TestReport_Operation;
