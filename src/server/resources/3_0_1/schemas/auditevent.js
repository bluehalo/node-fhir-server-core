/**
 * @name exports
 * @summary AuditEvent Class
 */
module.exports = class AuditEvent {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-sub-type
		Object.defineProperty(this, 'subtype', {
			enumerable: true,
			get: () => this.__data.subtype,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.subtype = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_action', {
			enumerable: true,
			get: () => this.__data._action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._action = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-action
		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.action = value;
			},
		});

		Object.defineProperty(this, '_recorded', {
			enumerable: true,
			get: () => this.__data._recorded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recorded = new Element(value);
			},
		});

		Object.defineProperty(this, 'recorded', {
			enumerable: true,
			get: () => this.__data.recorded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recorded = value;
			},
		});

		Object.defineProperty(this, '_outcome', {
			enumerable: true,
			get: () => this.__data._outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._outcome = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-outcome
		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcome = value;
			},
		});

		Object.defineProperty(this, '_outcomeDesc', {
			enumerable: true,
			get: () => this.__data._outcomeDesc,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._outcomeDesc = new Element(value);
			},
		});

		Object.defineProperty(this, 'outcomeDesc', {
			enumerable: true,
			get: () => this.__data.outcomeDesc,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcomeDesc = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'purposeOfEvent', {
			enumerable: true,
			get: () => this.__data.purposeOfEvent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.purposeOfEvent = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'agent', {
			enumerable: true,
			get: () => this.__data.agent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AuditEventAgent = require('./auditeventagent.js');
				this.__data.agent = Array.isArray(value)
					? value.map(v => new AuditEventAgent(v))
					: [new AuditEventAgent(value)];
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AuditEventSource = require('./auditeventsource.js');
				this.__data.source = new AuditEventSource(value);
			},
		});

		Object.defineProperty(this, 'entity', {
			enumerable: true,
			get: () => this.__data.entity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AuditEventEntity = require('./auditevententity.js');
				this.__data.entity = Array.isArray(value)
					? value.map(v => new AuditEventEntity(v))
					: [new AuditEventEntity(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AuditEvent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AuditEvent';
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
			type: this.type && this.type.toJSON(),
			subtype: this.subtype && this.subtype.map(v => v.toJSON()),
			_action: this._action && this._action.toJSON(),
			action: this.action,
			_recorded: this._recorded && this._recorded.toJSON(),
			recorded: this.recorded,
			_outcome: this._outcome && this._outcome.toJSON(),
			outcome: this.outcome,
			_outcomeDesc: this._outcomeDesc && this._outcomeDesc.toJSON(),
			outcomeDesc: this.outcomeDesc,
			purposeOfEvent: this.purposeOfEvent && this.purposeOfEvent.map(v => v.toJSON()),
			agent: this.agent && this.agent.map(v => v.toJSON()),
			source: this.source && this.source.toJSON(),
			entity: this.entity && this.entity.map(v => v.toJSON()),
		};
	}
};
