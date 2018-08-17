const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Coding = require('./Coding');
const CodeableConcept = require('./CodeableConcept');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Location_Position = require('./Location_Position');
const Reference = require('./Reference');

class Location extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Location';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Location';
	}

	// This is a Location resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Location'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique code or number identifying the location to its users.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'suspended', 'inactive'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The Operational status covers operation values most relevant to beds (but can also apply to rooms/units/chair/etc such as an isolation unit/dialisys chair). This typically covers concepts such as contamination, housekeeping and other activities like maintenance.
	get operationalStatus () {
		return this._operationalStatus;
	}

	set operationalStatus ( new_value ) {
		this._operationalStatus = new Coding(new_value);
	}

	// Name of the location as used by humans. Does not need to be unique.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A list of alternate names that the location is known as, or was known as in the past.
	get alias () {
		return this._alias;
	}

	set alias ( new_value ) {
		this._alias = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Description of the Location, which helps in finding or referencing the place.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Indicates whether a resource instance represents a specific location or a class of locations.
	get mode () {
		return this._mode;
	}

	set mode ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['instance', 'kind'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field mode`);
		}
		this._mode = new_value;
	}

	// Indicates the type of function performed at the location.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// Physical location.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = new Address(new_value);
	}

	// Physical form of the location, e.g. building, room, vehicle, road.
	get physicalType () {
		return this._physicalType;
	}

	set physicalType ( new_value ) {
		this._physicalType = new CodeableConcept(new_value);
	}

	// The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
	get position () {
		return this._position;
	}

	set position ( new_value ) {
		this._position = new Location_Position(new_value);
	}

	// The organization responsible for the provisioning and upkeep of the location.
	get managingOrganization () {
		return this._managingOrganization;
	}

	set managingOrganization ( new_value ) {
		this._managingOrganization = new Reference(new_value);
	}

	// Another Location which this Location is physically part of.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = new Reference(new_value);
	}

	// Technical endpoints providing access to services operated for the location.
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
			status: this._status,
			operationalStatus: this._operationalStatus && this._operationalStatus.toJSON(),
			name: this._name,
			alias: this._alias,
			description: this._description,
			mode: this._mode,
			type: this._type && this._type.toJSON(),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			address: this._address && this._address.toJSON(),
			physicalType: this._physicalType && this._physicalType.toJSON(),
			position: this._position && this._position.toJSON(),
			managingOrganization: this._managingOrganization && this._managingOrganization.toJSON(),
			partOf: this._partOf && this._partOf.toJSON(),
			endpoint: this._endpoint && this._endpoint.map(v => v.toJSON())
		});
	}

}

module.exports = Location;
