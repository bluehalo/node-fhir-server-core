const BackboneElement = require('./BackboneElement');
const CodeScalar = require('./scalars/Code.scalar');

class ValueSetComposeIncludeConcept extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetComposeIncludeConcept';
		Object.assign(this, opt);
	}

	// This is a ValueSetComposeIncludeConcept resource
	static get __resourceType() {
		return 'ValueSetComposeIncludeConcept';
	}

	// Specifies a code for the concept to be included or excluded.
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

	// The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code,
			display: this.__display,
		});
	}
}

module.exports = ValueSetComposeIncludeConcept;
