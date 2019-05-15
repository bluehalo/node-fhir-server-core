/**
 * @name exports
 * @summary StructureDefinition Class
 */
module.exports = class StructureDefinition {
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

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
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
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
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

		Object.defineProperty(this, '_display', {
			enumerable: true,
			get: () => this.__data._display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._display = new Element(value);
			},
		});

		Object.defineProperty(this, 'display', {
			enumerable: true,
			get: () => this.__data.display,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.display = value;
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, '_experimental', {
			enumerable: true,
			get: () => this.__data._experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._experimental = new Element(value);
			},
		});

		Object.defineProperty(this, 'experimental', {
			enumerable: true,
			get: () => this.__data.experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.experimental = value;
			},
		});

		Object.defineProperty(this, '_publisher', {
			enumerable: true,
			get: () => this.__data._publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publisher = new Element(value);
			},
		});

		Object.defineProperty(this, 'publisher', {
			enumerable: true,
			get: () => this.__data.publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publisher = value;
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureDefinitionContact = require('./structuredefinitioncontact.js');
				this.__data.contact = Array.isArray(value)
					? value.map(v => new StructureDefinitionContact(v))
					: [new StructureDefinitionContact(value)];
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		Object.defineProperty(this, 'useContext', {
			enumerable: true,
			get: () => this.__data.useContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.useContext = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_requirements', {
			enumerable: true,
			get: () => this.__data._requirements,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requirements = new Element(value);
			},
		});

		Object.defineProperty(this, 'requirements', {
			enumerable: true,
			get: () => this.__data.requirements,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requirements = value;
			},
		});

		Object.defineProperty(this, '_copyright', {
			enumerable: true,
			get: () => this.__data._copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._copyright = new Element(value);
			},
		});

		Object.defineProperty(this, 'copyright', {
			enumerable: true,
			get: () => this.__data.copyright,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.copyright = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/profile-code
		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.code = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_fhirVersion', {
			enumerable: true,
			get: () => this.__data._fhirVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._fhirVersion = new Element(value);
			},
		});

		Object.defineProperty(this, 'fhirVersion', {
			enumerable: true,
			get: () => this.__data.fhirVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.fhirVersion = value;
			},
		});

		Object.defineProperty(this, 'mapping', {
			enumerable: true,
			get: () => this.__data.mapping,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureDefinitionMapping = require('./structuredefinitionmapping.js');
				this.__data.mapping = Array.isArray(value)
					? value.map(v => new StructureDefinitionMapping(v))
					: [new StructureDefinitionMapping(value)];
			},
		});

		Object.defineProperty(this, '_kind', {
			enumerable: true,
			get: () => this.__data._kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._kind = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/structure-definition-kind
		Object.defineProperty(this, 'kind', {
			enumerable: true,
			get: () => this.__data.kind,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.kind = value;
			},
		});

		Object.defineProperty(this, '_constrainedType', {
			enumerable: true,
			get: () => this.__data._constrainedType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._constrainedType = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		Object.defineProperty(this, 'constrainedType', {
			enumerable: true,
			get: () => this.__data.constrainedType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.constrainedType = value;
			},
		});

		Object.defineProperty(this, '_abstract', {
			enumerable: true,
			get: () => this.__data._abstract,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._abstract = new Element(value);
			},
		});

		Object.defineProperty(this, 'abstract', {
			enumerable: true,
			get: () => this.__data.abstract,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.abstract = value;
			},
		});

		Object.defineProperty(this, '_contextType', {
			enumerable: true,
			get: () => this.__data._contextType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._contextType = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/extension-context
		Object.defineProperty(this, 'contextType', {
			enumerable: true,
			get: () => this.__data.contextType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contextType = value;
			},
		});

		Object.defineProperty(this, '_context', {
			enumerable: true,
			get: () => this.__data._context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._context = new Element(value);
			},
		});

		Object.defineProperty(this, 'context', {
			enumerable: true,
			get: () => this.__data.context,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.context = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_base', {
			enumerable: true,
			get: () => this.__data._base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._base = new Element(value);
			},
		});

		Object.defineProperty(this, 'base', {
			enumerable: true,
			get: () => this.__data.base,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.base = value;
			},
		});

		Object.defineProperty(this, 'snapshot', {
			enumerable: true,
			get: () => this.__data.snapshot,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureDefinitionSnapshot = require('./structuredefinitionsnapshot.js');
				this.__data.snapshot = new StructureDefinitionSnapshot(value);
			},
		});

		Object.defineProperty(this, 'differential', {
			enumerable: true,
			get: () => this.__data.differential,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let StructureDefinitionDifferential = require('./structuredefinitiondifferential.js');
				this.__data.differential = new StructureDefinitionDifferential(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'StructureDefinition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'StructureDefinition';
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
			_url: this._url && this._url.toJSON(),
			url: this.url,
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_display: this._display && this._display.toJSON(),
			display: this.display,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_experimental: this._experimental && this._experimental.toJSON(),
			experimental: this.experimental,
			_publisher: this._publisher && this._publisher.toJSON(),
			publisher: this.publisher,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			useContext: this.useContext && this.useContext.map(v => v.toJSON()),
			_requirements: this._requirements && this._requirements.toJSON(),
			requirements: this.requirements,
			_copyright: this._copyright && this._copyright.toJSON(),
			copyright: this.copyright,
			code: this.code && this.code.map(v => v.toJSON()),
			_fhirVersion: this._fhirVersion && this._fhirVersion.toJSON(),
			fhirVersion: this.fhirVersion,
			mapping: this.mapping && this.mapping.map(v => v.toJSON()),
			_kind: this._kind && this._kind.toJSON(),
			kind: this.kind,
			_constrainedType: this._constrainedType && this._constrainedType.toJSON(),
			constrainedType: this.constrainedType,
			_abstract: this._abstract && this._abstract.toJSON(),
			abstract: this.abstract,
			_contextType: this._contextType && this._contextType.toJSON(),
			contextType: this.contextType,
			_context: this._context && this._context.toJSON(),
			context: this.context,
			_base: this._base && this._base.toJSON(),
			base: this.base,
			snapshot: this.snapshot && this.snapshot.toJSON(),
			differential: this.differential && this.differential.toJSON(),
		};
	}
};
