/**
 * @name exports
 * @summary StructureMapGroupInput Class
 */
module.exports = class StructureMapGroupInput {
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

		Object.defineProperty(this, '_mode', {
			enumerable: true,
			get: () => this.__data._mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._mode = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-input-mode
		Object.defineProperty(this, 'mode', {
			enumerable: true,
			get: () => this.__data.mode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.mode = value;
			},
		});

		Object.defineProperty(this, '_documentation', {
			enumerable: true,
			get: () => this.__data._documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._documentation = new Element(value);
			},
		});

		Object.defineProperty(this, 'documentation', {
			enumerable: true,
			get: () => this.__data.documentation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.documentation = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureMapGroupInput',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureMapGroupInput';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_mode: this._mode && this._mode.toJSON(),
			mode: this.mode,
			_documentation: this._documentation && this._documentation.toJSON(),
			documentation: this.documentation,
		};
	}
};
