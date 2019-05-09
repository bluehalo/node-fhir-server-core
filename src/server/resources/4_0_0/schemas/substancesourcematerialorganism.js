/**
 * @name exports
 * @summary SubstanceSourceMaterialOrganism Class
 */
module.exports = class SubstanceSourceMaterialOrganism {
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

		Object.defineProperty(this, 'family', {
			enumerable: true,
			get: () => this.__data.family,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.family = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'genus', {
			enumerable: true,
			get: () => this.__data.genus,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.genus = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'species', {
			enumerable: true,
			get: () => this.__data.species,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.species = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'intraspecificType', {
			enumerable: true,
			get: () => this.__data.intraspecificType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.intraspecificType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_intraspecificDescription', {
			enumerable: true,
			get: () => this.__data._intraspecificDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._intraspecificDescription = new Element(value);
			},
		});

		Object.defineProperty(this, 'intraspecificDescription', {
			enumerable: true,
			get: () => this.__data.intraspecificDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.intraspecificDescription = value;
			},
		});

		Object.defineProperty(this, 'author', {
			enumerable: true,
			get: () => this.__data.author,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSourceMaterialOrganismAuthor = require('./substancesourcematerialorganismauthor.js');
				this.__data.author = Array.isArray(value)
					? value.map(v => new SubstanceSourceMaterialOrganismAuthor(v))
					: [new SubstanceSourceMaterialOrganismAuthor(value)];
			},
		});

		Object.defineProperty(this, 'hybrid', {
			enumerable: true,
			get: () => this.__data.hybrid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSourceMaterialOrganismHybrid = require('./substancesourcematerialorganismhybrid.js');
				this.__data.hybrid = new SubstanceSourceMaterialOrganismHybrid(value);
			},
		});

		Object.defineProperty(this, 'organismGeneral', {
			enumerable: true,
			get: () => this.__data.organismGeneral,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSourceMaterialOrganismOrganismGeneral = require('./substancesourcematerialorganismorganismgeneral.js');
				this.__data.organismGeneral = new SubstanceSourceMaterialOrganismOrganismGeneral(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSourceMaterialOrganism',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSourceMaterialOrganism';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			family: this.family && this.family.toJSON(),
			genus: this.genus && this.genus.toJSON(),
			species: this.species && this.species.toJSON(),
			intraspecificType: this.intraspecificType && this.intraspecificType.toJSON(),
			_intraspecificDescription: this._intraspecificDescription && this._intraspecificDescription.toJSON(),
			intraspecificDescription: this.intraspecificDescription,
			author: this.author && this.author.map(v => v.toJSON()),
			hybrid: this.hybrid && this.hybrid.toJSON(),
			organismGeneral: this.organismGeneral && this.organismGeneral.toJSON(),
		};
	}
};
