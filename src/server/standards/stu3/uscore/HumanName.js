const Element = require('./Element');
const Period = require('./Period');

class HumanName extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'HumanName';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'HumanName';
	}

	// Identifies the purpose for this name.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field use`);
		}
		this._use = new_value;
	}

	// A full text representation of the name.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._text = new_value;
	}

	// The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
	get family () {
		return this._family;
	}

	set family ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._family = new_value;
	}

	// Given name.
	get given () {
		return this._given;
	}

	set given ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._given = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
	get prefix () {
		return this._prefix;
	}

	set prefix ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._prefix = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
	get suffix () {
		return this._suffix;
	}

	set suffix ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._suffix = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Indicates the period of time when this name was valid for the named person.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			use: this.use,
			text: this.text,
			family: this.family,
			given: this.given,
			prefix: this.prefix,
			suffix: this.suffix,
			period: this.period && this.period.toJSON()
		});
	}

}

module.exports = HumanName;
