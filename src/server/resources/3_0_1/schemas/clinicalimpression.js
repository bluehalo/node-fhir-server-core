/**
 * @name exports
 * @summary ClinicalImpression Class
 */
module.exports = class ClinicalImpression {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-impression-status
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

		Object.defineProperty(this, 'context', {
			enumerable: true,
			get: () => this.__data.context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.context = new Reference(value);
			},
		});

		Object.defineProperty(this, '_effectiveDateTime', {
			enumerable: true,
			get: () => this.__data._effectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._effectiveDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'effectiveDateTime', {
			enumerable: true,
			get: () => this.__data.effectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.effectiveDateTime = value;
			},
		});

		Object.defineProperty(this, 'effectivePeriod', {
			enumerable: true,
			get: () => this.__data.effectivePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.effectivePeriod = new Period(value);
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

		Object.defineProperty(this, 'assessor', {
			enumerable: true,
			get: () => this.__data.assessor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.assessor = new Reference(value);
			},
		});

		Object.defineProperty(this, 'previous', {
			enumerable: true,
			get: () => this.__data.previous,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.previous = new Reference(value);
			},
		});

		Object.defineProperty(this, 'problem', {
			enumerable: true,
			get: () => this.__data.problem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.problem = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'investigation', {
			enumerable: true,
			get: () => this.__data.investigation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClinicalImpressionInvestigation = require('./clinicalimpressioninvestigation.js');
				this.__data.investigation = Array.isArray(value)
					? value.map(v => new ClinicalImpressionInvestigation(v))
					: [new ClinicalImpressionInvestigation(value)];
			},
		});

		Object.defineProperty(this, '_protocol', {
			enumerable: true,
			get: () => this.__data._protocol,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._protocol = new Element(value);
			},
		});

		Object.defineProperty(this, 'protocol', {
			enumerable: true,
			get: () => this.__data.protocol,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.protocol = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_summary', {
			enumerable: true,
			get: () => this.__data._summary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._summary = new Element(value);
			},
		});

		Object.defineProperty(this, 'summary', {
			enumerable: true,
			get: () => this.__data.summary,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.summary = value;
			},
		});

		Object.defineProperty(this, 'finding', {
			enumerable: true,
			get: () => this.__data.finding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClinicalImpressionFinding = require('./clinicalimpressionfinding.js');
				this.__data.finding = Array.isArray(value)
					? value.map(v => new ClinicalImpressionFinding(v))
					: [new ClinicalImpressionFinding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinicalimpression-prognosis
		Object.defineProperty(this, 'prognosisCodeableConcept', {
			enumerable: true,
			get: () => this.__data.prognosisCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.prognosisCodeableConcept = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'prognosisReference', {
			enumerable: true,
			get: () => this.__data.prognosisReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.prognosisReference = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.action = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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
			value: 'ClinicalImpression',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClinicalImpression';
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
			code: this.code && this.code.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			subject: this.subject && this.subject.toJSON(),
			context: this.context && this.context.toJSON(),
			_effectiveDateTime: this._effectiveDateTime && this._effectiveDateTime.toJSON(),
			effectiveDateTime: this.effectiveDateTime,
			effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			assessor: this.assessor && this.assessor.toJSON(),
			previous: this.previous && this.previous.toJSON(),
			problem: this.problem && this.problem.map(v => v.toJSON()),
			investigation: this.investigation && this.investigation.map(v => v.toJSON()),
			_protocol: this._protocol && this._protocol.toJSON(),
			protocol: this.protocol,
			_summary: this._summary && this._summary.toJSON(),
			summary: this.summary,
			finding: this.finding && this.finding.map(v => v.toJSON()),
			prognosisCodeableConcept: this.prognosisCodeableConcept && this.prognosisCodeableConcept.map(v => v.toJSON()),
			prognosisReference: this.prognosisReference && this.prognosisReference.map(v => v.toJSON()),
			action: this.action && this.action.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
