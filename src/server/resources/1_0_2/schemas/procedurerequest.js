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

		Object.defineProperty(this, '_scheduledDateTime', {
			enumerable: true,
			get: () => this.__data._scheduledDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._scheduledDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'scheduledDateTime', {
			enumerable: true,
			get: () => this.__data.scheduledDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.scheduledDateTime = value;
			},
		});

		Object.defineProperty(this, 'scheduledPeriod', {
			enumerable: true,
			get: () => this.__data.scheduledPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.scheduledPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'scheduledTiming', {
			enumerable: true,
			get: () => this.__data.scheduledTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.scheduledTiming = new Timing(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-request-status
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

		Object.defineProperty(this, '_orderedOn', {
			enumerable: true,
			get: () => this.__data._orderedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._orderedOn = new Element(value);
			},
		});

		Object.defineProperty(this, 'orderedOn', {
			enumerable: true,
			get: () => this.__data.orderedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.orderedOn = value;
			},
		});

		Object.defineProperty(this, 'orderer', {
			enumerable: true,
			get: () => this.__data.orderer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.orderer = new Reference(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-request-priority
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
			subject: this.subject && this.subject.toJSON(),
			code: this.code && this.code.toJSON(),
			bodySite: this.bodySite && this.bodySite.map(v => v.toJSON()),
			reasonCodeableConcept: this.reasonCodeableConcept && this.reasonCodeableConcept.toJSON(),
			reasonReference: this.reasonReference && this.reasonReference.toJSON(),
			_scheduledDateTime: this._scheduledDateTime && this._scheduledDateTime.toJSON(),
			scheduledDateTime: this.scheduledDateTime,
			scheduledPeriod: this.scheduledPeriod && this.scheduledPeriod.toJSON(),
			scheduledTiming: this.scheduledTiming && this.scheduledTiming.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			performer: this.performer && this.performer.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			notes: this.notes && this.notes.map(v => v.toJSON()),
			_asNeededBoolean: this._asNeededBoolean && this._asNeededBoolean.toJSON(),
			asNeededBoolean: this.asNeededBoolean,
			asNeededCodeableConcept: this.asNeededCodeableConcept && this.asNeededCodeableConcept.toJSON(),
			_orderedOn: this._orderedOn && this._orderedOn.toJSON(),
			orderedOn: this.orderedOn,
			orderer: this.orderer && this.orderer.toJSON(),
			_priority: this._priority && this._priority.toJSON(),
			priority: this.priority,
		};
	}
};
