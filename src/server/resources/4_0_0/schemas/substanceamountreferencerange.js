/**
 * @name exports
 * @summary SubstanceAmountReferenceRange Class
 */
module.exports = class SubstanceAmountReferenceRange {
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

		Object.defineProperty(this, 'lowLimit', {
			enumerable: true,
			get: () => this.__data.lowLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.lowLimit = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'highLimit', {
			enumerable: true,
			get: () => this.__data.highLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.highLimit = new Quantity(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceAmountReferenceRange',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceAmountReferenceRange';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			lowLimit: this.lowLimit && this.lowLimit.toJSON(),
			highLimit: this.highLimit && this.highLimit.toJSON(),
		};
	}
};
