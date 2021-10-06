/**
 * @name exports
 * @summary GroupCharacteristic Class
 */
module.exports = class GroupCharacteristic {
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
        this.__data.code = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'valueCodeableConcept', {
      enumerable: true,
      get: () => this.__data.valueCodeableConcept,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.valueCodeableConcept = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, '_valueBoolean', {
      enumerable: true,
      get: () => this.__data._valueBoolean,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._valueBoolean = new Element(value);
      },
    });

    Object.defineProperty(this, 'valueBoolean', {
      enumerable: true,
      get: () => this.__data.valueBoolean,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.valueBoolean = value;
      },
    });

    Object.defineProperty(this, 'valueQuantity', {
      enumerable: true,
      get: () => this.__data.valueQuantity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Quantity = require('./quantity.js');
        this.__data.valueQuantity = new Quantity(value);
      },
    });

    Object.defineProperty(this, 'valueRange', {
      enumerable: true,
      get: () => this.__data.valueRange,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Range = require('./range.js');
        this.__data.valueRange = new Range(value);
      },
    });

    Object.defineProperty(this, 'valueReference', {
      enumerable: true,
      get: () => this.__data.valueReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.valueReference = new Reference(value);
      },
    });

    Object.defineProperty(this, '_exclude', {
      enumerable: true,
      get: () => this.__data._exclude,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._exclude = new Element(value);
      },
    });

    Object.defineProperty(this, 'exclude', {
      enumerable: true,
      get: () => this.__data.exclude,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.exclude = value;
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

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'GroupCharacteristic',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'GroupCharacteristic';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      code: this.code && this.code.toJSON(),
      valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
      _valueBoolean: this._valueBoolean && this._valueBoolean.toJSON(),
      valueBoolean: this.valueBoolean,
      valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
      valueRange: this.valueRange && this.valueRange.toJSON(),
      valueReference: this.valueReference && this.valueReference.toJSON(),
      _exclude: this._exclude && this._exclude.toJSON(),
      exclude: this.exclude,
      period: this.period && this.period.toJSON(),
    };
  }
};
