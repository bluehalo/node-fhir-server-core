/**
 * @name exports
 * @summary AllergyIntolerance Class
 */
module.exports = class AllergyIntolerance {
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

		Object.defineProperty(this, 'clinicalStatus', {
			enumerable: true,
			get: () => this.__data.clinicalStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.clinicalStatus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'verificationStatus', {
			enumerable: true,
			get: () => this.__data.verificationStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.verificationStatus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
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

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_criticality', {
			enumerable: true,
			get: () => this.__data._criticality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._criticality = new Element(value);
			},
		});

		Object.defineProperty(this, 'criticality', {
			enumerable: true,
			get: () => this.__data.criticality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.criticality = value;
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
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

		Object.defineProperty(this, '_onsetDateTime', {
			enumerable: true,
			get: () => this.__data._onsetDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onsetDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'onsetDateTime', {
			enumerable: true,
			get: () => this.__data.onsetDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onsetDateTime = value;
			},
		});

		Object.defineProperty(this, 'onsetAge', {
			enumerable: true,
			get: () => this.__data.onsetAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.onsetAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'onsetPeriod', {
			enumerable: true,
			get: () => this.__data.onsetPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.onsetPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'onsetRange', {
			enumerable: true,
			get: () => this.__data.onsetRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.onsetRange = new Range(value);
			},
		});

		Object.defineProperty(this, '_onsetString', {
			enumerable: true,
			get: () => this.__data._onsetString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onsetString = new Element(value);
			},
		});

		Object.defineProperty(this, 'onsetString', {
			enumerable: true,
			get: () => this.__data.onsetString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onsetString = value;
			},
		});

		Object.defineProperty(this, '_recordedDate', {
			enumerable: true,
			get: () => this.__data._recordedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recordedDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'recordedDate', {
			enumerable: true,
			get: () => this.__data.recordedDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recordedDate = value;
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

		Object.defineProperty(this, 'asserter', {
			enumerable: true,
			get: () => this.__data.asserter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.asserter = new Reference(value);
			},
		});

		Object.defineProperty(this, '_lastOccurrence', {
			enumerable: true,
			get: () => this.__data._lastOccurrence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastOccurrence = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastOccurrence', {
			enumerable: true,
			get: () => this.__data.lastOccurrence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastOccurrence = value;
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

		Object.defineProperty(this, 'reaction', {
			enumerable: true,
			get: () => this.__data.reaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AllergyIntoleranceReaction = require('./allergyintolerancereaction.js');
				this.__data.reaction = Array.isArray(value)
					? value.map(v => new AllergyIntoleranceReaction(v))
					: [new AllergyIntoleranceReaction(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AllergyIntolerance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AllergyIntolerance';
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
			clinicalStatus: this.clinicalStatus && this.clinicalStatus.toJSON(),
			verificationStatus: this.verificationStatus && this.verificationStatus.toJSON(),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_category: this._category && this._category.toJSON(),
			category: this.category,
			_criticality: this._criticality && this._criticality.toJSON(),
			criticality: this.criticality,
			code: this.code && this.code.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			_onsetDateTime: this._onsetDateTime && this._onsetDateTime.toJSON(),
			onsetDateTime: this.onsetDateTime,
			onsetAge: this.onsetAge && this.onsetAge.toJSON(),
			onsetPeriod: this.onsetPeriod && this.onsetPeriod.toJSON(),
			onsetRange: this.onsetRange && this.onsetRange.toJSON(),
			_onsetString: this._onsetString && this._onsetString.toJSON(),
			onsetString: this.onsetString,
			_recordedDate: this._recordedDate && this._recordedDate.toJSON(),
			recordedDate: this.recordedDate,
			recorder: this.recorder && this.recorder.toJSON(),
			asserter: this.asserter && this.asserter.toJSON(),
			_lastOccurrence: this._lastOccurrence && this._lastOccurrence.toJSON(),
			lastOccurrence: this.lastOccurrence,
			note: this.note && this.note.map(v => v.toJSON()),
			reaction: this.reaction && this.reaction.map(v => v.toJSON()),
		};
	}
};
