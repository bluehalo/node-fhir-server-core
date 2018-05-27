const Element = require('./Element');
const Period = require('./Period');

class Address extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Address';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Address';
	}

	// The purpose of this address.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['home', 'work', 'temp', 'old'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field use`);
		}
		this._use = new_value;
	}

	// Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['postal', 'physical', 'both'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// A full text representation of the address.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
	get line () {
		return this._line;
	}

	set line ( new_value ) {
		this._line = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The name of the city, town, village or other community or delivery center.
	get city () {
		return this._city;
	}

	set city ( new_value ) {
		this._city = new_value;
	}

	// The name of the administrative area (county).
	get district () {
		return this._district;
	}

	set district ( new_value ) {
		this._district = new_value;
	}

	// Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
	get state () {
		return this._state;
	}

	set state ( new_value ) {
		this._state = new_value;
	}

	// A postal code designating a region defined by the postal service.
	get postalCode () {
		return this._postalCode;
	}

	set postalCode ( new_value ) {
		this._postalCode = new_value;
	}

	// Country - a nation as commonly understood or generally accepted.
	get country () {
		return this._country;
	}

	set country ( new_value ) {
		this._country = new_value;
	}

	// Time period when address was/is in use.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			use: this.use,
			type: this.type,
			text: this.text,
			line: this.line,
			city: this.city,
			district: this.district,
			state: this.state,
			postalCode: this.postalCode,
			country: this.country,
			period: this.period && this.period.toJSON()
		});
	}

}

module.exports = Address;
