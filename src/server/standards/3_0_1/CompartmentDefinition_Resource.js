const BackboneElement = require('./BackboneElement');

class CompartmentDefinition_Resource extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CompartmentDefinition_Resource';
	}

	// The name of a resource supported by the server.
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

	// The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.
	get param () {
		return this._param;
	}

	set param ( new_value ) {
		this._param = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Additional documentation about the resource and compartment.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			param: this._param,
			documentation: this._documentation
		});
	}

}

module.exports = CompartmentDefinition_Resource;
