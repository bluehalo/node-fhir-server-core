/**
 * @name exports
 * @summary MedicinalProductManufacturingBusinessOperation Class
 */
module.exports = class MedicinalProductManufacturingBusinessOperation {
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

		Object.defineProperty(this, 'operationType', {
			enumerable: true,
			get: () => this.__data.operationType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.operationType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'authorisationReferenceNumber', {
			enumerable: true,
			get: () => this.__data.authorisationReferenceNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.authorisationReferenceNumber = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_effectiveDate', {
			enumerable: true,
			get: () => this.__data._effectiveDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._effectiveDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'effectiveDate', {
			enumerable: true,
			get: () => this.__data.effectiveDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.effectiveDate = value;
			},
		});

		Object.defineProperty(this, 'confidentialityIndicator', {
			enumerable: true,
			get: () => this.__data.confidentialityIndicator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.confidentialityIndicator = new CodeableConcept(value);
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

		Object.defineProperty(this, 'regulator', {
			enumerable: true,
			get: () => this.__data.regulator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.regulator = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductManufacturingBusinessOperation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductManufacturingBusinessOperation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			operationType: this.operationType && this.operationType.toJSON(),
			authorisationReferenceNumber: this.authorisationReferenceNumber && this.authorisationReferenceNumber.toJSON(),
			_effectiveDate: this._effectiveDate && this._effectiveDate.toJSON(),
			effectiveDate: this.effectiveDate,
			confidentialityIndicator: this.confidentialityIndicator && this.confidentialityIndicator.toJSON(),
			manufacturer: this.manufacturer && this.manufacturer.map(v => v.toJSON()),
			regulator: this.regulator && this.regulator.toJSON(),
		};
	}
};
