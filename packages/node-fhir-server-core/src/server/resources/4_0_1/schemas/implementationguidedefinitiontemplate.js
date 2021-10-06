/**
 * @name exports
 * @summary ImplementationGuideDefinitionTemplate Class
 */
module.exports = class ImplementationGuideDefinitionTemplate {
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

    Object.defineProperty(this, '_code', {
      enumerable: true,
      get: () => this.__data._code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._code = new Element(value);
      },
    });

    Object.defineProperty(this, 'code', {
      enumerable: true,
      get: () => this.__data.code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.code = value;
      },
    });

    Object.defineProperty(this, '_source', {
      enumerable: true,
      get: () => this.__data._source,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._source = new Element(value);
      },
    });

    Object.defineProperty(this, 'source', {
      enumerable: true,
      get: () => this.__data.source,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.source = value;
      },
    });

    Object.defineProperty(this, '_scope', {
      enumerable: true,
      get: () => this.__data._scope,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._scope = new Element(value);
      },
    });

    Object.defineProperty(this, 'scope', {
      enumerable: true,
      get: () => this.__data.scope,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.scope = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'ImplementationGuideDefinitionTemplate',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'ImplementationGuideDefinitionTemplate';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _code: this._code && this._code.toJSON(),
      code: this.code,
      _source: this._source && this._source.toJSON(),
      source: this.source,
      _scope: this._scope && this._scope.toJSON(),
      scope: this.scope,
    };
  }
};
