/**
 * @name exports
 * @summary MedicationAdministrationDosage Class
 */
module.exports = class MedicationAdministrationDosage {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/route-codes
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/administration-method-codes
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

		Object.defineProperty(this, 'dose', {
			enumerable: true,
			get: () => this.__data.dose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.dose = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'rateRatio', {
			enumerable: true,
			get: () => this.__data.rateRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.rateRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'rateQuantity', {
			enumerable: true,
			get: () => this.__data.rateQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.rateQuantity = new Quantity(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationAdministrationDosage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationAdministrationDosage';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			site: this.site && this.site.toJSON(),
			route: this.route && this.route.toJSON(),
			method: this.method && this.method.toJSON(),
			dose: this.dose && this.dose.toJSON(),
			rateRatio: this.rateRatio && this.rateRatio.toJSON(),
			rateQuantity: this.rateQuantity && this.rateQuantity.toJSON(),
		};
	}
};
