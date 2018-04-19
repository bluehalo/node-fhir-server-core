const Element = require('./types/Element');
const Coding = require('./types/Coding');

class CodeableConcept extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// coding	Σ	0..*	Coding	Code defined by a terminology system
	set coding(coding) {
		if (Array.isArray(coding)) {
			this._coding = coding.map((i) => new Coding(i));
		} else {
			this._coding = [new Coding(coding)];
		}
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
		const json = {
			coding: this._coding,
			text: this._text,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = CodeableConcept;
