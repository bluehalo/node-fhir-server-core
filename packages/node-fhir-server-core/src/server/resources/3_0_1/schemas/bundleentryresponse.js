/**
 * @name exports
 * @summary BundleEntryResponse Class
 */
module.exports = class BundleEntryResponse {
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

		Object.defineProperty(this, '_location', {
			enumerable: true,
			get: () => this.__data._location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._location = new Element(value);
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.location = value;
			},
		});

		Object.defineProperty(this, '_etag', {
			enumerable: true,
			get: () => this.__data._etag,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._etag = new Element(value);
			},
		});

		Object.defineProperty(this, 'etag', {
			enumerable: true,
			get: () => this.__data.etag,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.etag = value;
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

		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcome = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BundleEntryResponse',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BundleEntryResponse';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_location: this._location && this._location.toJSON(),
			location: this.location,
			_etag: this._etag && this._etag.toJSON(),
			etag: this.etag,
			_lastModified: this._lastModified && this._lastModified.toJSON(),
			lastModified: this.lastModified,
			outcome: this.outcome,
		};
	}
};
