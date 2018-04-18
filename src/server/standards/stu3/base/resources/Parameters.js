const DomainResource = require('../types/DomainResource');
const Resource = require('../types/Resource');

class Parameter {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	string	Name from the definition
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// value[x]	ΣI	0..1	*	If parameter is a data type
	// resource	ΣI	0..1	Resource	If parameter is a whole resource
	set resource(resource) {
		this._resource = new Resource(resource);
	}

	get resource() {
		return this._resource;
	}

	// part	Σ	0..*	see parameter	Named part of a multi-part parameter
	set part(part) {
		this._part = [].concat(part);
	}

	get part() {
		return this._part;
	}

	toJSON() {
		return {
			name: this._name,
			resource: this._resource,
			part: this._part,
		};
	}
}

class Parameters extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Parameters';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// parameter	ΣI	0..*	BackboneElement	Operation Parameter
	// + A parameter must have only one of (value, resource, part)
	set parameter(parameter) {
		if (Array.isArray(parameter)) {
			this._parameter = parameter.map((i) => new Parameter(i));
		} else {
			this._parameter = [new Parameter(parameter)];
		}
	}

	get parameter() {
		return this._parameter;
	}

	toJSON() {
		const json = {
			parameter: this._parameter,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Parameters = Parameters;
module.exports.Parameter = Parameter;
