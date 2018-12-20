const BackboneElement = require('./BackboneElement');

class SearchParameterComponent extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SearchParameterComponent';
		Object.assign(this, opt);
	}

	// This is a SearchParameterComponent resource
	static get __resourceType() {
		return 'SearchParameterComponent';
	}

	// The definition of the search parameter that describes this part.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = new Reference(new_value);
	}

	// A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			definition: this.__definition && this.__definition.toJSON(),
			expression: this.__expression,
		});
	}
}

module.exports = SearchParameterComponent;
