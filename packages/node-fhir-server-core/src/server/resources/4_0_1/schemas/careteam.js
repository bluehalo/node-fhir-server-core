/**
 * @name exports
 * @summary CareTeam Class
 */
module.exports = class CareTeam {
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

    Object.defineProperty(this, 'period', {
      enumerable: true,
      get: () => this.__data.period,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.period = new Period(value);
      },
    });

    Object.defineProperty(this, 'participant', {
      enumerable: true,
      get: () => this.__data.participant,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CareTeamParticipant = require('./careteamparticipant.js');
        this.__data.participant = Array.isArray(value)
          ? value.map((v) => new CareTeamParticipant(v))
          : [new CareTeamParticipant(value)];
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

    Object.defineProperty(this, 'managingOrganization', {
      enumerable: true,
      get: () => this.__data.managingOrganization,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.managingOrganization = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'telecom', {
      enumerable: true,
      get: () => this.__data.telecom,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactPoint = require('./contactpoint.js');
        this.__data.telecom = Array.isArray(value)
          ? value.map((v) => new ContactPoint(v))
          : [new ContactPoint(value)];
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

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CareTeam',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CareTeam';
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
      category: this.category && this.category.map((v) => v.toJSON()),
      _name: this._name && this._name.toJSON(),
      name: this.name,
      subject: this.subject && this.subject.toJSON(),
      encounter: this.encounter && this.encounter.toJSON(),
      period: this.period && this.period.toJSON(),
      participant: this.participant && this.participant.map((v) => v.toJSON()),
      reasonCode: this.reasonCode && this.reasonCode.map((v) => v.toJSON()),
      reasonReference: this.reasonReference && this.reasonReference.map((v) => v.toJSON()),
      managingOrganization:
        this.managingOrganization && this.managingOrganization.map((v) => v.toJSON()),
      telecom: this.telecom && this.telecom.map((v) => v.toJSON()),
      note: this.note && this.note.map((v) => v.toJSON()),
    };
  }
};
