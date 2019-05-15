/**
 * @name exports
 * @summary SequenceRepository Class
 */
module.exports = class SequenceRepository {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/repository-type
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

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
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

		Object.defineProperty(this, '_datasetId', {
			enumerable: true,
			get: () => this.__data._datasetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._datasetId = new Element(value);
			},
		});

		Object.defineProperty(this, 'datasetId', {
			enumerable: true,
			get: () => this.__data.datasetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.datasetId = value;
			},
		});

		Object.defineProperty(this, '_variantsetId', {
			enumerable: true,
			get: () => this.__data._variantsetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._variantsetId = new Element(value);
			},
		});

		Object.defineProperty(this, 'variantsetId', {
			enumerable: true,
			get: () => this.__data.variantsetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.variantsetId = value;
			},
		});

		Object.defineProperty(this, '_readsetId', {
			enumerable: true,
			get: () => this.__data._readsetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._readsetId = new Element(value);
			},
		});

		Object.defineProperty(this, 'readsetId', {
			enumerable: true,
			get: () => this.__data.readsetId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.readsetId = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SequenceRepository',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SequenceRepository';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_datasetId: this._datasetId && this._datasetId.toJSON(),
			datasetId: this.datasetId,
			_variantsetId: this._variantsetId && this._variantsetId.toJSON(),
			variantsetId: this.variantsetId,
			_readsetId: this._readsetId && this._readsetId.toJSON(),
			readsetId: this.readsetId,
		};
	}
};
