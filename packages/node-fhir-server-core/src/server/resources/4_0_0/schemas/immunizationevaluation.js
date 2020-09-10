/**
 * @name exports
 * @summary ImmunizationEvaluation Class
 */
module.exports = class ImmunizationEvaluation {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
			},
		});

		Object.defineProperty(this, 'authority', {
			enumerable: true,
			get: () => this.__data.authority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.authority = new Reference(value);
			},
		});

		Object.defineProperty(this, 'targetDisease', {
			enumerable: true,
			get: () => this.__data.targetDisease,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.targetDisease = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'immunizationEvent', {
			enumerable: true,
			get: () => this.__data.immunizationEvent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.immunizationEvent = new Reference(value);
			},
		});

		Object.defineProperty(this, 'doseStatus', {
			enumerable: true,
			get: () => this.__data.doseStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.doseStatus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'doseStatusReason', {
			enumerable: true,
			get: () => this.__data.doseStatusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.doseStatusReason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_series', {
			enumerable: true,
			get: () => this.__data._series,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._series = new Element(value);
			},
		});

		Object.defineProperty(this, 'series', {
			enumerable: true,
			get: () => this.__data.series,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.series = value;
			},
		});

		Object.defineProperty(this, '_doseNumberPositiveInt', {
			enumerable: true,
			get: () => this.__data._doseNumberPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doseNumberPositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'doseNumberPositiveInt', {
			enumerable: true,
			get: () => this.__data.doseNumberPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doseNumberPositiveInt = value;
			},
		});

		Object.defineProperty(this, '_doseNumberString', {
			enumerable: true,
			get: () => this.__data._doseNumberString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doseNumberString = new Element(value);
			},
		});

		Object.defineProperty(this, 'doseNumberString', {
			enumerable: true,
			get: () => this.__data.doseNumberString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doseNumberString = value;
			},
		});

		Object.defineProperty(this, '_seriesDosesPositiveInt', {
			enumerable: true,
			get: () => this.__data._seriesDosesPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._seriesDosesPositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'seriesDosesPositiveInt', {
			enumerable: true,
			get: () => this.__data.seriesDosesPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.seriesDosesPositiveInt = value;
			},
		});

		Object.defineProperty(this, '_seriesDosesString', {
			enumerable: true,
			get: () => this.__data._seriesDosesString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._seriesDosesString = new Element(value);
			},
		});

		Object.defineProperty(this, 'seriesDosesString', {
			enumerable: true,
			get: () => this.__data.seriesDosesString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.seriesDosesString = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImmunizationEvaluation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImmunizationEvaluation';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			patient: this.patient && this.patient.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			authority: this.authority && this.authority.toJSON(),
			targetDisease: this.targetDisease && this.targetDisease.toJSON(),
			immunizationEvent: this.immunizationEvent && this.immunizationEvent.toJSON(),
			doseStatus: this.doseStatus && this.doseStatus.toJSON(),
			doseStatusReason: this.doseStatusReason && this.doseStatusReason.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_series: this._series && this._series.toJSON(),
			series: this.series,
			_doseNumberPositiveInt: this._doseNumberPositiveInt && this._doseNumberPositiveInt.toJSON(),
			doseNumberPositiveInt: this.doseNumberPositiveInt,
			_doseNumberString: this._doseNumberString && this._doseNumberString.toJSON(),
			doseNumberString: this.doseNumberString,
			_seriesDosesPositiveInt: this._seriesDosesPositiveInt && this._seriesDosesPositiveInt.toJSON(),
			seriesDosesPositiveInt: this.seriesDosesPositiveInt,
			_seriesDosesString: this._seriesDosesString && this._seriesDosesString.toJSON(),
			seriesDosesString: this.seriesDosesString,
		};
	}
};
