/**
 * @name exports
 * @summary AuditEventEntityDetail Class
 */
module.exports = class AuditEventEntityDetail {
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

    Object.defineProperty(this, '_type', {
      enumerable: true,
      get: () => this.__data._type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._type = new Element(value);
      },
    });

    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.type = value;
      },
    });

    Object.defineProperty(this, '_valueString', {
      enumerable: true,
      get: () => this.__data._valueString,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._valueString = new Element(value);
      },
    });

    Object.defineProperty(this, 'valueString', {
      enumerable: true,
      get: () => this.__data.valueString,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.valueString = value;
      },
    });

    Object.defineProperty(this, '_valueBase64Binary', {
      enumerable: true,
      get: () => this.__data._valueBase64Binary,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._valueBase64Binary = new Element(value);
      },
    });

    Object.defineProperty(this, 'valueBase64Binary', {
      enumerable: true,
      get: () => this.__data.valueBase64Binary,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.valueBase64Binary = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'AuditEventEntityDetail',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'AuditEventEntityDetail';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _type: this._type && this._type.toJSON(),
      type: this.type,
      _valueString: this._valueString && this._valueString.toJSON(),
      valueString: this.valueString,
      _valueBase64Binary: this._valueBase64Binary && this._valueBase64Binary.toJSON(),
      valueBase64Binary: this.valueBase64Binary,
    };
  }
};
