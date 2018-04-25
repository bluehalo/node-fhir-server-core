const Element = require('./Element');
const Code = require('./Code');
const Period = require('./Period');

class Address extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// use	?!Σ	0..1	code	home | work | temp | old - purpose of this address
	// Binding: AddressUse (required)
	// Example General': home
	set use(use) {
		this._use = new Code(use);
	}

	get use() {
		return this._use;
	}

	// type	Σ	0..1	code	postal | physical | both
	// Binding: AddressType (required)
	// Example General': both
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// text	Σ	0..1	string	Text representation of the address
	// Example General': 137 Nowhere Street, Erewhon 9132
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// line	SΣ	0..*	string	Street name, number, direction & P.O. Box etc.
	// This repeating element order: The order in which lines should appear in an address label
	// Example General': 137 Nowhere Street
	set line(line) {
		this._line = [].concat(line);
	}

	get line() {
		return this._line;
	}

	// city	SΣ	0..1	string	Name of city, town etc.
	// Example General': Erewhon
	set city(city) {
		this._city = city;
	}

	get city() {
		return this._city;
	}

	// district	Σ	0..1	string	District name (aka county)
	// Example General': Madison
	set district(district) {
		this._district = district;
	}

	get district() {
		return this._district;
	}

	// state	SΣ	0..1	string	Sub-unit of country (abbreviations ok)
	// Binding: USPS Two Letter Alphabetic Codes (extensible)
	set state(state) {
		this._state = state;
	}

	get state() {
		return this._state;
	}

	// postalCode	SΣ	0..1	string	US Zip Codes
	// Example General': 9132
	set postalCode(postalCode) {
		this._postalCode = postalCode;
	}

	get postalCode() {
		return this._postalCode;
	}

	// country	Σ	0..1	string	Country (e.g. can be ISO 3166 2 or 3 letter code)
	set country(country) {
		this._country = country;
	}

	get country() {
		return this._country;
	}

	// period	Σ	0..1	Period	Time period when address was/is in use
	// Example General': {"start":"2010-03-23","end":"2010-07-01"}
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		const json = {
			use: this._use,
			type: this._type,
			text: this._text,
			line: this._line,
			city: this._city,
			district: this._district,
			state: this._state,
			postalCode: this._postalCode,
			country: this._country,
			period: this._period,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Address;
