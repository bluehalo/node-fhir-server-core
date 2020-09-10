/**
 * @name exports
 * @summary HumanName Class
 */
module.exports = class HumanName {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/name-use
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

		Object.defineProperty(this, '_family', {
			enumerable: true,
			get: () => this.__data._family,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._family = new Element(value);
			},
		});

		Object.defineProperty(this, 'family', {
			enumerable: true,
			get: () => this.__data.family,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.family = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_given', {
			enumerable: true,
			get: () => this.__data._given,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._given = new Element(value);
			},
		});

		Object.defineProperty(this, 'given', {
			enumerable: true,
			get: () => this.__data.given,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.given = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_prefix', {
			enumerable: true,
			get: () => this.__data._prefix,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._prefix = new Element(value);
			},
		});

		Object.defineProperty(this, 'prefix', {
			enumerable: true,
			get: () => this.__data.prefix,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.prefix = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_suffix', {
			enumerable: true,
			get: () => this.__data._suffix,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._suffix = new Element(value);
			},
		});

		Object.defineProperty(this, 'suffix', {
			enumerable: true,
			get: () => this.__data.suffix,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.suffix = Array.isArray(value) ? value.map(v => v) : [value];
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
			value: 'HumanName',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'HumanName';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_use: this._use && this._use.toJSON(),
			use: this.use,
			_text: this._text && this._text.toJSON(),
			text: this.text,
			_family: this._family && this._family.toJSON(),
			family: this.family,
			_given: this._given && this._given.toJSON(),
			given: this.given,
			_prefix: this._prefix && this._prefix.toJSON(),
			prefix: this.prefix,
			_suffix: this._suffix && this._suffix.toJSON(),
			suffix: this.suffix,
			period: this.period && this.period.toJSON(),
		};
	}
};
