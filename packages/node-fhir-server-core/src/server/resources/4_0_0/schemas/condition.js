/**
 * @name exports
 * @summary Condition Class
 */
module.exports = class Condition {
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

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'severity', {
			enumerable: true,
			get: () => this.__data.severity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.severity = new CodeableConcept(value);
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

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, '_abatementDateTime', {
			enumerable: true,
			get: () => this.__data._abatementDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._abatementDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'abatementDateTime', {
			enumerable: true,
			get: () => this.__data.abatementDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.abatementDateTime = value;
			},
		});

		Object.defineProperty(this, 'abatementAge', {
			enumerable: true,
			get: () => this.__data.abatementAge,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Age = require('./age.js');
				this.__data.abatementAge = new Age(value);
			},
		});

		Object.defineProperty(this, 'abatementPeriod', {
			enumerable: true,
			get: () => this.__data.abatementPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.abatementPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'abatementRange', {
			enumerable: true,
			get: () => this.__data.abatementRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.abatementRange = new Range(value);
			},
		});

		Object.defineProperty(this, '_abatementString', {
			enumerable: true,
			get: () => this.__data._abatementString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._abatementString = new Element(value);
			},
		});

		Object.defineProperty(this, 'abatementString', {
			enumerable: true,
			get: () => this.__data.abatementString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.abatementString = value;
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

		Object.defineProperty(this, 'stage', {
			enumerable: true,
			get: () => this.__data.stage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConditionStage = require('./conditionstage.js');
				this.__data.stage = Array.isArray(value) ? value.map(v => new ConditionStage(v)) : [new ConditionStage(value)];
			},
		});

		Object.defineProperty(this, 'evidence', {
			enumerable: true,
			get: () => this.__data.evidence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConditionEvidence = require('./conditionevidence.js');
				this.__data.evidence = Array.isArray(value)
					? value.map(v => new ConditionEvidence(v))
					: [new ConditionEvidence(value)];
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Condition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Condition';
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
			category: this.category && this.category.map(v => v.toJSON()),
			severity: this.severity && this.severity.toJSON(),
			code: this.code && this.code.toJSON(),
			bodySite: this.bodySite && this.bodySite.map(v => v.toJSON()),
			subject: this.subject && this.subject.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			_onsetDateTime: this._onsetDateTime && this._onsetDateTime.toJSON(),
			onsetDateTime: this.onsetDateTime,
			onsetAge: this.onsetAge && this.onsetAge.toJSON(),
			onsetPeriod: this.onsetPeriod && this.onsetPeriod.toJSON(),
			onsetRange: this.onsetRange && this.onsetRange.toJSON(),
			_onsetString: this._onsetString && this._onsetString.toJSON(),
			onsetString: this.onsetString,
			_abatementDateTime: this._abatementDateTime && this._abatementDateTime.toJSON(),
			abatementDateTime: this.abatementDateTime,
			abatementAge: this.abatementAge && this.abatementAge.toJSON(),
			abatementPeriod: this.abatementPeriod && this.abatementPeriod.toJSON(),
			abatementRange: this.abatementRange && this.abatementRange.toJSON(),
			_abatementString: this._abatementString && this._abatementString.toJSON(),
			abatementString: this.abatementString,
			_recordedDate: this._recordedDate && this._recordedDate.toJSON(),
			recordedDate: this.recordedDate,
			recorder: this.recorder && this.recorder.toJSON(),
			asserter: this.asserter && this.asserter.toJSON(),
			stage: this.stage && this.stage.map(v => v.toJSON()),
			evidence: this.evidence && this.evidence.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
