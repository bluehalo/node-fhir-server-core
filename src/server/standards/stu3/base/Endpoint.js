const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Coding = require('./Coding');
const Reference = require('./Reference');
const ContactPoint = require('./ContactPoint');
const Period = require('./Period');
const CodeableConcept = require('./CodeableConcept');

class Endpoint extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Endpoint';
	}

	// This is a Endpoint resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Endpoint'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// active | suspended | error | off | test.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'suspended', 'error', 'off', 'entered-in-error', 'test'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook).
	get connectionType () {
		return this._connectionType;
	}

	set connectionType ( new_value ) {
		this._connectionType = new Coding(new_value);
	}

	// A friendly name that this endpoint can be referred to with.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The organization that manages this endpoint (even if technically another organisation is hosting this in the cloud, it is the organisation associated with the data).
	get managingOrganization () {
		return this._managingOrganization;
	}

	set managingOrganization ( new_value ) {
		this._managingOrganization = new Reference(new_value);
	}

	// Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// The interval during which the endpoint is expected to be operational.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// The payload type describes the acceptable content that can be communicated on the endpoint.
	get payloadType () {
		return this._payloadType;
	}

	set payloadType ( new_value ) {
		this._payloadType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType).
	get payloadMimeType () {
		return this._payloadMimeType;
	}

	set payloadMimeType ( new_value ) {
		this._payloadMimeType = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The uri that describes the actual end-point to connect to.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		this._address = new_value;
	}

	// Additional headers / information to send as part of the notification.
	get header () {
		return this._header;
	}

	set header ( new_value ) {
		this._header = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			header: this._header
		});
	}

}

module.exports = Endpoint;
