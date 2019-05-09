/**
 * @name exports
 * @summary MedicationAdministration Class
 */
module.exports = class MedicationAdministration {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-admin-status
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

		Object.defineProperty(this, 'practitioner', {
			enumerable: true,
			get: () => this.__data.practitioner,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.practitioner = new Reference(value);
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

		Object.defineProperty(this, 'prescription', {
			enumerable: true,
			get: () => this.__data.prescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.prescription = new Reference(value);
			},
		});

		Object.defineProperty(this, '_wasNotGiven', {
			enumerable: true,
			get: () => this.__data._wasNotGiven,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._wasNotGiven = new Element(value);
			},
		});

		Object.defineProperty(this, 'wasNotGiven', {
			enumerable: true,
			get: () => this.__data.wasNotGiven,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.wasNotGiven = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes
		Object.defineProperty(this, 'reasonNotGiven', {
			enumerable: true,
			get: () => this.__data.reasonNotGiven,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonNotGiven = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-given-codes
		Object.defineProperty(this, 'reasonGiven', {
			enumerable: true,
			get: () => this.__data.reasonGiven,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonGiven = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_effectiveTimeDateTime', {
			enumerable: true,
			get: () => this.__data._effectiveTimeDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._effectiveTimeDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'effectiveTimeDateTime', {
			enumerable: true,
			get: () => this.__data.effectiveTimeDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.effectiveTimeDateTime = value;
			},
		});

		Object.defineProperty(this, 'effectiveTimePeriod', {
			enumerable: true,
			get: () => this.__data.effectiveTimePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.effectiveTimePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'medicationCodeableConcept', {
			enumerable: true,
			get: () => this.__data.medicationCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.medicationCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'medicationReference', {
			enumerable: true,
			get: () => this.__data.medicationReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.medicationReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'device', {
			enumerable: true,
			get: () => this.__data.device,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.device = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_note', {
			enumerable: true,
			get: () => this.__data._note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._note = new Element(value);
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.note = value;
			},
		});

		Object.defineProperty(this, 'dosage', {
			enumerable: true,
			get: () => this.__data.dosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationAdministrationDosage = require('./medicationadministrationdosage.js');
				this.__data.dosage = new MedicationAdministrationDosage(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationAdministration',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationAdministration';
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
			practitioner: this.practitioner && this.practitioner.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			prescription: this.prescription && this.prescription.toJSON(),
			_wasNotGiven: this._wasNotGiven && this._wasNotGiven.toJSON(),
			wasNotGiven: this.wasNotGiven,
			reasonNotGiven: this.reasonNotGiven && this.reasonNotGiven.map(v => v.toJSON()),
			reasonGiven: this.reasonGiven && this.reasonGiven.map(v => v.toJSON()),
			_effectiveTimeDateTime: this._effectiveTimeDateTime && this._effectiveTimeDateTime.toJSON(),
			effectiveTimeDateTime: this.effectiveTimeDateTime,
			effectiveTimePeriod: this.effectiveTimePeriod && this.effectiveTimePeriod.toJSON(),
			medicationCodeableConcept: this.medicationCodeableConcept && this.medicationCodeableConcept.toJSON(),
			medicationReference: this.medicationReference && this.medicationReference.toJSON(),
			device: this.device && this.device.map(v => v.toJSON()),
			_note: this._note && this._note.toJSON(),
			note: this.note,
			dosage: this.dosage && this.dosage.toJSON(),
		};
	}
};
