/**
 * @name exports
 * @summary SubstanceSpecificationName Class
 */
module.exports = class SubstanceSpecificationName {
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

		Object.defineProperty(this, '_preferred', {
			enumerable: true,
			get: () => this.__data._preferred,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._preferred = new Element(value);
			},
		});

		Object.defineProperty(this, 'preferred', {
			enumerable: true,
			get: () => this.__data.preferred,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.preferred = value;
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.language = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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
				this.__data.domain = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.jurisdiction = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'synonym', {
			enumerable: true,
			get: () => this.__data.synonym,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationName = require('./substancespecificationname.js');
				this.__data.synonym = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationName(v))
					: [new SubstanceSpecificationName(value)];
			},
		});

		Object.defineProperty(this, 'official', {
			enumerable: true,
			get: () => this.__data.official,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceSpecificationNameOfficial = require('./substancespecificationnameofficial.js');
				this.__data.official = Array.isArray(value)
					? value.map(v => new SubstanceSpecificationNameOfficial(v))
					: [new SubstanceSpecificationNameOfficial(value)];
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecificationName',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecificationName';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			type: this.type && this.type.toJSON(),
			status: this.status && this.status.toJSON(),
			_preferred: this._preferred && this._preferred.toJSON(),
			preferred: this.preferred,
			language: this.language && this.language.map(v => v.toJSON()),
			domain: this.domain && this.domain.map(v => v.toJSON()),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			synonym: this.synonym && this.synonym.map(v => v.toJSON()),
			official: this.official && this.official.map(v => v.toJSON()),
			source: this.source && this.source.map(v => v.toJSON()),
		};
	}
};
