const Element = require('../../base/types/Element');
const Code = require('../../base/types/Code');
const Period = require('../../base/types/Period');

class HumanName extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// use	?!Σ	0..1	code	usual | official | temp | nickname | anonymous | old | maiden
	// Binding: NameUse (required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// text	Σ	0..1	string	Text representation of the full name
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// family	SΣ	1..1	string	Family name (often called 'Surname')
	set family(family) {
		this._family = family;
	}

	get family() {
		return this._family;
	}

	// given	SΣ	1..*	string	Given names (not always 'first'). Includes middle names
	// This repeating element order: Given Names appear in the correct order for presenting the name
	set given(given) {
		this._given = [].concat(given);
	}

	get given() {
		return this._given;
	}

	// prefix	Σ	0..*	string	Parts that come before the name
	// This repeating element order: Prefixes appear in the correct order for presenting the name
	set prefix(prefix) {
		this._prefix = [].concat(prefix);
	}

	get prefix() {
		return this._prefix;
	}

	// suffix	Σ	0..*	string	Parts that come after the name
	// This repeating element order: Suffixes appear in the correct order for presenting the name
	set suffix(suffix) {
		this._suffix = [].concat(suffix);
	}

	get suffix() {
		return this._suffix;
	}

	// period	Σ	0..1	Period	Time period when name was/is in use
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		const json = {
			id: this._id,
			use: this._use,
			text: this._text,
			family: this._family,
			given: this._given,
			prefix: this._prefix,
			suffix: this._suffix,
			period: this._period,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = HumanName;
