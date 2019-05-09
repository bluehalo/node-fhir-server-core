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
		Object.defineProperty(this, 'siteCodeableConcept', {
			enumerable: true,
			get: () => this.__data.siteCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.siteCodeableConcept = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		Object.defineProperty(this, 'siteReference', {
			enumerable: true,
			get: () => this.__data.siteReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.siteReference = new Reference(value);
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

		Object.defineProperty(this, 'rateRange', {
			enumerable: true,
			get: () => this.__data.rateRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.rateRange = new Range(value);
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
			siteCodeableConcept: this.siteCodeableConcept && this.siteCodeableConcept.toJSON(),
			siteReference: this.siteReference && this.siteReference.toJSON(),
			route: this.route && this.route.toJSON(),
			method: this.method && this.method.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			rateRatio: this.rateRatio && this.rateRatio.toJSON(),
			rateRange: this.rateRange && this.rateRange.toJSON(),
		};
	}
};
