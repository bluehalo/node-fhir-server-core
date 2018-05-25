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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._relationship = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A name associated with the contact person.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._name = new HumanName(new_value);
	}

	// A contact detail for the person, e.g. a telephone number or an email address.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// Address for the contact person.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._address = new Address(new_value);
	}

	// Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
	get gender () {
		return this._gender;
	}

	set gender ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['male', 'female', 'other', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field gender`);
		}
		this._gender = new_value;
	}

	// Organization on behalf of which the contact is acting or for which the contact is working.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._organization = new Reference(new_value);
	}

	// The period during which this contact person or organization is valid to be contacted relating to this patient.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			relationship: this.relationship && this.relationship.toJSON(),
			name: this.name && this.name.toJSON(),
			telecom: this.telecom && this.telecom.toJSON(),
			address: this.address && this.address.toJSON(),
			gender: this.gender,
			organization: this.organization && this.organization.toJSON(),
			period: this.period && this.period.toJSON()
		});
	}

}

module.exports = Patient_Contact;
