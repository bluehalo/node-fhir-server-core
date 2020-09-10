/**
 * @name exports
 * @summary DeviceDefinition Class
 */
module.exports = class DeviceDefinition {
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

		Object.defineProperty(this, 'udiDeviceIdentifier', {
			enumerable: true,
			get: () => this.__data.udiDeviceIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceDefinitionUdiDeviceIdentifier = require('./devicedefinitionudideviceidentifier.js');
				this.__data.udiDeviceIdentifier = Array.isArray(value)
					? value.map(v => new DeviceDefinitionUdiDeviceIdentifier(v))
					: [new DeviceDefinitionUdiDeviceIdentifier(value)];
			},
		});

		Object.defineProperty(this, '_manufacturerString', {
			enumerable: true,
			get: () => this.__data._manufacturerString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._manufacturerString = new Element(value);
			},
		});

		Object.defineProperty(this, 'manufacturerString', {
			enumerable: true,
			get: () => this.__data.manufacturerString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.manufacturerString = value;
			},
		});

		Object.defineProperty(this, 'manufacturerReference', {
			enumerable: true,
			get: () => this.__data.manufacturerReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.manufacturerReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'deviceName', {
			enumerable: true,
			get: () => this.__data.deviceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceDefinitionDeviceName = require('./devicedefinitiondevicename.js');
				this.__data.deviceName = Array.isArray(value)
					? value.map(v => new DeviceDefinitionDeviceName(v))
					: [new DeviceDefinitionDeviceName(value)];
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

				let DeviceDefinitionSpecialization = require('./devicedefinitionspecialization.js');
				this.__data.specialization = Array.isArray(value)
					? value.map(v => new DeviceDefinitionSpecialization(v))
					: [new DeviceDefinitionSpecialization(value)];
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'shelfLifeStorage', {
			enumerable: true,
			get: () => this.__data.shelfLifeStorage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProductShelfLife = require('./productshelflife.js');
				this.__data.shelfLifeStorage = Array.isArray(value)
					? value.map(v => new ProductShelfLife(v))
					: [new ProductShelfLife(value)];
			},
		});

		Object.defineProperty(this, 'physicalCharacteristics', {
			enumerable: true,
			get: () => this.__data.physicalCharacteristics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProdCharacteristic = require('./prodcharacteristic.js');
				this.__data.physicalCharacteristics = new ProdCharacteristic(value);
			},
		});

		Object.defineProperty(this, 'languageCode', {
			enumerable: true,
			get: () => this.__data.languageCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.languageCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'capability', {
			enumerable: true,
			get: () => this.__data.capability,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceDefinitionCapability = require('./devicedefinitioncapability.js');
				this.__data.capability = Array.isArray(value)
					? value.map(v => new DeviceDefinitionCapability(v))
					: [new DeviceDefinitionCapability(value)];
			},
		});

		Object.defineProperty(this, 'property', {
			enumerable: true,
			get: () => this.__data.property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceDefinitionProperty = require('./devicedefinitionproperty.js');
				this.__data.property = Array.isArray(value)
					? value.map(v => new DeviceDefinitionProperty(v))
					: [new DeviceDefinitionProperty(value)];
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

		Object.defineProperty(this, '_onlineInformation', {
			enumerable: true,
			get: () => this.__data._onlineInformation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onlineInformation = new Element(value);
			},
		});

		Object.defineProperty(this, 'onlineInformation', {
			enumerable: true,
			get: () => this.__data.onlineInformation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onlineInformation = value;
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

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'parentDevice', {
			enumerable: true,
			get: () => this.__data.parentDevice,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.parentDevice = new Reference(value);
			},
		});

		Object.defineProperty(this, 'material', {
			enumerable: true,
			get: () => this.__data.material,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DeviceDefinitionMaterial = require('./devicedefinitionmaterial.js');
				this.__data.material = Array.isArray(value)
					? value.map(v => new DeviceDefinitionMaterial(v))
					: [new DeviceDefinitionMaterial(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceDefinition';
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
			udiDeviceIdentifier: this.udiDeviceIdentifier && this.udiDeviceIdentifier.map(v => v.toJSON()),
			_manufacturerString: this._manufacturerString && this._manufacturerString.toJSON(),
			manufacturerString: this.manufacturerString,
			manufacturerReference: this.manufacturerReference && this.manufacturerReference.toJSON(),
			deviceName: this.deviceName && this.deviceName.map(v => v.toJSON()),
			_modelNumber: this._modelNumber && this._modelNumber.toJSON(),
			modelNumber: this.modelNumber,
			type: this.type && this.type.toJSON(),
			specialization: this.specialization && this.specialization.map(v => v.toJSON()),
			_version: this._version && this._version.toJSON(),
			version: this.version,
			safety: this.safety && this.safety.map(v => v.toJSON()),
			shelfLifeStorage: this.shelfLifeStorage && this.shelfLifeStorage.map(v => v.toJSON()),
			physicalCharacteristics: this.physicalCharacteristics && this.physicalCharacteristics.toJSON(),
			languageCode: this.languageCode && this.languageCode.map(v => v.toJSON()),
			capability: this.capability && this.capability.map(v => v.toJSON()),
			property: this.property && this.property.map(v => v.toJSON()),
			owner: this.owner && this.owner.toJSON(),
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_onlineInformation: this._onlineInformation && this._onlineInformation.toJSON(),
			onlineInformation: this.onlineInformation,
			note: this.note && this.note.map(v => v.toJSON()),
			quantity: this.quantity && this.quantity.toJSON(),
			parentDevice: this.parentDevice && this.parentDevice.toJSON(),
			material: this.material && this.material.map(v => v.toJSON()),
		};
	}
};
