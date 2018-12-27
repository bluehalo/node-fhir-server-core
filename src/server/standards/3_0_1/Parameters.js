const Resource = require('./Resource');

class Parameters extends Resource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Parameters';
		Object.assign(this, opt);
	}

	// This is a Parameters resource
	static get __resourceType() {
		return 'Parameters';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Parameters = new_value;
	}

	// A parameter passed to or received from the operation.
	get parameter() {
		return this.__parameter;
	}

	set parameter(new_value) {
		const ParametersParameterMultiPart = require('./ParametersParameterMultiPart');
		this.__parameter = Array.isArray(new_value)
			? new_value.map(val => new ParametersParameterMultiPart(val))
			: [new ParametersParameterMultiPart(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			parameter: this.__parameter && this.__parameter.map(v => v.toJSON()),
		});
	}
}

module.exports = Parameters;
