/**
 * @name exports
 * @summary SubstancePolymerRepeat Class
 */
module.exports = class SubstancePolymerRepeat {
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

		Object.defineProperty(this, '_numberOfUnits', {
			enumerable: true,
			get: () => this.__data._numberOfUnits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numberOfUnits = new Element(value);
			},
		});

		Object.defineProperty(this, 'numberOfUnits', {
			enumerable: true,
			get: () => this.__data.numberOfUnits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numberOfUnits = value;
			},
		});

		Object.defineProperty(this, '_averageMolecularFormula', {
			enumerable: true,
			get: () => this.__data._averageMolecularFormula,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._averageMolecularFormula = new Element(value);
			},
		});

		Object.defineProperty(this, 'averageMolecularFormula', {
			enumerable: true,
			get: () => this.__data.averageMolecularFormula,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.averageMolecularFormula = value;
			},
		});

		Object.defineProperty(this, 'repeatUnitAmountType', {
			enumerable: true,
			get: () => this.__data.repeatUnitAmountType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.repeatUnitAmountType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'repeatUnit', {
			enumerable: true,
			get: () => this.__data.repeatUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstancePolymerRepeatRepeatUnit = require('./substancepolymerrepeatrepeatunit.js');
				this.__data.repeatUnit = Array.isArray(value)
					? value.map(v => new SubstancePolymerRepeatRepeatUnit(v))
					: [new SubstancePolymerRepeatRepeatUnit(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstancePolymerRepeat',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstancePolymerRepeat';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_numberOfUnits: this._numberOfUnits && this._numberOfUnits.toJSON(),
			numberOfUnits: this.numberOfUnits,
			_averageMolecularFormula: this._averageMolecularFormula && this._averageMolecularFormula.toJSON(),
			averageMolecularFormula: this.averageMolecularFormula,
			repeatUnitAmountType: this.repeatUnitAmountType && this.repeatUnitAmountType.toJSON(),
			repeatUnit: this.repeatUnit && this.repeatUnit.map(v => v.toJSON()),
		};
	}
};
