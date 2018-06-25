const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const OperationDefinition_Binding = require('./OperationDefinition_Binding');

class OperationDefinition_Parameter extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'OperationDefinition_Parameter';
	}

	// The name of used to identify the parameter.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this._name = new_value;
	}

	// Whether this is an input or an output parameter.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['in', 'out'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field use`);
		}
		this._use = new_value;
	}

	// The minimum number of times this parameter SHALL appear in the request or response.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
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
		this._max = new_value;
	}

	// Describes the meaning or use of this parameter.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = new_value;
	}

	// The type for this parameter.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
	get searchType () {
		return this._searchType;
	}

	set searchType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['number', 'date', 'string', 'token', 'reference', 'composite', 'quantity', 'uri'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field searchType`);
		}
		this._searchType = new_value;
	}

	// A profile the specifies the rules that this parameter must conform to.
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = new Reference(new_value);
	}

	// Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
	get binding () {
		return this._binding;
	}

	set binding ( new_value ) {
		this._binding = new OperationDefinition_Binding(new_value);
	}

	// The parts of a nested Parameter.
	get part () {
		return this._part;
	}

	set part ( new_value ) {
		this._part = Array.isArray(new_value) ? new_value.map(val => new OperationDefinition_Parameter(val)) : [new OperationDefinition_Parameter(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			use: this._use,
			min: this._min,
			max: this._max,
			documentation: this._documentation,
			type: this._type,
			searchType: this._searchType,
			profile: this._profile,
			binding: this._binding,
			part: this._part
		});
	}

}

module.exports = OperationDefinition_Parameter;
