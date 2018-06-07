const BackboneElement = require('./BackboneElement');

class CodeSystem_Filter extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CodeSystem_Filter';
	}

	// The code that identifies this filter when it is used in the instance.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// A description of how or why the filter is used.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A list of operators that can be used with the filter.
	get operator () {
		return this._operator;
	}

	set operator ( new_value ) {
		this._operator = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A description of what the value for the filter should be.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			description: this._description,
			operator: this._operator,
			value: this._value
		});
	}

}

module.exports = CodeSystem_Filter;
