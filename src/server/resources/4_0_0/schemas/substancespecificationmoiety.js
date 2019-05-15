/**
 * @name exports
 * @summary SubstanceSpecificationMoiety Class
 */
module.exports = class SubstanceSpecificationMoiety {
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

		Object.defineProperty(this, 'role', {
			enumerable: true,
			get: () => this.__data.role,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.role = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
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

		Object.defineProperty(this, 'stereochemistry', {
			enumerable: true,
			get: () => this.__data.stereochemistry,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.stereochemistry = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'opticalActivity', {
			enumerable: true,
			get: () => this.__data.opticalActivity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.opticalActivity = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_molecularFormula', {
			enumerable: true,
			get: () => this.__data._molecularFormula,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._molecularFormula = new Element(value);
			},
		});

		Object.defineProperty(this, 'molecularFormula', {
			enumerable: true,
			get: () => this.__data.molecularFormula,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.molecularFormula = value;
			},
		});

		Object.defineProperty(this, 'amountQuantity', {
			enumerable: true,
			get: () => this.__data.amountQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.amountQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_amountString', {
			enumerable: true,
			get: () => this.__data._amountString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._amountString = new Element(value);
			},
		});

		Object.defineProperty(this, 'amountString', {
			enumerable: true,
			get: () => this.__data.amountString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.amountString = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecificationMoiety',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecificationMoiety';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			role: this.role && this.role.toJSON(),
			identifier: this.identifier && this.identifier.toJSON(),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			stereochemistry: this.stereochemistry && this.stereochemistry.toJSON(),
			opticalActivity: this.opticalActivity && this.opticalActivity.toJSON(),
			_molecularFormula: this._molecularFormula && this._molecularFormula.toJSON(),
			molecularFormula: this.molecularFormula,
			amountQuantity: this.amountQuantity && this.amountQuantity.toJSON(),
			_amountString: this._amountString && this._amountString.toJSON(),
			amountString: this.amountString,
		};
	}
};
