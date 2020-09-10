/**
 * @name exports
 * @summary Signature Class
 */
module.exports = class Signature {
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

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_when', {
			enumerable: true,
			get: () => this.__data._when,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._when = new Element(value);
			},
		});

		Object.defineProperty(this, 'when', {
			enumerable: true,
			get: () => this.__data.when,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.when = value;
			},
		});

		Object.defineProperty(this, 'who', {
			enumerable: true,
			get: () => this.__data.who,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.who = new Reference(value);
			},
		});

		Object.defineProperty(this, 'onBehalfOf', {
			enumerable: true,
			get: () => this.__data.onBehalfOf,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.onBehalfOf = new Reference(value);
			},
		});

		Object.defineProperty(this, '_targetFormat', {
			enumerable: true,
			get: () => this.__data._targetFormat,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._targetFormat = new Element(value);
			},
		});

		Object.defineProperty(this, 'targetFormat', {
			enumerable: true,
			get: () => this.__data.targetFormat,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.targetFormat = value;
			},
		});

		Object.defineProperty(this, '_sigFormat', {
			enumerable: true,
			get: () => this.__data._sigFormat,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sigFormat = new Element(value);
			},
		});

		Object.defineProperty(this, 'sigFormat', {
			enumerable: true,
			get: () => this.__data.sigFormat,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sigFormat = value;
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Signature',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Signature';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			type: this.type && this.type.map(v => v.toJSON()),
			_when: this._when && this._when.toJSON(),
			when: this.when,
			who: this.who && this.who.toJSON(),
			onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON(),
			_targetFormat: this._targetFormat && this._targetFormat.toJSON(),
			targetFormat: this.targetFormat,
			_sigFormat: this._sigFormat && this._sigFormat.toJSON(),
			sigFormat: this.sigFormat,
			_data: this._data && this._data.toJSON(),
			data: this.data,
		};
	}
};
