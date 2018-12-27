const BackboneElement = require('./BackboneElement');

class CompartmentDefinitionResource extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CompartmentDefinitionResource';
		Object.assign(this, opt);
	}

	// This is a CompartmentDefinitionResource resource
	static get __resourceType() {
		return 'CompartmentDefinitionResource';
	}

	// The name of a resource supported by the server.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		this.__code = new_value;
	}

	// The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.
	get param() {
		return this.__param;
	}

	set param(new_value) {
		this.__param = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Additional documentation about the resource and compartment.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			param: this.__param,
			documentation: this.__documentation,
		});
	}
}

module.exports = CompartmentDefinitionResource;
