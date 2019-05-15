/**
 * @name exports
 * @summary Meta Class
 */
module.exports = class Meta {
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

		Object.defineProperty(this, '_versionId', {
			enumerable: true,
			get: () => this.__data._versionId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._versionId = new Element(value);
			},
		});

		Object.defineProperty(this, 'versionId', {
			enumerable: true,
			get: () => this.__data.versionId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.versionId = value;
			},
		});

		Object.defineProperty(this, '_lastUpdated', {
			enumerable: true,
			get: () => this.__data._lastUpdated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lastUpdated = new Element(value);
			},
		});

		Object.defineProperty(this, 'lastUpdated', {
			enumerable: true,
			get: () => this.__data.lastUpdated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lastUpdated = value;
			},
		});

		Object.defineProperty(this, '_source', {
			enumerable: true,
			get: () => this.__data._source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._source = new Element(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.source = value;
			},
		});

		Object.defineProperty(this, '_profile', {
			enumerable: true,
			get: () => this.__data._profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._profile = new Element(value);
			},
		});

		Object.defineProperty(this, 'profile', {
			enumerable: true,
			get: () => this.__data.profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.profile = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'security', {
			enumerable: true,
			get: () => this.__data.security,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.security = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'tag', {
			enumerable: true,
			get: () => this.__data.tag,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.tag = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Meta',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Meta';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_versionId: this._versionId && this._versionId.toJSON(),
			versionId: this.versionId,
			_lastUpdated: this._lastUpdated && this._lastUpdated.toJSON(),
			lastUpdated: this.lastUpdated,
			_source: this._source && this._source.toJSON(),
			source: this.source,
			_profile: this._profile && this._profile.toJSON(),
			profile: this.profile,
			security: this.security && this.security.map(v => v.toJSON()),
			tag: this.tag && this.tag.map(v => v.toJSON()),
		};
	}
};
