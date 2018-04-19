const Element = require('./types/Element');
const Reference = require('./types/Reference');

class Annotation extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// author[x]	Σ	0..1		Individual responsible for the annotation
	// authorReference			Reference
	set authorReference(authorReference) {
		this._authorReference = new Reference(authorReference);
	}

	get authorReference() {
		return this._authorReference;
	}

	// authorString			string
	set authorString(authorString) {
		this._authorString = authorString;
	}

	get authorString() {
		return this._authorString;
	}

	// time	Σ	0..1	dateTime	When the annotation was made
	set time(time) {
		this._time = time;
	}

	get time() {
		return this._time;
	}

	// text		1..1	string	The annotation - text content
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		const json = {
			authorReference: this._authorReference,
			authorString: this._authorString,
			time: this._time,
			text: this._text,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Annotation;
