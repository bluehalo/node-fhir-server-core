/**
 * @name exports
 * @summary SubstanceSpecificationStructureIsotope Class
 */
module.exports = class SubstanceSpecificationStructureIsotope {
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

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.name = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'substitution', {
			enumerable: true,
			get: () => this.__data.substitution,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.substitution = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'halfLife', {
			enumerable: true,
			get: () => this.__data.halfLife,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.halfLife = new Quantity(value);
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecificationStructureIsotope',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecificationStructureIsotope';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.toJSON(),
			name: this.name && this.name.toJSON(),
			substitution: this.substitution && this.substitution.toJSON(),
			halfLife: this.halfLife && this.halfLife.toJSON(),
			molecularWeight: this.molecularWeight && this.molecularWeight.toJSON(),
		};
	}
};
