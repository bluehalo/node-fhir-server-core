/**
 * @name exports
 * @summary CoverageEligibilityRequestInsurance Class
 */
module.exports = class CoverageEligibilityRequestInsurance {
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

    Object.defineProperty(this, '_focal', {
      enumerable: true,
      get: () => this.__data._focal,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._focal = new Element(value);
      },
    });

    Object.defineProperty(this, 'focal', {
      enumerable: true,
      get: () => this.__data.focal,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.focal = value;
      },
    });

    Object.defineProperty(this, 'coverage', {
      enumerable: true,
      get: () => this.__data.coverage,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.coverage = new Reference(value);
      },
    });

    Object.defineProperty(this, '_businessArrangement', {
      enumerable: true,
      get: () => this.__data._businessArrangement,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._businessArrangement = new Element(value);
      },
    });

    Object.defineProperty(this, 'businessArrangement', {
      enumerable: true,
      get: () => this.__data.businessArrangement,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.businessArrangement = value;
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'CoverageEligibilityRequestInsurance',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'CoverageEligibilityRequestInsurance';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _focal: this._focal && this._focal.toJSON(),
      focal: this.focal,
      coverage: this.coverage && this.coverage.toJSON(),
      _businessArrangement: this._businessArrangement && this._businessArrangement.toJSON(),
      businessArrangement: this.businessArrangement,
    };
  }
};
