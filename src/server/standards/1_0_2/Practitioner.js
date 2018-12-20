const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');

class Practitioner extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Practitioner';
		Object.assign(this, opt);
	}

	// This is a Practitioner resource
	static get __resourceType() {
		return 'Practitioner';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Practitioner = new_value;
	}

	// An identifier that applies to this person in this role.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Whether this practitioner\'s record is in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// A name associated with the person.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		const HumanName = require('./HumanName');
		this.__name = new HumanName(new_value);
	}

	// A contact detail for the practitioner, e.g. a telephone number or an email address.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// The postal address where the practitioner can be found or visited or to which mail can be delivered.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
	get gender() {
		return this.__gender;
	}

	set gender(new_value) {
		this.__gender = new_value;
	}

	// The date of birth for the practitioner.
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

	// Image of the person.
	get photo() {
		return this.__photo;
	}

	set photo(new_value) {
		const Attachment = require('./Attachment');
		this.__photo = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	// The list of roles/organizations that the practitioner is associated with.
	get practitionerRole() {
		return this.__practitionerRole;
	}

	set practitionerRole(new_value) {
		const PractitionerPractitionerRole = require('./PractitionerPractitionerRole');
		this.__practitionerRole = Array.isArray(new_value)
			? new_value.map(val => new PractitionerPractitionerRole(val))
			: [new PractitionerPractitionerRole(new_value)];
	}

	// Qualifications obtained by training and certification.
	get qualification() {
		return this.__qualification;
	}

	set qualification(new_value) {
		const PractitionerQualification = require('./PractitionerQualification');
		this.__qualification = Array.isArray(new_value)
			? new_value.map(val => new PractitionerQualification(val))
			: [new PractitionerQualification(new_value)];
	}

	// A language the practitioner is able to use in patient communication.
	get communication() {
		return this.__communication;
	}

	set communication(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__communication = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			name: this.__name && this.__name.toJSON(),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			address: this.__address && this.__address.map(v => v.toJSON()),
			gender: this.__gender,
			birthDate: this.__birthDate,
			photo: this.__photo && this.__photo.map(v => v.toJSON()),
			practitionerRole: this.__practitionerRole && this.__practitionerRole.map(v => v.toJSON()),
			qualification: this.__qualification && this.__qualification.map(v => v.toJSON()),
			communication: this.__communication && this.__communication.map(v => v.toJSON()),
		});
	}
}

module.exports = Practitioner;
