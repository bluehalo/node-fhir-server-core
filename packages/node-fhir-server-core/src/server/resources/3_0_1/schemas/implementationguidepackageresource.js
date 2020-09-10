/**
 * @name exports
 * @summary ImplementationGuidePackageResource Class
 */
module.exports = class ImplementationGuidePackageResource {
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

		Object.defineProperty(this, '_example', {
			enumerable: true,
			get: () => this.__data._example,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._example = new Element(value);
			},
		});

		Object.defineProperty(this, 'example', {
			enumerable: true,
			get: () => this.__data.example,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.example = value;
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

		Object.defineProperty(this, '_acronym', {
			enumerable: true,
			get: () => this.__data._acronym,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._acronym = new Element(value);
			},
		});

		Object.defineProperty(this, 'acronym', {
			enumerable: true,
			get: () => this.__data.acronym,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.acronym = value;
			},
		});

		Object.defineProperty(this, '_sourceUri', {
			enumerable: true,
			get: () => this.__data._sourceUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sourceUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'sourceUri', {
			enumerable: true,
			get: () => this.__data.sourceUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sourceUri = value;
			},
		});

		Object.defineProperty(this, 'sourceReference', {
			enumerable: true,
			get: () => this.__data.sourceReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.sourceReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'exampleFor', {
			enumerable: true,
			get: () => this.__data.exampleFor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.exampleFor = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImplementationGuidePackageResource',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImplementationGuidePackageResource';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_example: this._example && this._example.toJSON(),
			example: this.example,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_acronym: this._acronym && this._acronym.toJSON(),
			acronym: this.acronym,
			_sourceUri: this._sourceUri && this._sourceUri.toJSON(),
			sourceUri: this.sourceUri,
			sourceReference: this.sourceReference && this.sourceReference.toJSON(),
			exampleFor: this.exampleFor && this.exampleFor.toJSON(),
		};
	}
};
