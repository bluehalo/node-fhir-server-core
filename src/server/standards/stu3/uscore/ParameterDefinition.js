const Element = require('./Element');
const Reference = require('./Reference');

class ParameterDefinition extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ParameterDefinition';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ParameterDefinition';
	}

	// The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this._name = new_value;
	}

	// Whether the parameter is input or output for the module.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field use`);
		}
		this._use = new_value;
	}

	// The minimum number of times this parameter SHALL appear in the request or response.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this._min = new_value;
	}

	// The maximum number of times this element is permitted to appear in the request or response.
	get max () {
		return this._max;
	}

	set max ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._max = new_value;
	}

	// A brief discussion of what the parameter is for and how it is used by the module.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._documentation = new_value;
	}

	// The type of the parameter.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._profile = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this.name,
			use: this.use,
			min: this.min,
			max: this.max,
			documentation: this.documentation,
			type: this.type,
			profile: this.profile && this.profile.toJSON()
		});
	}

}

module.exports = ParameterDefinition;
