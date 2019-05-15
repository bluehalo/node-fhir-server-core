/**
 * @name exports
 * @summary MessageDefinitionAllowedResponse Class
 */
module.exports = class MessageDefinitionAllowedResponse {
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

		Object.defineProperty(this, 'message', {
			enumerable: true,
			get: () => this.__data.message,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.message = new Reference(value);
			},
		});

		Object.defineProperty(this, '_situation', {
			enumerable: true,
			get: () => this.__data._situation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._situation = new Element(value);
			},
		});

		Object.defineProperty(this, 'situation', {
			enumerable: true,
			get: () => this.__data.situation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.situation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MessageDefinitionAllowedResponse',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MessageDefinitionAllowedResponse';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			message: this.message && this.message.toJSON(),
			_situation: this._situation && this._situation.toJSON(),
			situation: this.situation,
		};
	}
};
