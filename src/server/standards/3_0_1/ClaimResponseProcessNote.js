const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseProcessNote extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseProcessNote';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseProcessNote resource
	static get __resourceType() {
		return 'ClaimResponseProcessNote';
	}

	// An integer associated with each note which may be referred to from each service line item.
	get number() {
		return this.__number;
	}

	set number(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this.__number = new_value;
	}

	// The note purpose: Print/Display.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The note text.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \'en\' for English, or \'en-US\' for American English versus \'en-EN\' for England English.
	get language() {
		return this.__language;
	}

	set language(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__language = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			number: this.__number,
			type: this.__type && this.__type.toJSON(),
			text: this.__text,
			language: this.__language && this.__language.toJSON(),
		});
	}
}

module.exports = ClaimResponseProcessNote;
