const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const HumanName = require('./HumanName');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Attachment = require('./Attachment');
const Reference = require('./Reference');
const Person_Link = require('./Person_Link');

class Person extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Person';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Person';
	}

	// This is a Person resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Person'];
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

	// Administrative Gender.
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

	// The birth date for the person.
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

	// One or more addresses for the person.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
	get photo () {
		return this._photo;
	}

	set photo ( new_value ) {
		this._photo = new Attachment(new_value);
	}

	// The organization that is the custodian of the person record.
	get managingOrganization () {
		return this._managingOrganization;
	}

	set managingOrganization ( new_value ) {
		this._managingOrganization = new Reference(new_value);
	}

	// Whether this person's record is in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// Link to a resource that concerns the same actual person.
	get link () {
		return this._link;
	}

	set link ( new_value ) {
		this._link = Array.isArray(new_value) ? new_value.map(val => new Person_Link(val)) : [new Person_Link(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			name: this._name && this._name.map(v => v.toJSON()),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			gender: this._gender,
			birthDate: this._birthDate,
			address: this._address && this._address.map(v => v.toJSON()),
			photo: this._photo && this._photo.toJSON(),
			managingOrganization: this._managingOrganization && this._managingOrganization.toJSON(),
			active: this._active,
			link: this._link && this._link.map(v => v.toJSON())
		});
	}

}

module.exports = Person;
