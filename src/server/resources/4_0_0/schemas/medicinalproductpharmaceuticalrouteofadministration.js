/**
 * @name exports
 * @summary MedicinalProductPharmaceuticalRouteOfAdministration Class
 */
module.exports = class MedicinalProductPharmaceuticalRouteOfAdministration {
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

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'firstDose', {
			enumerable: true,
			get: () => this.__data.firstDose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.firstDose = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'maxSingleDose', {
			enumerable: true,
			get: () => this.__data.maxSingleDose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.maxSingleDose = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'maxDosePerDay', {
			enumerable: true,
			get: () => this.__data.maxDosePerDay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.maxDosePerDay = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'maxDosePerTreatmentPeriod', {
			enumerable: true,
			get: () => this.__data.maxDosePerTreatmentPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.maxDosePerTreatmentPeriod = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'maxTreatmentPeriod', {
			enumerable: true,
			get: () => this.__data.maxTreatmentPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.maxTreatmentPeriod = new Duration(value);
			},
		});

		Object.defineProperty(this, 'targetSpecies', {
			enumerable: true,
			get: () => this.__data.targetSpecies,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = require('./medicinalproductpharmaceuticalrouteofadministrationtargetspecies.js');
				this.__data.targetSpecies = Array.isArray(value)
					? value.map(v => new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(v))
					: [new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductPharmaceuticalRouteOfAdministration',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductPharmaceuticalRouteOfAdministration';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			firstDose: this.firstDose && this.firstDose.toJSON(),
			maxSingleDose: this.maxSingleDose && this.maxSingleDose.toJSON(),
			maxDosePerDay: this.maxDosePerDay && this.maxDosePerDay.toJSON(),
			maxDosePerTreatmentPeriod: this.maxDosePerTreatmentPeriod && this.maxDosePerTreatmentPeriod.toJSON(),
			maxTreatmentPeriod: this.maxTreatmentPeriod && this.maxTreatmentPeriod.toJSON(),
			targetSpecies: this.targetSpecies && this.targetSpecies.map(v => v.toJSON()),
		};
	}
};
