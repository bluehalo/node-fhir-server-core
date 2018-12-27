const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class Device extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Device';
		Object.assign(this, opt);
	}

	// This is a Device resource
	static get __resourceType() {
		return 'Device';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Device = new_value;
	}

	// Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// [Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package.
	get udi() {
		return this.__udi;
	}

	set udi(new_value) {
		const DeviceUdi = require('./DeviceUdi');
		this.__udi = new DeviceUdi(new_value);
	}

	// Status of the Device availability.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Code or identifier to identify a kind of device.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Lot number assigned by the manufacturer.
	get lotNumber() {
		return this.__lotNumber;
	}

	set lotNumber(new_value) {
		this.__lotNumber = new_value;
	}

	// A name of the manufacturer.
	get manufacturer() {
		return this.__manufacturer;
	}

	set manufacturer(new_value) {
		this.__manufacturer = new_value;
	}

	// The date and time when the device was manufactured.
	get manufactureDate() {
		return this.__manufactureDate;
	}

	set manufactureDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field manufactureDate`);
		}
		this.__manufactureDate = new_value;
	}

	// The date and time beyond which this device is no longer valid or should not be used (if applicable).
	get expirationDate() {
		return this.__expirationDate;
	}

	set expirationDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field expirationDate`);
		}
		this.__expirationDate = new_value;
	}

	// The \'model\' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
	get model() {
		return this.__model;
	}

	set model(new_value) {
		this.__model = new_value;
	}

	// The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// Patient information, If the device is affixed to a person.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// An organization that is responsible for the provision and ongoing maintenance of the device.
	get owner() {
		return this.__owner;
	}

	set owner(new_value) {
		const Reference = require('./Reference');
		this.__owner = new Reference(new_value);
	}

	// Contact details for an organization or a particular human that is responsible for the device.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// The place where the device can be found.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// A network address on which the device may be contacted directly.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// Descriptive information, usage information or implantation information that is not captured in an existing element.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Provides additional safety characteristics about a medical device.  For example devices containing latex.
	get safety() {
		return this.__safety;
	}

	set safety(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__safety = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			udi: this.__udi && this.__udi.toJSON(),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			lotNumber: this.__lotNumber,
			manufacturer: this.__manufacturer,
			manufactureDate: this.__manufactureDate,
			expirationDate: this.__expirationDate,
			model: this.__model,
			version: this.__version,
			patient: this.__patient && this.__patient.toJSON(),
			owner: this.__owner && this.__owner.toJSON(),
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			location: this.__location && this.__location.toJSON(),
			url: this.__url,
			note: this.__note && this.__note.map(v => v.toJSON()),
			safety: this.__safety && this.__safety.map(v => v.toJSON()),
		});
	}
}

module.exports = Device;
