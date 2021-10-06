/**
 * @name exports
 * @summary AdverseEventSuspectEntityCausality Class
 */
module.exports = class AdverseEventSuspectEntityCausality {
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

    Object.defineProperty(this, 'assessment', {
      enumerable: true,
      get: () => this.__data.assessment,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.assessment = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, '_productRelatedness', {
      enumerable: true,
      get: () => this.__data._productRelatedness,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._productRelatedness = new Element(value);
      },
    });

    Object.defineProperty(this, 'productRelatedness', {
      enumerable: true,
      get: () => this.__data.productRelatedness,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.productRelatedness = value;
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

    Object.defineProperty(this, 'method', {
      enumerable: true,
      get: () => this.__data.method,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.method = new CodeableConcept(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'AdverseEventSuspectEntityCausality',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'AdverseEventSuspectEntityCausality';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      assessment: this.assessment && this.assessment.toJSON(),
      _productRelatedness: this._productRelatedness && this._productRelatedness.toJSON(),
      productRelatedness: this.productRelatedness,
      author: this.author && this.author.toJSON(),
      method: this.method && this.method.toJSON(),
    };
  }
};
