const BackboneElement = require('./BackboneElement');

class GraphDefinitionLinkTargetCompartment extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GraphDefinitionLinkTargetCompartment';
		Object.assign(this, opt);
	}

	// This is a GraphDefinitionLinkTargetCompartment resource
	static get __resourceType() {
		return 'GraphDefinitionLinkTargetCompartment';
	}

	// Identifies the compartment.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// identical | matching | different | no-rule | custom.
	get rule() {
		return this.__rule;
	}

	set rule(new_value) {
		this.__rule = new_value;
	}

	// Custom rule, as a FHIRPath expression.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = new_value;
	}

	// Documentation for FHIRPath expression.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			rule: this.__rule,
			expression: this.__expression,
			description: this.__description,
		});
	}
}

module.exports = GraphDefinitionLinkTargetCompartment;
