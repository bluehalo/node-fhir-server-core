const Element = require('./Element');

class ContactDetail extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContactDetail';
		Object.assign(this, opt);
	}

	// This is a ContactDetail resource
	static get __resourceType() {
		return 'ContactDetail';
	}

	// The name of an individual to contact.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The contact details for the individual (if a name was provided) or the organization.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
		});
	}
}

module.exports = ContactDetail;
