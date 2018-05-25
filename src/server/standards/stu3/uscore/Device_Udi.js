const BackboneElement = require('./BackboneElement');

class Device_Udi extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Device_Udi';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Device_Udi';
	}

	// The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
	get deviceIdentifier () {
		return this._deviceIdentifier;
	}

	set deviceIdentifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._deviceIdentifier = new_value;
	}

	// Name of device as used in labeling or catalog.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._name = new_value;
	}

	// The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._jurisdiction = new_value;
	}

	// The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.
	get carrierHRF () {
		return this._carrierHRF;
	}

	set carrierHRF ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._carrierHRF = new_value;
	}

	// The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - E.g a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.
	get carrierAIDC () {
		return this._carrierAIDC;
	}

	set carrierAIDC ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._carrierAIDC = new_value;
	}

	// Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.
	get issuer () {
		return this._issuer;
	}

	set issuer ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._issuer = new_value;
	}

	// A coded entry to indicate how the data was entered.
	get entryType () {
		return this._entryType;
	}

	set entryType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['barcode', 'rfid', 'manual', 'card', 'self-reported', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field entryType`);
		}
		this._entryType = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			deviceIdentifier: this.deviceIdentifier,
			name: this.name,
			jurisdiction: this.jurisdiction,
			carrierHRF: this.carrierHRF,
			carrierAIDC: this.carrierAIDC,
			issuer: this.issuer,
			entryType: this.entryType
		});
	}

}

module.exports = Device_Udi;
