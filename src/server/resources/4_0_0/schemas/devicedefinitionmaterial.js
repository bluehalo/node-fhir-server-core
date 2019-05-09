/**
 * @name exports
 * @summary DeviceDefinitionMaterial Class
 */
module.exports = class DeviceDefinitionMaterial {
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

		Object.defineProperty(this, 'substance', {
			enumerable: true,
			get: () => this.__data.substance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.substance = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_alternate', {
			enumerable: true,
			get: () => this.__data._alternate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._alternate = new Element(value);
			},
		});

		Object.defineProperty(this, 'alternate', {
			enumerable: true,
			get: () => this.__data.alternate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.alternate = value;
			},
		});

		Object.defineProperty(this, '_allergenicIndicator', {
			enumerable: true,
			get: () => this.__data._allergenicIndicator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._allergenicIndicator = new Element(value);
			},
		});

		Object.defineProperty(this, 'allergenicIndicator', {
			enumerable: true,
			get: () => this.__data.allergenicIndicator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.allergenicIndicator = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceDefinitionMaterial',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceDefinitionMaterial';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			substance: this.substance && this.substance.toJSON(),
			_alternate: this._alternate && this._alternate.toJSON(),
			alternate: this.alternate,
			_allergenicIndicator: this._allergenicIndicator && this._allergenicIndicator.toJSON(),
			allergenicIndicator: this.allergenicIndicator,
		};
	}
};
