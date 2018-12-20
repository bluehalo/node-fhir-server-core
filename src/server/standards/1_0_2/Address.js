const Element = require('./Element');

class Address extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Address';
		Object.assign(this, opt);
	}

	// This is a Address resource
	static get __resourceType() {
		return 'Address';
	}

	// The purpose of this address.
	get use() {
		return this.__use;
	}

	set use(new_value) {
		this.__use = new_value;
	}

	// Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A full text representation of the address.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
	get line() {
		return this.__line;
	}

	set line(new_value) {
		this.__line = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The name of the city, town, village or other community or delivery center.
	get city() {
		return this.__city;
	}

	set city(new_value) {
		this.__city = new_value;
	}

	// The name of the administrative area (county).
	get district() {
		return this.__district;
	}

	set district(new_value) {
		this.__district = new_value;
	}

	// Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
	get state() {
		return this.__state;
	}

	set state(new_value) {
		this.__state = new_value;
	}

	// A postal code designating a region defined by the postal service.
	get postalCode() {
		return this.__postalCode;
	}

	set postalCode(new_value) {
		this.__postalCode = new_value;
	}

	// Country - a nation as commonly understood or generally accepted.
	get country() {
		return this.__country;
	}

	set country(new_value) {
		this.__country = new_value;
	}

	// Time period when address was/is in use.
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
			type: this.__type,
			text: this.__text,
			line: this.__line,
			city: this.__city,
			district: this.__district,
			state: this.__state,
			postalCode: this.__postalCode,
			country: this.__country,
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = Address;
