/**
 * @name exports
 * @summary Attachment Class
 */
module.exports = class Attachment {
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

		Object.defineProperty(this, '_contentType', {
			enumerable: true,
			get: () => this.__data._contentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contentType = new Element(value);
			},
		});

		Object.defineProperty(this, 'contentType', {
			enumerable: true,
			get: () => this.__data.contentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contentType = value;
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

		Object.defineProperty(this, '_data', {
			enumerable: true,
			get: () => this.__data._data,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._data = new Element(value);
			},
		});

		Object.defineProperty(this, 'data', {
			enumerable: true,
			get: () => this.__data.data,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.data = value;
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

		Object.defineProperty(this, '_size', {
			enumerable: true,
			get: () => this.__data._size,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._size = new Element(value);
			},
		});

		Object.defineProperty(this, 'size', {
			enumerable: true,
			get: () => this.__data.size,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.size = value;
			},
		});

		Object.defineProperty(this, '_hash', {
			enumerable: true,
			get: () => this.__data._hash,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._hash = new Element(value);
			},
		});

		Object.defineProperty(this, 'hash', {
			enumerable: true,
			get: () => this.__data.hash,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.hash = value;
			},
		});

		Object.defineProperty(this, '_title', {
			enumerable: true,
			get: () => this.__data._title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._title = new Element(value);
			},
		});

		Object.defineProperty(this, 'title', {
			enumerable: true,
			get: () => this.__data.title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.title = value;
			},
		});

		Object.defineProperty(this, '_creation', {
			enumerable: true,
			get: () => this.__data._creation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._creation = new Element(value);
			},
		});

		Object.defineProperty(this, 'creation', {
			enumerable: true,
			get: () => this.__data.creation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.creation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Attachment',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Attachment';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_contentType: this._contentType && this._contentType.toJSON(),
			contentType: this.contentType,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			_data: this._data && this._data.toJSON(),
			data: this.data,
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_size: this._size && this._size.toJSON(),
			size: this.size,
			_hash: this._hash && this._hash.toJSON(),
			hash: this.hash,
			_title: this._title && this._title.toJSON(),
			title: this.title,
			_creation: this._creation && this._creation.toJSON(),
			creation: this.creation,
		};
	}
};
