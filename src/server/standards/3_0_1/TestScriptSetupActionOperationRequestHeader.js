const BackboneElement = require('./BackboneElement');

class TestScriptSetupActionOperationRequestHeader extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptSetupActionOperationRequestHeader';
		Object.assign(this, opt);
	}

	// This is a TestScriptSetupActionOperationRequestHeader resource
	static get __resourceType() {
		return 'TestScriptSetupActionOperationRequestHeader';
	}

	// The HTTP header field e.g. \'Accept\'.
	get field() {
		return this.__field;
	}

	set field(new_value) {
		this.__field = new_value;
	}

	// The value of the header e.g. \'application/fhir+xml\'.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			field: this.__field,
			value: this.__value,
		});
	}
}

module.exports = TestScriptSetupActionOperationRequestHeader;
