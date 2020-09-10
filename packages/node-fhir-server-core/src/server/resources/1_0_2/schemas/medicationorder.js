/**
 * @name exports
 * @summary MedicationOrder Class
 */
module.exports = class MedicationOrder {
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

		Object.defineProperty(this, '_dateWritten', {
			enumerable: true,
			get: () => this.__data._dateWritten,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateWritten = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateWritten', {
			enumerable: true,
			get: () => this.__data.dateWritten,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateWritten = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-order-status
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

		Object.defineProperty(this, '_dateEnded', {
			enumerable: true,
			get: () => this.__data._dateEnded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateEnded = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateEnded', {
			enumerable: true,
			get: () => this.__data.dateEnded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateEnded = value;
			},
		});

		Object.defineProperty(this, 'reasonEnded', {
			enumerable: true,
			get: () => this.__data.reasonEnded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonEnded = new CodeableConcept(value);
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

		Object.defineProperty(this, 'prescriber', {
			enumerable: true,
			get: () => this.__data.prescriber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.prescriber = new Reference(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		Object.defineProperty(this, 'reasonCodeableConcept', {
			enumerable: true,
			get: () => this.__data.reasonCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCodeableConcept = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		Object.defineProperty(this, 'reasonReference', {
			enumerable: true,
			get: () => this.__data.reasonReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reasonReference = new Reference(value);
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

		Object.defineProperty(this, 'dosageInstruction', {
			enumerable: true,
			get: () => this.__data.dosageInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationOrderDosageInstruction = require('./medicationorderdosageinstruction.js');
				this.__data.dosageInstruction = Array.isArray(value)
					? value.map(v => new MedicationOrderDosageInstruction(v))
					: [new MedicationOrderDosageInstruction(value)];
			},
		});

		Object.defineProperty(this, 'dispenseRequest', {
			enumerable: true,
			get: () => this.__data.dispenseRequest,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationOrderDispenseRequest = require('./medicationorderdispenserequest.js');
				this.__data.dispenseRequest = new MedicationOrderDispenseRequest(value);
			},
		});

		Object.defineProperty(this, 'substitution', {
			enumerable: true,
			get: () => this.__data.substitution,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationOrderSubstitution = require('./medicationordersubstitution.js');
				this.__data.substitution = new MedicationOrderSubstitution(value);
			},
		});

		Object.defineProperty(this, 'priorPrescription', {
			enumerable: true,
			get: () => this.__data.priorPrescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.priorPrescription = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationOrder',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationOrder';
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
			_dateWritten: this._dateWritten && this._dateWritten.toJSON(),
			dateWritten: this.dateWritten,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_dateEnded: this._dateEnded && this._dateEnded.toJSON(),
			dateEnded: this.dateEnded,
			reasonEnded: this.reasonEnded && this.reasonEnded.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			prescriber: this.prescriber && this.prescriber.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			reasonCodeableConcept: this.reasonCodeableConcept && this.reasonCodeableConcept.toJSON(),
			reasonReference: this.reasonReference && this.reasonReference.toJSON(),
			_note: this._note && this._note.toJSON(),
			note: this.note,
			medicationCodeableConcept: this.medicationCodeableConcept && this.medicationCodeableConcept.toJSON(),
			medicationReference: this.medicationReference && this.medicationReference.toJSON(),
			dosageInstruction: this.dosageInstruction && this.dosageInstruction.map(v => v.toJSON()),
			dispenseRequest: this.dispenseRequest && this.dispenseRequest.toJSON(),
			substitution: this.substitution && this.substitution.toJSON(),
			priorPrescription: this.priorPrescription && this.priorPrescription.toJSON(),
		};
	}
};
