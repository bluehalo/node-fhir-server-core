const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class CodeSystemConceptProperty extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CodeSystemConceptProperty';
		Object.assign(this, opt);
	}

	// This is a CodeSystemConceptProperty resource
	static get __resourceType() {
		return 'CodeSystemConceptProperty';
	}

	// A code that is a reference to CodeSystem.property.code.
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

	// The value of this property.
	get valueCode() {
		return this.__valueCode;
	}

	set valueCode(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueCode`);
		}
		this.__valueCode = new_value;
	}

	// The value of this property.
	get valueCoding() {
		return this.__valueCoding;
	}

	set valueCoding(new_value) {
		const Coding = require('./Coding');
		this.__valueCoding = new Coding(new_value);
	}

	// The value of this property.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// The value of this property.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// The value of this property.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// The value of this property.
	get valueDateTime() {
		return this.__valueDateTime;
	}

	set valueDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this.__valueDateTime = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			valueCode: this.__valueCode,
			valueCoding: this.__valueCoding && this.__valueCoding.toJSON(),
			valueString: this.__valueString,
			valueInteger: this.__valueInteger,
			valueBoolean: this.__valueBoolean,
			valueDateTime: this.__valueDateTime,
		});
	}
}

module.exports = CodeSystemConceptProperty;
