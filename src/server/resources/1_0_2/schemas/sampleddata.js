/**
 * @name exports
 * @summary SampledData Class
 */
module.exports = class SampledData {
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

		Object.defineProperty(this, 'origin', {
			enumerable: true,
			get: () => this.__data.origin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.origin = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_period', {
			enumerable: true,
			get: () => this.__data._period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._period = new Element(value);
			},
		});

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.period = value;
			},
		});

		Object.defineProperty(this, '_factor', {
			enumerable: true,
			get: () => this.__data._factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._factor = new Element(value);
			},
		});

		Object.defineProperty(this, 'factor', {
			enumerable: true,
			get: () => this.__data.factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.factor = value;
			},
		});

		Object.defineProperty(this, '_lowerLimit', {
			enumerable: true,
			get: () => this.__data._lowerLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._lowerLimit = new Element(value);
			},
		});

		Object.defineProperty(this, 'lowerLimit', {
			enumerable: true,
			get: () => this.__data.lowerLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.lowerLimit = value;
			},
		});

		Object.defineProperty(this, '_upperLimit', {
			enumerable: true,
			get: () => this.__data._upperLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._upperLimit = new Element(value);
			},
		});

		Object.defineProperty(this, 'upperLimit', {
			enumerable: true,
			get: () => this.__data.upperLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.upperLimit = value;
			},
		});

		Object.defineProperty(this, '_dimensions', {
			enumerable: true,
			get: () => this.__data._dimensions,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dimensions = new Element(value);
			},
		});

		Object.defineProperty(this, 'dimensions', {
			enumerable: true,
			get: () => this.__data.dimensions,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dimensions = value;
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
			value: 'SampledData',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SampledData';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			origin: this.origin && this.origin.toJSON(),
			_period: this._period && this._period.toJSON(),
			period: this.period,
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			_lowerLimit: this._lowerLimit && this._lowerLimit.toJSON(),
			lowerLimit: this.lowerLimit,
			_upperLimit: this._upperLimit && this._upperLimit.toJSON(),
			upperLimit: this.upperLimit,
			_dimensions: this._dimensions && this._dimensions.toJSON(),
			dimensions: this.dimensions,
			_data: this._data && this._data.toJSON(),
			data: this.data,
		};
	}
};
