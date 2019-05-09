/**
 * @name exports
 * @summary Bundle Class
 */
module.exports = class Bundle {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/bundle-type
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

		Object.defineProperty(this, '_total', {
			enumerable: true,
			get: () => this.__data._total,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._total = new Element(value);
			},
		});

		Object.defineProperty(this, 'total', {
			enumerable: true,
			get: () => this.__data.total,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.total = value;
			},
		});

		Object.defineProperty(this, 'link', {
			enumerable: true,
			get: () => this.__data.link,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let BundleLink = require('./bundlelink.js');
				this.__data.link = Array.isArray(value) ? value.map(v => new BundleLink(v)) : [new BundleLink(value)];
			},
		});

		Object.defineProperty(this, 'entry', {
			enumerable: true,
			get: () => this.__data.entry,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let BundleEntry = require('./bundleentry.js');
				this.__data.entry = Array.isArray(value) ? value.map(v => new BundleEntry(v)) : [new BundleEntry(value)];
			},
		});

		Object.defineProperty(this, 'signature', {
			enumerable: true,
			get: () => this.__data.signature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.signature = new Signature(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Bundle',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Bundle';
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
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_total: this._total && this._total.toJSON(),
			total: this.total,
			link: this.link && this.link.map(v => v.toJSON()),
			entry: this.entry && this.entry.map(v => v.toJSON()),
			signature: this.signature && this.signature.toJSON(),
		};
	}
};
