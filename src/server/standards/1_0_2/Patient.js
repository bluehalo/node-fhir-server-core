const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Patient extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Patient';
		Object.assign(this, opt);
	}

	// This is a Patient resource
	static get __resourceType() {
		return 'Patient';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Patient = new_value;
	}

	// An identifier for this patient.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Whether this patient record is in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// A name associated with the individual.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		const HumanName = require('./HumanName');
		this.__name = Array.isArray(new_value) ? new_value.map(val => new HumanName(val)) : [new HumanName(new_value)];
	}

	// A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
	get gender() {
		return this.__gender;
	}

	set gender(new_value) {
		this.__gender = new_value;
	}

	// The date of birth for the individual.
	get birthDate() {
		return this.__birthDate;
	}

	set birthDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field birthDate`);
		}
		this.__birthDate = new_value;
	}

	// Indicates if the individual is deceased or not.
	get deceasedBoolean() {
		return this.__deceasedBoolean;
	}

	set deceasedBoolean(new_value) {
		this.__deceasedBoolean = new_value;
	}

	// Indicates if the individual is deceased or not.
	get deceasedDateTime() {
		return this.__deceasedDateTime;
	}

	set deceasedDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field deceasedDateTime`);
		}
		this.__deceasedDateTime = new_value;
	}

	// Addresses for the individual.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// This field contains a patient\'s most recent marital (civil) status.
	get maritalStatus() {
		return this.__maritalStatus;
	}

	set maritalStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__maritalStatus = new CodeableConcept(new_value);
	}

	// Indicates whether the patient is part of a multiple or indicates the actual birth order.
	get multipleBirthBoolean() {
		return this.__multipleBirthBoolean;
	}

	set multipleBirthBoolean(new_value) {
		this.__multipleBirthBoolean = new_value;
	}

	// Indicates whether the patient is part of a multiple or indicates the actual birth order.
	get multipleBirthInteger() {
		return this.__multipleBirthInteger;
	}

	set multipleBirthInteger(new_value) {
		this.__multipleBirthInteger = new_value;
	}

	// Image of the patient.
	get photo() {
		return this.__photo;
	}

	set photo(new_value) {
		const Attachment = require('./Attachment');
		this.__photo = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	// A contact party (e.g. guardian, partner, friend) for the patient.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const PatientContact = require('./PatientContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new PatientContact(val))
			: [new PatientContact(new_value)];
	}

	// This patient is known to be an animal.
	get animal() {
		return this.__animal;
	}

	set animal(new_value) {
		const PatientAnimal = require('./PatientAnimal');
		this.__animal = new PatientAnimal(new_value);
	}

	// Languages which may be used to communicate with the patient about his or her health.
	get communication() {
		return this.__communication;
	}

	set communication(new_value) {
		const PatientCommunication = require('./PatientCommunication');
		this.__communication = Array.isArray(new_value)
			? new_value.map(val => new PatientCommunication(val))
			: [new PatientCommunication(new_value)];
	}

	// Patient\'s nominated care provider.
	get careProvider() {
		return this.__careProvider;
	}

	set careProvider(new_value) {
		const Reference = require('./Reference');
		this.__careProvider = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Organization that is the custodian of the patient record.
	get managingOrganization() {
		return this.__managingOrganization;
	}

	set managingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__managingOrganization = new Reference(new_value);
	}

	// Link to another patient resource that concerns the same actual patient.
	get link() {
		return this.__link;
	}

	set link(new_value) {
		const PatientLink = require('./PatientLink');
		this.__link = Array.isArray(new_value) ? new_value.map(val => new PatientLink(val)) : [new PatientLink(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			name: this.__name && this.__name.map(v => v.toJSON()),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			gender: this.__gender,
			birthDate: this.__birthDate,
			deceasedBoolean: this.__deceasedBoolean,
			deceasedDateTime: this.__deceasedDateTime,
			address: this.__address && this.__address.map(v => v.toJSON()),
			maritalStatus: this.__maritalStatus && this.__maritalStatus.toJSON(),
			multipleBirthBoolean: this.__multipleBirthBoolean,
			multipleBirthInteger: this.__multipleBirthInteger,
			photo: this.__photo && this.__photo.map(v => v.toJSON()),
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			animal: this.__animal && this.__animal.toJSON(),
			communication: this.__communication && this.__communication.map(v => v.toJSON()),
			careProvider: this.__careProvider && this.__careProvider.map(v => v.toJSON()),
			managingOrganization: this.__managingOrganization && this.__managingOrganization.toJSON(),
			link: this.__link && this.__link.map(v => v.toJSON()),
		});
	}
}

module.exports = Patient;
