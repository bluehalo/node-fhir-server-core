/**
 * @name exports
 * @summary MessageHeader Class
 */
module.exports = class MessageHeader {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-events
		Object.defineProperty(this, 'event', {
			enumerable: true,
			get: () => this.__data.event,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.event = new Coding(value);
			},
		});

		Object.defineProperty(this, 'destination', {
			enumerable: true,
			get: () => this.__data.destination,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MessageHeaderDestination = require('./messageheaderdestination.js');
				this.__data.destination = Array.isArray(value)
					? value.map(v => new MessageHeaderDestination(v))
					: [new MessageHeaderDestination(value)];
			},
		});

		Object.defineProperty(this, 'receiver', {
			enumerable: true,
			get: () => this.__data.receiver,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.receiver = new Reference(value);
			},
		});

		Object.defineProperty(this, 'sender', {
			enumerable: true,
			get: () => this.__data.sender,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.sender = new Reference(value);
			},
		});

		Object.defineProperty(this, '_timestamp', {
			enumerable: true,
			get: () => this.__data._timestamp,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timestamp = new Element(value);
			},
		});

		Object.defineProperty(this, 'timestamp', {
			enumerable: true,
			get: () => this.__data.timestamp,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timestamp = value;
			},
		});

		Object.defineProperty(this, 'enterer', {
			enumerable: true,
			get: () => this.__data.enterer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.enterer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'author', {
			enumerable: true,
			get: () => this.__data.author,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.author = new Reference(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MessageHeaderSource = require('./messageheadersource.js');
				this.__data.source = new MessageHeaderSource(value);
			},
		});

		Object.defineProperty(this, 'responsible', {
			enumerable: true,
			get: () => this.__data.responsible,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.responsible = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-reason-encounter
		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reason = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'response', {
			enumerable: true,
			get: () => this.__data.response,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MessageHeaderResponse = require('./messageheaderresponse.js');
				this.__data.response = new MessageHeaderResponse(value);
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
				this.__data.focus = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MessageHeader',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MessageHeader';
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
			event: this.event && this.event.toJSON(),
			destination: this.destination && this.destination.map(v => v.toJSON()),
			receiver: this.receiver && this.receiver.toJSON(),
			sender: this.sender && this.sender.toJSON(),
			_timestamp: this._timestamp && this._timestamp.toJSON(),
			timestamp: this.timestamp,
			enterer: this.enterer && this.enterer.toJSON(),
			author: this.author && this.author.toJSON(),
			source: this.source && this.source.toJSON(),
			responsible: this.responsible && this.responsible.toJSON(),
			reason: this.reason && this.reason.toJSON(),
			response: this.response && this.response.toJSON(),
			focus: this.focus && this.focus.map(v => v.toJSON()),
		};
	}
};
