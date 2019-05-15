/**
 * @name exports
 * @summary ImplementationGuideDependsOn Class
 */
module.exports = class ImplementationGuideDependsOn {
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

		Object.defineProperty(this, '_packageId', {
			enumerable: true,
			get: () => this.__data._packageId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._packageId = new Element(value);
			},
		});

		Object.defineProperty(this, 'packageId', {
			enumerable: true,
			get: () => this.__data.packageId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.packageId = value;
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImplementationGuideDependsOn',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImplementationGuideDependsOn';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_uri: this._uri && this._uri.toJSON(),
			uri: this.uri,
			_packageId: this._packageId && this._packageId.toJSON(),
			packageId: this.packageId,
			_version: this._version && this._version.toJSON(),
			version: this.version,
		};
	}
};
