const Element = require('./Element');
const CodeScalar = require('./scalars/Code.scalar');

class ParameterDefinition extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ParameterDefinition';
		Object.assign(this, opt);
	}

	// This is a ParameterDefinition resource
	static get __resourceType() {
		return 'ParameterDefinition';
	}

	// The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
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

	// Whether the parameter is input or output for the module.
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

	// A brief discussion of what the parameter is for and how it is used by the module.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// The type of the parameter.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			use: this.__use,
			min: this.__min,
			max: this.__max,
			documentation: this.__documentation,
			type: this.__type,
			profile: this.__profile && this.__profile.toJSON(),
		});
	}
}

module.exports = ParameterDefinition;
