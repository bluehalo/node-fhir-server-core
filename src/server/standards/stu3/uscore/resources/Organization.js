const DomainResource = require('../../base/types/DomainResource');
const Meta = require('../../base/types/Meta');
const Code = require('../../base/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../base/types/Resource');
const Extension = require('../../base/types/Extension');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../../base/types/CodeableConcept');
const ContactPoint = require('../../base/types/ContactPoint');
const Address = require('../types/Address');
const Reference = require('../../base/types/Reference');
const HumanName = require('../types/HumanName');

class Contact {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!Σ	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// purpose		0..1	CodeableConcept	The type of contact
	// Binding: ContactEntityType (extensible)
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
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
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

	// id	Σ	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Σ	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Σ	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier	SΣI	1..*	Identifier	Identifies this organization across multiple systems
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

	// active	?!SΣ	1..1	boolean	Whether the organization's record is still in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// type	Σ	0..*	CodeableConcept	Kind of organization
	// Binding: OrganizationType (example)
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

	// name	SΣI	1..1	string	Name used for the organization
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

	// telecom	SI	1..*	ContactPoint	A contact detail for the organization
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

	// address	SI	1..*	Address	An address for the organization
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

	// contact	I	0..*	BackboneElement	Contact for the organization for a certain purpose
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

	// endpoint	S	0..*	Reference(Endpoint)	Technical endpoints providing access to services operated for the organization
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
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
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
