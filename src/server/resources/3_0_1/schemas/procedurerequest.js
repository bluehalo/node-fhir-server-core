/**
 * @name exports
 * @summary ProcedureRequest Class
 */
module.exports = class ProcedureRequest {
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

		Object.defineProperty(this, 'definition', {
			enumerable: true,
			get: () => this.__data.definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.definition = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'basedOn', {
			enumerable: true,
			get: () => this.__data.basedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.basedOn = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'replaces', {
			enumerable: true,
			get: () => this.__data.replaces,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.replaces = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'requisition', {
			enumerable: true,
			get: () => this.__data.requisition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.requisition = new Identifier(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-status
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

		Object.defineProperty(this, '_intent', {
			enumerable: true,
			get: () => this.__data._intent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._intent = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		Object.defineProperty(this, 'intent', {
			enumerable: true,
			get: () => this.__data.intent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.intent = value;
			},
		});

		Object.defineProperty(this, '_priority', {
			enumerable: true,
			get: () => this.__data._priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._priority = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.priority = value;
			},
		});

		Object.defineProperty(this, '_doNotPerform', {
			enumerable: true,
			get: () => this.__data._doNotPerform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doNotPerform = new Element(value);
			},
		});

		Object.defineProperty(this, 'doNotPerform', {
			enumerable: true,
			get: () => this.__data.doNotPerform,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doNotPerform = value;
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
				this.__data.category = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, '_occurrenceDateTime', {
			enumerable: true,
			get: () => this.__data._occurrenceDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._occurrenceDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'occurrenceDateTime', {
			enumerable: true,
			get: () => this.__data.occurrenceDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.occurrenceDateTime = value;
			},
		});

		Object.defineProperty(this, 'occurrencePeriod', {
			enumerable: true,
			get: () => this.__data.occurrencePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.occurrencePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'occurrenceTiming', {
			enumerable: true,
			get: () => this.__data.occurrenceTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.occurrenceTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, '_asNeededBoolean', {
			enumerable: true,
			get: () => this.__data._asNeededBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._asNeededBoolean = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		Object.defineProperty(this, 'asNeededBoolean', {
			enumerable: true,
			get: () => this.__data.asNeededBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.asNeededBoolean = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		Object.defineProperty(this, 'asNeededCodeableConcept', {
			enumerable: true,
			get: () => this.__data.asNeededCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.asNeededCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_authoredOn', {
			enumerable: true,
			get: () => this.__data._authoredOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._authoredOn = new Element(value);
			},
		});

		Object.defineProperty(this, 'authoredOn', {
			enumerable: true,
			get: () => this.__data.authoredOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.authoredOn = value;
			},
		});

		Object.defineProperty(this, 'requester', {
			enumerable: true,
			get: () => this.__data.requester,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProcedureRequestRequester = require('./procedurerequestrequester.js');
				this.__data.requester = new ProcedureRequestRequester(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		Object.defineProperty(this, 'performerType', {
			enumerable: true,
			get: () => this.__data.performerType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.performerType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.performer = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		Object.defineProperty(this, 'reasonCode', {
			enumerable: true,
			get: () => this.__data.reasonCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'reasonReference', {
			enumerable: true,
			get: () => this.__data.reasonReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reasonReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'supportingInfo', {
			enumerable: true,
			get: () => this.__data.supportingInfo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.supportingInfo = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'specimen', {
			enumerable: true,
			get: () => this.__data.specimen,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.specimen = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'relevantHistory', {
			enumerable: true,
			get: () => this.__data.relevantHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.relevantHistory = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ProcedureRequest',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ProcedureRequest';
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
			definition: this.definition && this.definition.map(v => v.toJSON()),
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			replaces: this.replaces && this.replaces.map(v => v.toJSON()),
			requisition: this.requisition && this.requisition.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_intent: this._intent && this._intent.toJSON(),
			intent: this.intent,
			_priority: this._priority && this._priority.toJSON(),
			priority: this.priority,
			_doNotPerform: this._doNotPerform && this._doNotPerform.toJSON(),
			doNotPerform: this.doNotPerform,
			category: this.category && this.category.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			context: this.context && this.context.toJSON(),
			_occurrenceDateTime: this._occurrenceDateTime && this._occurrenceDateTime.toJSON(),
			occurrenceDateTime: this.occurrenceDateTime,
			occurrencePeriod: this.occurrencePeriod && this.occurrencePeriod.toJSON(),
			occurrenceTiming: this.occurrenceTiming && this.occurrenceTiming.toJSON(),
			_asNeededBoolean: this._asNeededBoolean && this._asNeededBoolean.toJSON(),
			asNeededBoolean: this.asNeededBoolean,
			asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSON(),
			_authoredOn: this._authoredOn && this._authoredOn.toJSON(),
			authoredOn: this.authoredOn,
			requester: this.requester && this.requester.toJSON(),
			performerType: this.performerType && this.performerType.toJSON(),
			performer: this.performer && this.performer.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			supportingInfo: this.supportingInfo && this.supportingInfo.map(v => v.toJSON()),
			specimen: this.specimen && this.specimen.map(v => v.toJSON()),
			bodySite: this.bodySite && this.bodySite.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			relevantHistory: this.relevantHistory && this.relevantHistory.map(v => v.toJSON()),
		};
	}
};
