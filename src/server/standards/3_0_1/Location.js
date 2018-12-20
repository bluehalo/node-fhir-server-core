const DomainResource = require('./DomainResource');

class Location extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Location';
		Object.assign(this, opt);
	}

	// This is a Location resource
	static get __resourceType() {
		return 'Location';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Location = new_value;
	}

	// Unique code or number identifying the location to its users.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The Operational status covers operation values most relevant to beds (but can also apply to rooms/units/chair/etc such as an isolation unit/dialisys chair). This typically covers concepts such as contamination, housekeeping and other activities like maintenance.
	get operationalStatus() {
		return this.__operationalStatus;
	}

	set operationalStatus(new_value) {
		const Coding = require('./Coding');
		this.__operationalStatus = new Coding(new_value);
	}

	// Name of the location as used by humans. Does not need to be unique.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A list of alternate names that the location is known as, or was known as in the past.
	get alias() {
		return this.__alias;
	}

	set alias(new_value) {
		this.__alias = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Description of the Location, which helps in finding or referencing the place.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Indicates whether a resource instance represents a specific location or a class of locations.
	get mode() {
		return this.__mode;
	}

	set mode(new_value) {
		this.__mode = new_value;
	}

	// Indicates the type of function performed at the location.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// Physical location.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		const Address = require('./Address');
		this.__address = new Address(new_value);
	}

	// Physical form of the location, e.g. building, room, vehicle, road.
	get physicalType() {
		return this.__physicalType;
	}

	set physicalType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__physicalType = new CodeableConcept(new_value);
	}

	// The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
	get position() {
		return this.__position;
	}

	set position(new_value) {
		const LocationPosition = require('./LocationPosition');
		this.__position = new LocationPosition(new_value);
	}

	// The organization responsible for the provisioning and upkeep of the location.
	get managingOrganization() {
		return this.__managingOrganization;
	}

	set managingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__managingOrganization = new Reference(new_value);
	}

	// Another Location which this Location is physically part of.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = new Reference(new_value);
	}

	// Technical endpoints providing access to services operated for the location.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			operationalStatus: this.__operationalStatus && this.__operationalStatus.toJSON(),
			name: this.__name,
			alias: this.__alias,
			description: this.__description,
			mode: this.__mode,
			type: this.__type && this.__type.toJSON(),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			address: this.__address && this.__address.toJSON(),
			physicalType: this.__physicalType && this.__physicalType.toJSON(),
			position: this.__position && this.__position.toJSON(),
			managingOrganization: this.__managingOrganization && this.__managingOrganization.toJSON(),
			partOf: this.__partOf && this.__partOf.toJSON(),
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
		});
	}
}

module.exports = Location;
