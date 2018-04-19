const Element = require('./types/Element');
const Code = require('./types/Code');
const Period = require('./types/Period');

class ContactPoint extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// system	ΣI	0..1	code	phone | fax | email | pager | url | sms | other
	// ContactPointSystem (Required)
	set system(system) {
		this._system = new Code(system);
	}

	get system() {
		return this._system;
	}

	// value	Σ	0..1	string	The actual contact point details
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	// use	?!Σ	0..1	code	home | work | temp | old | mobile - purpose of this contact point
	// ContactPointUse (Required)
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// rank	Σ	0..1	positiveInt	Specify preferred order of use (1 = highest)
	set rank(rank) {
		this._rank = rank;
	}

	get rank() {
		return this._rank;
	}

	// period	Σ	0..1	Period	Time period when the contact point was/is in use
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		const json = {
			system: this._system,
			value: this._value,
			use: this._use,
			rank: this._rank,
			period: this._period,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = ContactPoint;
