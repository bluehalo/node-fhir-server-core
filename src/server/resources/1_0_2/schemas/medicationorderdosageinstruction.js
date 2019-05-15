/**
 * @name exports
 * @summary MedicationOrderDosageInstruction Class
 */
module.exports = class MedicationOrderDosageInstruction {
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

		Object.defineProperty(this, 'additionalInstructions', {
			enumerable: true,
			get: () => this.__data.additionalInstructions,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.additionalInstructions = new CodeableConcept(value);
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

		Object.defineProperty(this, 'doseRange', {
			enumerable: true,
			get: () => this.__data.doseRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.doseRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'doseQuantity', {
			enumerable: true,
			get: () => this.__data.doseQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.doseQuantity = new Quantity(value);
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationOrderDosageInstruction',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationOrderDosageInstruction';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			additionalInstructions: this.additionalInstructions && this.additionalInstructions.toJSON(),
			timing: this.timing && this.timing.toJSON(),
			_asNeededBoolean: this._asNeededBoolean && this._asNeededBoolean.toJSON(),
			asNeededBoolean: this.asNeededBoolean,
			asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSON(),
			siteCodeableConcept: this.siteCodeableConcept && this.siteCodeableConcept.toJSON(),
			siteReference: this.siteReference && this.siteReference.toJSON(),
			route: this.route && this.route.toJSON(),
			method: this.method && this.method.toJSON(),
			doseRange: this.doseRange && this.doseRange.toJSON(),
			doseQuantity: this.doseQuantity && this.doseQuantity.toJSON(),
			rateRatio: this.rateRatio && this.rateRatio.toJSON(),
			rateRange: this.rateRange && this.rateRange.toJSON(),
			maxDosePerPeriod: this.maxDosePerPeriod && this.maxDosePerPeriod.toJSON(),
		};
	}
};
