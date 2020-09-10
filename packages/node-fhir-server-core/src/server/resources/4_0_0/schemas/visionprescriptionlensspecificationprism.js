/**
 * @name exports
 * @summary VisionPrescriptionLensSpecificationPrism Class
 */
module.exports = class VisionPrescriptionLensSpecificationPrism {
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

		Object.defineProperty(this, '_amount', {
			enumerable: true,
			get: () => this.__data._amount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._amount = new Element(value);
			},
		});

		Object.defineProperty(this, 'amount', {
			enumerable: true,
			get: () => this.__data.amount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.amount = value;
			},
		});

		Object.defineProperty(this, '_base', {
			enumerable: true,
			get: () => this.__data._base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._base = new Element(value);
			},
		});

		Object.defineProperty(this, 'base', {
			enumerable: true,
			get: () => this.__data.base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.base = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'VisionPrescriptionLensSpecificationPrism',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'VisionPrescriptionLensSpecificationPrism';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_amount: this._amount && this._amount.toJSON(),
			amount: this.amount,
			_base: this._base && this._base.toJSON(),
			base: this.base,
		};
	}
};
