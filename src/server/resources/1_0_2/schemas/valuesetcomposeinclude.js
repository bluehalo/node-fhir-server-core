/**
 * @name exports
 * @summary ValueSetComposeInclude Class
 */
module.exports = class ValueSetComposeInclude {
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

		Object.defineProperty(this, 'concept', {
			enumerable: true,
			get: () => this.__data.concept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ValueSetComposeIncludeConcept = require('./valuesetcomposeincludeconcept.js');
				this.__data.concept = Array.isArray(value)
					? value.map(v => new ValueSetComposeIncludeConcept(v))
					: [new ValueSetComposeIncludeConcept(value)];
			},
		});

		Object.defineProperty(this, 'filter', {
			enumerable: true,
			get: () => this.__data.filter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ValueSetComposeIncludeFilter = require('./valuesetcomposeincludefilter.js');
				this.__data.filter = Array.isArray(value)
					? value.map(v => new ValueSetComposeIncludeFilter(v))
					: [new ValueSetComposeIncludeFilter(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ValueSetComposeInclude',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ValueSetComposeInclude';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_system: this._system && this._system.toJSON(),
			system: this.system,
			_version: this._version && this._version.toJSON(),
			version: this.version,
			concept: this.concept && this.concept.map(v => v.toJSON()),
			filter: this.filter && this.filter.map(v => v.toJSON()),
		};
	}
};
