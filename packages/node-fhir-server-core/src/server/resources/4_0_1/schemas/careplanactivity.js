/**
 * @name exports
 * @summary CarePlanActivity Class
 */
module.exports = class CarePlanActivity {
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

    Object.defineProperty(this, 'outcomeCodeableConcept', {
      enumerable: true,
      get: () => this.__data.outcomeCodeableConcept,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.outcomeCodeableConcept = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'outcomeReference', {
      enumerable: true,
      get: () => this.__data.outcomeReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.outcomeReference = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'progress', {
      enumerable: true,
      get: () => this.__data.progress,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Annotation = require('./annotation.js');
        this.__data.progress = Array.isArray(value)
          ? value.map((v) => new Annotation(v))
          : [new Annotation(value)];
      },
    });

    Object.defineProperty(this, 'reference', {
      enumerable: true,
      get: () => this.__data.reference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.reference = new Reference(value);
      },
    });

    Object.defineProperty(this, 'detail', {
      enumerable: true,
      get: () => this.__data.detail,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CarePlanActivityDetail = require('./careplanactivitydetail.js');
        this.__data.detail = new CarePlanActivityDetail(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CarePlanActivity',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CarePlanActivity';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      outcomeCodeableConcept:
        this.outcomeCodeableConcept && this.outcomeCodeableConcept.map((v) => v.toJSON()),
      outcomeReference: this.outcomeReference && this.outcomeReference.map((v) => v.toJSON()),
      progress: this.progress && this.progress.map((v) => v.toJSON()),
      reference: this.reference && this.reference.toJSON(),
      detail: this.detail && this.detail.toJSON(),
    };
  }
};
