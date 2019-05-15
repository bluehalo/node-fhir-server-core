/**
 * @name exports
 * @summary BundleEntry Class
 */
module.exports = class BundleEntry {
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

		Object.defineProperty(this, '_fullUrl', {
			enumerable: true,
			get: () => this.__data._fullUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fullUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'fullUrl', {
			enumerable: true,
			get: () => this.__data.fullUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fullUrl = value;
			},
		});

		Object.defineProperty(this, 'resource', {
			enumerable: true,
			get: () => this.__data.resource,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.resource = value;
			},
		});

		Object.defineProperty(this, 'search', {
			enumerable: true,
			get: () => this.__data.search,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let BundleEntrySearch = require('./bundleentrysearch.js');
				this.__data.search = new BundleEntrySearch(value);
			},
		});

		Object.defineProperty(this, 'request', {
			enumerable: true,
			get: () => this.__data.request,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let BundleEntryRequest = require('./bundleentryrequest.js');
				this.__data.request = new BundleEntryRequest(value);
			},
		});

		Object.defineProperty(this, 'response', {
			enumerable: true,
			get: () => this.__data.response,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let BundleEntryResponse = require('./bundleentryresponse.js');
				this.__data.response = new BundleEntryResponse(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BundleEntry',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BundleEntry';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_fullUrl: this._fullUrl && this._fullUrl.toJSON(),
			fullUrl: this.fullUrl,
			resource: this.resource,
			search: this.search && this.search.toJSON(),
			request: this.request && this.request.toJSON(),
			response: this.response && this.response.toJSON(),
		};
	}
};
