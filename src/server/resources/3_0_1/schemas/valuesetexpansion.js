/**
 * @name exports
 * @summary ValueSetExpansion Class
 */
module.exports = class ValueSetExpansion {
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

		Object.defineProperty(this, '_identifier', {
			enumerable: true,
			get: () => this.__data._identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._identifier = new Element(value);
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.identifier = value;
			},
		});

		Object.defineProperty(this, '_timestamp', {
			enumerable: true,
			get: () => this.__data._timestamp,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timestamp = new Element(value);
			},
		});

		Object.defineProperty(this, 'timestamp', {
			enumerable: true,
			get: () => this.__data.timestamp,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timestamp = value;
			},
		});

		Object.defineProperty(this, '_total', {
			enumerable: true,
			get: () => this.__data._total,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._total = new Element(value);
			},
		});

		Object.defineProperty(this, 'total', {
			enumerable: true,
			get: () => this.__data.total,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.total = value;
			},
		});

		Object.defineProperty(this, '_offset', {
			enumerable: true,
			get: () => this.__data._offset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._offset = new Element(value);
			},
		});

		Object.defineProperty(this, 'offset', {
			enumerable: true,
			get: () => this.__data.offset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.offset = value;
			},
		});

		Object.defineProperty(this, 'parameter', {
			enumerable: true,
			get: () => this.__data.parameter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ValueSetExpansionParameter = require('./valuesetexpansionparameter.js');
				this.__data.parameter = Array.isArray(value)
					? value.map(v => new ValueSetExpansionParameter(v))
					: [new ValueSetExpansionParameter(value)];
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
			value: 'ValueSetExpansion',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ValueSetExpansion';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_identifier: this._identifier && this._identifier.toJSON(),
			identifier: this.identifier,
			_timestamp: this._timestamp && this._timestamp.toJSON(),
			timestamp: this.timestamp,
			_total: this._total && this._total.toJSON(),
			total: this.total,
			_offset: this._offset && this._offset.toJSON(),
			offset: this.offset,
			parameter: this.parameter && this.parameter.map(v => v.toJSON()),
			contains: this.contains && this.contains.map(v => v.toJSON()),
		};
	}
};
