const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const HumanName = require('../types/HumanName');
const ContactPoint = require('../types/ContactPoint');
const Code = require('../types/Code');
const Address = require('../types/Address');
const Attachment = require('../types/Attachment');
const Period = require('../types/Period');

class RelatedPerson extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'RelatedPerson';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	A human identifier for this person
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

	// active	?!Σ	0..1	boolean	Whether this related person's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// patient	Σ	1..1	Reference(Patient)	The patient this person is related to
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// relationship	Σ	0..1	CodeableConcept	The nature of the relationship
	// PatientRelationshipType (Preferred)
	set relationship(relationship) {
		this._relationship = new CodeableConcept(relationship);
	}

	get relationship() {
		return this._relationship;
	}

	// name	Σ	0..*	HumanName	A name associated with the person
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

	// telecom	Σ	0..*	ContactPoint	A contact detail for the person
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

	// birthDate	Σ	0..1	date	The date on which the related person was born
	set birthDate(birthDate) {
		this._birthDate = birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	// address	Σ	0..*	Address	Address where the related person can be contacted or visited
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

	// photo		0..*	Attachment	Image of the person
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

	// period		0..1	Period	Period of time that this relationship is considered valid
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			patient: this._patient,
			relationship: this._relationship,
			name: this._name,
			telecom: this._telecom,
			gender: this._gender,
			birthDate: this._birthDate,
			address: this._address,
			photo: this._photo,
			period: this._period,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.RelatedPerson = RelatedPerson;
