const DomainResource = require('./DomainResource');

class Organization extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Organization';
		Object.assign(this, opt);
	}

	// This is a Organization resource
	static get __resourceType() {
		return 'Organization';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Organization = new_value;
	}

	// Identifier for the organization that is used to identify the organization across multiple disparate systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Whether the organization\'s record is still in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// The kind of organization that this is.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// A name associated with the organization.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A contact detail for the organization.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// An address for the organization.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// The organization of which this organization forms a part.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = new Reference(new_value);
	}

	// Contact for the organization for a certain purpose.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const OrganizationContact = require('./OrganizationContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new OrganizationContact(val))
			: [new OrganizationContact(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			type: this.__type && this.__type.toJSON(),
			name: this.__name,
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			address: this.__address && this.__address.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.toJSON(),
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
		});
	}
}

module.exports = Organization;
