const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const HumanName = require('./HumanName');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Attachment = require('./Attachment');
const Period = require('./Period');

class RelatedPerson extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'RelatedPerson';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RelatedPerson';
	}

	// This is a RelatedPerson resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['RelatedPerson'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for a person within a particular scope.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether this related person record is in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// The patient this person is related to.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The nature of the relationship between a patient and the related person.
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		this._relationship = new CodeableConcept(new_value);
	}

	// A name associated with the person.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = Array.isArray(new_value) ? new_value.map(val => new HumanName(val)) : [new HumanName(new_value)];
	}

	// A contact detail for the person, e.g. a telephone number or an email address.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
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

	// The date on which the related person was born.
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

	// Address where the related person can be contacted or visited.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// Image of the person.
	get photo () {
		return this._photo;
	}

	set photo ( new_value ) {
		this._photo = Array.isArray(new_value) ? new_value.map(val => new Attachment(val)) : [new Attachment(new_value)];
	}

	// The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			active: this._active,
			patient: this._patient && this._patient.toJSON(),
			relationship: this._relationship && this._relationship.toJSON(),
			name: this._name && this._name.map(v => v.toJSON()),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			gender: this._gender,
			birthDate: this._birthDate,
			address: this._address && this._address.map(v => v.toJSON()),
			photo: this._photo && this._photo.map(v => v.toJSON()),
			period: this._period && this._period.toJSON()
		});
	}

}

module.exports = RelatedPerson;
