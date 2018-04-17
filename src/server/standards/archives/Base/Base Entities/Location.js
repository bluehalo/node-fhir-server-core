const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Coding = require('./types/Coding');
const CodeableConcept = require('./types/CodeableConcept');
const ContactPoint = require('./types/ContactPoint');
const Address = require('./types/Address');
const Reference = require('./types/Reference');

class Position {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// longitude		1..1	decimal	Longitude with WGS84 datum
	set longitude(longitude) {
		this._longitude = longitude;
	}

	get longitude() {
		return this._longitude;
	}

	// latitude		1..1	decimal	Latitude with WGS84 datum
	set latitude(latitude) {
		this._latitude = latitude;
	}

	get latitude() {
		return this._latitude;
	}

	// altitude		0..1	decimal	Altitude with WGS84 datum
	set altitude(altitude) {
		this._altitude = altitude;
	}

	get altitude() {
		return this._altitude;
	}

	toJSON() {
		return {
			longitude: this._longitude,
			latitude: this._latitude,
			altitude: this._altitude,
		};
	}
}

class Location extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Location';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Unique code or number identifying the location to its users
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	active | suspended | inactive
	// LocationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// operationalStatus	Σ	0..1	Coding	The Operational status of the location (typically only for a bed/room)
	// v2 Bed Status (Preferred)
	set operationalStatus(operationalStatus) {
		this._operationalStatus = new Coding(operationalStatus);
	}

	get operationalStatus() {
		return this._operationalStatus;
	}

	// name	Σ	0..1	string	Name of the location as used by humans
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// alias		0..*	string	A list of alternate names that the location is known as, or was known as in the past
	set alias(alias) {
		this._alias = [].concat(alias);
	}

	get alias() {
		return this._alias;
	}

	// description	Σ	0..1	string	Additional details about the location that could be displayed as further information to identify the location beyond its name
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// mode	?!Σ	0..1	code	instance | kind
	// LocationMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// type	Σ	0..1	CodeableConcept	Type of function performed
	// ServiceDeliveryLocationRoleType (Extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// telecom		0..*	ContactPoint	Contact details of the location
	set telecom(telecom) {
		if (Array.isArray(telecom)) {
			this._telecom = telecom.map((i) => new ContactPoint(i));
		} else {
			this._telecom = [new ContactPoint(telecom)];
		}
	}

	get telecom() {
		return this._telecom;
	}

	// address		0..1	Address	Physical location
	set address(address) {
		this._address = new Address(address);
	}

	get address() {
		return this._address;
	}

	// physicalType	Σ	0..1	CodeableConcept	Physical form of the location
	// LocationType (Example)
	set physicalType(physicalType) {
		this._physicalType = new CodeableConcept(physicalType);
	}

	get physicalType() {
		return this._physicalType;
	}

	// position		0..1	BackboneElement	The absolute geographic location
	set position(position) {
		this._position = new Position(position);
	}

	get position() {
		return this._position;
	}

	// managingOrganization	Σ	0..1	Reference(Organization)	Organization responsible for provisioning and upkeep
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// partOf		0..1	Reference(Location)	Another Location this one is physically part of
	set partOf(partOf) {
		this._partOf = new Reference(partOf);
	}

	get partOf() {
		return this._partOf;
	}

	// endpoint		0..*	Reference(Endpoint)	Technical endpoints providing access to services operated for the location
	set endpoint(endpoint) {
		if (Array.isArray(endpoint)) {
			this._endpoint = endpoint.map((i) => new Reference(i));
		} else {
			this._endpoint = [new Reference(endpoint)];
		}
	}

	get endpoint() {
		return this._endpoint;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			operationalStatus: this._operationalStatus,
			name: this._name,
			alias: this._alias,
			description: this._description,
			mode: this._mode,
			type: this._type,
			telecom: this._telecom,
			address: this._address,
			physicalType: this._physicalType,
			position: this._position,
			managingOrganization: this._managingOrganization,
			partOf: this._partOf,
			endpoint: this._endpoint,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Location = Location;
module.exports.Position = Position;
