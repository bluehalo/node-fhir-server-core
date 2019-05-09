/**
 * @name exports
 * @summary ConceptMapGroupUnmapped Class
 */
module.exports = class ConceptMapGroupUnmapped {
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

		Object.defineProperty(this, '_mode', {
			enumerable: true,
			get: () => this.__data._mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mode = new Element(value);
			},
		});

		Object.defineProperty(this, 'mode', {
			enumerable: true,
			get: () => this.__data.mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mode = value;
			},
		});

		Object.defineProperty(this, '_code', {
			enumerable: true,
			get: () => this.__data._code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._code = new Element(value);
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.code = value;
			},
		});

		Object.defineProperty(this, '_display', {
			enumerable: true,
			get: () => this.__data._display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._display = new Element(value);
			},
		});

		Object.defineProperty(this, 'display', {
			enumerable: true,
			get: () => this.__data.display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.display = value;
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConceptMapGroupUnmapped',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConceptMapGroupUnmapped';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_mode: this._mode && this._mode.toJSON(),
			mode: this.mode,
			_code: this._code && this._code.toJSON(),
			code: this.code,
			_display: this._display && this._display.toJSON(),
			display: this.display,
			_url: this._url && this._url.toJSON(),
			url: this.url,
		};
	}
};
