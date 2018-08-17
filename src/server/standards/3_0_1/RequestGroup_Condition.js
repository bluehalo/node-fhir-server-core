const BackboneElement = require('./BackboneElement');

class RequestGroup_Condition extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RequestGroup_Condition';
	}

	// The kind of condition.
	get kind () {
		return this._kind;
	}

	set kind ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field kind`);
		}
		this._kind = new_value;
	}

	// A brief, natural language description of the condition that effectively communicates the intended semantics.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The media type of the language for the expression.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		this._language = new_value;
	}

	// An expression that returns true or false, indicating whether or not the condition is satisfied.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			kind: this._kind,
			description: this._description,
			language: this._language,
			expression: this._expression
		});
	}

}

module.exports = RequestGroup_Condition;
