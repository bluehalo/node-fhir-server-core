/**
 * @name exports
 * @summary Address Class
 */
module.exports = class Address {
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

		Object.defineProperty(this, '_use', {
			enumerable: true,
			get: () => this.__data._use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._use = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/address-use
		Object.defineProperty(this, 'use', {
			enumerable: true,
			get: () => this.__data.use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.use = value;
			},
		});

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/address-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
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

		Object.defineProperty(this, '_line', {
			enumerable: true,
			get: () => this.__data._line,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._line = new Element(value);
			},
		});

		Object.defineProperty(this, 'line', {
			enumerable: true,
			get: () => this.__data.line,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.line = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_city', {
			enumerable: true,
			get: () => this.__data._city,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._city = new Element(value);
			},
		});

		Object.defineProperty(this, 'city', {
			enumerable: true,
			get: () => this.__data.city,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.city = value;
			},
		});

		Object.defineProperty(this, '_district', {
			enumerable: true,
			get: () => this.__data._district,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._district = new Element(value);
			},
		});

		Object.defineProperty(this, 'district', {
			enumerable: true,
			get: () => this.__data.district,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.district = value;
			},
		});

		Object.defineProperty(this, '_state', {
			enumerable: true,
			get: () => this.__data._state,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._state = new Element(value);
			},
		});

		Object.defineProperty(this, 'state', {
			enumerable: true,
			get: () => this.__data.state,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.state = value;
			},
		});

		Object.defineProperty(this, '_postalCode', {
			enumerable: true,
			get: () => this.__data._postalCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._postalCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'postalCode', {
			enumerable: true,
			get: () => this.__data.postalCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.postalCode = value;
			},
		});

		Object.defineProperty(this, '_country', {
			enumerable: true,
			get: () => this.__data._country,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._country = new Element(value);
			},
		});

		Object.defineProperty(this, 'country', {
			enumerable: true,
			get: () => this.__data.country,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.country = value;
			},
		});

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.period = new Period(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Address',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Address';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_use: this._use && this._use.toJSON(),
			use: this.use,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_text: this._text && this._text.toJSON(),
			text: this.text,
			_line: this._line && this._line.toJSON(),
			line: this.line,
			_city: this._city && this._city.toJSON(),
			city: this.city,
			_district: this._district && this._district.toJSON(),
			district: this.district,
			_state: this._state && this._state.toJSON(),
			state: this.state,
			_postalCode: this._postalCode && this._postalCode.toJSON(),
			postalCode: this.postalCode,
			_country: this._country && this._country.toJSON(),
			country: this.country,
			period: this.period && this.period.toJSON(),
		};
	}
};
