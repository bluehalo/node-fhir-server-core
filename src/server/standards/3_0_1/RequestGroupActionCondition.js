const BackboneElement = require('./BackboneElement');

class RequestGroupActionCondition extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RequestGroupActionCondition';
		Object.assign(this, opt);
	}

	// This is a RequestGroupActionCondition resource
	static get __resourceType() {
		return 'RequestGroupActionCondition';
	}

	// The kind of condition.
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		this.__kind = new_value;
	}

	// A brief, natural language description of the condition that effectively communicates the intended semantics.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The media type of the language for the expression.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		this.__language = new_value;
	}

	// An expression that returns true or false, indicating whether or not the condition is satisfied.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			kind: this.__kind,
			description: this.__description,
			language: this.__language,
			expression: this.__expression,
		});
	}
}

module.exports = RequestGroupActionCondition;
