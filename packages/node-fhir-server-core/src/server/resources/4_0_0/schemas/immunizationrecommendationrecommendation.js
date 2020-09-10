/**
 * @name exports
 * @summary ImmunizationRecommendationRecommendation Class
 */
module.exports = class ImmunizationRecommendationRecommendation {
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

		Object.defineProperty(this, 'vaccineCode', {
			enumerable: true,
			get: () => this.__data.vaccineCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.vaccineCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, 'contraindicatedVaccineCode', {
			enumerable: true,
			get: () => this.__data.contraindicatedVaccineCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.contraindicatedVaccineCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'forecastStatus', {
			enumerable: true,
			get: () => this.__data.forecastStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.forecastStatus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'forecastReason', {
			enumerable: true,
			get: () => this.__data.forecastReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.forecastReason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'dateCriterion', {
			enumerable: true,
			get: () => this.__data.dateCriterion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationRecommendationRecommendationDateCriterion = require('./immunizationrecommendationrecommendationdatecriterion.js');
				this.__data.dateCriterion = Array.isArray(value)
					? value.map(v => new ImmunizationRecommendationRecommendationDateCriterion(v))
					: [new ImmunizationRecommendationRecommendationDateCriterion(value)];
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

		Object.defineProperty(this, 'supportingImmunization', {
			enumerable: true,
			get: () => this.__data.supportingImmunization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.supportingImmunization = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'supportingPatientInformation', {
			enumerable: true,
			get: () => this.__data.supportingPatientInformation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.supportingPatientInformation = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImmunizationRecommendationRecommendation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImmunizationRecommendationRecommendation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			vaccineCode: this.vaccineCode && this.vaccineCode.map(v => v.toJSON()),
			targetDisease: this.targetDisease && this.targetDisease.toJSON(),
			contraindicatedVaccineCode:
				this.contraindicatedVaccineCode && this.contraindicatedVaccineCode.map(v => v.toJSON()),
			forecastStatus: this.forecastStatus && this.forecastStatus.toJSON(),
			forecastReason: this.forecastReason && this.forecastReason.map(v => v.toJSON()),
			dateCriterion: this.dateCriterion && this.dateCriterion.map(v => v.toJSON()),
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
			supportingImmunization: this.supportingImmunization && this.supportingImmunization.map(v => v.toJSON()),
			supportingPatientInformation:
				this.supportingPatientInformation && this.supportingPatientInformation.map(v => v.toJSON()),
		};
	}
};
