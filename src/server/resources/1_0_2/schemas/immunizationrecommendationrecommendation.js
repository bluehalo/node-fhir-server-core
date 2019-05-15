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
		// valueSetReference: http://hl7.org/fhir/ValueSet/vaccine-code
		Object.defineProperty(this, 'vaccineCode', {
			enumerable: true,
			get: () => this.__data.vaccineCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.vaccineCode = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_doseNumber', {
			enumerable: true,
			get: () => this.__data._doseNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doseNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'doseNumber', {
			enumerable: true,
			get: () => this.__data.doseNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doseNumber = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-recommendation-status
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

		Object.defineProperty(this, 'protocol', {
			enumerable: true,
			get: () => this.__data.protocol,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationRecommendationRecommendationProtocol = require('./immunizationrecommendationrecommendationprotocol.js');
				this.__data.protocol = new ImmunizationRecommendationRecommendationProtocol(value);
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
			_date: this._date && this._date.toJSON(),
			date: this.date,
			vaccineCode: this.vaccineCode && this.vaccineCode.toJSON(),
			_doseNumber: this._doseNumber && this._doseNumber.toJSON(),
			doseNumber: this.doseNumber,
			forecastStatus: this.forecastStatus && this.forecastStatus.toJSON(),
			dateCriterion: this.dateCriterion && this.dateCriterion.map(v => v.toJSON()),
			protocol: this.protocol && this.protocol.toJSON(),
			supportingImmunization: this.supportingImmunization && this.supportingImmunization.map(v => v.toJSON()),
			supportingPatientInformation:
				this.supportingPatientInformation && this.supportingPatientInformation.map(v => v.toJSON()),
		};
	}
};
