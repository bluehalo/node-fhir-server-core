/**
 * @name exports
 * @summary Subscription Class
 */
module.exports = class Subscription {
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

		Object.defineProperty(this, '_criteria', {
			enumerable: true,
			get: () => this.__data._criteria,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._criteria = new Element(value);
			},
		});

		Object.defineProperty(this, 'criteria', {
			enumerable: true,
			get: () => this.__data.criteria,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.criteria = value;
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactPoint = require('./contactpoint.js');
				this.__data.contact = Array.isArray(value) ? value.map(v => new ContactPoint(v)) : [new ContactPoint(value)];
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

				this.__data.reason = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/subscription-status
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

		Object.defineProperty(this, '_error', {
			enumerable: true,
			get: () => this.__data._error,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._error = new Element(value);
			},
		});

		Object.defineProperty(this, 'error', {
			enumerable: true,
			get: () => this.__data.error,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.error = value;
			},
		});

		Object.defineProperty(this, 'channel', {
			enumerable: true,
			get: () => this.__data.channel,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubscriptionChannel = require('./subscriptionchannel.js');
				this.__data.channel = new SubscriptionChannel(value);
			},
		});

		Object.defineProperty(this, '_end', {
			enumerable: true,
			get: () => this.__data._end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._end = new Element(value);
			},
		});

		Object.defineProperty(this, 'end', {
			enumerable: true,
			get: () => this.__data.end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.end = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/subscription-tag
		Object.defineProperty(this, 'tag', {
			enumerable: true,
			get: () => this.__data.tag,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.tag = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Subscription',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Subscription';
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
			_criteria: this._criteria && this._criteria.toJSON(),
			criteria: this.criteria,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_reason: this._reason && this._reason.toJSON(),
			reason: this.reason,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_error: this._error && this._error.toJSON(),
			error: this.error,
			channel: this.channel && this.channel.toJSON(),
			_end: this._end && this._end.toJSON(),
			end: this.end,
			tag: this.tag && this.tag.map(v => v.toJSON()),
		};
	}
};
