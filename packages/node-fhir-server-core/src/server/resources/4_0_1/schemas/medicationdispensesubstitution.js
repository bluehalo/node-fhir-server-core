/**
 * @name exports
 * @summary MedicationDispenseSubstitution Class
 */
module.exports = class MedicationDispenseSubstitution {
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

    Object.defineProperty(this, '_wasSubstituted', {
      enumerable: true,
      get: () => this.__data._wasSubstituted,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._wasSubstituted = new Element(value);
      },
    });

    Object.defineProperty(this, 'wasSubstituted', {
      enumerable: true,
      get: () => this.__data.wasSubstituted,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.wasSubstituted = value;
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

    Object.defineProperty(this, 'reason', {
      enumerable: true,
      get: () => this.__data.reason,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.reason = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'responsibleParty', {
      enumerable: true,
      get: () => this.__data.responsibleParty,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.responsibleParty = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'MedicationDispenseSubstitution',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'MedicationDispenseSubstitution';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _wasSubstituted: this._wasSubstituted && this._wasSubstituted.toJSON(),
      wasSubstituted: this.wasSubstituted,
      type: this.type && this.type.toJSON(),
      reason: this.reason && this.reason.map((v) => v.toJSON()),
      responsibleParty: this.responsibleParty && this.responsibleParty.map((v) => v.toJSON()),
    };
  }
};
