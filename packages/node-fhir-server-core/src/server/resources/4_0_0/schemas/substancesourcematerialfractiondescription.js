/**
 * @name exports
 * @summary SubstanceSourceMaterialFractionDescription Class
 */
module.exports = class SubstanceSourceMaterialFractionDescription {
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

		Object.defineProperty(this, '_fraction', {
			enumerable: true,
			get: () => this.__data._fraction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fraction = new Element(value);
			},
		});

		Object.defineProperty(this, 'fraction', {
			enumerable: true,
			get: () => this.__data.fraction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fraction = value;
			},
		});

		Object.defineProperty(this, 'materialType', {
			enumerable: true,
			get: () => this.__data.materialType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.materialType = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSourceMaterialFractionDescription',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSourceMaterialFractionDescription';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_fraction: this._fraction && this._fraction.toJSON(),
			fraction: this.fraction,
			materialType: this.materialType && this.materialType.toJSON(),
		};
	}
};
