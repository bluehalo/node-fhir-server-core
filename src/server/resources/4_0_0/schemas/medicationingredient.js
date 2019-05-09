/**
 * @name exports
 * @summary MedicationIngredient Class
 */
module.exports = class MedicationIngredient {
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

		Object.defineProperty(this, 'itemCodeableConcept', {
			enumerable: true,
			get: () => this.__data.itemCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.itemCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'itemReference', {
			enumerable: true,
			get: () => this.__data.itemReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.itemReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_isActive', {
			enumerable: true,
			get: () => this.__data._isActive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isActive = new Element(value);
			},
		});

		Object.defineProperty(this, 'isActive', {
			enumerable: true,
			get: () => this.__data.isActive,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isActive = value;
			},
		});

		Object.defineProperty(this, 'strength', {
			enumerable: true,
			get: () => this.__data.strength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.strength = new Ratio(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationIngredient',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationIngredient';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			itemCodeableConcept: this.itemCodeableConcept && this.itemCodeableConcept.toJSON(),
			itemReference: this.itemReference && this.itemReference.toJSON(),
			_isActive: this._isActive && this._isActive.toJSON(),
			isActive: this.isActive,
			strength: this.strength && this.strength.toJSON(),
		};
	}
};
