/**
 * @name exports
 * @summary AdverseEventSuspectEntity Class
 */
module.exports = class AdverseEventSuspectEntity {
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

    Object.defineProperty(this, 'instance', {
      enumerable: true,
      get: () => this.__data.instance,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.instance = new Reference(value);
      },
    });

    Object.defineProperty(this, 'causality', {
      enumerable: true,
      get: () => this.__data.causality,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let AdverseEventSuspectEntityCausality = require('./adverseeventsuspectentitycausality.js');
        this.__data.causality = Array.isArray(value)
          ? value.map((v) => new AdverseEventSuspectEntityCausality(v))
          : [new AdverseEventSuspectEntityCausality(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'AdverseEventSuspectEntity',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'AdverseEventSuspectEntity';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      instance: this.instance && this.instance.toJSON(),
      causality: this.causality && this.causality.map((v) => v.toJSON()),
    };
  }
};
