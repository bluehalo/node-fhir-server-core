const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const HumanName = require('../types/HumanName');
const ContactPoint = require('../types/ContactPoint');
const Code = require('../types/Code');
const Address = require('../types/Address');
const Attachment = require('../types/Attachment');
const Reference = require('../types/Reference');

class Link {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// target		1..1	Reference(Patient | Practitioner | RelatedPerson | Person)	The resource to which this actual person is associated
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	// assurance		0..1	code	level1 | level2 | level3 | level4
	// IdentityAssuranceLevel (Required)
	set assurance(assurance) {
		this._assurance = new Code(assurance);
	}

	get assurance() {
		return this._assurance;
	}

	toJSON() {
		return {
			target: this._target,
			assurance: this._assurance,
		};
	}
}

class Person extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Person';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	A human identifier for this person
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

	// birthDate	Σ	0..1	date	The date on which the person was born
	set birthDate(birthDate) {
		this._birthDate = birthDate;
	}

	get birthDate() {
		return this._birthDate;
	}

	// address		0..*	Address	One or more addresses for the person
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

	// photo		0..1	Attachment	Image of the person
	set photo(photo) {
		this._photo = new Attachment(photo);
	}

	get photo() {
		return this._photo;
	}

	// managingOrganization	Σ	0..1	Reference(Organization)	The organization that is the custodian of the person record
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// active	?!Σ	0..1	boolean	This person's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// link		0..*	BackboneElement	Link to a resource that concerns the same actual person
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
			name: this._name,
			telecom: this._telecom,
			gender: this._gender,
			birthDate: this._birthDate,
			address: this._address,
			photo: this._photo,
			managingOrganization: this._managingOrganization,
			active: this._active,
			link: this._link,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Person = Person;
module.exports.Link = Link;
