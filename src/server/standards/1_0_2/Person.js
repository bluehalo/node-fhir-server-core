const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');

class Person extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Person';
		Object.assign(this, opt);
	}

	// This is a Person resource
	static get __resourceType() {
		return 'Person';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Person = new_value;
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

	// Administrative Gender.
	get gender() {
		return this.__gender;
	}

	set gender(new_value) {
		this.__gender = new_value;
	}

	// The birth date for the person.
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

	// One or more addresses for the person.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
	get photo() {
		return this.__photo;
	}

	set photo(new_value) {
		const Attachment = require('./Attachment');
		this.__photo = new Attachment(new_value);
	}

	// The organization that is the custodian of the person record.
	get managingOrganization() {
		return this.__managingOrganization;
	}

	set managingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__managingOrganization = new Reference(new_value);
	}

	// Whether this person\'s record is in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// Link to a resource that concerns the same actual person.
	get link() {
		return this.__link;
	}

	set link(new_value) {
		const PersonLink = require('./PersonLink');
		this.__link = Array.isArray(new_value) ? new_value.map(val => new PersonLink(val)) : [new PersonLink(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			name: this.__name && this.__name.map(v => v.toJSON()),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			gender: this.__gender,
			birthDate: this.__birthDate,
			address: this.__address && this.__address.map(v => v.toJSON()),
			photo: this.__photo && this.__photo.toJSON(),
			managingOrganization: this.__managingOrganization && this.__managingOrganization.toJSON(),
			active: this.__active,
			link: this.__link && this.__link.map(v => v.toJSON()),
		});
	}
}

module.exports = Person;
