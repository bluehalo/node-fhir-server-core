/**
 * @name exports
 * @summary DosageDoseAndRate Class
 */
module.exports = class DosageDoseAndRate {
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

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'doseRange', {
			enumerable: true,
			get: () => this.__data.doseRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.doseRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'doseQuantity', {
			enumerable: true,
			get: () => this.__data.doseQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.doseQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'rateRatio', {
			enumerable: true,
			get: () => this.__data.rateRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.rateRatio = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'rateRange', {
			enumerable: true,
			get: () => this.__data.rateRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.rateRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'rateQuantity', {
			enumerable: true,
			get: () => this.__data.rateQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.rateQuantity = new Quantity(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DosageDoseAndRate',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DosageDoseAndRate';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			doseRange: this.doseRange && this.doseRange.toJSON(),
			doseQuantity: this.doseQuantity && this.doseQuantity.toJSON(),
			rateRatio: this.rateRatio && this.rateRatio.toJSON(),
			rateRange: this.rateRange && this.rateRange.toJSON(),
			rateQuantity: this.rateQuantity && this.rateQuantity.toJSON(),
		};
	}
};
