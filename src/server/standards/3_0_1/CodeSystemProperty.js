const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class CodeSystemProperty extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CodeSystemProperty';
		Object.assign(this, opt);
	}

	// This is a CodeSystemProperty resource
	static get __resourceType() {
		return 'CodeSystemProperty';
	}

	// A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
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

	// Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
	get uri() {
		return this.__uri;
	}

	set uri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field uri`);
		}
		this.__uri = new_value;
	}

	// A description of the property- why it is defined, and how its value might be used.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The type of the property value. Properties of type \'code\' contain a code defined by the code system (e.g. a reference to anotherr defined concept).
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			uri: this.__uri,
			description: this.__description,
			type: this.__type,
		});
	}
}

module.exports = CodeSystemProperty;
