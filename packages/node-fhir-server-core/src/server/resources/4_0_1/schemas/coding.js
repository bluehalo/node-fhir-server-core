/**
 * @name exports
 * @summary Coding Class
 */
module.exports = class Coding {
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

    Object.defineProperty(this, '_system', {
      enumerable: true,
      get: () => this.__data._system,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._system = new Element(value);
      },
    });

    Object.defineProperty(this, 'system', {
      enumerable: true,
      get: () => this.__data.system,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.system = value;
      },
    });

    Object.defineProperty(this, '_version', {
      enumerable: true,
      get: () => this.__data._version,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._version = new Element(value);
      },
    });

    Object.defineProperty(this, 'version', {
      enumerable: true,
      get: () => this.__data.version,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.version = value;
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

    Object.defineProperty(this, '_display', {
      enumerable: true,
      get: () => this.__data._display,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._display = new Element(value);
      },
    });

    Object.defineProperty(this, 'display', {
      enumerable: true,
      get: () => this.__data.display,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.display = value;
      },
    });

    Object.defineProperty(this, '_userSelected', {
      enumerable: true,
      get: () => this.__data._userSelected,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._userSelected = new Element(value);
      },
    });

    Object.defineProperty(this, 'userSelected', {
      enumerable: true,
      get: () => this.__data.userSelected,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.userSelected = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'Coding',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'Coding';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      _system: this._system && this._system.toJSON(),
      system: this.system,
      _version: this._version && this._version.toJSON(),
      version: this.version,
      _code: this._code && this._code.toJSON(),
      code: this.code,
      _display: this._display && this._display.toJSON(),
      display: this.display,
      _userSelected: this._userSelected && this._userSelected.toJSON(),
      userSelected: this.userSelected,
    };
  }
};
