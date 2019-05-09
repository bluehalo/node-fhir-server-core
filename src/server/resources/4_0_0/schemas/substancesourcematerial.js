/**
 * @name exports
 * @summary SubstanceSourceMaterial Class
 */
module.exports = class SubstanceSourceMaterial {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'sourceMaterialClass', {
			enumerable: true,
			get: () => this.__data.sourceMaterialClass,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.sourceMaterialClass = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'sourceMaterialType', {
			enumerable: true,
			get: () => this.__data.sourceMaterialType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.sourceMaterialType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'sourceMaterialState', {
			enumerable: true,
			get: () => this.__data.sourceMaterialState,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.sourceMaterialState = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'organismId', {
			enumerable: true,
			get: () => this.__data.organismId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.organismId = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_organismName', {
			enumerable: true,
			get: () => this.__data._organismName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._organismName = new Element(value);
			},
		});

		Object.defineProperty(this, 'organismName', {
			enumerable: true,
			get: () => this.__data.organismName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.organismName = value;
			},
		});

		Object.defineProperty(this, 'parentSubstanceId', {
			enumerable: true,
			get: () => this.__data.parentSubstanceId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.parentSubstanceId = Array.isArray(value)
					? value.map(v => new Identifier(v))
					: [new Identifier(value)];
			},
		});

		Object.defineProperty(this, '_parentSubstanceName', {
			enumerable: true,
			get: () => this.__data._parentSubstanceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._parentSubstanceName = new Element(value);
			},
		});

		Object.defineProperty(this, 'parentSubstanceName', {
			enumerable: true,
			get: () => this.__data.parentSubstanceName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.parentSubstanceName = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'countryOfOrigin', {
			enumerable: true,
			get: () => this.__data.countryOfOrigin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.countryOfOrigin = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_geographicalLocation', {
			enumerable: true,
			get: () => this.__data._geographicalLocation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._geographicalLocation = new Element(value);
			},
		});

		Object.defineProperty(this, 'geographicalLocation', {
			enumerable: true,
			get: () => this.__data.geographicalLocation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.geographicalLocation = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'developmentStage', {
			enumerable: true,
			get: () => this.__data.developmentStage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.developmentStage = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'fractionDescription', {
			enumerable: true,
			get: () => this.__data.fractionDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSourceMaterialFractionDescription = require('./substancesourcematerialfractiondescription.js');
				this.__data.fractionDescription = Array.isArray(value)
					? value.map(v => new SubstanceSourceMaterialFractionDescription(v))
					: [new SubstanceSourceMaterialFractionDescription(value)];
			},
		});

		Object.defineProperty(this, 'organism', {
			enumerable: true,
			get: () => this.__data.organism,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSourceMaterialOrganism = require('./substancesourcematerialorganism.js');
				this.__data.organism = new SubstanceSourceMaterialOrganism(value);
			},
		});

		Object.defineProperty(this, 'partDescription', {
			enumerable: true,
			get: () => this.__data.partDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSourceMaterialPartDescription = require('./substancesourcematerialpartdescription.js');
				this.__data.partDescription = Array.isArray(value)
					? value.map(v => new SubstanceSourceMaterialPartDescription(v))
					: [new SubstanceSourceMaterialPartDescription(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSourceMaterial',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSourceMaterial';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			sourceMaterialClass: this.sourceMaterialClass && this.sourceMaterialClass.toJSON(),
			sourceMaterialType: this.sourceMaterialType && this.sourceMaterialType.toJSON(),
			sourceMaterialState: this.sourceMaterialState && this.sourceMaterialState.toJSON(),
			organismId: this.organismId && this.organismId.toJSON(),
			_organismName: this._organismName && this._organismName.toJSON(),
			organismName: this.organismName,
			parentSubstanceId: this.parentSubstanceId && this.parentSubstanceId.map(v => v.toJSON()),
			_parentSubstanceName: this._parentSubstanceName && this._parentSubstanceName.toJSON(),
			parentSubstanceName: this.parentSubstanceName,
			countryOfOrigin: this.countryOfOrigin && this.countryOfOrigin.map(v => v.toJSON()),
			_geographicalLocation: this._geographicalLocation && this._geographicalLocation.toJSON(),
			geographicalLocation: this.geographicalLocation,
			developmentStage: this.developmentStage && this.developmentStage.toJSON(),
			fractionDescription: this.fractionDescription && this.fractionDescription.map(v => v.toJSON()),
			organism: this.organism && this.organism.toJSON(),
			partDescription: this.partDescription && this.partDescription.map(v => v.toJSON()),
		};
	}
};
