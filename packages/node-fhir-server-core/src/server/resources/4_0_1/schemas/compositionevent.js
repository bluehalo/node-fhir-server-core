/**
 * @name exports
 * @summary CompositionEvent Class
 */
module.exports = class CompositionEvent {
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

    Object.defineProperty(this, 'code', {
      enumerable: true,
      get: () => this.__data.code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.code = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
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

    Object.defineProperty(this, 'detail', {
      enumerable: true,
      get: () => this.__data.detail,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.detail = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CompositionEvent',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CompositionEvent';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      code: this.code && this.code.map((v) => v.toJSON()),
      period: this.period && this.period.toJSON(),
      detail: this.detail && this.detail.map((v) => v.toJSON()),
    };
  }
};
