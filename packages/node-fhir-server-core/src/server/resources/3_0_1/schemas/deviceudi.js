/**
 * @name exports
 * @summary DeviceUdi Class
 */
module.exports = class DeviceUdi {
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

		Object.defineProperty(this, '_deviceIdentifier', {
			enumerable: true,
			get: () => this.__data._deviceIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._deviceIdentifier = new Element(value);
			},
		});

		Object.defineProperty(this, 'deviceIdentifier', {
			enumerable: true,
			get: () => this.__data.deviceIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.deviceIdentifier = value;
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_jurisdiction', {
			enumerable: true,
			get: () => this.__data._jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._jurisdiction = new Element(value);
			},
		});

		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.jurisdiction = value;
			},
		});

		Object.defineProperty(this, '_carrierHRF', {
			enumerable: true,
			get: () => this.__data._carrierHRF,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._carrierHRF = new Element(value);
			},
		});

		Object.defineProperty(this, 'carrierHRF', {
			enumerable: true,
			get: () => this.__data.carrierHRF,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.carrierHRF = value;
			},
		});

		Object.defineProperty(this, '_carrierAIDC', {
			enumerable: true,
			get: () => this.__data._carrierAIDC,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._carrierAIDC = new Element(value);
			},
		});

		Object.defineProperty(this, 'carrierAIDC', {
			enumerable: true,
			get: () => this.__data.carrierAIDC,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.carrierAIDC = value;
			},
		});

		Object.defineProperty(this, '_issuer', {
			enumerable: true,
			get: () => this.__data._issuer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._issuer = new Element(value);
			},
		});

		Object.defineProperty(this, 'issuer', {
			enumerable: true,
			get: () => this.__data.issuer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.issuer = value;
			},
		});

		Object.defineProperty(this, '_entryType', {
			enumerable: true,
			get: () => this.__data._entryType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._entryType = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/udi-entry-type
		Object.defineProperty(this, 'entryType', {
			enumerable: true,
			get: () => this.__data.entryType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.entryType = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceUdi',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceUdi';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_deviceIdentifier: this._deviceIdentifier && this._deviceIdentifier.toJSON(),
			deviceIdentifier: this.deviceIdentifier,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_jurisdiction: this._jurisdiction && this._jurisdiction.toJSON(),
			jurisdiction: this.jurisdiction,
			_carrierHRF: this._carrierHRF && this._carrierHRF.toJSON(),
			carrierHRF: this.carrierHRF,
			_carrierAIDC: this._carrierAIDC && this._carrierAIDC.toJSON(),
			carrierAIDC: this.carrierAIDC,
			_issuer: this._issuer && this._issuer.toJSON(),
			issuer: this.issuer,
			_entryType: this._entryType && this._entryType.toJSON(),
			entryType: this.entryType,
		};
	}
};
