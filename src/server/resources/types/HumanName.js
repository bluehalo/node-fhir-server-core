const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));
const Code = require(path.resolve('./src/server/resources/types/Code'));
const Period = require(path.resolve('./src/server/resources/types/Period'));

// HumanName	Σ		Element	Name of a human - parts and usage
class HumanName extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// use	?! Σ	0..1	code	usual | official | temp | nickname | anonymous | old | maiden
	// NameUse (Required)
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

	// family	Σ	0..*	string	Family name (often called 'Surname')
	set family(family) {
		this._family = family;
	}

	get family() {
		return this._family;
	}

	// given	Σ	0..*	string	Given names (not always 'first'). Includes middle names
	set given(given) {
		if (Array.isArray(given)) {
			this._given = given;
		} else {
			this._given = [given];
		}
	}

	get given() {
		return this._given;
	}

	// prefix	Σ	0..*	string	Parts that come before the name
	set prefix(prefix) {
		if (Array.isArray(prefix)) {
			this._prefix = prefix;
		} else {
			this._prefix = [prefix];
		}
	}

	get prefix() {
		return this._prefix;
	}

	// suffix	Σ	0..*	string	Parts that come after the name
	set suffix(suffix) {
		if (Array.isArray(suffix)) {
			this._suffix = suffix;
		} else {
			this._suffix = [suffix];
		}
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
			use: this._use,
			text: this._text,
			family: this._family,
			given: this._given,
			prefix: this._prefix,
			suffix: this._suffix,
			period: this._period
		};

		return Object.assign(super.toJSON(), json);
	}

}

module.exports = HumanName;
