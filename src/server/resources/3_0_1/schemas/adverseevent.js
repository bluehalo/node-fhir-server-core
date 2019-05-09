/**
 * @name exports
 * @summary AdverseEvent Class
 */
module.exports = class AdverseEvent {
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
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_category', {
			enumerable: true,
			get: () => this.__data._category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._category = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
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

		Object.defineProperty(this, 'reaction', {
			enumerable: true,
			get: () => this.__data.reaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reaction = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-seriousness
		Object.defineProperty(this, 'seriousness', {
			enumerable: true,
			get: () => this.__data.seriousness,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.seriousness = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-outcome
		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.outcome = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'recorder', {
			enumerable: true,
			get: () => this.__data.recorder,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.recorder = new Reference(value);
			},
		});

		Object.defineProperty(this, 'eventParticipant', {
			enumerable: true,
			get: () => this.__data.eventParticipant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.eventParticipant = new Reference(value);
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

		Object.defineProperty(this, 'suspectEntity', {
			enumerable: true,
			get: () => this.__data.suspectEntity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AdverseEventSuspectEntity = require('./adverseeventsuspectentity.js');
				this.__data.suspectEntity = Array.isArray(value)
					? value.map(v => new AdverseEventSuspectEntity(v))
					: [new AdverseEventSuspectEntity(value)];
			},
		});

		Object.defineProperty(this, 'subjectMedicalHistory', {
			enumerable: true,
			get: () => this.__data.subjectMedicalHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subjectMedicalHistory = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'referenceDocument', {
			enumerable: true,
			get: () => this.__data.referenceDocument,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.referenceDocument = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'study', {
			enumerable: true,
			get: () => this.__data.study,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.study = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AdverseEvent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AdverseEvent';
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
			identifier: this.identifier && this.identifier.toJSON(),
			_category: this._category && this._category.toJSON(),
			category: this.category,
			type: this.type && this.type.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			reaction: this.reaction && this.reaction.map(v => v.toJSON()),
			location: this.location && this.location.toJSON(),
			seriousness: this.seriousness && this.seriousness.toJSON(),
			outcome: this.outcome && this.outcome.toJSON(),
			recorder: this.recorder && this.recorder.toJSON(),
			eventParticipant: this.eventParticipant && this.eventParticipant.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			suspectEntity: this.suspectEntity && this.suspectEntity.map(v => v.toJSON()),
			subjectMedicalHistory: this.subjectMedicalHistory && this.subjectMedicalHistory.map(v => v.toJSON()),
			referenceDocument: this.referenceDocument && this.referenceDocument.map(v => v.toJSON()),
			study: this.study && this.study.map(v => v.toJSON()),
		};
	}
};
