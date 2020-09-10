/**
 * @name exports
 * @summary SubscriptionChannel Class
 */
module.exports = class SubscriptionChannel {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, '_endpoint', {
			enumerable: true,
			get: () => this.__data._endpoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._endpoint = new Element(value);
			},
		});

		Object.defineProperty(this, 'endpoint', {
			enumerable: true,
			get: () => this.__data.endpoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.endpoint = value;
			},
		});

		Object.defineProperty(this, '_payload', {
			enumerable: true,
			get: () => this.__data._payload,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._payload = new Element(value);
			},
		});

		Object.defineProperty(this, 'payload', {
			enumerable: true,
			get: () => this.__data.payload,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.payload = value;
			},
		});

		Object.defineProperty(this, '_header', {
			enumerable: true,
			get: () => this.__data._header,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._header = new Element(value);
			},
		});

		Object.defineProperty(this, 'header', {
			enumerable: true,
			get: () => this.__data.header,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.header = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubscriptionChannel',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubscriptionChannel';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_endpoint: this._endpoint && this._endpoint.toJSON(),
			endpoint: this.endpoint,
			_payload: this._payload && this._payload.toJSON(),
			payload: this.payload,
			_header: this._header && this._header.toJSON(),
			header: this.header,
		};
	}
};
