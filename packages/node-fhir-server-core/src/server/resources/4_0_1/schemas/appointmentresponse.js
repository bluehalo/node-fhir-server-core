/**
 * @name exports
 * @summary AppointmentResponse Class
 */
module.exports = class AppointmentResponse {
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

    Object.defineProperty(this, 'appointment', {
      enumerable: true,
      get: () => this.__data.appointment,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.appointment = new Reference(value);
      },
    });

    Object.defineProperty(this, '_start', {
      enumerable: true,
      get: () => this.__data._start,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._start = new Element(value);
      },
    });

    Object.defineProperty(this, 'start', {
      enumerable: true,
      get: () => this.__data.start,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.start = value;
      },
    });

    Object.defineProperty(this, '_end', {
      enumerable: true,
      get: () => this.__data._end,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._end = new Element(value);
      },
    });

    Object.defineProperty(this, 'end', {
      enumerable: true,
      get: () => this.__data.end,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.end = value;
      },
    });

    Object.defineProperty(this, 'participantType', {
      enumerable: true,
      get: () => this.__data.participantType,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.participantType = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'actor', {
      enumerable: true,
      get: () => this.__data.actor,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.actor = new Reference(value);
      },
    });

    Object.defineProperty(this, '_participantStatus', {
      enumerable: true,
      get: () => this.__data._participantStatus,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._participantStatus = new Element(value);
      },
    });

    Object.defineProperty(this, 'participantStatus', {
      enumerable: true,
      get: () => this.__data.participantStatus,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.participantStatus = value;
      },
    });

    Object.defineProperty(this, '_comment', {
      enumerable: true,
      get: () => this.__data._comment,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.comment = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'AppointmentResponse',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'AppointmentResponse';
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
      appointment: this.appointment && this.appointment.toJSON(),
      _start: this._start && this._start.toJSON(),
      start: this.start,
      _end: this._end && this._end.toJSON(),
      end: this.end,
      participantType: this.participantType && this.participantType.map((v) => v.toJSON()),
      actor: this.actor && this.actor.toJSON(),
      _participantStatus: this._participantStatus && this._participantStatus.toJSON(),
      participantStatus: this.participantStatus,
      _comment: this._comment && this._comment.toJSON(),
      comment: this.comment,
    };
  }
};
