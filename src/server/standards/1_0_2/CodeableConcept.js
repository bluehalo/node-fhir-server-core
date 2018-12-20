const Element = require('./Element');

class CodeableConcept extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CodeableConcept';
		Object.assign(this, opt);
	}

	// This is a CodeableConcept resource
	static get __resourceType() {
		return 'CodeableConcept';
	}

	// A reference to a code defined by a terminology system.
	get coding() {
		return this.__coding;
	}

	set coding(new_value) {
		const Coding = require('./Coding');
		this.__coding = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			coding: this.__coding && this.__coding.map(v => v.toJSON()),
			text: this.__text,
		});
	}
}

module.exports = CodeableConcept;
