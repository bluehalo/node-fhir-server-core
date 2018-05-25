const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const HumanName = require('./HumanName');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Attachment = require('./Attachment');
const Practitioner_Qualification = require('./Practitioner_Qualification');
const CodeableConcept = require('./CodeableConcept');

class Practitioner extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Practitioner';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Practitioner';
	}

	// This is a Practitioner resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['Practitioner'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An identifier that applies to this person in this role.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether this practitioner's record is in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._active = new_value;
	}

	// The name(s) associated with the practitioner.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._name = Array.isArray(new_value) ? new_value.map(val => new HumanName(val)) : [new HumanName(new_value)];
	}

	// A contact detail for the practitioner, e.g. a telephone number or an email address.
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

	// Address(es) of the practitioner that are not role specific (typically home address).  Work addresses are not typically entered in this property as they are usually role dependent.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
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

	// The date of birth for the practitioner.
	get birthDate () {
		return this._birthDate;
	}

	set birthDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field birthDate`);
		}
		this._birthDate = new_value;
	}

	// Image of the person.
	get photo () {
		return this._photo;
	}

	set photo ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._photo = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	// Qualifications obtained by training and certification.
	get qualification () {
		return this._qualification;
	}

	set qualification ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._qualification = Array.isArray(new_value) ? new_value.map(val => new Practitioner_Qualification(val)) : [new Practitioner_Qualification(new_value)];
	}

	// A language the practitioner is able to use in patient communication.
	get communication () {
		return this._communication;
	}

	set communication ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._communication = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier && this.identifier.toJSON(),
			active: this.active,
			name: this.name && this.name.toJSON(),
			telecom: this.telecom && this.telecom.toJSON(),
			address: this.address && this.address.toJSON(),
			gender: this.gender,
			birthDate: this.birthDate,
			photo: this.photo && this.photo.toJSON(),
			qualification: this.qualification && this.qualification.toJSON(),
			communication: this.communication && this.communication.toJSON()
		});
	}

}

module.exports = Practitioner;
