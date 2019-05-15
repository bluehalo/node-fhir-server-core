/**
 * @name exports
 * @summary EncounterHospitalization Class
 */
module.exports = class EncounterHospitalization {
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

		Object.defineProperty(this, 'preAdmissionIdentifier', {
			enumerable: true,
			get: () => this.__data.preAdmissionIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.preAdmissionIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'origin', {
			enumerable: true,
			get: () => this.__data.origin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.origin = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-admit-source
		Object.defineProperty(this, 'admitSource', {
			enumerable: true,
			get: () => this.__data.admitSource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.admitSource = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'admittingDiagnosis', {
			enumerable: true,
			get: () => this.__data.admittingDiagnosis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.admittingDiagnosis = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'reAdmission', {
			enumerable: true,
			get: () => this.__data.reAdmission,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reAdmission = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-diet
		Object.defineProperty(this, 'dietPreference', {
			enumerable: true,
			get: () => this.__data.dietPreference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.dietPreference = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-courtesy
		Object.defineProperty(this, 'specialCourtesy', {
			enumerable: true,
			get: () => this.__data.specialCourtesy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.specialCourtesy = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-arrangements
		Object.defineProperty(this, 'specialArrangement', {
			enumerable: true,
			get: () => this.__data.specialArrangement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.specialArrangement = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'destination', {
			enumerable: true,
			get: () => this.__data.destination,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.destination = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
		Object.defineProperty(this, 'dischargeDisposition', {
			enumerable: true,
			get: () => this.__data.dischargeDisposition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.dischargeDisposition = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'dischargeDiagnosis', {
			enumerable: true,
			get: () => this.__data.dischargeDiagnosis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.dischargeDiagnosis = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EncounterHospitalization',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EncounterHospitalization';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			preAdmissionIdentifier: this.preAdmissionIdentifier && this.preAdmissionIdentifier.toJSON(),
			origin: this.origin && this.origin.toJSON(),
			admitSource: this.admitSource && this.admitSource.toJSON(),
			admittingDiagnosis: this.admittingDiagnosis && this.admittingDiagnosis.map(v => v.toJSON()),
			reAdmission: this.reAdmission && this.reAdmission.toJSON(),
			dietPreference: this.dietPreference && this.dietPreference.map(v => v.toJSON()),
			specialCourtesy: this.specialCourtesy && this.specialCourtesy.map(v => v.toJSON()),
			specialArrangement: this.specialArrangement && this.specialArrangement.map(v => v.toJSON()),
			destination: this.destination && this.destination.toJSON(),
			dischargeDisposition: this.dischargeDisposition && this.dischargeDisposition.toJSON(),
			dischargeDiagnosis: this.dischargeDiagnosis && this.dischargeDiagnosis.map(v => v.toJSON()),
		};
	}
};
