const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const ContactPoint = require('../types/ContactPoint');
const Address = require('../types/Address');
const Reference = require('../types/Reference');
const HumanName = require('../types/HumanName');

class Contact {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// purpose		0..1	CodeableConcept	The type of contact
	// ContactEntityType (Extensible)
	set purpose(purpose) {
		this._purpose = new CodeableConcept(purpose);
	}

	get purpose() {
		return this._purpose;
	}

	// name		0..1	HumanName	A name associated with the contact
	set name(name) {
		this._name = new HumanName(name);
	}

	get name() {
		return this._name;
	}

	// telecom		0..*	ContactPoint	Contact details (telephone, email, etc.) for a contact
	set telecom(telecom) {
		if (Array.isArray(telecom)) {
			this._telecom = telecom.map((i) => new ContactPoint(i));
		} else {
			this._telecom = [new ContactPoint(telecom)];
		}
	}

	get telecom() {
		return this._telecom;
	}

	// address		0..1	Address	Visiting or postal addresses for the contact
	set address(address) {
		this._address = new Address(address);
	}

	get address() {
		return this._address;
	}

	toJSON() {
		return {
			purpose: this._purpose,
			name: this._name,
			telecom: this._telecom,
			address: this._address,
		};
	}
}

class Organization extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Organization';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	ΣI	0..*	Identifier	Identifies this organization across multiple systems
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// active	?!Σ	0..1	boolean	Whether the organization's record is still in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// type	Σ	0..*	CodeableConcept	Kind of organization
	// OrganizationType (Example)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// name	ΣI	0..1	string	Name used for the organization
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// alias		0..*	string	A list of alternate names that the organization is known as, or was known as in the past
	set alias(alias) {
		this._alias = [].concat(alias);
	}

	get alias() {
		return this._alias;
	}

	// telecom	I	0..*	ContactPoint	A contact detail for the organization
	// + The telecom of an organization can never be of use 'home'
	set telecom(telecom) {
		if (Array.isArray(telecom)) {
			this._telecom = telecom.map((i) => new ContactPoint(i));
		} else {
			this._telecom = [new ContactPoint(telecom)];
		}
	}

	get telecom() {
		return this._telecom;
	}

	// address	I	0..*	Address	An address for the organization
	// + An address of an organization can never be of use 'home'
	set address(address) {
		if (Array.isArray(address)) {
			this._address = address.map((i) => new Address(i));
		} else {
			this._address = [new Address(address)];
		}
	}

	get address() {
		return this._address;
	}

	// partOf	Σ	0..1	Reference(Organization)	The organization of which this organization forms a part
	set partOf(partOf) {
		this._partOf = new Reference(partOf);
	}

	get partOf() {
		return this._partOf;
	}

	// contact		0..*	BackboneElement	Contact for the organization for a certain purpose
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new Contact(i));
		} else {
			this._contact = [new Contact(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// endpoint		0..*	Reference(Endpoint)	Technical endpoints providing access to services operated for the organization
	set endpoint(endpoint) {
		if (Array.isArray(endpoint)) {
			this._endpoint = endpoint.map((i) => new Reference(i));
		} else {
			this._endpoint = [new Reference(endpoint)];
		}
	}

	get endpoint() {
		return this._endpoint;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			type: this._type,
			name: this._name,
			alias: this._alias,
			telecom: this._telecom,
			address: this._address,
			partOf: this._partOf,
			contact: this._contact,
			endpoint: this._endpoint,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Organization = Organization;
module.exports.Contact = Contact;
