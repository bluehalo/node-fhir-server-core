/**
 * @name exports
 * @summary CapabilityStatementMessaging Class
 */
module.exports = class CapabilityStatementMessaging {
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

		Object.defineProperty(this, 'endpoint', {
			enumerable: true,
			get: () => this.__data.endpoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CapabilityStatementMessagingEndpoint = require('./capabilitystatementmessagingendpoint.js');
				this.__data.endpoint = Array.isArray(value)
					? value.map(v => new CapabilityStatementMessagingEndpoint(v))
					: [new CapabilityStatementMessagingEndpoint(value)];
			},
		});

		Object.defineProperty(this, '_reliableCache', {
			enumerable: true,
			get: () => this.__data._reliableCache,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._reliableCache = new Element(value);
			},
		});

		Object.defineProperty(this, 'reliableCache', {
			enumerable: true,
			get: () => this.__data.reliableCache,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.reliableCache = value;
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

		Object.defineProperty(this, 'supportedMessage', {
			enumerable: true,
			get: () => this.__data.supportedMessage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CapabilityStatementMessagingSupportedMessage = require('./capabilitystatementmessagingsupportedmessage.js');
				this.__data.supportedMessage = Array.isArray(value)
					? value.map(v => new CapabilityStatementMessagingSupportedMessage(v))
					: [new CapabilityStatementMessagingSupportedMessage(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CapabilityStatementMessaging',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CapabilityStatementMessaging';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
			_reliableCache: this._reliableCache && this._reliableCache.toJSON(),
			reliableCache: this.reliableCache,
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
			supportedMessage: this.supportedMessage && this.supportedMessage.map(v => v.toJSON()),
		};
	}
};
