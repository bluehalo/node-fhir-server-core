/**
 * @name exports
 * @summary SubstanceSpecificationStructure Class
 */
module.exports = class SubstanceSpecificationStructure {
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

		Object.defineProperty(this, '_molecularFormulaByMoiety', {
			enumerable: true,
			get: () => this.__data._molecularFormulaByMoiety,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._molecularFormulaByMoiety = new Element(value);
			},
		});

		Object.defineProperty(this, 'molecularFormulaByMoiety', {
			enumerable: true,
			get: () => this.__data.molecularFormulaByMoiety,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.molecularFormulaByMoiety = value;
			},
		});

		Object.defineProperty(this, 'isotope', {
			enumerable: true,
			get: () => this.__data.isotope,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationStructureIsotope = require('./substancespecificationstructureisotope.js');
				this.__data.isotope = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationStructureIsotope(v))
					: [new SubstanceSpecificationStructureIsotope(value)];
			},
		});

		Object.defineProperty(this, 'molecularWeight', {
			enumerable: true,
			get: () => this.__data.molecularWeight,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationStructureIsotopeMolecularWeight = require('./substancespecificationstructureisotopemolecularweight.js');
				this.__data.molecularWeight = new SubstanceSpecificationStructureIsotopeMolecularWeight(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.source = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'representation', {
			enumerable: true,
			get: () => this.__data.representation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationStructureRepresentation = require('./substancespecificationstructurerepresentation.js');
				this.__data.representation = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationStructureRepresentation(v))
					: [new SubstanceSpecificationStructureRepresentation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecificationStructure',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecificationStructure';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			stereochemistry: this.stereochemistry && this.stereochemistry.toJSON(),
			opticalActivity: this.opticalActivity && this.opticalActivity.toJSON(),
			_molecularFormula: this._molecularFormula && this._molecularFormula.toJSON(),
			molecularFormula: this.molecularFormula,
			_molecularFormulaByMoiety: this._molecularFormulaByMoiety && this._molecularFormulaByMoiety.toJSON(),
			molecularFormulaByMoiety: this.molecularFormulaByMoiety,
			isotope: this.isotope && this.isotope.map(v => v.toJSON()),
			molecularWeight: this.molecularWeight && this.molecularWeight.toJSON(),
			source: this.source && this.source.map(v => v.toJSON()),
			representation: this.representation && this.representation.map(v => v.toJSON()),
		};
	}
};
