const BackboneElement = require('./BackboneElement');

class PlanDefinitionActionDynamicValue extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PlanDefinitionActionDynamicValue';
		Object.assign(this, opt);
	}

	// This is a PlanDefinitionActionDynamicValue resource
	static get __resourceType() {
		return 'PlanDefinitionActionDynamicValue';
	}

	// A brief, natural language description of the intended semantics of the dynamic value.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
	get path() {
		return this.__path;
	}

	set path(new_value) {
		this.__path = new_value;
	}

	// The media type of the language for the expression.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		this.__language = new_value;
	}

	// An expression specifying the value of the customized element.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			description: this.__description,
			path: this.__path,
			language: this.__language,
			expression: this.__expression,
		});
	}
}

module.exports = PlanDefinitionActionDynamicValue;
