const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class SearchParameter_Component extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SearchParameter_Component';
	}

	// The definition of the search parameter that describes this part.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new Reference(new_value);
	}

	// A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			definition: this._definition,
			expression: this._expression
		});
	}

}

module.exports = SearchParameter_Component;
