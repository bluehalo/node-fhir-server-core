/**
 * @name exports
 * @summary DetectedIssue Class
 */
module.exports = class DetectedIssue {
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

    Object.defineProperty(this, '_severity', {
      enumerable: true,
      get: () => this.__data._severity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._severity = new Element(value);
      },
    });

    Object.defineProperty(this, 'severity', {
      enumerable: true,
      get: () => this.__data.severity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.severity = value;
      },
    });

    Object.defineProperty(this, 'patient', {
      enumerable: true,
      get: () => this.__data.patient,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.patient = new Reference(value);
      },
    });

    Object.defineProperty(this, '_identifiedDateTime', {
      enumerable: true,
      get: () => this.__data._identifiedDateTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._identifiedDateTime = new Element(value);
      },
    });

    Object.defineProperty(this, 'identifiedDateTime', {
      enumerable: true,
      get: () => this.__data.identifiedDateTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.identifiedDateTime = value;
      },
    });

    Object.defineProperty(this, 'identifiedPeriod', {
      enumerable: true,
      get: () => this.__data.identifiedPeriod,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.identifiedPeriod = new Period(value);
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

    Object.defineProperty(this, 'implicated', {
      enumerable: true,
      get: () => this.__data.implicated,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.implicated = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'evidence', {
      enumerable: true,
      get: () => this.__data.evidence,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DetectedIssueEvidence = require('./detectedissueevidence.js');
        this.__data.evidence = Array.isArray(value)
          ? value.map((v) => new DetectedIssueEvidence(v))
          : [new DetectedIssueEvidence(value)];
      },
    });

    Object.defineProperty(this, '_detail', {
      enumerable: true,
      get: () => this.__data._detail,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._detail = new Element(value);
      },
    });

    Object.defineProperty(this, 'detail', {
      enumerable: true,
      get: () => this.__data.detail,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.detail = value;
      },
    });

    Object.defineProperty(this, '_reference', {
      enumerable: true,
      get: () => this.__data._reference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._reference = new Element(value);
      },
    });

    Object.defineProperty(this, 'reference', {
      enumerable: true,
      get: () => this.__data.reference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.reference = value;
      },
    });

    Object.defineProperty(this, 'mitigation', {
      enumerable: true,
      get: () => this.__data.mitigation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let DetectedIssueMitigation = require('./detectedissuemitigation.js');
        this.__data.mitigation = Array.isArray(value)
          ? value.map((v) => new DetectedIssueMitigation(v))
          : [new DetectedIssueMitigation(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'DetectedIssue',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'DetectedIssue';
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
      _status: this._status && this._status.toJSON(),
      status: this.status,
      code: this.code && this.code.toJSON(),
      _severity: this._severity && this._severity.toJSON(),
      severity: this.severity,
      patient: this.patient && this.patient.toJSON(),
      _identifiedDateTime: this._identifiedDateTime && this._identifiedDateTime.toJSON(),
      identifiedDateTime: this.identifiedDateTime,
      identifiedPeriod: this.identifiedPeriod && this.identifiedPeriod.toJSON(),
      author: this.author && this.author.toJSON(),
      implicated: this.implicated && this.implicated.map((v) => v.toJSON()),
      evidence: this.evidence && this.evidence.map((v) => v.toJSON()),
      _detail: this._detail && this._detail.toJSON(),
      detail: this.detail,
      _reference: this._reference && this._reference.toJSON(),
      reference: this.reference,
      mitigation: this.mitigation && this.mitigation.map((v) => v.toJSON()),
    };
  }
};
