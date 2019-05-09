/**
 * @name exports
 * @summary ValueSetCodeSystemConceptDesignation Class
 */
module.exports = class ValueSetCodeSystemConceptDesignation {
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

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/designation-use
		Object.defineProperty(this, 'use', {
			enumerable: true,
			get: () => this.__data.use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.use = new Coding(value);
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ValueSetCodeSystemConceptDesignation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ValueSetCodeSystemConceptDesignation';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_language: this._language && this._language.toJSON(),
			language: this.language,
			use: this.use && this.use.toJSON(),
			_value: this._value && this._value.toJSON(),
			value: this.value,
		};
	}
};
