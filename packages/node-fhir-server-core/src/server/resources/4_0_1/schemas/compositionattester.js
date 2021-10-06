/**
 * @name exports
 * @summary CompositionAttester Class
 */
module.exports = class CompositionAttester {
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

    Object.defineProperty(this, '_mode', {
      enumerable: true,
      get: () => this.__data._mode,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._mode = new Element(value);
      },
    });

    Object.defineProperty(this, 'mode', {
      enumerable: true,
      get: () => this.__data.mode,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.mode = value;
      },
    });

    Object.defineProperty(this, '_time', {
      enumerable: true,
      get: () => this.__data._time,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._time = new Element(value);
      },
    });

    Object.defineProperty(this, 'time', {
      enumerable: true,
      get: () => this.__data.time,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.time = value;
      },
    });

    Object.defineProperty(this, 'party', {
      enumerable: true,
      get: () => this.__data.party,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.party = new Reference(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CompositionAttester',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CompositionAttester';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _mode: this._mode && this._mode.toJSON(),
      mode: this.mode,
      _time: this._time && this._time.toJSON(),
      time: this.time,
      party: this.party && this.party.toJSON(),
    };
  }
};
