const BackboneElement = require('./BackboneElement');

class OperationDefinition_Overload extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'OperationDefinition_Overload';
	}

	// Name of parameter to include in overload.
	get parameterName () {
		return this._parameterName;
	}

	set parameterName ( new_value ) {
		this._parameterName = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Comments to go on overload.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			parameterName: this._parameterName,
			comment: this._comment
		});
	}

}

module.exports = OperationDefinition_Overload;
