const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Reference = require('./Reference');
const Organization_Contact = require('./Organization_Contact');

class Organization extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Organization';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Organization';
	}

	// This is a Organization resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Organization'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for the organization that is used to identify the organization across multiple disparate systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether the organization's record is still in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// The kind(s) of organization that this is.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A name associated with the organization.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A list of alternate names that the organization is known as, or was known as in the past.
	get alias () {
		return this._alias;
	}

	set alias ( new_value ) {
		this._alias = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A contact detail for the organization.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// An address for the organization.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// The organization of which this organization forms a part.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = new Reference(new_value);
	}

	// Contact for the organization for a certain purpose.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new Organization_Contact(val)) : [new Organization_Contact(new_value)];
	}

	// Technical endpoints providing access to services operated for the organization.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			active: this._active,
			type: this._type && this._type.map(v => v.toJSON()),
			name: this._name,
			alias: this._alias,
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			address: this._address && this._address.map(v => v.toJSON()),
			partOf: this._partOf && this._partOf.toJSON(),
			contact: this._contact && this._contact.map(v => v.toJSON()),
			endpoint: this._endpoint && this._endpoint.map(v => v.toJSON())
		});
	}

}

module.exports = Organization;
