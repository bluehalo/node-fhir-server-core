/**
 * @name exports
 * @summary AuditEventSource Class
 */
module.exports = class AuditEventSource {
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

    Object.defineProperty(this, '_site', {
      enumerable: true,
      get: () => this.__data._site,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._site = new Element(value);
      },
    });

    Object.defineProperty(this, 'site', {
      enumerable: true,
      get: () => this.__data.site,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.site = value;
      },
    });

    Object.defineProperty(this, 'observer', {
      enumerable: true,
      get: () => this.__data.observer,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.observer = new Reference(value);
      },
    });

    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Coding = require('./coding.js');
        this.__data.type = Array.isArray(value)
          ? value.map((v) => new Coding(v))
          : [new Coding(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'AuditEventSource',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'AuditEventSource';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _site: this._site && this._site.toJSON(),
      site: this.site,
      observer: this.observer && this.observer.toJSON(),
      type: this.type && this.type.map((v) => v.toJSON()),
    };
  }
};
