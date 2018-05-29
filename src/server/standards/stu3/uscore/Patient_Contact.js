const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const HumanName = require('./HumanName');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Reference = require('./Reference');
const Period = require('./Period');

class Patient_Contact extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Patient_Contact';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Patient_Contact';
	}

	// The nature of the relationship between the patient and the contact person.
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		this._relationship = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A name associated with the contact person.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new HumanName(new_value);
	}

	// A contact detail for the person, e.g. a telephone number or an email address.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// Address for the contact person.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = new Address(new_value);
	}

	// Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
	get gender () {
		return this._gender;
	}

	set gender ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['male', 'female', 'other', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field gender`);
		}
		this._gender = new_value;
	}

	// Organization on behalf of which the contact is acting or for which the contact is working.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// The period during which this contact person or organization is valid to be contacted relating to this patient.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			relationship: this._relationship && this._relationship.map(v => v.toJSON()),
			name: this._name && this._name.toJSON(),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			address: this._address && this._address.toJSON(),
			gender: this._gender,
			organization: this._organization && this._organization.toJSON(),
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = Patient_Contact;
