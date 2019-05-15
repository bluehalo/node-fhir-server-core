/**
 * @name exports
 * @summary MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength Class
 */
module.exports = class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
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

		Object.defineProperty(this, 'strengthLowLimit', {
			enumerable: true,
			get: () => this.__data.strengthLowLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.strengthLowLimit = new Ratio(value);
			},
		});

		Object.defineProperty(this, '_measurementPoint', {
			enumerable: true,
			get: () => this.__data._measurementPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._measurementPoint = new Element(value);
			},
		});

		Object.defineProperty(this, 'measurementPoint', {
			enumerable: true,
			get: () => this.__data.measurementPoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.measurementPoint = value;
			},
		});

		Object.defineProperty(this, 'country', {
			enumerable: true,
			get: () => this.__data.country,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.country = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			substance: this.substance && this.substance.toJSON(),
			strength: this.strength && this.strength.toJSON(),
			strengthLowLimit: this.strengthLowLimit && this.strengthLowLimit.toJSON(),
			_measurementPoint: this._measurementPoint && this._measurementPoint.toJSON(),
			measurementPoint: this.measurementPoint,
			country: this.country && this.country.map(v => v.toJSON()),
		};
	}
};
