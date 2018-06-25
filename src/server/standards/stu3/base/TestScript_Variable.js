const BackboneElement = require('./BackboneElement');

class TestScript_Variable extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TestScript_Variable';
	}

	// Descriptive name for this variable.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A default, hard-coded, or user-defined value for this variable.
	get defaultValue () {
		return this._defaultValue;
	}

	set defaultValue ( new_value ) {
		this._defaultValue = new_value;
	}

	// A free text natural language description of the variable and its purpose.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The fluentpath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	// Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
	get headerField () {
		return this._headerField;
	}

	set headerField ( new_value ) {
		this._headerField = new_value;
	}

	// Displayable text string with hint help information to the user when entering a default value.
	get hint () {
		return this._hint;
	}

	set hint ( new_value ) {
		this._hint = new_value;
	}

	// XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	// Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
	get sourceId () {
		return this._sourceId;
	}

	set sourceId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sourceId`);
		}
		this._sourceId = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			defaultValue: this._defaultValue,
			description: this._description,
			expression: this._expression,
			headerField: this._headerField,
			hint: this._hint,
			path: this._path,
			sourceId: this._sourceId
		});
	}

}

module.exports = TestScript_Variable;
