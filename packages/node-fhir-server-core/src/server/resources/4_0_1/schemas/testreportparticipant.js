/**
 * @name exports
 * @summary TestReportParticipant Class
 */
module.exports = class TestReportParticipant {
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

    Object.defineProperty(this, '_uri', {
      enumerable: true,
      get: () => this.__data._uri,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._uri = new Element(value);
      },
    });

    Object.defineProperty(this, 'uri', {
      enumerable: true,
      get: () => this.__data.uri,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.uri = value;
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

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'TestReportParticipant',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'TestReportParticipant';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _type: this._type && this._type.toJSON(),
      type: this.type,
      _uri: this._uri && this._uri.toJSON(),
      uri: this.uri,
      _display: this._display && this._display.toJSON(),
      display: this.display,
    };
  }
};
