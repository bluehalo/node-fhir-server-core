/**
 * @name exports
 * @summary DocumentReference Class
 */
module.exports = class DocumentReference {
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

    Object.defineProperty(this, 'masterIdentifier', {
      enumerable: true,
      get: () => this.__data.masterIdentifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.masterIdentifier = new Identifier(value);
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

    Object.defineProperty(this, '_docStatus', {
      enumerable: true,
      get: () => this.__data._docStatus,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._docStatus = new Element(value);
      },
    });

    Object.defineProperty(this, 'docStatus', {
      enumerable: true,
      get: () => this.__data.docStatus,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.docStatus = value;
      },
    });

    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.type = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'category', {
      enumerable: true,
      get: () => this.__data.category,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.category = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'subject', {
      enumerable: true,
      get: () => this.__data.subject,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.subject = new Reference(value);
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

    Object.defineProperty(this, 'author', {
      enumerable: true,
      get: () => this.__data.author,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.author = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'authenticator', {
      enumerable: true,
      get: () => this.__data.authenticator,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.authenticator = new Reference(value);
      },
    });

    Object.defineProperty(this, 'custodian', {
      enumerable: true,
      get: () => this.__data.custodian,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.custodian = new Reference(value);
      },
    });

    Object.defineProperty(this, 'relatesTo', {
      enumerable: true,
      get: () => this.__data.relatesTo,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DocumentReferenceRelatesTo = require('./documentreferencerelatesto.js');
        this.__data.relatesTo = Array.isArray(value)
          ? value.map((v) => new DocumentReferenceRelatesTo(v))
          : [new DocumentReferenceRelatesTo(value)];
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

    Object.defineProperty(this, 'securityLabel', {
      enumerable: true,
      get: () => this.__data.securityLabel,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.securityLabel = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'content', {
      enumerable: true,
      get: () => this.__data.content,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DocumentReferenceContent = require('./documentreferencecontent.js');
        this.__data.content = Array.isArray(value)
          ? value.map((v) => new DocumentReferenceContent(v))
          : [new DocumentReferenceContent(value)];
      },
    });

    Object.defineProperty(this, 'context', {
      enumerable: true,
      get: () => this.__data.context,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DocumentReferenceContext = require('./documentreferencecontext.js');
        this.__data.context = new DocumentReferenceContext(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'DocumentReference',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'DocumentReference';
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
      masterIdentifier: this.masterIdentifier && this.masterIdentifier.toJSON(),
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _status: this._status && this._status.toJSON(),
      status: this.status,
      _docStatus: this._docStatus && this._docStatus.toJSON(),
      docStatus: this.docStatus,
      type: this.type && this.type.toJSON(),
      category: this.category && this.category.map((v) => v.toJSON()),
      subject: this.subject && this.subject.toJSON(),
      _date: this._date && this._date.toJSON(),
      date: this.date,
      author: this.author && this.author.map((v) => v.toJSON()),
      authenticator: this.authenticator && this.authenticator.toJSON(),
      custodian: this.custodian && this.custodian.toJSON(),
      relatesTo: this.relatesTo && this.relatesTo.map((v) => v.toJSON()),
      _description: this._description && this._description.toJSON(),
      description: this.description,
      securityLabel: this.securityLabel && this.securityLabel.map((v) => v.toJSON()),
      content: this.content && this.content.map((v) => v.toJSON()),
      context: this.context && this.context.toJSON(),
    };
  }
};
