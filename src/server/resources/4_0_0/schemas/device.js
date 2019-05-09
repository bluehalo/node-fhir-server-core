/**
 * @name exports
 * @summary Device Class
 */
module.exports = class Device {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, 'definition', {
			enumerable: true,
			get: () => this.__data.definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.definition = new Reference(value);
			},
		});

		Object.defineProperty(this, 'udiCarrier', {
			enumerable: true,
			get: () => this.__data.udiCarrier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceUdiCarrier = require('./deviceudicarrier.js');
				this.__data.udiCarrier = Array.isArray(value)
					? value.map(v => new DeviceUdiCarrier(v))
					: [new DeviceUdiCarrier(value)];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, 'statusReason', {
			enumerable: true,
			get: () => this.__data.statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.statusReason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_distinctIdentifier', {
			enumerable: true,
			get: () => this.__data._distinctIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._distinctIdentifier = new Element(value);
			},
		});

		Object.defineProperty(this, 'distinctIdentifier', {
			enumerable: true,
			get: () => this.__data.distinctIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.distinctIdentifier = value;
			},
		});

		Object.defineProperty(this, '_manufacturer', {
			enumerable: true,
			get: () => this.__data._manufacturer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._manufacturer = new Element(value);
			},
		});

		Object.defineProperty(this, 'manufacturer', {
			enumerable: true,
			get: () => this.__data.manufacturer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.manufacturer = value;
			},
		});

		Object.defineProperty(this, '_manufactureDate', {
			enumerable: true,
			get: () => this.__data._manufactureDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._manufactureDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'manufactureDate', {
			enumerable: true,
			get: () => this.__data.manufactureDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.manufactureDate = value;
			},
		});

		Object.defineProperty(this, '_expirationDate', {
			enumerable: true,
			get: () => this.__data._expirationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._expirationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'expirationDate', {
			enumerable: true,
			get: () => this.__data.expirationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.expirationDate = value;
			},
		});

		Object.defineProperty(this, '_lotNumber', {
			enumerable: true,
			get: () => this.__data._lotNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lotNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'lotNumber', {
			enumerable: true,
			get: () => this.__data.lotNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lotNumber = value;
			},
		});

		Object.defineProperty(this, '_serialNumber', {
			enumerable: true,
			get: () => this.__data._serialNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._serialNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'serialNumber', {
			enumerable: true,
			get: () => this.__data.serialNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.serialNumber = value;
			},
		});

		Object.defineProperty(this, 'deviceName', {
			enumerable: true,
			get: () => this.__data.deviceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceDeviceName = require('./devicedevicename.js');
				this.__data.deviceName = Array.isArray(value)
					? value.map(v => new DeviceDeviceName(v))
					: [new DeviceDeviceName(value)];
			},
		});

		Object.defineProperty(this, '_modelNumber', {
			enumerable: true,
			get: () => this.__data._modelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._modelNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'modelNumber', {
			enumerable: true,
			get: () => this.__data.modelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.modelNumber = value;
			},
		});

		Object.defineProperty(this, '_partNumber', {
			enumerable: true,
			get: () => this.__data._partNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._partNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'partNumber', {
			enumerable: true,
			get: () => this.__data.partNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.partNumber = value;
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'specialization', {
			enumerable: true,
			get: () => this.__data.specialization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceSpecialization = require('./devicespecialization.js');
				this.__data.specialization = Array.isArray(value)
					? value.map(v => new DeviceSpecialization(v))
					: [new DeviceSpecialization(value)];
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceVersion = require('./deviceversion.js');
				this.__data.version = Array.isArray(value) ? value.map(v => new DeviceVersion(v)) : [new DeviceVersion(value)];
			},
		});

		Object.defineProperty(this, 'property', {
			enumerable: true,
			get: () => this.__data.property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceProperty = require('./deviceproperty.js');
				this.__data.property = Array.isArray(value)
					? value.map(v => new DeviceProperty(v))
					: [new DeviceProperty(value)];
			},
		});

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, 'owner', {
			enumerable: true,
			get: () => this.__data.owner,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.owner = new Reference(value);
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.contact = Array.isArray(value) ? value.map(v => new ContactPoint(v)) : [new ContactPoint(value)];
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = new Reference(value);
			},
		});

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		Object.defineProperty(this, 'safety', {
			enumerable: true,
			get: () => this.__data.safety,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.safety = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'parent', {
			enumerable: true,
			get: () => this.__data.parent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.parent = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Device',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Device';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			definition: this.definition && this.definition.toJSON(),
			udiCarrier: this.udiCarrier && this.udiCarrier.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			statusReason: this.statusReason && this.statusReason.map(v => v.toJSON()),
			_distinctIdentifier: this._distinctIdentifier && this._distinctIdentifier.toJSON(),
			distinctIdentifier: this.distinctIdentifier,
			_manufacturer: this._manufacturer && this._manufacturer.toJSON(),
			manufacturer: this.manufacturer,
			_manufactureDate: this._manufactureDate && this._manufactureDate.toJSON(),
			manufactureDate: this.manufactureDate,
			_expirationDate: this._expirationDate && this._expirationDate.toJSON(),
			expirationDate: this.expirationDate,
			_lotNumber: this._lotNumber && this._lotNumber.toJSON(),
			lotNumber: this.lotNumber,
			_serialNumber: this._serialNumber && this._serialNumber.toJSON(),
			serialNumber: this.serialNumber,
			deviceName: this.deviceName && this.deviceName.map(v => v.toJSON()),
			_modelNumber: this._modelNumber && this._modelNumber.toJSON(),
			modelNumber: this.modelNumber,
			_partNumber: this._partNumber && this._partNumber.toJSON(),
			partNumber: this.partNumber,
			type: this.type && this.type.toJSON(),
			specialization: this.specialization && this.specialization.map(v => v.toJSON()),
			version: this.version && this.version.map(v => v.toJSON()),
			property: this.property && this.property.map(v => v.toJSON()),
			patient: this.patient && this.patient.toJSON(),
			owner: this.owner && this.owner.toJSON(),
			contact: this.contact && this.contact.map(v => v.toJSON()),
			location: this.location && this.location.toJSON(),
			_url: this._url && this._url.toJSON(),
			url: this.url,
			note: this.note && this.note.map(v => v.toJSON()),
			safety: this.safety && this.safety.map(v => v.toJSON()),
			parent: this.parent && this.parent.toJSON(),
		};
	}
};
