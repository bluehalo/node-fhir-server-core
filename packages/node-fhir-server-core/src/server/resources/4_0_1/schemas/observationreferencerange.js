/**
 * @name exports
 * @summary ObservationReferenceRange Class
 */
module.exports = class ObservationReferenceRange {
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

    Object.defineProperty(this, 'low', {
      enumerable: true,
      get: () => this.__data.low,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Quantity = require('./quantity.js');
        this.__data.low = new Quantity(value);
      },
    });

    Object.defineProperty(this, 'high', {
      enumerable: true,
      get: () => this.__data.high,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Quantity = require('./quantity.js');
        this.__data.high = new Quantity(value);
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

    Object.defineProperty(this, 'appliesTo', {
      enumerable: true,
      get: () => this.__data.appliesTo,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.appliesTo = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'age', {
      enumerable: true,
      get: () => this.__data.age,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Range = require('./range.js');
        this.__data.age = new Range(value);
      },
    });

    Object.defineProperty(this, '_text', {
      enumerable: true,
      get: () => this.__data._text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._text = new Element(value);
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.text = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'ObservationReferenceRange',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'ObservationReferenceRange';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      low: this.low && this.low.toJSON(),
      high: this.high && this.high.toJSON(),
      type: this.type && this.type.toJSON(),
      appliesTo: this.appliesTo && this.appliesTo.map((v) => v.toJSON()),
      age: this.age && this.age.toJSON(),
      _text: this._text && this._text.toJSON(),
      text: this.text,
    };
  }
};
