/**
 * @name exports
 * @summary CoverageClass Class
 */
module.exports = class CoverageClass {
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

    Object.defineProperty(this, '_value', {
      enumerable: true,
      get: () => this.__data._value,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._value = new Element(value);
      },
    });

    Object.defineProperty(this, 'value', {
      enumerable: true,
      get: () => this.__data.value,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.value = value;
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

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CoverageClass',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CoverageClass';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      type: this.type && this.type.toJSON(),
      _value: this._value && this._value.toJSON(),
      value: this.value,
      _name: this._name && this._name.toJSON(),
      name: this.name,
    };
  }
};
