const DomainResource = require('../../base/types/DomainResource');
const Meta = require('../../base/types/Meta');
const Code = require('../../base/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../base/types/Resource');
const Extension = require('../../base/types/Extension');
const Identifier = require('../types/Identifier');
const HumanName = require('../types/HumanName');
const ContactPoint = require('../../base/types/ContactPoint');
const Address = require('../types/Address');
const CodeableConcept = require('../../base/types/CodeableConcept');
const Attachment = require('../../base/types/Attachment');
const Reference = require('../../base/types/Reference');
const Period = require('../../base/types/Period');

class Link {
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

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
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

	// other	Î£	1..1	Reference(Patient), Reference(RelatedPerson)	The other patient or related person resource that the link refers to
	set other(other) {
		this._other = new Reference(other);
	}

	get other() {
		return this._other;
	}

	// type	Î£	1..1	code	replaced-by | replaces | refer | seealso - type of link
	// Binding: LinkType (required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			other: this._other,
			type: this._type,
		};
	}
}

class Communication {
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

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
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

	// language	S	1..1	CodeableConcept	The language which can be used to communicate with the patient about his or her health
	// Binding: Language codes with language and optionally a region modifier (extensible)
	set language(language) {
		this._language = new CodeableConcept(language);
	}

	get language() {
		return this._language;
	}

	// preferred		0..1	boolean	Language preference indicator
	set preferred(preferred) {
		this._preferred = preferred;
	}

	get preferred() {
		return this._preferred;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			language: this._language,
			preferred: this._preferred,
		};
	}
}

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

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
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

	// relationship		0..*	CodeableConcept	The kind of relationship
	// Binding: v2 Contact Role (extensible)
	set relationship(relationship) {
		if (Array.isArray(relationship)) {
			this._relationship = relationship.map((i) => new CodeableConcept(i));
		} else {
			this._relationship = [new CodeableConcept(relationship)];
		}
	}

	get relationship() {
		return this._relationship;
	}

	// name		0..1	HumanName	A name associated with the contact person
	set name(name) {
		this._name = new HumanName(name);
	}

	get name() {
		return this._name;
	}

	// telecom		0..*	ContactPoint	A contact detail for the person
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

	// address		0..1	Address	Address for the contact person
	set address(address) {
		this._address = new Address(address);
	}

	get address() {
		return this._address;
	}

	// gender		0..1	code	male | female | other | unknown
	// Binding: AdministrativeGender (required)
	set gender(gender) {
		this._gender = new Code(gender);
	}

	get gender() {
		return this._gender;
	}

	// organization	I	0..1	Reference(Organization)	Organization that is associated with the contact
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// period		0..1	Period	The period during which this contact person or organization is valid to be contacted relating to this patient
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			relationship: this._relationship,
			name: this._name,
			telecom: this._telecom,
			address: this._address,
			gender: this._gender,
			organization: this._organization,
			period: this._period,
		};
	}
}

class Patient extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Patient';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	Î£	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Î£	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Î£	0..1	uri	A set of rules under which this content was created
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

	// uscorerace	S	0..1	(Complex)	Extension
	// URL: http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
	set uscorerace(uscorerace) {
		this._uscorerace = uscorerace;
	}

	get uscorerace() {
		return this._uscorerace;
	}

	// uscoreethnicity	S	0..1	(Complex)	Extension
	// URL: http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity
	set uscoreethnicity(uscoreethnicity) {
		this._uscoreethnicity = uscoreethnicity;
	}

	get uscoreethnicity() {
		return this._uscoreethnicity;
	}

	// uscorebirthsex	S	0..1	code	Extension
	// URL: http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
	// Binding: US Core Birth Sex Value Set (required)
	set uscorebirthsex(uscorebirthsex) {
		this._uscorebirthsex = new Code(uscorebirthsex);
	}

	get uscorebirthsex() {
		return this._uscorebirthsex;
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

	// identifier	SÎ£	1..*	Identifier	An identifier for this patient
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

	// active	?!Î£	0..1	boolean	Whether this patient's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// name	SÎ£	1..*	HumanName	A name associated with the patient
	set name(name) {
		if (Array.isArray(name)) {
			this._name = name.map((i) => new HumanName(i));
		} else {
			this._name = [new HumanName(name)];
		}
	}

	get name() {
		return this._name;
	}

	// telecom	Î£	0..*	ContactPoint	A contact detail for the individual
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

	// gender	SÎ£	1..1	code	male | female | other | unknown
	// Binding: AdministrativeGender (required)
	set gender(gender) {
		this._gender = new Code(gender);
	}

	get gender() {
		return this._gender;
	}

	// birthDate	SÎ£	0..1	date	The date of birth for the individual
	set birthDate(birthDate) {
		this._birthDate = birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	// deceased[x]	?!Î£	0..1	boolean, dateTime	Indicates if the individual is deceased or not
	// address	Î£	0..*	Address	Addresses for the individual
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

	// maritalStatus		0..1	CodeableConcept	Marital (civil) status of a patient
	// Binding: Marital Status Codes (extensible)
	set maritalStatus(maritalStatus) {
		this._maritalStatus = new CodeableConcept(maritalStatus);
	}

	get maritalStatus() {
		return this._maritalStatus;
	}

	// multipleBirth[x]		0..1	boolean, integer	Whether patient is part of a multiple birth
	// photo		0..*	Attachment	Image of the patient
	set photo(photo) {
		if (Array.isArray(photo)) {
			this._photo = photo.map((i) => new Attachment(i));
		} else {
			this._photo = [new Attachment(photo)];
		}
	}

	get photo() {
		return this._photo;
	}

	// contact	I	0..*	BackboneElement	A contact party (e.g. guardian, partner, friend) for the patient
	// pat-1: SHALL at least contain a contact's details or a reference to an organization
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

	// communication	SI	0..*	BackboneElement	A list of Languages which may be used to communicate with the patient about his or her health
	set communication(communication) {
		if (Array.isArray(communication)) {
			this._communication = communication.map((i) => new Communication(i));
		} else {
			this._communication = [new Communication(communication)];
		}
	}

	get communication() {
		return this._communication;
	}

	// generalPractitioner		0..*	Reference(Organization), Reference(Practitioner)	Patient's nominated primary care provider
	set generalPractitioner(generalPractitioner) {
		if (Array.isArray(generalPractitioner)) {
			this._generalPractitioner = generalPractitioner.map((i) => new Reference(i));
		} else {
			this._generalPractitioner = [new Reference(generalPractitioner)];
		}
	}

	get generalPractitioner() {
		return this._generalPractitioner;
	}

	// managingOrganization	Î£	0..1	Reference(Organization)	Organization that is the custodian of the patient record
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// link	?!Î£I	0..*	BackboneElement	Link to another patient resource that concerns the same actual person
	set link(link) {
		if (Array.isArray(link)) {
			this._link = link.map((i) => new Link(i));
		} else {
			this._link = [new Link(link)];
		}
	}

	get link() {
		return this._link;
	}

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			uscorerace: this._uscorerace,
			uscoreethnicity: this._uscoreethnicity,
			uscorebirthsex: this._uscorebirthsex,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			active: this._active,
			name: this._name,
			telecom: this._telecom,
			gender: this._gender,
			birthDate: this._birthDate,
			address: this._address,
			maritalStatus: this._maritalStatus,
			photo: this._photo,
			contact: this._contact,
			communication: this._communication,
			generalPractitioner: this._generalPractitioner,
			managingOrganization: this._managingOrganization,
			link: this._link,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Patient = Patient;
module.exports.Contact = Contact;
module.exports.Communication = Communication;
module.exports.Link = Link;
