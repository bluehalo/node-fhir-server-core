const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));
const Coding = require(path.resolve('./src/server/resources/types/Coding'));

//	Σ		Element	Concept - reference to a terminology or just text
class CodeableConcept extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// coding	Σ	0..*	Coding	Code defined by a terminology system
	set coding(coding) {
		if (!Array.isArray()) {
			this._coding = [new Coding(coding)];
		}
		this._coding = coding;
	}

	get coding() {
		return this._coding;
	}

	// text	Σ	0..1	string	Plain text representation of the concept
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			coding: this._coding,
			text: this._text
		};
	}
}

module.exports = CodeableConcept;
