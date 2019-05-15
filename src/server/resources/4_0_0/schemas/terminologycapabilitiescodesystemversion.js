/**
 * @name exports
 * @summary TerminologyCapabilitiesCodeSystemVersion Class
 */
module.exports = class TerminologyCapabilitiesCodeSystemVersion {
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

		Object.defineProperty(this, '_isDefault', {
			enumerable: true,
			get: () => this.__data._isDefault,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isDefault = new Element(value);
			},
		});

		Object.defineProperty(this, 'isDefault', {
			enumerable: true,
			get: () => this.__data.isDefault,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isDefault = value;
			},
		});

		Object.defineProperty(this, '_compositional', {
			enumerable: true,
			get: () => this.__data._compositional,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._compositional = new Element(value);
			},
		});

		Object.defineProperty(this, 'compositional', {
			enumerable: true,
			get: () => this.__data.compositional,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.compositional = value;
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

				this.__data.language = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'filter', {
			enumerable: true,
			get: () => this.__data.filter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TerminologyCapabilitiesCodeSystemVersionFilter = require('./terminologycapabilitiescodesystemversionfilter.js');
				this.__data.filter = Array.isArray(value)
					? value.map(v => new TerminologyCapabilitiesCodeSystemVersionFilter(v))
					: [new TerminologyCapabilitiesCodeSystemVersionFilter(value)];
			},
		});

		Object.defineProperty(this, '_property', {
			enumerable: true,
			get: () => this.__data._property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._property = new Element(value);
			},
		});

		Object.defineProperty(this, 'property', {
			enumerable: true,
			get: () => this.__data.property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.property = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TerminologyCapabilitiesCodeSystemVersion',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TerminologyCapabilitiesCodeSystemVersion';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_code: this._code && this._code.toJSON(),
			code: this.code,
			_isDefault: this._isDefault && this._isDefault.toJSON(),
			isDefault: this.isDefault,
			_compositional: this._compositional && this._compositional.toJSON(),
			compositional: this.compositional,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			filter: this.filter && this.filter.map(v => v.toJSON()),
			_property: this._property && this._property.toJSON(),
			property: this.property,
		};
	}
};
