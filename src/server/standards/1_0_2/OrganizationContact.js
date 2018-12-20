const BackboneElement = require('./BackboneElement');

class OrganizationContact extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OrganizationContact';
		Object.assign(this, opt);
	}

	// This is a OrganizationContact resource
	static get __resourceType() {
		return 'OrganizationContact';
	}

	// Indicates a purpose for which the contact can be reached.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__purpose = new CodeableConcept(new_value);
	}

	// A name associated with the contact.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		const HumanName = require('./HumanName');
		this.__name = new HumanName(new_value);
	}

	// A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// Visiting or postal addresses for the contact.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = new Address(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			purpose: this.__purpose && this.__purpose.toJSON(),
			name: this.__name && this.__name.toJSON(),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			address: this.__address && this.__address.toJSON(),
		});
	}
}

module.exports = OrganizationContact;
