/**
 * @name exports
 * @summary CapabilityStatementMessagingEvent Class
 */
module.exports = class CapabilityStatementMessagingEvent {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-events
		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.code = new Coding(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-significance-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.category = value;
			},
		});

		Object.defineProperty(this, '_mode', {
			enumerable: true,
			get: () => this.__data._mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-capability-mode
		Object.defineProperty(this, 'mode', {
			enumerable: true,
			get: () => this.__data.mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mode = value;
			},
		});

		Object.defineProperty(this, '_focus', {
			enumerable: true,
			get: () => this.__data._focus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._focus = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		Object.defineProperty(this, 'focus', {
			enumerable: true,
			get: () => this.__data.focus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.focus = value;
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

		Object.defineProperty(this, 'response', {
			enumerable: true,
			get: () => this.__data.response,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.response = new Reference(value);
			},
		});

		Object.defineProperty(this, '_documentation', {
			enumerable: true,
			get: () => this.__data._documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._documentation = new Element(value);
			},
		});

		Object.defineProperty(this, 'documentation', {
			enumerable: true,
			get: () => this.__data.documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.documentation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CapabilityStatementMessagingEvent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CapabilityStatementMessagingEvent';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			code: this.code && this.code.toJSON(),
			_category: this._category && this._category.toJSON(),
			category: this.category,
			_mode: this._mode && this._mode.toJSON(),
			mode: this.mode,
			_focus: this._focus && this._focus.toJSON(),
			focus: this.focus,
			request: this.request && this.request.toJSON(),
			response: this.response && this.response.toJSON(),
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
		};
	}
};
