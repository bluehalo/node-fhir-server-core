/**
 * @name exports
 * @summary Period Class
 */
module.exports = class Period {
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

		Object.defineProperty(this, '_start', {
			enumerable: true,
			get: () => this.__data._start,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._start = new Element(value);
			},
		});

		Object.defineProperty(this, 'start', {
			enumerable: true,
			get: () => this.__data.start,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.start = value;
			},
		});

		Object.defineProperty(this, '_end', {
			enumerable: true,
			get: () => this.__data._end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._end = new Element(value);
			},
		});

		Object.defineProperty(this, 'end', {
			enumerable: true,
			get: () => this.__data.end,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.end = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Period',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Period';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_start: this._start && this._start.toJSON(),
			start: this.start,
			_end: this._end && this._end.toJSON(),
			end: this.end,
		};
	}
};
