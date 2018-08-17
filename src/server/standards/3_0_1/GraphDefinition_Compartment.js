const BackboneElement = require('./BackboneElement');

class GraphDefinition_Compartment extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'GraphDefinition_Compartment';
	}

	// Identifies the compartment.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// identical | matching | different | no-rule | custom.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['identical', 'matching', 'different', 'custom'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field rule`);
		}
		this._rule = new_value;
	}

	// Custom rule, as a FHIRPath expression.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	// Documentation for FHIRPath expression.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			rule: this._rule,
			expression: this._expression,
			description: this._description
		});
	}

}

module.exports = GraphDefinition_Compartment;
