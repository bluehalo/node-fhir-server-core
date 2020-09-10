/**
 * @name exports
 * @summary TestScriptMetadataCapability Class
 */
module.exports = class TestScriptMetadataCapability {
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

		Object.defineProperty(this, '_required', {
			enumerable: true,
			get: () => this.__data._required,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._required = new Element(value);
			},
		});

		Object.defineProperty(this, 'required', {
			enumerable: true,
			get: () => this.__data.required,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.required = value;
			},
		});

		Object.defineProperty(this, '_validated', {
			enumerable: true,
			get: () => this.__data._validated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._validated = new Element(value);
			},
		});

		Object.defineProperty(this, 'validated', {
			enumerable: true,
			get: () => this.__data.validated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.validated = value;
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

		Object.defineProperty(this, '_origin', {
			enumerable: true,
			get: () => this.__data._origin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._origin = new Element(value);
			},
		});

		Object.defineProperty(this, 'origin', {
			enumerable: true,
			get: () => this.__data.origin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.origin = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_destination', {
			enumerable: true,
			get: () => this.__data._destination,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._destination = new Element(value);
			},
		});

		Object.defineProperty(this, 'destination', {
			enumerable: true,
			get: () => this.__data.destination,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.destination = value;
			},
		});

		Object.defineProperty(this, '_link', {
			enumerable: true,
			get: () => this.__data._link,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._link = new Element(value);
			},
		});

		Object.defineProperty(this, 'link', {
			enumerable: true,
			get: () => this.__data.link,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.link = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_capabilities', {
			enumerable: true,
			get: () => this.__data._capabilities,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._capabilities = new Element(value);
			},
		});

		Object.defineProperty(this, 'capabilities', {
			enumerable: true,
			get: () => this.__data.capabilities,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.capabilities = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TestScriptMetadataCapability',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TestScriptMetadataCapability';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_required: this._required && this._required.toJSON(),
			required: this.required,
			_validated: this._validated && this._validated.toJSON(),
			validated: this.validated,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_origin: this._origin && this._origin.toJSON(),
			origin: this.origin,
			_destination: this._destination && this._destination.toJSON(),
			destination: this.destination,
			_link: this._link && this._link.toJSON(),
			link: this.link,
			_capabilities: this._capabilities && this._capabilities.toJSON(),
			capabilities: this.capabilities,
		};
	}
};
