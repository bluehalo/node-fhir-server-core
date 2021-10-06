/**
 * @name exports
 * @summary PaymentNotice Class
 */
module.exports = class PaymentNotice {
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

    Object.defineProperty(this, '_status', {
      enumerable: true,
      get: () => this.__data._status,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._status = new Element(value);
      },
    });

    Object.defineProperty(this, 'status', {
      enumerable: true,
      get: () => this.__data.status,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.status = value;
      },
    });

    Object.defineProperty(this, 'request', {
      enumerable: true,
      get: () => this.__data.request,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.request = new Reference(value);
      },
    });

    Object.defineProperty(this, 'response', {
      enumerable: true,
      get: () => this.__data.response,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.response = new Reference(value);
      },
    });

    Object.defineProperty(this, '_created', {
      enumerable: true,
      get: () => this.__data._created,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._created = new Element(value);
      },
    });

    Object.defineProperty(this, 'created', {
      enumerable: true,
      get: () => this.__data.created,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.created = value;
      },
    });

    Object.defineProperty(this, 'provider', {
      enumerable: true,
      get: () => this.__data.provider,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.provider = new Reference(value);
      },
    });

    Object.defineProperty(this, 'payment', {
      enumerable: true,
      get: () => this.__data.payment,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.payment = new Reference(value);
      },
    });

    Object.defineProperty(this, '_paymentDate', {
      enumerable: true,
      get: () => this.__data._paymentDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._paymentDate = new Element(value);
      },
    });

    Object.defineProperty(this, 'paymentDate', {
      enumerable: true,
      get: () => this.__data.paymentDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.paymentDate = value;
      },
    });

    Object.defineProperty(this, 'payee', {
      enumerable: true,
      get: () => this.__data.payee,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.payee = new Reference(value);
      },
    });

    Object.defineProperty(this, 'recipient', {
      enumerable: true,
      get: () => this.__data.recipient,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.recipient = new Reference(value);
      },
    });

    Object.defineProperty(this, 'amount', {
      enumerable: true,
      get: () => this.__data.amount,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Money = require('./money.js');
        this.__data.amount = new Money(value);
      },
    });

    Object.defineProperty(this, 'paymentStatus', {
      enumerable: true,
      get: () => this.__data.paymentStatus,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.paymentStatus = new CodeableConcept(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'PaymentNotice',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'PaymentNotice';
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
      _status: this._status && this._status.toJSON(),
      status: this.status,
      request: this.request && this.request.toJSON(),
      response: this.response && this.response.toJSON(),
      _created: this._created && this._created.toJSON(),
      created: this.created,
      provider: this.provider && this.provider.toJSON(),
      payment: this.payment && this.payment.toJSON(),
      _paymentDate: this._paymentDate && this._paymentDate.toJSON(),
      paymentDate: this.paymentDate,
      payee: this.payee && this.payee.toJSON(),
      recipient: this.recipient && this.recipient.toJSON(),
      amount: this.amount && this.amount.toJSON(),
      paymentStatus: this.paymentStatus && this.paymentStatus.toJSON(),
    };
  }
};
