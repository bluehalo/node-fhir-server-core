const BackboneElement = require('./BackboneElement');

class ActivityDefinition_DynamicValue extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ActivityDefinition_DynamicValue';
	}

	// A brief, natural language description of the intended semantics of the dynamic value.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	// The media type of the language for the expression.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		this._language = new_value;
	}

	// An expression specifying the value of the customized element.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			description: this._description,
			path: this._path,
			language: this._language,
			expression: this._expression
		});
	}

}

module.exports = ActivityDefinition_DynamicValue;
