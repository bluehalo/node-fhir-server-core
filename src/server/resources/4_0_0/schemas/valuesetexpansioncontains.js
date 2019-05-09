/**
 * @name exports
 * @summary ValueSetExpansionContains Class
 */
module.exports = class ValueSetExpansionContains {
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

		Object.defineProperty(this, '_system', {
			enumerable: true,
			get: () => this.__data._system,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._system = new Element(value);
			},
		});

		Object.defineProperty(this, 'system', {
			enumerable: true,
			get: () => this.__data.system,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.system = value;
			},
		});

		Object.defineProperty(this, '_abstract', {
			enumerable: true,
			get: () => this.__data._abstract,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._abstract = new Element(value);
			},
		});

		Object.defineProperty(this, 'abstract', {
			enumerable: true,
			get: () => this.__data.abstract,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.abstract = value;
			},
		});

		Object.defineProperty(this, '_inactive', {
			enumerable: true,
			get: () => this.__data._inactive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._inactive = new Element(value);
			},
		});

		Object.defineProperty(this, 'inactive', {
			enumerable: true,
			get: () => this.__data.inactive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.inactive = value;
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
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

		Object.defineProperty(this, '_display', {
			enumerable: true,
			get: () => this.__data._display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._display = new Element(value);
			},
		});

		Object.defineProperty(this, 'display', {
			enumerable: true,
			get: () => this.__data.display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.display = value;
			},
		});

		Object.defineProperty(this, 'designation', {
			enumerable: true,
			get: () => this.__data.designation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ValueSetComposeIncludeConceptDesignation = require('./valuesetcomposeincludeconceptdesignation.js');
				this.__data.designation = Array.isArray(value)
					? value.map(v => new ValueSetComposeIncludeConceptDesignation(v))
					: [new ValueSetComposeIncludeConceptDesignation(value)];
			},
		});

		Object.defineProperty(this, 'contains', {
			enumerable: true,
			get: () => this.__data.contains,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ValueSetExpansionContains = require('./valuesetexpansioncontains.js');
				this.__data.contains = Array.isArray(value)
					? value.map(v => new ValueSetExpansionContains(v))
					: [new ValueSetExpansionContains(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ValueSetExpansionContains',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ValueSetExpansionContains';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_system: this._system && this._system.toJSON(),
			system: this.system,
			_abstract: this._abstract && this._abstract.toJSON(),
			abstract: this.abstract,
			_inactive: this._inactive && this._inactive.toJSON(),
			inactive: this.inactive,
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_code: this._code && this._code.toJSON(),
			code: this.code,
			_display: this._display && this._display.toJSON(),
			display: this.display,
			designation: this.designation && this.designation.map(v => v.toJSON()),
			contains: this.contains && this.contains.map(v => v.toJSON()),
		};
	}
};
