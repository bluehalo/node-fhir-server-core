const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Coding = require('./types/Coding');
const Reference = require('./types/Reference');
const ContactPoint = require('./types/ContactPoint');
const Period = require('./types/Period');
const CodeableConcept = require('./types/CodeableConcept');

class Endpoint extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Endpoint';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Identifies this endpoint across multiple systems
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

	// status	?!Σ	1..1	code	active | suspended | error | off | entered-in-error | test
	// EndpointStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// connectionType	Σ	1..1	Coding	Protocol/Profile/Standard to be used with this endpoint connection
	// Endpoint Connection Type (Extensible)
	set connectionType(connectionType) {
		this._connectionType = new Coding(connectionType);
	}

	get connectionType() {
		return this._connectionType;
	}

	// name	Σ	0..1	string	A name that this endpoint can be identified by
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// managingOrganization	Σ	0..1	Reference(Organization)	Organization that manages this endpoint (may not be the organization that exposes the endpoint)
	set managingOrganization(managingOrganization) {
		this._managingOrganization = new Reference(managingOrganization);
	}

	get managingOrganization() {
		return this._managingOrganization;
	}

	// contact		0..*	ContactPoint	Contact details for source (e.g. troubleshooting)
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactPoint(i));
		} else {
			this._contact = [new ContactPoint(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// period	Σ	0..1	Period	Interval the endpoint is expected to be operational
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// payloadType	Σ	1..*	CodeableConcept	The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
	// Endpoint Payload Type (Example)
	set payloadType(payloadType) {
		if (Array.isArray(payloadType)) {
			this._payloadType = payloadType.map((i) => new CodeableConcept(i));
		} else {
			this._payloadType = [new CodeableConcept(payloadType)];
		}
	}

	get payloadType() {
		return this._payloadType;
	}

	// payloadMimeType	Σ	0..*	code	Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
	// MimeType  (Required)
	set payloadMimeType(payloadMimeType) {
		if (Array.isArray(payloadMimeType)) {
			this._payloadMimeType = payloadMimeType.map((i) => new Code(i));
		} else {
			this._payloadMimeType = [new Code(payloadMimeType)];
		}
	}

	get payloadMimeType() {
		return this._payloadMimeType;
	}

	// address	Σ	1..1	uri	The technical base address for connecting to this endpoint
	set address(address) {
		this._address = address;
	}

	get address() {
		return this._address;
	}

	// header		0..*	string	Usage depends on the channel type
	set header(header) {
		this._header = [].concat(header);
	}

	get header() {
		return this._header;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			connectionType: this._connectionType,
			name: this._name,
			managingOrganization: this._managingOrganization,
			contact: this._contact,
			period: this._period,
			payloadType: this._payloadType,
			payloadMimeType: this._payloadMimeType,
			address: this._address,
			header: this._header,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Endpoint = Endpoint;
