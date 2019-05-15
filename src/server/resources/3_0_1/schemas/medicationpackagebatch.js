/**
 * @name exports
 * @summary MedicationPackageBatch Class
 */
module.exports = class MedicationPackageBatch {
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationPackageBatch',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationPackageBatch';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_lotNumber: this._lotNumber && this._lotNumber.toJSON(),
			lotNumber: this.lotNumber,
			_expirationDate: this._expirationDate && this._expirationDate.toJSON(),
			expirationDate: this.expirationDate,
		};
	}
};
