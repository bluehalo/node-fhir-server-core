/**
 * @name exports
 * @summary Duration Class
 */
module.exports = class Duration {
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

		Object.defineProperty(this, '_value', {
			enumerable: true,
			get: () => this.__data._value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._value = new Element(value);
			},
		});

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.value = value;
			},
		});

		Object.defineProperty(this, '_comparator', {
			enumerable: true,
			get: () => this.__data._comparator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comparator = new Element(value);
			},
		});

		Object.defineProperty(this, 'comparator', {
			enumerable: true,
			get: () => this.__data.comparator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comparator = value;
			},
		});

		Object.defineProperty(this, '_unit', {
			enumerable: true,
			get: () => this.__data._unit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._unit = new Element(value);
			},
		});

		Object.defineProperty(this, 'unit', {
			enumerable: true,
			get: () => this.__data.unit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.unit = value;
			},
		});

		Object.defineProperty(this, '_system', {
			enumerable: true,
			get: () => this.__data._system,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._system = new Element(value);
			},
		});

		Object.defineProperty(this, 'system', {
			enumerable: true,
			get: () => this.__data.system,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.system = value;
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Duration',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Duration';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_value: this._value && this._value.toJSON(),
			value: this.value,
			_comparator: this._comparator && this._comparator.toJSON(),
			comparator: this.comparator,
			_unit: this._unit && this._unit.toJSON(),
			unit: this.unit,
			_system: this._system && this._system.toJSON(),
			system: this.system,
			_code: this._code && this._code.toJSON(),
			code: this.code,
		};
	}
};
