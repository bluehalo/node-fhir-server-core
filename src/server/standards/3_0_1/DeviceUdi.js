const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');
const Base64BinaryScalar = require('./scalars/Base64Binary.scalar');

class DeviceUdi extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceUdi';
		Object.assign(this, opt);
	}

	// This is a DeviceUdi resource
	static get __resourceType() {
		return 'DeviceUdi';
	}

	// The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
	get deviceIdentifier() {
		return this.__deviceIdentifier;
	}

	set deviceIdentifier(new_value) {
		this.__deviceIdentifier = new_value;
	}

	// Name of device as used in labeling or catalog.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field jurisdiction`);
		}
		this.__jurisdiction = new_value;
	}

	// The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.
	get carrierHRF() {
		return this.__carrierHRF;
	}

	set carrierHRF(new_value) {
		this.__carrierHRF = new_value;
	}

	// The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - E.g a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
	get carrierAIDC() {
		return this.__carrierAIDC;
	}

	set carrierAIDC(new_value) {
		// Throw if new value does not match the pattern
		let pattern = Base64BinaryScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field carrierAIDC`);
		}
		this.__carrierAIDC = new_value;
	}

	// Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.
	get issuer() {
		return this.__issuer;
	}

	set issuer(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field issuer`);
		}
		this.__issuer = new_value;
	}

	// A coded entry to indicate how the data was entered.
	get entryType() {
		return this.__entryType;
	}

	set entryType(new_value) {
		this.__entryType = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			deviceIdentifier: this.__deviceIdentifier,
			name: this.__name,
			jurisdiction: this.__jurisdiction,
			carrierHRF: this.__carrierHRF,
			carrierAIDC: this.__carrierAIDC,
			issuer: this.__issuer,
			entryType: this.__entryType,
		});
	}
}

module.exports = DeviceUdi;
