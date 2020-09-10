/**
 * @name exports
 * @summary MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod Class
 */
module.exports = class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
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

		Object.defineProperty(this, 'tissue', {
			enumerable: true,
			get: () => this.__data.tissue,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.tissue = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.value = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_supportingInformation', {
			enumerable: true,
			get: () => this.__data._supportingInformation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._supportingInformation = new Element(value);
			},
		});

		Object.defineProperty(this, 'supportingInformation', {
			enumerable: true,
			get: () => this.__data.supportingInformation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.supportingInformation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			tissue: this.tissue && this.tissue.toJSON(),
			value: this.value && this.value.toJSON(),
			_supportingInformation: this._supportingInformation && this._supportingInformation.toJSON(),
			supportingInformation: this.supportingInformation,
		};
	}
};
