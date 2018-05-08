const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Device_Udi = require('./Device_Udi');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const ContactPoint = require('./ContactPoint');
const Annotation = require('./Annotation');

class Device extends DomainResource {

	constructor ( opts ) {
		super();
		this._resourceType = 'Device';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Device';
	}

	// This is a Device resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Device'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique instance identifiers assigned to a device by manufacturers other organizations or owners.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// [Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package.
	get udi () {
		return this._udi;
	}

	set udi ( new_value ) {
		this._udi = new Device_Udi(new_value);
	}

	// Status of the Device availability.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'inactive', 'entered-in-error', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Code or identifier to identify a kind of device.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Lot number assigned by the manufacturer.
	get lotNumber () {
		return this._lotNumber;
	}

	set lotNumber ( new_value ) {
		this._lotNumber = new_value;
	}

	// A name of the manufacturer.
	get manufacturer () {
		return this._manufacturer;
	}

	set manufacturer ( new_value ) {
		this._manufacturer = new_value;
	}

	// The date and time when the device was manufactured.
	get manufactureDate () {
		return this._manufactureDate;
	}

	set manufactureDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field manufactureDate`);
		}
		this._manufactureDate = new_value;
	}

	// The date and time beyond which this device is no longer valid or should not be used (if applicable).
	get expirationDate () {
		return this._expirationDate;
	}

	set expirationDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field expirationDate`);
		}
		this._expirationDate = new_value;
	}

	// The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
	get model () {
		return this._model;
	}

	set model ( new_value ) {
		this._model = new_value;
	}

	// The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// Patient information, If the device is affixed to a person.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// An organization that is responsible for the provision and ongoing maintenance of the device.
	get owner () {
		return this._owner;
	}

	set owner ( new_value ) {
		this._owner = new Reference(new_value);
	}

	// Contact details for an organization or a particular human that is responsible for the device.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// The place where the device can be found.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// A network address on which the device may be contacted directly.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// Descriptive information, usage information or implantation information that is not captured in an existing element.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Provides additional safety characteristics about a medical device.  For example devices containing latex.
	get safety () {
		return this._safety;
	}

	set safety ( new_value ) {
		this._safety = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			udi: this._udi,
			status: this._status,
			type: this._type,
			lotNumber: this._lotNumber,
			manufacturer: this._manufacturer,
			manufactureDate: this._manufactureDate,
			expirationDate: this._expirationDate,
			model: this._model,
			version: this._version,
			patient: this._patient,
			owner: this._owner,
			contact: this._contact,
			location: this._location,
			url: this._url,
			note: this._note,
			safety: this._safety
		});
	}

}

module.exports = Device;
