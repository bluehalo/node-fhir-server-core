const Element = require('./Element');
const ContactPoint = require('./ContactPoint');

class ContactDetail extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ContactDetail';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ContactDetail';
	}

	// The name of an individual to contact.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The contact details for the individual (if a name was provided) or the organization.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this.name,
			telecom: this.telecom && this.telecom.map(v => v.toJSON())
		});
	}

}

module.exports = ContactDetail;
