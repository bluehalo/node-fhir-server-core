/**
 * @name exports
 * @summary MedicationKnowledgeAdministrationGuidelines Class
 */
module.exports = class MedicationKnowledgeAdministrationGuidelines {
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

		Object.defineProperty(this, 'dosage', {
			enumerable: true,
			get: () => this.__data.dosage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeAdministrationGuidelinesDosage = require('./medicationknowledgeadministrationguidelinesdosage.js');
				this.__data.dosage = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeAdministrationGuidelinesDosage(v))
					: [new MedicationKnowledgeAdministrationGuidelinesDosage(value)];
			},
		});

		Object.defineProperty(this, 'indicationCodeableConcept', {
			enumerable: true,
			get: () => this.__data.indicationCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.indicationCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'indicationReference', {
			enumerable: true,
			get: () => this.__data.indicationReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.indicationReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'patientCharacteristics', {
			enumerable: true,
			get: () => this.__data.patientCharacteristics,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = require('./medicationknowledgeadministrationguidelinespatientcharacteristics.js');
				this.__data.patientCharacteristics = Array.isArray(value)
					? value.map(v => new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(v))
					: [new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationKnowledgeAdministrationGuidelines',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationKnowledgeAdministrationGuidelines';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			dosage: this.dosage && this.dosage.map(v => v.toJSON()),
			indicationCodeableConcept: this.indicationCodeableConcept && this.indicationCodeableConcept.toJSON(),
			indicationReference: this.indicationReference && this.indicationReference.toJSON(),
			patientCharacteristics: this.patientCharacteristics && this.patientCharacteristics.map(v => v.toJSON()),
		};
	}
};
