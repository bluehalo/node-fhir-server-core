/**
 * @name exports
 * @summary RequestGroup Class
 */
module.exports = class RequestGroup {
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

    Object.defineProperty(this, '_instantiatesCanonical', {
      enumerable: true,
      get: () => this.__data._instantiatesCanonical,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._instantiatesCanonical = new Element(value);
      },
    });

    Object.defineProperty(this, 'instantiatesCanonical', {
      enumerable: true,
      get: () => this.__data.instantiatesCanonical,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.instantiatesCanonical = Array.isArray(value) ? value.map((v) => v) : [value];
      },
    });

    Object.defineProperty(this, '_instantiatesUri', {
      enumerable: true,
      get: () => this.__data._instantiatesUri,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._instantiatesUri = new Element(value);
      },
    });

    Object.defineProperty(this, 'instantiatesUri', {
      enumerable: true,
      get: () => this.__data.instantiatesUri,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.instantiatesUri = Array.isArray(value) ? value.map((v) => v) : [value];
      },
    });

    Object.defineProperty(this, 'basedOn', {
      enumerable: true,
      get: () => this.__data.basedOn,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.basedOn = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'replaces', {
      enumerable: true,
      get: () => this.__data.replaces,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.replaces = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'groupIdentifier', {
      enumerable: true,
      get: () => this.__data.groupIdentifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.groupIdentifier = new Identifier(value);
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

    Object.defineProperty(this, '_intent', {
      enumerable: true,
      get: () => this.__data._intent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._intent = new Element(value);
      },
    });

    Object.defineProperty(this, 'intent', {
      enumerable: true,
      get: () => this.__data.intent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.intent = value;
      },
    });

    Object.defineProperty(this, '_priority', {
      enumerable: true,
      get: () => this.__data._priority,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._priority = new Element(value);
      },
    });

    Object.defineProperty(this, 'priority', {
      enumerable: true,
      get: () => this.__data.priority,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.priority = value;
      },
    });

    Object.defineProperty(this, 'code', {
      enumerable: true,
      get: () => this.__data.code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.code = new CodeableConcept(value);
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

    Object.defineProperty(this, 'encounter', {
      enumerable: true,
      get: () => this.__data.encounter,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.encounter = new Reference(value);
      },
    });

    Object.defineProperty(this, '_authoredOn', {
      enumerable: true,
      get: () => this.__data._authoredOn,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._authoredOn = new Element(value);
      },
    });

    Object.defineProperty(this, 'authoredOn', {
      enumerable: true,
      get: () => this.__data.authoredOn,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.authoredOn = value;
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
        this.__data.author = new Reference(value);
      },
    });

    Object.defineProperty(this, 'reasonCode', {
      enumerable: true,
      get: () => this.__data.reasonCode,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.reasonCode = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'reasonReference', {
      enumerable: true,
      get: () => this.__data.reasonReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.reasonReference = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'note', {
      enumerable: true,
      get: () => this.__data.note,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Annotation = require('./annotation.js');
        this.__data.note = Array.isArray(value)
          ? value.map((v) => new Annotation(v))
          : [new Annotation(value)];
      },
    });

    Object.defineProperty(this, 'action', {
      enumerable: true,
      get: () => this.__data.action,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let RequestGroupAction = require('./requestgroupaction.js');
        this.__data.action = Array.isArray(value)
          ? value.map((v) => new RequestGroupAction(v))
          : [new RequestGroupAction(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'RequestGroup',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'RequestGroup';
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
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _instantiatesCanonical: this._instantiatesCanonical && this._instantiatesCanonical.toJSON(),
      instantiatesCanonical: this.instantiatesCanonical,
      _instantiatesUri: this._instantiatesUri && this._instantiatesUri.toJSON(),
      instantiatesUri: this.instantiatesUri,
      basedOn: this.basedOn && this.basedOn.map((v) => v.toJSON()),
      replaces: this.replaces && this.replaces.map((v) => v.toJSON()),
      groupIdentifier: this.groupIdentifier && this.groupIdentifier.toJSON(),
      _status: this._status && this._status.toJSON(),
      status: this.status,
      _intent: this._intent && this._intent.toJSON(),
      intent: this.intent,
      _priority: this._priority && this._priority.toJSON(),
      priority: this.priority,
      code: this.code && this.code.toJSON(),
      subject: this.subject && this.subject.toJSON(),
      encounter: this.encounter && this.encounter.toJSON(),
      _authoredOn: this._authoredOn && this._authoredOn.toJSON(),
      authoredOn: this.authoredOn,
      author: this.author && this.author.toJSON(),
      reasonCode: this.reasonCode && this.reasonCode.map((v) => v.toJSON()),
      reasonReference: this.reasonReference && this.reasonReference.map((v) => v.toJSON()),
      note: this.note && this.note.map((v) => v.toJSON()),
      action: this.action && this.action.map((v) => v.toJSON()),
    };
  }
};
