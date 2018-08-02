const Resource = require('./Resource');
const Parameters_Parameter = require('./Parameters_Parameter');

class Parameters extends Resource {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Parameters';
	}

	// A parameter passed to or received from the operation.
	get parameter () {
		return this._parameter;
	}

	set parameter ( new_value ) {
		this._parameter = Array.isArray(new_value) ? new_value.map(val => new Parameters_Parameter(val)) : [new Parameters_Parameter(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			parameter: this._parameter && this._parameter.map(v => v.toJSON())
		});
	}

}

module.exports = Parameters;
