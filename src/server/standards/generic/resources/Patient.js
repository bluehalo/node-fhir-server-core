const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const HumanName = require('../types/HumanName');
const ContactPoint = require('../types/ContactPoint');
const Code = require('../types/Code');
const Address = require('../types/Address');
const CodeableConcept = require('../types/CodeableConcept');
const Attachment = require('../types/Attachment');
const Reference = require('../types/Reference');
const Period = require('../types/Period');

class Link {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// other	Σ	1..1	Reference(Patient | RelatedPerson)	The other patient or related person resource that the link refers to
	set other(other) {
		this._other = new Reference(other);
	}

	get other() {
		return this._other;
	}

	// type	Σ	1..1	code	replaced-by | replaces | refer | seealso - type of link
	// LinkType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	toJSON() {
		return {
			other: this._other,
			type: this._type,
		};
	}
}

class Communication {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// language		1..1	CodeableConcept	The language which can be used to communicate with the patient about his or her health
	// Common Languages (Extensible but limited to All Languages)
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
			language: this._language,
			preferred: this._preferred,
		};
	}
}

class Animal {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// species	Σ	1..1	CodeableConcept	E.g. Dog, Cow
	// AnimalSpecies (Example)
	set species(species) {
		this._species = new CodeableConcept(species);
	}

	get species() {
		return this._species;
	}

	// breed	Σ	0..1	CodeableConcept	E.g. Poodle, Angus
	// AnimalBreeds (Example)
	set breed(breed) {
		this._breed = new CodeableConcept(breed);
	}

	get breed() {
		return this._breed;
	}

	// genderStatus	Σ	0..1	CodeableConcept	E.g. Neutered, Intact
	// GenderStatus (Example)
	set genderStatus(genderStatus) {
		this._genderStatus = new CodeableConcept(genderStatus);
	}

	get genderStatus() {
		return this._genderStatus;
	}

	toJSON() {
		return {
			species: this._species,
			breed: this._breed,
			genderStatus: this._genderStatus,
		};
	}
}

class Contact {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// relationship		0..*	CodeableConcept	The kind of relationship
	// v2 Contact Role (Extensible)
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
	// AdministrativeGender (Required)
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

	// identifier	Σ	0..*	Identifier	An identifier for this patient
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

	// active	?!Σ	0..1	boolean	Whether this patient's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// name	Σ	0..*	HumanName	A name associated with the patient
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

	// telecom	Σ	0..*	ContactPoint	A contact detail for the individual
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

	// gender	Σ	0..1	code	male | female | other | unknown
	// AdministrativeGender (Required)
	set gender(gender) {
		this._gender = new Code(gender);
	}

	get gender() {
		return this._gender;
	}

	// birthDate	Σ	0..1	date	The date of birth for the individual
	set birthDate(birthDate) {
		this._birthDate = birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	// deceased[x]	?!Σ	0..1		Indicates if the individual is deceased or not
	// deceasedBoolean			boolean
	set deceasedBoolean(deceasedBoolean) {
		this._deceasedBoolean = deceasedBoolean;
	}

	get deceasedBoolean() {
		return this._deceasedBoolean;
	}

	// deceasedDateTime			dateTime
	set deceasedDateTime(deceasedDateTime) {
		this._deceasedDateTime = deceasedDateTime;
	}

	get deceasedDateTime() {
		return this._deceasedDateTime;
	}

	// address	Σ	0..*	Address	Addresses for the individual
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
	// Marital Status Codes (Extensible)
	set maritalStatus(maritalStatus) {
		this._maritalStatus = new CodeableConcept(maritalStatus);
	}

	get maritalStatus() {
		return this._maritalStatus;
	}

	// multipleBirth[x]		0..1		Whether patient is part of a multiple birth
	// multipleBirthBoolean			boolean
	set multipleBirthBoolean(multipleBirthBoolean) {
		this._multipleBirthBoolean = multipleBirthBoolean;
	}

	get multipleBirthBoolean() {
		return this._multipleBirthBoolean;
	}

	// multipleBirthInteger			integer
	set multipleBirthInteger(multipleBirthInteger) {
		this._multipleBirthInteger = multipleBirthInteger;
	}

	get multipleBirthInteger() {
		return this._multipleBirthInteger;
	}

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
	// + SHALL at least contain a contact's details or a reference to an organization
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

	// animal	?!Σ	0..1	BackboneElement	This patient is known to be an animal (non-human)
	set animal(animal) {
		this._animal = new Animal(animal);
	}

	get animal() {
		return this._animal;
	}

	// communication		0..*	BackboneElement	A list of Languages which may be used to communicate with the patient about his or her health
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

	// generalPractitioner		0..*	Reference(Organization | Practitioner)	Patient's nominated primary care provider
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

	// managingOrganization	Σ	0..1	Reference(Organization)	Organization that is the custodian of the patient record
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// link	?!Σ	0..*	BackboneElement	Link to another patient resource that concerns the same actual person
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
			identifier: this._identifier,
			active: this._active,
			name: this._name,
			telecom: this._telecom,
			gender: this._gender,
			birthDate: this._birthDate,
			deceasedBoolean: this._deceasedBoolean,
			deceasedDateTime: this._deceasedDateTime,
			address: this._address,
			maritalStatus: this._maritalStatus,
			multipleBirthBoolean: this._multipleBirthBoolean,
			multipleBirthInteger: this._multipleBirthInteger,
			photo: this._photo,
			contact: this._contact,
			animal: this._animal,
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
module.exports.Animal = Animal;
module.exports.Communication = Communication;
module.exports.Link = Link;
