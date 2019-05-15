/**
 * @name exports
 * @summary SubstanceSpecification Class
 */
module.exports = class SubstanceSpecification {
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

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.status = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'domain', {
			enumerable: true,
			get: () => this.__data.domain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.domain = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
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

		Object.defineProperty(this, '_comment', {
			enumerable: true,
			get: () => this.__data._comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._comment = new Element(value);
			},
		});

		Object.defineProperty(this, 'comment', {
			enumerable: true,
			get: () => this.__data.comment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.comment = value;
			},
		});

		Object.defineProperty(this, 'moiety', {
			enumerable: true,
			get: () => this.__data.moiety,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationMoiety = require('./substancespecificationmoiety.js');
				this.__data.moiety = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationMoiety(v))
					: [new SubstanceSpecificationMoiety(value)];
			},
		});

		Object.defineProperty(this, 'property', {
			enumerable: true,
			get: () => this.__data.property,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationProperty = require('./substancespecificationproperty.js');
				this.__data.property = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationProperty(v))
					: [new SubstanceSpecificationProperty(value)];
			},
		});

		Object.defineProperty(this, 'referenceInformation', {
			enumerable: true,
			get: () => this.__data.referenceInformation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.referenceInformation = new Reference(value);
			},
		});

		Object.defineProperty(this, 'structure', {
			enumerable: true,
			get: () => this.__data.structure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationStructure = require('./substancespecificationstructure.js');
				this.__data.structure = new SubstanceSpecificationStructure(value);
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationCode = require('./substancespecificationcode.js');
				this.__data.code = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationCode(v))
					: [new SubstanceSpecificationCode(value)];
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationName = require('./substancespecificationname.js');
				this.__data.name = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationName(v))
					: [new SubstanceSpecificationName(value)];
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
				this.__data.molecularWeight = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationStructureIsotopeMolecularWeight(v))
					: [new SubstanceSpecificationStructureIsotopeMolecularWeight(value)];
			},
		});

		Object.defineProperty(this, 'relationship', {
			enumerable: true,
			get: () => this.__data.relationship,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationRelationship = require('./substancespecificationrelationship.js');
				this.__data.relationship = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationRelationship(v))
					: [new SubstanceSpecificationRelationship(value)];
			},
		});

		Object.defineProperty(this, 'nucleicAcid', {
			enumerable: true,
			get: () => this.__data.nucleicAcid,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.nucleicAcid = new Reference(value);
			},
		});

		Object.defineProperty(this, 'polymer', {
			enumerable: true,
			get: () => this.__data.polymer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.polymer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'protein', {
			enumerable: true,
			get: () => this.__data.protein,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.protein = new Reference(value);
			},
		});

		Object.defineProperty(this, 'sourceMaterial', {
			enumerable: true,
			get: () => this.__data.sourceMaterial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.sourceMaterial = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecification',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecification';
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
			identifier: this.identifier && this.identifier.toJSON(),
			type: this.type && this.type.toJSON(),
			status: this.status && this.status.toJSON(),
			domain: this.domain && this.domain.toJSON(),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			source: this.source && this.source.map(v => v.toJSON()),
			_comment: this._comment && this._comment.toJSON(),
			comment: this.comment,
			moiety: this.moiety && this.moiety.map(v => v.toJSON()),
			property: this.property && this.property.map(v => v.toJSON()),
			referenceInformation: this.referenceInformation && this.referenceInformation.toJSON(),
			structure: this.structure && this.structure.toJSON(),
			code: this.code && this.code.map(v => v.toJSON()),
			name: this.name && this.name.map(v => v.toJSON()),
			molecularWeight: this.molecularWeight && this.molecularWeight.map(v => v.toJSON()),
			relationship: this.relationship && this.relationship.map(v => v.toJSON()),
			nucleicAcid: this.nucleicAcid && this.nucleicAcid.toJSON(),
			polymer: this.polymer && this.polymer.toJSON(),
			protein: this.protein && this.protein.toJSON(),
			sourceMaterial: this.sourceMaterial && this.sourceMaterial.toJSON(),
		};
	}
};
