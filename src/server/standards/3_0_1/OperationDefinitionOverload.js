const BackboneElement = require('./BackboneElement');

class OperationDefinitionOverload extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OperationDefinitionOverload';
		Object.assign(this, opt);
	}

	// This is a OperationDefinitionOverload resource
	static get __resourceType() {
		return 'OperationDefinitionOverload';
	}

	// Name of parameter to include in overload.
	get parameterName() {
		return this.__parameterName;
	}

	set parameterName(new_value) {
		this.__parameterName = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Comments to go on overload.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			parameterName: this.__parameterName,
			comment: this.__comment,
		});
	}
}

module.exports = OperationDefinitionOverload;
