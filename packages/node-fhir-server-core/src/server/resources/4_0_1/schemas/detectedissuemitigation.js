/**
 * @name exports
 * @summary DetectedIssueMitigation Class
 */
module.exports = class DetectedIssueMitigation {
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

    Object.defineProperty(this, 'action', {
      enumerable: true,
      get: () => this.__data.action,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.action = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, '_date', {
      enumerable: true,
      get: () => this.__data._date,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._date = new Element(value);
      },
    });

    Object.defineProperty(this, 'date', {
      enumerable: true,
      get: () => this.__data.date,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.date = value;
      },
    });

    Object.defineProperty(this, 'author', {
      enumerable: true,
      get: () => this.__data.author,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.author = new Reference(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'DetectedIssueMitigation',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'DetectedIssueMitigation';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      action: this.action && this.action.toJSON(),
      _date: this._date && this._date.toJSON(),
      date: this.date,
      author: this.author && this.author.toJSON(),
    };
  }
};
