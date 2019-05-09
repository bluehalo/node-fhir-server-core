/**
 * @name exports
 * @summary MedicinalProductName Class
 */
module.exports = class MedicinalProductName {
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

		Object.defineProperty(this, '_productName', {
			enumerable: true,
			get: () => this.__data._productName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._productName = new Element(value);
			},
		});

		Object.defineProperty(this, 'productName', {
			enumerable: true,
			get: () => this.__data.productName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.productName = value;
			},
		});

		Object.defineProperty(this, 'namePart', {
			enumerable: true,
			get: () => this.__data.namePart,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductNameNamePart = require('./medicinalproductnamenamepart.js');
				this.__data.namePart = Array.isArray(value)
					? value.map(v => new MedicinalProductNameNamePart(v))
					: [new MedicinalProductNameNamePart(value)];
			},
		});

		Object.defineProperty(this, 'countryLanguage', {
			enumerable: true,
			get: () => this.__data.countryLanguage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicinalProductNameCountryLanguage = require('./medicinalproductnamecountrylanguage.js');
				this.__data.countryLanguage = Array.isArray(value)
					? value.map(v => new MedicinalProductNameCountryLanguage(v))
					: [new MedicinalProductNameCountryLanguage(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductName',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductName';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_productName: this._productName && this._productName.toJSON(),
			productName: this.productName,
			namePart: this.namePart && this.namePart.map(v => v.toJSON()),
			countryLanguage: this.countryLanguage && this.countryLanguage.map(v => v.toJSON()),
		};
	}
};
