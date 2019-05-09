/**
 * @name exports
 * @summary ObservationDefinitionQuantitativeDetails Class
 */
module.exports = class ObservationDefinitionQuantitativeDetails {
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

		Object.defineProperty(this, 'customaryUnit', {
			enumerable: true,
			get: () => this.__data.customaryUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.customaryUnit = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'unit', {
			enumerable: true,
			get: () => this.__data.unit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.unit = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_conversionFactor', {
			enumerable: true,
			get: () => this.__data._conversionFactor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._conversionFactor = new Element(value);
			},
		});

		Object.defineProperty(this, 'conversionFactor', {
			enumerable: true,
			get: () => this.__data.conversionFactor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.conversionFactor = value;
			},
		});

		Object.defineProperty(this, '_decimalPrecision', {
			enumerable: true,
			get: () => this.__data._decimalPrecision,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._decimalPrecision = new Element(value);
			},
		});

		Object.defineProperty(this, 'decimalPrecision', {
			enumerable: true,
			get: () => this.__data.decimalPrecision,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.decimalPrecision = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ObservationDefinitionQuantitativeDetails',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ObservationDefinitionQuantitativeDetails';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			customaryUnit: this.customaryUnit && this.customaryUnit.toJSON(),
			unit: this.unit && this.unit.toJSON(),
			_conversionFactor: this._conversionFactor && this._conversionFactor.toJSON(),
			conversionFactor: this.conversionFactor,
			_decimalPrecision: this._decimalPrecision && this._decimalPrecision.toJSON(),
			decimalPrecision: this.decimalPrecision,
		};
	}
};
