/**
 * @name exports
 * @summary Annotation Class
 */
module.exports = class Annotation {
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

		Object.defineProperty(this, 'authorReference', {
			enumerable: true,
			get: () => this.__data.authorReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.authorReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_authorString', {
			enumerable: true,
			get: () => this.__data._authorString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._authorString = new Element(value);
			},
		});

		Object.defineProperty(this, 'authorString', {
			enumerable: true,
			get: () => this.__data.authorString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.authorString = value;
			},
		});

		Object.defineProperty(this, '_time', {
			enumerable: true,
			get: () => this.__data._time,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._time = new Element(value);
			},
		});

		Object.defineProperty(this, 'time', {
			enumerable: true,
			get: () => this.__data.time,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.time = value;
			},
		});

		Object.defineProperty(this, '_text', {
			enumerable: true,
			get: () => this.__data._text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._text = new Element(value);
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.text = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Annotation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Annotation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			authorReference: this.authorReference && this.authorReference.toJSON(),
			_authorString: this._authorString && this._authorString.toJSON(),
			authorString: this.authorString,
			_time: this._time && this._time.toJSON(),
			time: this.time,
			_text: this._text && this._text.toJSON(),
			text: this.text,
		};
	}
};
