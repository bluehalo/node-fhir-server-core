const path = require('path');
const Code = require(path.resolve('./src/server/resources/types/Code'));
const Period = require(path.resolve('./src/server/resources/types/Period'));
const ContactPoint = require(path.resolve('./src/server/resources/types/ContactPoint'));
const Reference = require(path.resolve('./src/server/resources/types/Reference'));
const CodeableConcept = require(path.resolve('./src/server/resources/types/CodeableConcept'));
const HumanName = require(path.resolve('./src/server/resources/types/HumanName'));
const Address = require(path.resolve('./src/server/resources/types/Address'));


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

module.exports = PatientContact;
