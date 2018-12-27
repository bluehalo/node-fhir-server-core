const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class CodeSystemFilter extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CodeSystemFilter';
		Object.assign(this, opt);
	}

	// This is a CodeSystemFilter resource
	static get __resourceType() {
		return 'CodeSystemFilter';
	}

	// The code that identifies this filter when it is used in the instance.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// A description of how or why the filter is used.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A list of operators that can be used with the filter.
	get operator() {
		return this.__operator;
	}

	set operator(new_value) {
		this.__operator = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A description of what the value for the filter should be.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			description: this.__description,
			operator: this.__operator,
			value: this.__value,
		});
	}
}

module.exports = CodeSystemFilter;
