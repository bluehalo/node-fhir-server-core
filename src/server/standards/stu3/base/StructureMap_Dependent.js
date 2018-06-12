const BackboneElement = require('./BackboneElement');

class StructureMap_Dependent extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Dependent';
	}

	// Name of a rule or group to apply.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this._name = new_value;
	}

	// Variable to pass to the rule or group.
	get variable () {
		return this._variable;
	}

	set variable ( new_value ) {
		this._variable = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			variable: this._variable
		});
	}

}

module.exports = StructureMap_Dependent;
