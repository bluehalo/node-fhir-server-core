/**
 * @name exports
 * @summary Task Class
 */
module.exports = class Task {
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

		Object.defineProperty(this, '_instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data._instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data.instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesCanonical = value;
			},
		});

		Object.defineProperty(this, '_instantiatesUri', {
			enumerable: true,
			get: () => this.__data._instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesUri', {
			enumerable: true,
			get: () => this.__data.instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesUri = value;
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

		Object.defineProperty(this, 'groupIdentifier', {
			enumerable: true,
			get: () => this.__data.groupIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.groupIdentifier = new Identifier(value);
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
				this.__data.partOf = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'statusReason', {
			enumerable: true,
			get: () => this.__data.statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.statusReason = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'businessStatus', {
			enumerable: true,
			get: () => this.__data.businessStatus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.businessStatus = new CodeableConcept(value);
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

		Object.defineProperty(this, 'focus', {
			enumerable: true,
			get: () => this.__data.focus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.focus = new Reference(value);
			},
		});

		Object.defineProperty(this, 'for', {
			enumerable: true,
			get: () => this.__data.for,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.for = new Reference(value);
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

		Object.defineProperty(this, 'executionPeriod', {
			enumerable: true,
			get: () => this.__data.executionPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.executionPeriod = new Period(value);
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

		Object.defineProperty(this, '_lastModified', {
			enumerable: true,
			get: () => this.__data._lastModified,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastModified = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastModified', {
			enumerable: true,
			get: () => this.__data.lastModified,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastModified = value;
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
				this.__data.requester = new Reference(value);
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

		Object.defineProperty(this, 'owner', {
			enumerable: true,
			get: () => this.__data.owner,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.owner = new Reference(value);
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

		Object.defineProperty(this, 'reasonCode', {
			enumerable: true,
			get: () => this.__data.reasonCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCode = new CodeableConcept(value);
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
				this.__data.reasonReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'insurance', {
			enumerable: true,
			get: () => this.__data.insurance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.insurance = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'restriction', {
			enumerable: true,
			get: () => this.__data.restriction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TaskRestriction = require('./taskrestriction.js');
				this.__data.restriction = new TaskRestriction(value);
			},
		});

		Object.defineProperty(this, 'input', {
			enumerable: true,
			get: () => this.__data.input,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TaskInput = require('./taskinput.js');
				this.__data.input = Array.isArray(value) ? value.map(v => new TaskInput(v)) : [new TaskInput(value)];
			},
		});

		Object.defineProperty(this, 'output', {
			enumerable: true,
			get: () => this.__data.output,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TaskOutput = require('./taskoutput.js');
				this.__data.output = Array.isArray(value) ? value.map(v => new TaskOutput(v)) : [new TaskOutput(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Task',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Task';
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
			_instantiatesCanonical: this._instantiatesCanonical && this._instantiatesCanonical.toJSON(),
			instantiatesCanonical: this.instantiatesCanonical,
			_instantiatesUri: this._instantiatesUri && this._instantiatesUri.toJSON(),
			instantiatesUri: this.instantiatesUri,
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			groupIdentifier: this.groupIdentifier && this.groupIdentifier.toJSON(),
			partOf: this.partOf && this.partOf.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			statusReason: this.statusReason && this.statusReason.toJSON(),
			businessStatus: this.businessStatus && this.businessStatus.toJSON(),
			_intent: this._intent && this._intent.toJSON(),
			intent: this.intent,
			_priority: this._priority && this._priority.toJSON(),
			priority: this.priority,
			code: this.code && this.code.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			focus: this.focus && this.focus.toJSON(),
			for: this.for && this.for.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			executionPeriod: this.executionPeriod && this.executionPeriod.toJSON(),
			_authoredOn: this._authoredOn && this._authoredOn.toJSON(),
			authoredOn: this.authoredOn,
			_lastModified: this._lastModified && this._lastModified.toJSON(),
			lastModified: this.lastModified,
			requester: this.requester && this.requester.toJSON(),
			performerType: this.performerType && this.performerType.map(v => v.toJSON()),
			owner: this.owner && this.owner.toJSON(),
			location: this.location && this.location.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.toJSON(),
			reasonReference: this.reasonReference && this.reasonReference.toJSON(),
			insurance: this.insurance && this.insurance.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
			relevantHistory: this.relevantHistory && this.relevantHistory.map(v => v.toJSON()),
			restriction: this.restriction && this.restriction.toJSON(),
			input: this.input && this.input.map(v => v.toJSON()),
			output: this.output && this.output.map(v => v.toJSON()),
		};
	}
};
