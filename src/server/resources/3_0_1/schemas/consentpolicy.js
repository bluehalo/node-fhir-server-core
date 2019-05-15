/**
 * @name exports
 * @summary ConsentPolicy Class
 */
module.exports = class ConsentPolicy {
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

		Object.defineProperty(this, '_authority', {
			enumerable: true,
			get: () => this.__data._authority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._authority = new Element(value);
			},
		});

		Object.defineProperty(this, 'authority', {
			enumerable: true,
			get: () => this.__data.authority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.authority = value;
			},
		});

		Object.defineProperty(this, '_uri', {
			enumerable: true,
			get: () => this.__data._uri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._uri = new Element(value);
			},
		});

		Object.defineProperty(this, 'uri', {
			enumerable: true,
			get: () => this.__data.uri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.uri = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConsentPolicy',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConsentPolicy';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_authority: this._authority && this._authority.toJSON(),
			authority: this.authority,
			_uri: this._uri && this._uri.toJSON(),
			uri: this.uri,
		};
	}
};
