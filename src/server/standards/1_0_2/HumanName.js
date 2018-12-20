const Element = require('./Element');

class HumanName extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'HumanName';
		Object.assign(this, opt);
	}

	// This is a HumanName resource
	static get __resourceType() {
		return 'HumanName';
	}

	// Identifies the purpose for this name.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// A full text representation of the name.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
	get family() {
		return this.__family;
	}

	set family(new_value) {
		this.__family = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Given name.
	get given() {
		return this.__given;
	}

	set given(new_value) {
		this.__given = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
	get prefix() {
		return this.__prefix;
	}

	set prefix(new_value) {
		this.__prefix = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
	get suffix() {
		return this.__suffix;
	}

	set suffix(new_value) {
		this.__suffix = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Indicates the period of time when this name was valid for the named person.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			use: this.__use,
			text: this.__text,
			family: this.__family,
			given: this.__given,
			prefix: this.__prefix,
			suffix: this.__suffix,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = HumanName;
