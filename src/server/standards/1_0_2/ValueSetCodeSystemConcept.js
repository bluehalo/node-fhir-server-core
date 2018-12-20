const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class ValueSetCodeSystemConcept extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetCodeSystemConcept';
		Object.assign(this, opt);
	}

	// This is a ValueSetCodeSystemConcept resource
	static get __resourceType() {
		return 'ValueSetCodeSystemConcept';
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

	// If this code is not for use as a real concept.
	get abstract() {
		return this.__abstract;
	}

	set abstract(new_value) {
		this.__abstract = new_value;
	}

	// A human readable string that is the recommended default way to present this concept to a user.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
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
		const ValueSetCodeSystemConceptDesignation = require('./ValueSetCodeSystemConceptDesignation');
		this.__designation = Array.isArray(new_value)
			? new_value.map(val => new ValueSetCodeSystemConceptDesignation(val))
			: [new ValueSetCodeSystemConceptDesignation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			abstract: this.__abstract,
			display: this.__display,
			definition: this.__definition,
			designation: this.__designation && this.__designation.map(v => v.toJSON()),
		});
	}
}

module.exports = ValueSetCodeSystemConcept;
