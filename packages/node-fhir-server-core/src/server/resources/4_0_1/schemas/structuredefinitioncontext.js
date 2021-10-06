/**
 * @name exports
 * @summary StructureDefinitionContext Class
 */
module.exports = class StructureDefinitionContext {
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

    Object.defineProperty(this, '_expression', {
      enumerable: true,
      get: () => this.__data._expression,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._expression = new Element(value);
      },
    });

    Object.defineProperty(this, 'expression', {
      enumerable: true,
      get: () => this.__data.expression,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.expression = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'StructureDefinitionContext',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'StructureDefinitionContext';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _type: this._type && this._type.toJSON(),
      type: this.type,
      _expression: this._expression && this._expression.toJSON(),
      expression: this.expression,
    };
  }
};
