/**
 * @name exports
 * @summary Immunization Class
 */
module.exports = class Immunization {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-status
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

		Object.defineProperty(this, '_notGiven', {
			enumerable: true,
			get: () => this.__data._notGiven,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._notGiven = new Element(value);
			},
		});

		Object.defineProperty(this, 'notGiven', {
			enumerable: true,
			get: () => this.__data.notGiven,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.notGiven = value;
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

		Object.defineProperty(this, 'encounter', {
			enumerable: true,
			get: () => this.__data.encounter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.encounter = new Reference(value);
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

		Object.defineProperty(this, '_primarySource', {
			enumerable: true,
			get: () => this.__data._primarySource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._primarySource = new Element(value);
			},
		});

		Object.defineProperty(this, 'primarySource', {
			enumerable: true,
			get: () => this.__data.primarySource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.primarySource = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-origin
		Object.defineProperty(this, 'reportOrigin', {
			enumerable: true,
			get: () => this.__data.reportOrigin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reportOrigin = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = new Reference(value);
			},
		});

		Object.defineProperty(this, 'manufacturer', {
			enumerable: true,
			get: () => this.__data.manufacturer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.manufacturer = new Reference(value);
			},
		});

		Object.defineProperty(this, '_lotNumber', {
			enumerable: true,
			get: () => this.__data._lotNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lotNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'lotNumber', {
			enumerable: true,
			get: () => this.__data.lotNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lotNumber = value;
			},
		});

		Object.defineProperty(this, '_expirationDate', {
			enumerable: true,
			get: () => this.__data._expirationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._expirationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'expirationDate', {
			enumerable: true,
			get: () => this.__data.expirationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.expirationDate = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-site
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-route
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

		Object.defineProperty(this, 'practitioner', {
			enumerable: true,
			get: () => this.__data.practitioner,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationPractitioner = require('./immunizationpractitioner.js');
				this.__data.practitioner = Array.isArray(value)
					? value.map(v => new ImmunizationPractitioner(v))
					: [new ImmunizationPractitioner(value)];
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		Object.defineProperty(this, 'explanation', {
			enumerable: true,
			get: () => this.__data.explanation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationExplanation = require('./immunizationexplanation.js');
				this.__data.explanation = new ImmunizationExplanation(value);
			},
		});

		Object.defineProperty(this, 'reaction', {
			enumerable: true,
			get: () => this.__data.reaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationReaction = require('./immunizationreaction.js');
				this.__data.reaction = Array.isArray(value)
					? value.map(v => new ImmunizationReaction(v))
					: [new ImmunizationReaction(value)];
			},
		});

		Object.defineProperty(this, 'vaccinationProtocol', {
			enumerable: true,
			get: () => this.__data.vaccinationProtocol,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ImmunizationVaccinationProtocol = require('./immunizationvaccinationprotocol.js');
				this.__data.vaccinationProtocol = Array.isArray(value)
					? value.map(v => new ImmunizationVaccinationProtocol(v))
					: [new ImmunizationVaccinationProtocol(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Immunization',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Immunization';
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
			_notGiven: this._notGiven && this._notGiven.toJSON(),
			notGiven: this.notGiven,
			vaccineCode: this.vaccineCode && this.vaccineCode.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_primarySource: this._primarySource && this._primarySource.toJSON(),
			primarySource: this.primarySource,
			reportOrigin: this.reportOrigin && this.reportOrigin.toJSON(),
			location: this.location && this.location.toJSON(),
			manufacturer: this.manufacturer && this.manufacturer.toJSON(),
			_lotNumber: this._lotNumber && this._lotNumber.toJSON(),
			lotNumber: this.lotNumber,
			_expirationDate: this._expirationDate && this._expirationDate.toJSON(),
			expirationDate: this.expirationDate,
			site: this.site && this.site.toJSON(),
			route: this.route && this.route.toJSON(),
			doseQuantity: this.doseQuantity && this.doseQuantity.toJSON(),
			practitioner: this.practitioner && this.practitioner.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			explanation: this.explanation && this.explanation.toJSON(),
			reaction: this.reaction && this.reaction.map(v => v.toJSON()),
			vaccinationProtocol: this.vaccinationProtocol && this.vaccinationProtocol.map(v => v.toJSON()),
		};
	}
};
