/**
 * @name exports
 * @summary ContractTermAction Class
 */
module.exports = class ContractTermAction {
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

				let ContractTermActionSubject = require('./contracttermactionsubject.js');
				this.__data.subject = Array.isArray(value)
					? value.map(v => new ContractTermActionSubject(v))
					: [new ContractTermActionSubject(value)];
			},
		});

		Object.defineProperty(this, 'intent', {
			enumerable: true,
			get: () => this.__data.intent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.intent = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_linkId', {
			enumerable: true,
			get: () => this.__data._linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._linkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'linkId', {
			enumerable: true,
			get: () => this.__data.linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.linkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.status = new CodeableConcept(value);
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

		Object.defineProperty(this, '_contextLinkId', {
			enumerable: true,
			get: () => this.__data._contextLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contextLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'contextLinkId', {
			enumerable: true,
			get: () => this.__data.contextLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contextLinkId = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'requester', {
			enumerable: true,
			get: () => this.__data.requester,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.requester = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_requesterLinkId', {
			enumerable: true,
			get: () => this.__data._requesterLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requesterLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'requesterLinkId', {
			enumerable: true,
			get: () => this.__data.requesterLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requesterLinkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'performerType', {
			enumerable: true,
			get: () => this.__data.performerType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.performerType = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'performerRole', {
			enumerable: true,
			get: () => this.__data.performerRole,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.performerRole = new CodeableConcept(value);
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

		Object.defineProperty(this, '_performerLinkId', {
			enumerable: true,
			get: () => this.__data._performerLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._performerLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'performerLinkId', {
			enumerable: true,
			get: () => this.__data.performerLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.performerLinkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

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

		Object.defineProperty(this, '_reason', {
			enumerable: true,
			get: () => this.__data._reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._reason = new Element(value);
			},
		});

		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.reason = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_reasonLinkId', {
			enumerable: true,
			get: () => this.__data._reasonLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._reasonLinkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'reasonLinkId', {
			enumerable: true,
			get: () => this.__data.reasonLinkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.reasonLinkId = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, '_securityLabelNumber', {
			enumerable: true,
			get: () => this.__data._securityLabelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._securityLabelNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'securityLabelNumber', {
			enumerable: true,
			get: () => this.__data.securityLabelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.securityLabelNumber = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ContractTermAction',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ContractTermAction';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_doNotPerform: this._doNotPerform && this._doNotPerform.toJSON(),
			doNotPerform: this.doNotPerform,
			type: this.type && this.type.toJSON(),
			subject: this.subject && this.subject.map(v => v.toJSON()),
			intent: this.intent && this.intent.toJSON(),
			_linkId: this._linkId && this._linkId.toJSON(),
			linkId: this.linkId,
			status: this.status && this.status.toJSON(),
			context: this.context && this.context.toJSON(),
			_contextLinkId: this._contextLinkId && this._contextLinkId.toJSON(),
			contextLinkId: this.contextLinkId,
			_occurrenceDateTime: this._occurrenceDateTime && this._occurrenceDateTime.toJSON(),
			occurrenceDateTime: this.occurrenceDateTime,
			occurrencePeriod: this.occurrencePeriod && this.occurrencePeriod.toJSON(),
			occurrenceTiming: this.occurrenceTiming && this.occurrenceTiming.toJSON(),
			requester: this.requester && this.requester.map(v => v.toJSON()),
			_requesterLinkId: this._requesterLinkId && this._requesterLinkId.toJSON(),
			requesterLinkId: this.requesterLinkId,
			performerType: this.performerType && this.performerType.map(v => v.toJSON()),
			performerRole: this.performerRole && this.performerRole.toJSON(),
			performer: this.performer && this.performer.toJSON(),
			_performerLinkId: this._performerLinkId && this._performerLinkId.toJSON(),
			performerLinkId: this.performerLinkId,
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			_reason: this._reason && this._reason.toJSON(),
			reason: this.reason,
			_reasonLinkId: this._reasonLinkId && this._reasonLinkId.toJSON(),
			reasonLinkId: this.reasonLinkId,
			note: this.note && this.note.map(v => v.toJSON()),
			_securityLabelNumber: this._securityLabelNumber && this._securityLabelNumber.toJSON(),
			securityLabelNumber: this.securityLabelNumber,
		};
	}
};
