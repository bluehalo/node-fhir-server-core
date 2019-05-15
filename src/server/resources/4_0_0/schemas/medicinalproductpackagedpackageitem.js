/**
 * @name exports
 * @summary MedicinalProductPackagedPackageItem Class
 */
module.exports = class MedicinalProductPackagedPackageItem {
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

		Object.defineProperty(this, 'material', {
			enumerable: true,
			get: () => this.__data.material,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.material = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'alternateMaterial', {
			enumerable: true,
			get: () => this.__data.alternateMaterial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.alternateMaterial = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'device', {
			enumerable: true,
			get: () => this.__data.device,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.device = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'manufacturedItem', {
			enumerable: true,
			get: () => this.__data.manufacturedItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.manufacturedItem = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'packageItem', {
			enumerable: true,
			get: () => this.__data.packageItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductPackagedPackageItem = require('./medicinalproductpackagedpackageitem.js');
				this.__data.packageItem = Array.isArray(value)
					? value.map(v => new MedicinalProductPackagedPackageItem(v))
					: [new MedicinalProductPackagedPackageItem(value)];
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

		Object.defineProperty(this, 'otherCharacteristics', {
			enumerable: true,
			get: () => this.__data.otherCharacteristics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.otherCharacteristics = Array.isArray(value)
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

		Object.defineProperty(this, 'manufacturer', {
			enumerable: true,
			get: () => this.__data.manufacturer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.manufacturer = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductPackagedPackageItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductPackagedPackageItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			material: this.material && this.material.map(v => v.toJSON()),
			alternateMaterial: this.alternateMaterial && this.alternateMaterial.map(v => v.toJSON()),
			device: this.device && this.device.map(v => v.toJSON()),
			manufacturedItem: this.manufacturedItem && this.manufacturedItem.map(v => v.toJSON()),
			packageItem: this.packageItem && this.packageItem.map(v => v.toJSON()),
			physicalCharacteristics: this.physicalCharacteristics && this.physicalCharacteristics.toJSON(),
			otherCharacteristics: this.otherCharacteristics && this.otherCharacteristics.map(v => v.toJSON()),
			shelfLifeStorage: this.shelfLifeStorage && this.shelfLifeStorage.map(v => v.toJSON()),
			manufacturer: this.manufacturer && this.manufacturer.map(v => v.toJSON()),
		};
	}
};
