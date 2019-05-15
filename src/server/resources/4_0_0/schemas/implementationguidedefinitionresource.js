/**
 * @name exports
 * @summary ImplementationGuideDefinitionResource Class
 */
module.exports = class ImplementationGuideDefinitionResource {
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

		Object.defineProperty(this, 'reference', {
			enumerable: true,
			get: () => this.__data.reference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_fhirVersion', {
			enumerable: true,
			get: () => this.__data._fhirVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fhirVersion = new Element(value);
			},
		});

		Object.defineProperty(this, 'fhirVersion', {
			enumerable: true,
			get: () => this.__data.fhirVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fhirVersion = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_exampleBoolean', {
			enumerable: true,
			get: () => this.__data._exampleBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleBoolean', {
			enumerable: true,
			get: () => this.__data.exampleBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleBoolean = value;
			},
		});

		Object.defineProperty(this, '_exampleCanonical', {
			enumerable: true,
			get: () => this.__data._exampleCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exampleCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'exampleCanonical', {
			enumerable: true,
			get: () => this.__data.exampleCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exampleCanonical = value;
			},
		});

		Object.defineProperty(this, '_groupingId', {
			enumerable: true,
			get: () => this.__data._groupingId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._groupingId = new Element(value);
			},
		});

		Object.defineProperty(this, 'groupingId', {
			enumerable: true,
			get: () => this.__data.groupingId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.groupingId = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImplementationGuideDefinitionResource',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImplementationGuideDefinitionResource';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			reference: this.reference && this.reference.toJSON(),
			_fhirVersion: this._fhirVersion && this._fhirVersion.toJSON(),
			fhirVersion: this.fhirVersion,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_exampleBoolean: this._exampleBoolean && this._exampleBoolean.toJSON(),
			exampleBoolean: this.exampleBoolean,
			_exampleCanonical: this._exampleCanonical && this._exampleCanonical.toJSON(),
			exampleCanonical: this.exampleCanonical,
			_groupingId: this._groupingId && this._groupingId.toJSON(),
			groupingId: this.groupingId,
		};
	}
};
