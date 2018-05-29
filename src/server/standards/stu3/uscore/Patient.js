const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const HumanName = require('./HumanName');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const CodeableConcept = require('./CodeableConcept');
const Attachment = require('./Attachment');
const Patient_Contact = require('./Patient_Contact');
const Patient_Animal = require('./Patient_Animal');
const Patient_Communication = require('./Patient_Communication');
const Reference = require('./Reference');
const Patient_Link = require('./Patient_Link');

class Patient extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Patient';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Patient';
	}

	// This is a Patient resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Patient'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An identifier for this patient.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether this patient record is in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// A name associated with the individual.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = Array.isArray(new_value) ? new_value.map(val => new HumanName(val)) : [new HumanName(new_value)];
	}

	// A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
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

	// The date of birth for the individual.
	get birthDate () {
		return this._birthDate;
	}

	set birthDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field birthDate`);
		}
		this._birthDate = new_value;
	}

	// Indicates if the individual is deceased or not.
	get deceasedBoolean () {
		return this._deceasedBoolean;
	}

	set deceasedBoolean ( new_value ) {
		this._deceasedBoolean = new_value;
	}

	// Indicates if the individual is deceased or not.
	get deceasedDateTime () {
		return this._deceasedDateTime;
	}

	set deceasedDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field deceasedDateTime`);
		}
		this._deceasedDateTime = new_value;
	}

	// Addresses for the individual.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// This field contains a patient's most recent marital (civil) status.
	get maritalStatus () {
		return this._maritalStatus;
	}

	set maritalStatus ( new_value ) {
		this._maritalStatus = new CodeableConcept(new_value);
	}

	// Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).
	get multipleBirthBoolean () {
		return this._multipleBirthBoolean;
	}

	set multipleBirthBoolean ( new_value ) {
		this._multipleBirthBoolean = new_value;
	}

	// Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).
	get multipleBirthInteger () {
		return this._multipleBirthInteger;
	}

	set multipleBirthInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field multipleBirthInteger`);
		}
		this._multipleBirthInteger = new_value;
	}

	// Image of the patient.
	get photo () {
		return this._photo;
	}

	set photo ( new_value ) {
		this._photo = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	// A contact party (e.g. guardian, partner, friend) for the patient.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new Patient_Contact(val)) : [new Patient_Contact(new_value)];
	}

	// This patient is known to be an animal.
	get animal () {
		return this._animal;
	}

	set animal ( new_value ) {
		this._animal = new Patient_Animal(new_value);
	}

	// Languages which may be used to communicate with the patient about his or her health.
	get communication () {
		return this._communication;
	}

	set communication ( new_value ) {
		this._communication = Array.isArray(new_value) ? new_value.map(val => new Patient_Communication(val)) : [new Patient_Communication(new_value)];
	}

	// Patient's nominated care provider.
	get generalPractitioner () {
		return this._generalPractitioner;
	}

	set generalPractitioner ( new_value ) {
		this._generalPractitioner = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Organization that is the custodian of the patient record.
	get managingOrganization () {
		return this._managingOrganization;
	}

	set managingOrganization ( new_value ) {
		this._managingOrganization = new Reference(new_value);
	}

	// Link to another patient resource that concerns the same actual patient.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		this._link = Array.isArray(new_value) ? new_value.map(val => new Patient_Link(val)) : [new Patient_Link(new_value)];
	}

	// Concepts classifying the person into a named category of humans sharing common history, traits, geographical origin or nationality. The race codes used to represent these concepts are based upon the CDC Race and Ethnicity Code Set Version 1.0 which includes over 900 concepts for representing race and ethnicity of which 921 reference race. The race concepts are grouped by and pre-mapped to the 5 OMB race categories: - American Indian or Alaska Native - Asian - Black or African American - Native Hawaiian or Other Pacific Islander - White.
	get race () {
		return this._race;
	}

	set race ( new_value ) {
		this._race = new_value;
	}

	// The codes for the ethnicity categories - 'Hispanic or Latino' and 'Non Hispanic or Latino' - as defined by the OMB Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity, Statistical Policy Directive No. 15, as revised, October 30, 1997.
	get ethnicity () {
		return this._ethnicity;
	}

	set ethnicity ( new_value ) {
		this._ethnicity = new_value;
	}

	// undefined
	get birthSex () {
		return this._birthSex;
	}

	set birthSex ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['M', 'F', 'UNK'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field birthSex`);
		}
		this._birthSex = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			active: this._active,
			name: this._name && this._name.map(v => v.toJSON()),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			gender: this._gender,
			birthDate: this._birthDate,
			deceasedBoolean: this._deceasedBoolean,
			deceasedDateTime: this._deceasedDateTime,
			address: this._address && this._address.map(v => v.toJSON()),
			maritalStatus: this._maritalStatus && this._maritalStatus.toJSON(),
			multipleBirthBoolean: this._multipleBirthBoolean,
			multipleBirthInteger: this._multipleBirthInteger,
			photo: this._photo && this._photo.map(v => v.toJSON()),
			contact: this._contact && this._contact.map(v => v.toJSON()),
			animal: this._animal && this._animal.toJSON(),
			communication: this._communication && this._communication.map(v => v.toJSON()),
			generalPractitioner: this._generalPractitioner && this._generalPractitioner.map(v => v.toJSON()),
			managingOrganization: this._managingOrganization && this._managingOrganization.toJSON(),
			link: this._link && this._link.map(v => v.toJSON()),
			race: this._race,
			ethnicity: this._ethnicity,
			birthSex: this._birthSex
		});
	}

}

module.exports = Patient;
