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
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
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
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, '_url', {
      enumerable: true,
      get: () => this.__data._url,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.url = value;
      },
    });

    Object.defineProperty(this, 'identifier', {
      enumerable: true,
      get: () => this.__data.identifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.identifier = Array.isArray(value)
          ? value.map((v) => new Identifier(v))
          : [new Identifier(value)];
      },
    });

    Object.defineProperty(this, '_version', {
      enumerable: true,
      get: () => this.__data._version,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.version = value;
      },
    });

    Object.defineProperty(this, '_name', {
      enumerable: true,
      get: () => this.__data._name,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.name = value;
      },
    });

    Object.defineProperty(this, '_title', {
      enumerable: true,
      get: () => this.__data._title,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._title = new Element(value);
      },
    });

    Object.defineProperty(this, 'title', {
      enumerable: true,
      get: () => this.__data.title,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.title = value;
      },
    });

    Object.defineProperty(this, '_status', {
      enumerable: true,
      get: () => this.__data._status,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._status = new Element(value);
      },
    });

    Object.defineProperty(this, 'status', {
      enumerable: true,
      get: () => this.__data.status,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.status = value;
      },
    });

    Object.defineProperty(this, '_experimental', {
      enumerable: true,
      get: () => this.__data._experimental,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.experimental = value;
      },
    });

    Object.defineProperty(this, '_date', {
      enumerable: true,
      get: () => this.__data._date,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.date = value;
      },
    });

    Object.defineProperty(this, '_publisher', {
      enumerable: true,
      get: () => this.__data._publisher,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.publisher = value;
      },
    });

    Object.defineProperty(this, 'contact', {
      enumerable: true,
      get: () => this.__data.contact,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.contact = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    Object.defineProperty(this, '_description', {
      enumerable: true,
      get: () => this.__data._description,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.description = value;
      },
    });

    Object.defineProperty(this, 'useContext', {
      enumerable: true,
      get: () => this.__data.useContext,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let UsageContext = require('./usagecontext.js');
        this.__data.useContext = Array.isArray(value)
          ? value.map((v) => new UsageContext(v))
          : [new UsageContext(value)];
      },
    });

    Object.defineProperty(this, 'jurisdiction', {
      enumerable: true,
      get: () => this.__data.jurisdiction,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.jurisdiction = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, '_purpose', {
      enumerable: true,
      get: () => this.__data._purpose,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._purpose = new Element(value);
      },
    });

    Object.defineProperty(this, 'purpose', {
      enumerable: true,
      get: () => this.__data.purpose,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.purpose = value;
      },
    });

    Object.defineProperty(this, '_copyright', {
      enumerable: true,
      get: () => this.__data._copyright,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.copyright = value;
      },
    });

    Object.defineProperty(this, 'keyword', {
      enumerable: true,
      get: () => this.__data.keyword,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Coding = require('./coding.js');
        this.__data.keyword = Array.isArray(value)
          ? value.map((v) => new Coding(v))
          : [new Coding(value)];
      },
    });

    Object.defineProperty(this, '_fhirVersion', {
      enumerable: true,
      get: () => this.__data._fhirVersion,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.fhirVersion = value;
      },
    });

    Object.defineProperty(this, 'mapping', {
      enumerable: true,
      get: () => this.__data.mapping,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let StructureDefinitionMapping = require('./structuredefinitionmapping.js');
        this.__data.mapping = Array.isArray(value)
          ? value.map((v) => new StructureDefinitionMapping(v))
          : [new StructureDefinitionMapping(value)];
      },
    });

    Object.defineProperty(this, '_kind', {
      enumerable: true,
      get: () => this.__data._kind,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._kind = new Element(value);
      },
    });

    Object.defineProperty(this, 'kind', {
      enumerable: true,
      get: () => this.__data.kind,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.kind = value;
      },
    });

    Object.defineProperty(this, '_abstract', {
      enumerable: true,
      get: () => this.__data._abstract,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.abstract = value;
      },
    });

    Object.defineProperty(this, 'context', {
      enumerable: true,
      get: () => this.__data.context,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let StructureDefinitionContext = require('./structuredefinitioncontext.js');
        this.__data.context = Array.isArray(value)
          ? value.map((v) => new StructureDefinitionContext(v))
          : [new StructureDefinitionContext(value)];
      },
    });

    Object.defineProperty(this, '_contextInvariant', {
      enumerable: true,
      get: () => this.__data._contextInvariant,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._contextInvariant = new Element(value);
      },
    });

    Object.defineProperty(this, 'contextInvariant', {
      enumerable: true,
      get: () => this.__data.contextInvariant,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contextInvariant = Array.isArray(value) ? value.map((v) => v) : [value];
      },
    });

    Object.defineProperty(this, '_type', {
      enumerable: true,
      get: () => this.__data._type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._type = new Element(value);
      },
    });

    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.type = value;
      },
    });

    Object.defineProperty(this, '_baseDefinition', {
      enumerable: true,
      get: () => this.__data._baseDefinition,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._baseDefinition = new Element(value);
      },
    });

    Object.defineProperty(this, 'baseDefinition', {
      enumerable: true,
      get: () => this.__data.baseDefinition,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.baseDefinition = value;
      },
    });

    Object.defineProperty(this, '_derivation', {
      enumerable: true,
      get: () => this.__data._derivation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._derivation = new Element(value);
      },
    });

    Object.defineProperty(this, 'derivation', {
      enumerable: true,
      get: () => this.__data.derivation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.derivation = value;
      },
    });

    Object.defineProperty(this, 'snapshot', {
      enumerable: true,
      get: () => this.__data.snapshot,
      set: (value) => {
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
      set: (value) => {
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
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _url: this._url && this._url.toJSON(),
      url: this.url,
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _version: this._version && this._version.toJSON(),
      version: this.version,
      _name: this._name && this._name.toJSON(),
      name: this.name,
      _title: this._title && this._title.toJSON(),
      title: this.title,
      _status: this._status && this._status.toJSON(),
      status: this.status,
      _experimental: this._experimental && this._experimental.toJSON(),
      experimental: this.experimental,
      _date: this._date && this._date.toJSON(),
      date: this.date,
      _publisher: this._publisher && this._publisher.toJSON(),
      publisher: this.publisher,
      contact: this.contact && this.contact.map((v) => v.toJSON()),
      _description: this._description && this._description.toJSON(),
      description: this.description,
      useContext: this.useContext && this.useContext.map((v) => v.toJSON()),
      jurisdiction: this.jurisdiction && this.jurisdiction.map((v) => v.toJSON()),
      _purpose: this._purpose && this._purpose.toJSON(),
      purpose: this.purpose,
      _copyright: this._copyright && this._copyright.toJSON(),
      copyright: this.copyright,
      keyword: this.keyword && this.keyword.map((v) => v.toJSON()),
      _fhirVersion: this._fhirVersion && this._fhirVersion.toJSON(),
      fhirVersion: this.fhirVersion,
      mapping: this.mapping && this.mapping.map((v) => v.toJSON()),
      _kind: this._kind && this._kind.toJSON(),
      kind: this.kind,
      _abstract: this._abstract && this._abstract.toJSON(),
      abstract: this.abstract,
      context: this.context && this.context.map((v) => v.toJSON()),
      _contextInvariant: this._contextInvariant && this._contextInvariant.toJSON(),
      contextInvariant: this.contextInvariant,
      _type: this._type && this._type.toJSON(),
      type: this.type,
      _baseDefinition: this._baseDefinition && this._baseDefinition.toJSON(),
      baseDefinition: this.baseDefinition,
      _derivation: this._derivation && this._derivation.toJSON(),
      derivation: this.derivation,
      snapshot: this.snapshot && this.snapshot.toJSON(),
      differential: this.differential && this.differential.toJSON(),
    };
  }
};
