const Element = require('./Element');
const Period = require('./Period');

class ContactPoint extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ContactPoint';
	}

	// Telecommunications form for contact point - what communications system is required to make use of the contact.
	get system () {
		return this._system;
	}

	set system ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field system`);
		}
		this._system = new_value;
	}

	// The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	// Identifies the purpose for the contact point.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['home', 'work', 'temp', 'old', 'mobile'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field use`);
		}
		this._use = new_value;
	}

	// Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
	get rank () {
		return this._rank;
	}

	set rank ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field rank`);
		}
		this._rank = new_value;
	}

	// Time period when the contact point was/is in use.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			system: this._system,
			value: this._value,
			use: this._use,
			rank: this._rank,
			period: this._period
		});
	}

}

module.exports = ContactPoint;
