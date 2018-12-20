const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');

class RelatedPerson extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RelatedPerson';
		Object.assign(this, opt);
	}

	// This is a RelatedPerson resource
	static get __resourceType() {
		return 'RelatedPerson';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__RelatedPerson = new_value;
	}

	// Identifier for a person within a particular scope.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Whether this related person record is in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// The patient this person is related to.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The nature of the relationship between a patient and the related person.
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__relationship = new CodeableConcept(new_value);
	}

	// A name associated with the person.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		const HumanName = require('./HumanName');
		this.__name = Array.isArray(new_value) ? new_value.map(val => new HumanName(val)) : [new HumanName(new_value)];
	}

	// A contact detail for the person, e.g. a telephone number or an email address.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
	get gender() {
		return this.__gender;
	}

	set gender(new_value) {
		this.__gender = new_value;
	}

	// The date on which the related person was born.
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

	// Address where the related person can be contacted or visited.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// Image of the person.
	get photo() {
		return this.__photo;
	}

	set photo(new_value) {
		const Attachment = require('./Attachment');
		this.__photo = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	// The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			patient: this.__patient && this.__patient.toJSON(),
			relationship: this.__relationship && this.__relationship.toJSON(),
			name: this.__name && this.__name.map(v => v.toJSON()),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			gender: this.__gender,
			birthDate: this.__birthDate,
			address: this.__address && this.__address.map(v => v.toJSON()),
			photo: this.__photo && this.__photo.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = RelatedPerson;
