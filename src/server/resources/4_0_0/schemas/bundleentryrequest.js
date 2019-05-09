/**
 * @name exports
 * @summary BundleEntryRequest Class
 */
module.exports = class BundleEntryRequest {
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

		Object.defineProperty(this, '_method', {
			enumerable: true,
			get: () => this.__data._method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._method = new Element(value);
			},
		});

		Object.defineProperty(this, 'method', {
			enumerable: true,
			get: () => this.__data.method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.method = value;
			},
		});

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, '_ifNoneMatch', {
			enumerable: true,
			get: () => this.__data._ifNoneMatch,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ifNoneMatch = new Element(value);
			},
		});

		Object.defineProperty(this, 'ifNoneMatch', {
			enumerable: true,
			get: () => this.__data.ifNoneMatch,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ifNoneMatch = value;
			},
		});

		Object.defineProperty(this, '_ifModifiedSince', {
			enumerable: true,
			get: () => this.__data._ifModifiedSince,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ifModifiedSince = new Element(value);
			},
		});

		Object.defineProperty(this, 'ifModifiedSince', {
			enumerable: true,
			get: () => this.__data.ifModifiedSince,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ifModifiedSince = value;
			},
		});

		Object.defineProperty(this, '_ifMatch', {
			enumerable: true,
			get: () => this.__data._ifMatch,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ifMatch = new Element(value);
			},
		});

		Object.defineProperty(this, 'ifMatch', {
			enumerable: true,
			get: () => this.__data.ifMatch,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ifMatch = value;
			},
		});

		Object.defineProperty(this, '_ifNoneExist', {
			enumerable: true,
			get: () => this.__data._ifNoneExist,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._ifNoneExist = new Element(value);
			},
		});

		Object.defineProperty(this, 'ifNoneExist', {
			enumerable: true,
			get: () => this.__data.ifNoneExist,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.ifNoneExist = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BundleEntryRequest',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BundleEntryRequest';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_method: this._method && this._method.toJSON(),
			method: this.method,
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_ifNoneMatch: this._ifNoneMatch && this._ifNoneMatch.toJSON(),
			ifNoneMatch: this.ifNoneMatch,
			_ifModifiedSince: this._ifModifiedSince && this._ifModifiedSince.toJSON(),
			ifModifiedSince: this.ifModifiedSince,
			_ifMatch: this._ifMatch && this._ifMatch.toJSON(),
			ifMatch: this.ifMatch,
			_ifNoneExist: this._ifNoneExist && this._ifNoneExist.toJSON(),
			ifNoneExist: this.ifNoneExist,
		};
	}
};
