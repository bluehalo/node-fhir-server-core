/**
 * @name exports
 * @summary Dosage Class
 */
module.exports = class Dosage {
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

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
			},
		});

		Object.defineProperty(this, '_text', {
			enumerable: true,
			get: () => this.__data._text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._text = new Element(value);
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.text = value;
			},
		});

		Object.defineProperty(this, 'additionalInstruction', {
			enumerable: true,
			get: () => this.__data.additionalInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.additionalInstruction = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_patientInstruction', {
			enumerable: true,
			get: () => this.__data._patientInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._patientInstruction = new Element(value);
			},
		});

		Object.defineProperty(this, 'patientInstruction', {
			enumerable: true,
			get: () => this.__data.patientInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.patientInstruction = value;
			},
		});

		Object.defineProperty(this, 'timing', {
			enumerable: true,
			get: () => this.__data.timing,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.timing = new Timing(value);
			},
		});

		Object.defineProperty(this, '_asNeededBoolean', {
			enumerable: true,
			get: () => this.__data._asNeededBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._asNeededBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'asNeededBoolean', {
			enumerable: true,
			get: () => this.__data.asNeededBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.asNeededBoolean = value;
			},
		});

		Object.defineProperty(this, 'asNeededCodeableConcept', {
			enumerable: true,
			get: () => this.__data.asNeededCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.asNeededCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'site', {
			enumerable: true,
			get: () => this.__data.site,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.site = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'route', {
			enumerable: true,
			get: () => this.__data.route,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.route = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'method', {
			enumerable: true,
			get: () => this.__data.method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.method = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'doseAndRate', {
			enumerable: true,
			get: () => this.__data.doseAndRate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.doseAndRate = Array.isArray(value) ? value.map(v => new Element(v)) : [new Element(value)];
			},
		});

		Object.defineProperty(this, 'maxDosePerPeriod', {
			enumerable: true,
			get: () => this.__data.maxDosePerPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.maxDosePerPeriod = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'maxDosePerAdministration', {
			enumerable: true,
			get: () => this.__data.maxDosePerAdministration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.maxDosePerAdministration = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'maxDosePerLifetime', {
			enumerable: true,
			get: () => this.__data.maxDosePerLifetime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.maxDosePerLifetime = new Quantity(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Dosage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Dosage';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			_text: this._text && this._text.toJSON(),
			text: this.text,
			additionalInstruction: this.additionalInstruction && this.additionalInstruction.map(v => v.toJSON()),
			_patientInstruction: this._patientInstruction && this._patientInstruction.toJSON(),
			patientInstruction: this.patientInstruction,
			timing: this.timing && this.timing.toJSON(),
			_asNeededBoolean: this._asNeededBoolean && this._asNeededBoolean.toJSON(),
			asNeededBoolean: this.asNeededBoolean,
			asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSON(),
			site: this.site && this.site.toJSON(),
			route: this.route && this.route.toJSON(),
			method: this.method && this.method.toJSON(),
			doseAndRate: this.doseAndRate && this.doseAndRate.map(v => v.toJSON()),
			maxDosePerPeriod: this.maxDosePerPeriod && this.maxDosePerPeriod.toJSON(),
			maxDosePerAdministration: this.maxDosePerAdministration && this.maxDosePerAdministration.toJSON(),
			maxDosePerLifetime: this.maxDosePerLifetime && this.maxDosePerLifetime.toJSON(),
		};
	}
};
