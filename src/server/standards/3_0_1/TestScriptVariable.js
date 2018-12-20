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

	// A default, hard-coded, or user-defined value for this variable.
	get defaultValue() {
		return this.__defaultValue;
	}

	set defaultValue(new_value) {
		this.__defaultValue = new_value;
	}

	// A free text natural language description of the variable and its purpose.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The fluentpath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = new_value;
	}

	// Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
	get headerField() {
		return this.__headerField;
	}

	set headerField(new_value) {
		this.__headerField = new_value;
	}

	// Displayable text string with hint help information to the user when entering a default value.
	get hint() {
		return this.__hint;
	}

	set hint(new_value) {
		this.__hint = new_value;
	}

	// XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.
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
			defaultValue: this.__defaultValue,
			description: this.__description,
			expression: this.__expression,
			headerField: this.__headerField,
			hint: this.__hint,
			path: this.__path,
			sourceId: this.__sourceId,
		});
	}
}

module.exports = TestScriptVariable;
