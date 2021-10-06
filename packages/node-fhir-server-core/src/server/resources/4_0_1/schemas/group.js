/**
 * @name exports
 * @summary Group Class
 */
module.exports = class Group {
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

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Meta = require('./meta.js');
        this.__data.meta = new Meta(value);
      },
    });

    Object.defineProperty(this, '_implicitRules', {
      enumerable: true,
      get: () => this.__data._implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._implicitRules = new Element(value);
      },
    });

    Object.defineProperty(this, 'implicitRules', {
      enumerable: true,
      get: () => this.__data.implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._language = new Element(value);
      },
    });

    Object.defineProperty(this, 'language', {
      enumerable: true,
      get: () => this.__data.language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Narrative = require('./narrative.js');
        this.__data.text = new Narrative(value);
      },
    });

    Object.defineProperty(this, 'contained', {
      enumerable: true,
      get: () => this.__data.contained,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
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

    Object.defineProperty(this, 'identifier', {
      enumerable: true,
      get: () => this.__data.identifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.identifier = Array.isArray(value)
          ? value.map((v) => new Identifier(v))
          : [new Identifier(value)];
      },
    });

    Object.defineProperty(this, '_active', {
      enumerable: true,
      get: () => this.__data._active,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._active = new Element(value);
      },
    });

    Object.defineProperty(this, 'active', {
      enumerable: true,
      get: () => this.__data.active,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.active = value;
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

    Object.defineProperty(this, '_actual', {
      enumerable: true,
      get: () => this.__data._actual,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._actual = new Element(value);
      },
    });

    Object.defineProperty(this, 'actual', {
      enumerable: true,
      get: () => this.__data.actual,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.actual = value;
      },
    });

    Object.defineProperty(this, 'code', {
      enumerable: true,
      get: () => this.__data.code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.code = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, '_name', {
      enumerable: true,
      get: () => this.__data._name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._name = new Element(value);
      },
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get: () => this.__data.name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.name = value;
      },
    });

    Object.defineProperty(this, '_quantity', {
      enumerable: true,
      get: () => this.__data._quantity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._quantity = new Element(value);
      },
    });

    Object.defineProperty(this, 'quantity', {
      enumerable: true,
      get: () => this.__data.quantity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.quantity = value;
      },
    });

    Object.defineProperty(this, 'managingEntity', {
      enumerable: true,
      get: () => this.__data.managingEntity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.managingEntity = new Reference(value);
      },
    });

    Object.defineProperty(this, 'characteristic', {
      enumerable: true,
      get: () => this.__data.characteristic,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let GroupCharacteristic = require('./groupcharacteristic.js');
        this.__data.characteristic = Array.isArray(value)
          ? value.map((v) => new GroupCharacteristic(v))
          : [new GroupCharacteristic(value)];
      },
    });

    Object.defineProperty(this, 'member', {
      enumerable: true,
      get: () => this.__data.member,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let GroupMember = require('./groupmember.js');
        this.__data.member = Array.isArray(value)
          ? value.map((v) => new GroupMember(v))
          : [new GroupMember(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'Group',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'Group';
  }

  toJSON() {
    return {
      resourceType: this.resourceType,
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      implicitRules: this.implicitRules,
      _language: this._language && this._language.toJSON(),
      language: this.language,
      text: this.text && this.text.toJSON(),
      contained: this.contained,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _active: this._active && this._active.toJSON(),
      active: this.active,
      _type: this._type && this._type.toJSON(),
      type: this.type,
      _actual: this._actual && this._actual.toJSON(),
      actual: this.actual,
      code: this.code && this.code.toJSON(),
      _name: this._name && this._name.toJSON(),
      name: this.name,
      _quantity: this._quantity && this._quantity.toJSON(),
      quantity: this.quantity,
      managingEntity: this.managingEntity && this.managingEntity.toJSON(),
      characteristic: this.characteristic && this.characteristic.map((v) => v.toJSON()),
      member: this.member && this.member.map((v) => v.toJSON()),
    };
  }
};
