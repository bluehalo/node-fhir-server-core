const DomainResource = require('./DomainResource');
const CodeScalar = require('./scalars/Code.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class Endpoint extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Endpoint';
		Object.assign(this, opt);
	}

	// This is a Endpoint resource
	static get __resourceType() {
		return 'Endpoint';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Endpoint = new_value;
	}

	// Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// active | suspended | error | off | test.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).
	get connectionType() {
		return this.__connectionType;
	}

	set connectionType(new_value) {
		const Coding = require('./Coding');
		this.__connectionType = new Coding(new_value);
	}

	// A friendly name that this endpoint can be referred to with.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The organization that manages this endpoint (even if technically another organisation is hosting this in the cloud, it is the organisation associated with the data).
	get managingOrganization() {
		return this.__managingOrganization;
	}

	set managingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__managingOrganization = new Reference(new_value);
	}

	// Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// The interval during which the endpoint is expected to be operational.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The payload type describes the acceptable content that can be communicated on the endpoint.
	get payloadType() {
		return this.__payloadType;
	}

	set payloadType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__payloadType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).
	get payloadMimeType() {
		return this.__payloadMimeType;
	}

	set payloadMimeType(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field payloadMimeType`);
		}
		this.__payloadMimeType = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The uri that describes the actual end-point to connect to.
	get address() {
		return this.__address;
	}

	set address(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field address`);
		}
		this.__address = new_value;
	}

	// Additional headers / information to send as part of the notification.
	get header() {
		return this.__header;
	}

	set header(new_value) {
		this.__header = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			connectionType: this.__connectionType && this.__connectionType.toJSON(),
			name: this.__name,
			managingOrganization: this.__managingOrganization && this.__managingOrganization.toJSON(),
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			payloadType: this.__payloadType && this.__payloadType.map(v => v.toJSON()),
			payloadMimeType: this.__payloadMimeType,
			address: this.__address,
			header: this.__header,
		});
	}
}

module.exports = Endpoint;
