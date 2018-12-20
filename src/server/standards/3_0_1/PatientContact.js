const BackboneElement = require('./BackboneElement');

class PatientContact extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PatientContact';
		Object.assign(this, opt);
	}

	// This is a PatientContact resource
	static get __resourceType() {
		return 'PatientContact';
	}

	// The nature of the relationship between the patient and the contact person.
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__relationship = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A name associated with the contact person.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		const HumanName = require('./HumanName');
		this.__name = new HumanName(new_value);
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

	// Address for the contact person.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = new Address(new_value);
	}

	// Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
	get gender() {
		return this.__gender;
	}

	set gender(new_value) {
		this.__gender = new_value;
	}

	// Organization on behalf of which the contact is acting or for which the contact is working.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// The period during which this contact person or organization is valid to be contacted relating to this patient.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			relationship: this.__relationship && this.__relationship.map(v => v.toJSON()),
			name: this.__name && this.__name.toJSON(),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			address: this.__address && this.__address.toJSON(),
			gender: this.__gender,
			organization: this.__organization && this.__organization.toJSON(),
			period: this.__period && this.__period.toJSON(),
		});
	}
}

module.exports = PatientContact;
