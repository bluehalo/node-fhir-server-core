/**
 * @name exports
 * @summary NutritionOrderEnteralFormula Class
 */
module.exports = class NutritionOrderEnteralFormula {
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

		Object.defineProperty(this, 'baseFormulaType', {
			enumerable: true,
			get: () => this.__data.baseFormulaType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.baseFormulaType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_baseFormulaProductName', {
			enumerable: true,
			get: () => this.__data._baseFormulaProductName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._baseFormulaProductName = new Element(value);
			},
		});

		Object.defineProperty(this, 'baseFormulaProductName', {
			enumerable: true,
			get: () => this.__data.baseFormulaProductName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.baseFormulaProductName = value;
			},
		});

		Object.defineProperty(this, 'additiveType', {
			enumerable: true,
			get: () => this.__data.additiveType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.additiveType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_additiveProductName', {
			enumerable: true,
			get: () => this.__data._additiveProductName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._additiveProductName = new Element(value);
			},
		});

		Object.defineProperty(this, 'additiveProductName', {
			enumerable: true,
			get: () => this.__data.additiveProductName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.additiveProductName = value;
			},
		});

		Object.defineProperty(this, 'caloricDensity', {
			enumerable: true,
			get: () => this.__data.caloricDensity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.caloricDensity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'routeofAdministration', {
			enumerable: true,
			get: () => this.__data.routeofAdministration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.routeofAdministration = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'administration', {
			enumerable: true,
			get: () => this.__data.administration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let NutritionOrderEnteralFormulaAdministration = require('./nutritionorderenteralformulaadministration.js');
				this.__data.administration = Array.isArray(value)
					? value.map(v => new NutritionOrderEnteralFormulaAdministration(v))
					: [new NutritionOrderEnteralFormulaAdministration(value)];
			},
		});

		Object.defineProperty(this, 'maxVolumeToDeliver', {
			enumerable: true,
			get: () => this.__data.maxVolumeToDeliver,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.maxVolumeToDeliver = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_administrationInstruction', {
			enumerable: true,
			get: () => this.__data._administrationInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._administrationInstruction = new Element(value);
			},
		});

		Object.defineProperty(this, 'administrationInstruction', {
			enumerable: true,
			get: () => this.__data.administrationInstruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.administrationInstruction = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'NutritionOrderEnteralFormula',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'NutritionOrderEnteralFormula';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			baseFormulaType: this.baseFormulaType && this.baseFormulaType.toJSON(),
			_baseFormulaProductName: this._baseFormulaProductName && this._baseFormulaProductName.toJSON(),
			baseFormulaProductName: this.baseFormulaProductName,
			additiveType: this.additiveType && this.additiveType.toJSON(),
			_additiveProductName: this._additiveProductName && this._additiveProductName.toJSON(),
			additiveProductName: this.additiveProductName,
			caloricDensity: this.caloricDensity && this.caloricDensity.toJSON(),
			routeofAdministration: this.routeofAdministration && this.routeofAdministration.toJSON(),
			administration: this.administration && this.administration.map(v => v.toJSON()),
			maxVolumeToDeliver: this.maxVolumeToDeliver && this.maxVolumeToDeliver.toJSON(),
			_administrationInstruction: this._administrationInstruction && this._administrationInstruction.toJSON(),
			administrationInstruction: this.administrationInstruction,
		};
	}
};
