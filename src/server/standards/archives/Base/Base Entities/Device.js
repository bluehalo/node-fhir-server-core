const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const ContactPoint = require('./types/ContactPoint');
const Annotation = require('./types/Annotation');

class Udi {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// deviceIdentifier	Σ	0..1	string	Mandatory fixed portion of UDI
	set deviceIdentifier(deviceIdentifier) {
		this._deviceIdentifier = deviceIdentifier;
	}

	get deviceIdentifier() {
		return this._deviceIdentifier;
	}

	// name	Σ	0..1	string	Device Name as appears on UDI label
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// jurisdiction		0..1	uri	Regional UDI authority
	set jurisdiction(jurisdiction) {
		this._jurisdiction = jurisdiction;
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// carrierHRF	Σ	0..1	string	UDI Human Readable Barcode String
	set carrierHRF(carrierHRF) {
		this._carrierHRF = carrierHRF;
	}

	get carrierHRF() {
		return this._carrierHRF;
	}

	// carrierAIDC	Σ	0..1	base64Binary	UDI Machine Readable Barcode String
	set carrierAIDC(carrierAIDC) {
		this._carrierAIDC = carrierAIDC;
	}

	get carrierAIDC() {
		return this._carrierAIDC;
	}

	// issuer		0..1	uri	UDI Issuing Organization
	set issuer(issuer) {
		this._issuer = issuer;
	}

	get issuer() {
		return this._issuer;
	}

	// entryType		0..1	code	barcode | rfid | manual +
	// UDIEntryType (Required)
	set entryType(entryType) {
		this._entryType = new Code(entryType);
	}

	get entryType() {
		return this._entryType;
	}

	toJSON() {
		return {
			deviceIdentifier: this._deviceIdentifier,
			name: this._name,
			jurisdiction: this._jurisdiction,
			carrierHRF: this._carrierHRF,
			carrierAIDC: this._carrierAIDC,
			issuer: this._issuer,
			entryType: this._entryType,
		};
	}
}

class Device extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Device';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Instance identifier
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

	// udi	Σ	0..1	BackboneElement	Unique Device Identifier (UDI) Barcode string
	set udi(udi) {
		this._udi = new Udi(udi);
	}

	get udi() {
		return this._udi;
	}

	// status	?!Σ	0..1	code	active | inactive | entered-in-error | unknown
	// FHIRDeviceStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type		0..1	CodeableConcept	What kind of device this is
	// FHIR Device Types (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// lotNumber		0..1	string	Lot number of manufacture
	set lotNumber(lotNumber) {
		this._lotNumber = lotNumber;
	}

	get lotNumber() {
		return this._lotNumber;
	}

	// manufacturer		0..1	string	Name of device manufacturer
	set manufacturer(manufacturer) {
		this._manufacturer = manufacturer;
	}

	get manufacturer() {
		return this._manufacturer;
	}

	// manufactureDate		0..1	dateTime	Date when the device was made
	set manufactureDate(manufactureDate) {
		this._manufactureDate = manufactureDate;
	}

	get manufactureDate() {
		return this._manufactureDate;
	}

	// expirationDate		0..1	dateTime	Date and time of expiry of this device (if applicable)
	set expirationDate(expirationDate) {
		this._expirationDate = expirationDate;
	}

	get expirationDate() {
		return this._expirationDate;
	}

	// model		0..1	string	Model id assigned by the manufacturer
	set model(model) {
		this._model = model;
	}

	get model() {
		return this._model;
	}

	// version		0..1	string	Version number (i.e. software)
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// patient		0..1	Reference(Patient)	Patient to whom Device is affixed
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// owner		0..1	Reference(Organization)	Organization responsible for device
	set owner(owner) {
		this._owner = new Reference(owner);
	}

	get owner() {
		return this._owner;
	}

	// contact		0..*	ContactPoint	Details for human/organization for support
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

	// location		0..1	Reference(Location)	Where the resource is found
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// url		0..1	uri	Network address to contact device
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// note		0..*	Annotation	Device notes and comments
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// safety	Σ	0..*	CodeableConcept	Safety Characteristics of Device
	// DeviceSafety (Example)
	set safety(safety) {
		if (Array.isArray(safety)) {
			this._safety = safety.map((i) => new CodeableConcept(i));
		} else {
			this._safety = [new CodeableConcept(safety)];
		}
	}

	get safety() {
		return this._safety;
	}

	toJSON() {
		const json = {
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
			safety: this._safety,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Device = Device;
module.exports.Udi = Udi;
