/**
 * @name exports
 * @summary SubstanceAmount Class
 */
module.exports = class SubstanceAmount {
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

		Object.defineProperty(this, 'amountQuantity', {
			enumerable: true,
			get: () => this.__data.amountQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.amountQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'amountRange', {
			enumerable: true,
			get: () => this.__data.amountRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.amountRange = new Range(value);
			},
		});

		Object.defineProperty(this, '_amountString', {
			enumerable: true,
			get: () => this.__data._amountString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._amountString = new Element(value);
			},
		});

		Object.defineProperty(this, 'amountString', {
			enumerable: true,
			get: () => this.__data.amountString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.amountString = value;
			},
		});

		Object.defineProperty(this, 'amountType', {
			enumerable: true,
			get: () => this.__data.amountType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.amountType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_amountText', {
			enumerable: true,
			get: () => this.__data._amountText,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._amountText = new Element(value);
			},
		});

		Object.defineProperty(this, 'amountText', {
			enumerable: true,
			get: () => this.__data.amountText,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.amountText = value;
			},
		});

		Object.defineProperty(this, 'referenceRange', {
			enumerable: true,
			get: () => this.__data.referenceRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data.referenceRange = new Element(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceAmount',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceAmount';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			amountQuantity: this.amountQuantity && this.amountQuantity.toJSON(),
			amountRange: this.amountRange && this.amountRange.toJSON(),
			_amountString: this._amountString && this._amountString.toJSON(),
			amountString: this.amountString,
			amountType: this.amountType && this.amountType.toJSON(),
			_amountText: this._amountText && this._amountText.toJSON(),
			amountText: this.amountText,
			referenceRange: this.referenceRange && this.referenceRange.toJSON(),
		};
	}
};
