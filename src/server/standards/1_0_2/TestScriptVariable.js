const BackboneElement = require('./BackboneElement');
const IdScalar = require('./scalars/Id.scalar');

class TestScriptVariable extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TestScriptVariable';
		Object.assign(this, opt);
	}

	// This is a TestScriptVariable resource
	static get __resourceType() {
		return 'TestScriptVariable';
	}

	// Descriptive name for this variable.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
	get headerField() {
		return this.__headerField;
	}

	set headerField(new_value) {
		this.__headerField = new_value;
	}

	// XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
	get sourceId() {
		return this.__sourceId;
	}

	set sourceId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sourceId`);
		}
		this.__sourceId = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			headerField: this.__headerField,
			path: this.__path,
			sourceId: this.__sourceId,
		});
	}
}

module.exports = TestScriptVariable;
