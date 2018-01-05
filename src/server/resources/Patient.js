const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const HumanName = require('./types/HumanName');
const ContactPoint = require('./types/ContactPoint');
const CodeableConcept = require('./types/CodeableConcept');
const Address = require('./types/Address');
const Attachment = require('./types/Attachment');
const Period = require('./types/Period');

class Link {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// other	?!	1..1	Reference(Patient)	The other patient resource that the link refers to
	set other(other) {
		this._other = new Reference(other);
	}

	get other() {
		return this._other;
	}

	// type	?!	1..1	code	replace | refer | seealso - type of link
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
			type: this._type
		};
	}

}

class Communication {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// language		1..1	CodeableConcept	The language which can be used to communicate with the patient about his or her health
	// Language  (Required)
	set language(language) {
		this._language = language;
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
			preferred: this._preferred
		};
	}
}

class PatientContact {

	constructor(obj) {
		Object.assign(this, obj);
	}

	// relationship		0..*	CodeableConcept	The kind of relationship
	// PatientContactRelationship (Extensible)
	set relationship(relationship) {
		if (Array.isArray(relationship)) {
			this._relationship = relationship.map((x) => new CodeableConcept(x));
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
			this._telecom = telecom.map((x) => new ContactPoint(x));
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
	//  AdministrativeGender (Required)
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
			period: this._period
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

	// identifier		0..*	Identifier	Unique Id for this particular observation
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((x) => new Identifier(x));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// ?! Σ	0..1	boolean	Whether this patient's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// Σ	0..*	HumanName	A name associated with the patient
	set name(name) {
		if (Array.isArray(name)) {
			this._name = name.map((x) => new HumanName(x));
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
			this._telecom = telecom.map((x) => new ContactPoint(x));
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

	// ?! Σ	0..1		Indicates if the individual is deceased or not
	// deceasedBoolean			boolean
	set deceasedBoolean(deceasedBoolean) {
		this._deceasedBoolean = deceasedBoolean;
	}

	get deceasedBoolean() {
		return this._deceasedBoolean;
	}

	// ?! Σ	0..1		Indicates if the individual is deceased or not
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
			this._address = address.map((x) => new Address(x));
		} else {
			this._address = [new Address(address)];
		}
	}

	get address() {
		return this._address;
	}

	// maritalStatus		0..1	CodeableConcept	Marital (civil) status of a patient
	// Marital Status Codes (Required)
	set maritalStatus(maritalStatus) {
		this._maritalStatus = new CodeableConcept(maritalStatus);
	}

	get maritalStatus() {
		return this._maritalStatus;
	}

	// 0..1		Whether patient is part of a multiple birth
	// multipleBirthBoolean			boolean
	set multipleBirthBoolean(multipleBirthBoolean) {
		this._multipleBirthBoolean = multipleBirthBoolean;
	}

	get multipleBirthBoolean() {
		return this._multipleBirthBoolean;
	}

	// 0..1		Whether patient is part of a multiple birth
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
			this._photo = photo.map((x) => new Attachment(x));
		} else {
			this._photo = [new Attachment(photo)];
		}
	}

	get photo() {
		return this._photo;
	}

	// contact	I	0..*	BackboneElement	A contact party (e.g. guardian, partner, friend) for the patient
	// SHALL at least contain a contact's details or a reference to an organization
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((x) => new PatientContact(x));
		} else {
			this._contact = [new PatientContact(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// animal	?! Σ	0..1	BackboneElement	This patient is known to be an animal (non-human)
	set animal(animal) {
		this._animal = animal;
	}

	get animal() {
		return this._animal;
	}

	// communication		0..*	BackboneElement	A list of Languages which may be used to communicate with the patient about his or her health
	set communication(communication) {
		if (Array.isArray(communication)) {
			this._communication = communication.map((x) => new Communication(x));
		} else {
			this._communication = [new Communication(communication)];
		}
	}

	get communication() {
		return this._communication;
	}

	// careProvider		0..*	Reference(Organization | Practitioner)	Patient's nominated primary care provider
	set careProvider(careProvider) {
		if (Array.isArray(careProvider)) {
			this._careProvider = careProvider.map((x) => new Reference(x));
		} else {
			this._careProvider = [new Reference(careProvider)];
		}
	}

	get careProvider() {
		return this._careProvider;
	}

	// managingOrganization	Σ	0..1	Reference(Organization)	Organization that is the custodian of the patient record
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// link	?!	0..*	BackboneElement	Link to another patient resource that concerns the same actual person
	set link(link) {
		if (Array.isArray(link)) {
			this._link = link.map((x) => new Link(x));
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
			careProvider: this._careProvider,
			managingOrganization: this._managingOrganization,
			link: this._link
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Patient = Patient;
module.exports.Communication = Communication;
module.exports.PatientContact = PatientContact;

