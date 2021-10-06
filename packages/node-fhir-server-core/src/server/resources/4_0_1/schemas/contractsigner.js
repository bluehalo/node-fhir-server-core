/**
 * @name exports
 * @summary ContractSigner Class
 */
module.exports = class ContractSigner {
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

        let Coding = require('./coding.js');
        this.__data.type = new Coding(value);
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

    Object.defineProperty(this, 'signature', {
      enumerable: true,
      get: () => this.__data.signature,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Signature = require('./signature.js');
        this.__data.signature = Array.isArray(value)
          ? value.map((v) => new Signature(v))
          : [new Signature(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'ContractSigner',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'ContractSigner';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      type: this.type && this.type.toJSON(),
      party: this.party && this.party.toJSON(),
      signature: this.signature && this.signature.map((v) => v.toJSON()),
    };
  }
};
