const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class OperationDefinitionParameter extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OperationDefinitionParameter';
		Object.assign(this, opt);
	}

	// This is a OperationDefinitionParameter resource
	static get __resourceType() {
		return 'OperationDefinitionParameter';
	}

	// The name of used to identify the parameter.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field name`);
		}
		this.__name = new_value;
	}

	// Whether this is an input or an output parameter.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// The minimum number of times this parameter SHALL appear in the request or response.
	get min() {
		return this.__min;
	}

	set min(new_value) {
		this.__min = new_value;
	}

	// The maximum number of times this element is permitted to appear in the request or response.
	get max() {
		return this.__max;
	}

	set max(new_value) {
		this.__max = new_value;
	}

	// Describes the meaning or use of this parameter.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// The type for this parameter.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// How the parameter is understood as a search parameter. This is only used if the parameter type is \'string\'.
	get searchType() {
		return this.__searchType;
	}

	set searchType(new_value) {
		this.__searchType = new_value;
	}

	// A profile the specifies the rules that this parameter must conform to.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = new Reference(new_value);
	}

	// Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
	get binding() {
		return this.__binding;
	}

	set binding(new_value) {
		const OperationDefinitionParameterBinding = require('./OperationDefinitionParameterBinding');
		this.__binding = new OperationDefinitionParameterBinding(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			use: this.__use,
			min: this.__min,
			max: this.__max,
			documentation: this.__documentation,
			type: this.__type,
			searchType: this.__searchType,
			profile: this.__profile && this.__profile.toJSON(),
			binding: this.__binding && this.__binding.toJSON(),
		});
	}
}

module.exports = OperationDefinitionParameter;
