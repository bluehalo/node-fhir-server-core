/**
 * @name exports
 * @summary ElementDefinitionMapping Class
 */
module.exports = class ElementDefinitionMapping {
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

		Object.defineProperty(this, '_identity', {
			enumerable: true,
			get: () => this.__data._identity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._identity = new Element(value);
			},
		});

		Object.defineProperty(this, 'identity', {
			enumerable: true,
			get: () => this.__data.identity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.identity = value;
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

		Object.defineProperty(this, '_map', {
			enumerable: true,
			get: () => this.__data._map,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._map = new Element(value);
			},
		});

		Object.defineProperty(this, 'map', {
			enumerable: true,
			get: () => this.__data.map,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.map = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ElementDefinitionMapping',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ElementDefinitionMapping';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_identity: this._identity && this._identity.toJSON(),
			identity: this.identity,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			_map: this._map && this._map.toJSON(),
			map: this.map,
		};
	}
};
