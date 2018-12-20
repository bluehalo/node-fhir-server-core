const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class ValueSetComposeIncludeFilter extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetComposeIncludeFilter';
		Object.assign(this, opt);
	}

	// This is a ValueSetComposeIncludeFilter resource
	static get __resourceType() {
		return 'ValueSetComposeIncludeFilter';
	}

	// A code that identifies a property defined in the code system.
	get property() {
		return this.__property;
	}

	set property(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field property`);
		}
		this.__property = new_value;
	}

	// The kind of operation to perform as a part of the filter criteria.
	get op() {
		return this.__op;
	}

	set op(new_value) {
		this.__op = new_value;
	}

	// The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			property: this.__property,
			op: this.__op,
			value: this.__value,
		});
	}
}

module.exports = ValueSetComposeIncludeFilter;
