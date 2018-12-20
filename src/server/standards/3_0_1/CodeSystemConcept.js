const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class CodeSystemConcept extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CodeSystemConcept';
		Object.assign(this, opt);
	}

	// This is a CodeSystemConcept resource
	static get __resourceType() {
		return 'CodeSystemConcept';
	}

	// A code - a text symbol - that uniquely identifies the concept within the code system.
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

	// A human readable string that is the recommended default way to present this concept to a user.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		this.__definition = new_value;
	}

	// Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
	get designation() {
		return this.__designation;
	}

	set designation(new_value) {
		const CodeSystemConceptDesignation = require('./CodeSystemConceptDesignation');
		this.__designation = Array.isArray(new_value)
			? new_value.map(val => new CodeSystemConceptDesignation(val))
			: [new CodeSystemConceptDesignation(new_value)];
	}

	// A property value for this concept.
	get property() {
		return this.__property;
	}

	set property(new_value) {
		const CodeSystemConceptProperty = require('./CodeSystemConceptProperty');
		this.__property = Array.isArray(new_value)
			? new_value.map(val => new CodeSystemConceptProperty(val))
			: [new CodeSystemConceptProperty(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			display: this.__display,
			definition: this.__definition,
			designation: this.__designation && this.__designation.map(v => v.toJSON()),
			property: this.__property && this.__property.map(v => v.toJSON()),
		});
	}
}

module.exports = CodeSystemConcept;
