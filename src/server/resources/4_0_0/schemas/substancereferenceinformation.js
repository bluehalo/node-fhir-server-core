/**
 * @name exports
 * @summary SubstanceReferenceInformation Class
 */
module.exports = class SubstanceReferenceInformation {
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

		Object.defineProperty(this, 'gene', {
			enumerable: true,
			get: () => this.__data.gene,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceReferenceInformationGene = require('./substancereferenceinformationgene.js');
				this.__data.gene = Array.isArray(value)
					? value.map(v => new SubstanceReferenceInformationGene(v))
					: [new SubstanceReferenceInformationGene(value)];
			},
		});

		Object.defineProperty(this, 'geneElement', {
			enumerable: true,
			get: () => this.__data.geneElement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceReferenceInformationGeneElement = require('./substancereferenceinformationgeneelement.js');
				this.__data.geneElement = Array.isArray(value)
					? value.map(v => new SubstanceReferenceInformationGeneElement(v))
					: [new SubstanceReferenceInformationGeneElement(value)];
			},
		});

		Object.defineProperty(this, 'classification', {
			enumerable: true,
			get: () => this.__data.classification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceReferenceInformationClassification = require('./substancereferenceinformationclassification.js');
				this.__data.classification = Array.isArray(value)
					? value.map(v => new SubstanceReferenceInformationClassification(v))
					: [new SubstanceReferenceInformationClassification(value)];
			},
		});

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceReferenceInformationTarget = require('./substancereferenceinformationtarget.js');
				this.__data.target = Array.isArray(value)
					? value.map(v => new SubstanceReferenceInformationTarget(v))
					: [new SubstanceReferenceInformationTarget(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceReferenceInformation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceReferenceInformation';
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
			_comment: this._comment && this._comment.toJSON(),
			comment: this.comment,
			gene: this.gene && this.gene.map(v => v.toJSON()),
			geneElement: this.geneElement && this.geneElement.map(v => v.toJSON()),
			classification: this.classification && this.classification.map(v => v.toJSON()),
			target: this.target && this.target.map(v => v.toJSON()),
		};
	}
};
