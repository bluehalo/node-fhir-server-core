/**
 * @name exports
 * @summary Encounter Class
 */
module.exports = class Encounter {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-status
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

		Object.defineProperty(this, 'statusHistory', {
			enumerable: true,
			get: () => this.__data.statusHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EncounterStatusHistory = require('./encounterstatushistory.js');
				this.__data.statusHistory = Array.isArray(value)
					? value.map(v => new EncounterStatusHistory(v))
					: [new EncounterStatusHistory(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActEncounterCode
		Object.defineProperty(this, 'class', {
			enumerable: true,
			get: () => this.__data.class,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.class = new Coding(value);
			},
		});

		Object.defineProperty(this, 'classHistory', {
			enumerable: true,
			get: () => this.__data.classHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EncounterClassHistory = require('./encounterclasshistory.js');
				this.__data.classHistory = Array.isArray(value)
					? value.map(v => new EncounterClassHistory(v))
					: [new EncounterClassHistory(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new CodeableConcept(v)) : [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActPriority
		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.priority = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
			},
		});

		Object.defineProperty(this, 'episodeOfCare', {
			enumerable: true,
			get: () => this.__data.episodeOfCare,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.episodeOfCare = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'incomingReferral', {
			enumerable: true,
			get: () => this.__data.incomingReferral,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.incomingReferral = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'participant', {
			enumerable: true,
			get: () => this.__data.participant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EncounterParticipant = require('./encounterparticipant.js');
				this.__data.participant = Array.isArray(value)
					? value.map(v => new EncounterParticipant(v))
					: [new EncounterParticipant(value)];
			},
		});

		Object.defineProperty(this, 'appointment', {
			enumerable: true,
			get: () => this.__data.appointment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.appointment = new Reference(value);
			},
		});

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.period = new Period(value);
			},
		});

		Object.defineProperty(this, 'length', {
			enumerable: true,
			get: () => this.__data.length,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.length = new Duration(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-reason
		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'diagnosis', {
			enumerable: true,
			get: () => this.__data.diagnosis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EncounterDiagnosis = require('./encounterdiagnosis.js');
				this.__data.diagnosis = Array.isArray(value)
					? value.map(v => new EncounterDiagnosis(v))
					: [new EncounterDiagnosis(value)];
			},
		});

		Object.defineProperty(this, 'account', {
			enumerable: true,
			get: () => this.__data.account,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.account = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'hospitalization', {
			enumerable: true,
			get: () => this.__data.hospitalization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EncounterHospitalization = require('./encounterhospitalization.js');
				this.__data.hospitalization = new EncounterHospitalization(value);
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EncounterLocation = require('./encounterlocation.js');
				this.__data.location = Array.isArray(value)
					? value.map(v => new EncounterLocation(v))
					: [new EncounterLocation(value)];
			},
		});

		Object.defineProperty(this, 'serviceProvider', {
			enumerable: true,
			get: () => this.__data.serviceProvider,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.serviceProvider = new Reference(value);
			},
		});

		Object.defineProperty(this, 'partOf', {
			enumerable: true,
			get: () => this.__data.partOf,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.partOf = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Encounter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Encounter';
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
			statusHistory: this.statusHistory && this.statusHistory.map(v => v.toJSON()),
			class: this.class && this.class.toJSON(),
			classHistory: this.classHistory && this.classHistory.map(v => v.toJSON()),
			type: this.type && this.type.map(v => v.toJSON()),
			priority: this.priority && this.priority.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			episodeOfCare: this.episodeOfCare && this.episodeOfCare.map(v => v.toJSON()),
			incomingReferral: this.incomingReferral && this.incomingReferral.map(v => v.toJSON()),
			participant: this.participant && this.participant.map(v => v.toJSON()),
			appointment: this.appointment && this.appointment.toJSON(),
			period: this.period && this.period.toJSON(),
			length: this.length && this.length.toJSON(),
			reason: this.reason && this.reason.map(v => v.toJSON()),
			diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSON()),
			account: this.account && this.account.map(v => v.toJSON()),
			hospitalization: this.hospitalization && this.hospitalization.toJSON(),
			location: this.location && this.location.map(v => v.toJSON()),
			serviceProvider: this.serviceProvider && this.serviceProvider.toJSON(),
			partOf: this.partOf && this.partOf.toJSON(),
		};
	}
};
