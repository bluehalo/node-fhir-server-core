const BackboneElement = require('./BackboneElement');

class PlanDefinition_Condition extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PlanDefinition_Condition';
	}

	// The kind of condition.
	get kind () {
		return this._kind;
	}

	set kind ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['applicability', 'start', 'stop'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field kind`);
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

module.exports = PlanDefinition_Condition;
