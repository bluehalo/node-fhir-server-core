const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class ValueSetExpansionParameter extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetExpansionParameter';
		Object.assign(this, opt);
	}

	// This is a ValueSetExpansionParameter resource
	static get __resourceType() {
		return 'ValueSetExpansionParameter';
	}

	// The name of the parameter.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The value of the parameter.
	get valueString() {
		return this.__valueString;
	}

	set valueString(new_value) {
		this.__valueString = new_value;
	}

	// The value of the parameter.
	get valueBoolean() {
		return this.__valueBoolean;
	}

	set valueBoolean(new_value) {
		this.__valueBoolean = new_value;
	}

	// The value of the parameter.
	get valueInteger() {
		return this.__valueInteger;
	}

	set valueInteger(new_value) {
		this.__valueInteger = new_value;
	}

	// The value of the parameter.
	get valueDecimal() {
		return this.__valueDecimal;
	}

	set valueDecimal(new_value) {
		this.__valueDecimal = new_value;
	}

	// The value of the parameter.
	get valueUri() {
		return this.__valueUri;
	}

	set valueUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueUri`);
		}
		this.__valueUri = new_value;
	}

	// The value of the parameter.
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

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			valueString: this.__valueString,
			valueBoolean: this.__valueBoolean,
			valueInteger: this.__valueInteger,
			valueDecimal: this.__valueDecimal,
			valueUri: this.__valueUri,
			valueCode: this.__valueCode,
		});
	}
}

module.exports = ValueSetExpansionParameter;
