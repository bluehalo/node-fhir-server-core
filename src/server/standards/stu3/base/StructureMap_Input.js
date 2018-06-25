const BackboneElement = require('./BackboneElement');

class StructureMap_Input extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Input';
	}

	// Name for this instance of data.
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

	// Type for this instance of data.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new_value;
	}

	// Mode for this instance of data.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['source', 'target'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// Documentation for this instance of data.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			type: this._type,
			mode: this._mode,
			documentation: this._documentation
		});
	}

}

module.exports = StructureMap_Input;
