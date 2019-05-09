/**
 * @name exports
 * @summary MedicationKnowledgeKinetics Class
 */
module.exports = class MedicationKnowledgeKinetics {
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

		Object.defineProperty(this, 'areaUnderCurve', {
			enumerable: true,
			get: () => this.__data.areaUnderCurve,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.areaUnderCurve = Array.isArray(value) ? value.map(v => new Quantity(v)) : [new Quantity(value)];
			},
		});

		Object.defineProperty(this, 'lethalDose50', {
			enumerable: true,
			get: () => this.__data.lethalDose50,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.lethalDose50 = Array.isArray(value) ? value.map(v => new Quantity(v)) : [new Quantity(value)];
			},
		});

		Object.defineProperty(this, 'halfLifePeriod', {
			enumerable: true,
			get: () => this.__data.halfLifePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.halfLifePeriod = new Duration(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationKnowledgeKinetics',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationKnowledgeKinetics';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			areaUnderCurve: this.areaUnderCurve && this.areaUnderCurve.map(v => v.toJSON()),
			lethalDose50: this.lethalDose50 && this.lethalDose50.map(v => v.toJSON()),
			halfLifePeriod: this.halfLifePeriod && this.halfLifePeriod.toJSON(),
		};
	}
};
