/**
 * @name exports
 * @summary Procedure Class
 */
module.exports = class Procedure {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-status
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
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

		Object.defineProperty(this, '_notPerformed', {
			enumerable: true,
			get: () => this.__data._notPerformed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._notPerformed = new Element(value);
			},
		});

		Object.defineProperty(this, 'notPerformed', {
			enumerable: true,
			get: () => this.__data.notPerformed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.notPerformed = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-not-performed-reason
		Object.defineProperty(this, 'reasonNotPerformed', {
			enumerable: true,
			get: () => this.__data.reasonNotPerformed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonNotPerformed = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
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

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProcedurePerformer = require('./procedureperformer.js');
				this.__data.performer = Array.isArray(value)
					? value.map(v => new ProcedurePerformer(v))
					: [new ProcedurePerformer(value)];
			},
		});

		Object.defineProperty(this, '_performedDateTime', {
			enumerable: true,
			get: () => this.__data._performedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._performedDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'performedDateTime', {
			enumerable: true,
			get: () => this.__data.performedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.performedDateTime = value;
			},
		});

		Object.defineProperty(this, 'performedPeriod', {
			enumerable: true,
			get: () => this.__data.performedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.performedPeriod = new Period(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-outcome
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

		Object.defineProperty(this, 'report', {
			enumerable: true,
			get: () => this.__data.report,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.report = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		Object.defineProperty(this, 'complication', {
			enumerable: true,
			get: () => this.__data.complication,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.complication = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-followup
		Object.defineProperty(this, 'followUp', {
			enumerable: true,
			get: () => this.__data.followUp,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.followUp = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'request', {
			enumerable: true,
			get: () => this.__data.request,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.request = new Reference(value);
			},
		});

		Object.defineProperty(this, 'notes', {
			enumerable: true,
			get: () => this.__data.notes,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.notes = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		Object.defineProperty(this, 'focalDevice', {
			enumerable: true,
			get: () => this.__data.focalDevice,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProcedureFocalDevice = require('./procedurefocaldevice.js');
				this.__data.focalDevice = Array.isArray(value)
					? value.map(v => new ProcedureFocalDevice(v))
					: [new ProcedureFocalDevice(value)];
			},
		});

		Object.defineProperty(this, 'used', {
			enumerable: true,
			get: () => this.__data.used,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.used = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Procedure',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Procedure';
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
			subject: this.subject && this.subject.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			category: this.category && this.category.toJSON(),
			code: this.code && this.code.toJSON(),
			_notPerformed: this._notPerformed && this._notPerformed.toJSON(),
			notPerformed: this.notPerformed,
			reasonNotPerformed: this.reasonNotPerformed && this.reasonNotPerformed.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.map(v => v.toJSON()),
			reasonCodeableConcept: this.reasonCodeableConcept && this.reasonCodeableConcept.toJSON(),
			reasonReference: this.reasonReference && this.reasonReference.toJSON(),
			performer: this.performer && this.performer.map(v => v.toJSON()),
			_performedDateTime: this._performedDateTime && this._performedDateTime.toJSON(),
			performedDateTime: this.performedDateTime,
			performedPeriod: this.performedPeriod && this.performedPeriod.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			location: this.location && this.location.toJSON(),
			outcome: this.outcome && this.outcome.toJSON(),
			report: this.report && this.report.map(v => v.toJSON()),
			complication: this.complication && this.complication.map(v => v.toJSON()),
			followUp: this.followUp && this.followUp.map(v => v.toJSON()),
			request: this.request && this.request.toJSON(),
			notes: this.notes && this.notes.map(v => v.toJSON()),
			focalDevice: this.focalDevice && this.focalDevice.map(v => v.toJSON()),
			used: this.used && this.used.map(v => v.toJSON()),
		};
	}
};
