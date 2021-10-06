/**
 * @name exports
 * @summary Coverage Class
 */
module.exports = class Coverage {
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

    Object.defineProperty(this, 'type', {
      enumerable: true,
      get: () => this.__data.type,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.type = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'policyHolder', {
      enumerable: true,
      get: () => this.__data.policyHolder,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.policyHolder = new Reference(value);
      },
    });

    Object.defineProperty(this, 'subscriber', {
      enumerable: true,
      get: () => this.__data.subscriber,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.subscriber = new Reference(value);
      },
    });

    Object.defineProperty(this, '_subscriberId', {
      enumerable: true,
      get: () => this.__data._subscriberId,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._subscriberId = new Element(value);
      },
    });

    Object.defineProperty(this, 'subscriberId', {
      enumerable: true,
      get: () => this.__data.subscriberId,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.subscriberId = value;
      },
    });

    Object.defineProperty(this, 'beneficiary', {
      enumerable: true,
      get: () => this.__data.beneficiary,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.beneficiary = new Reference(value);
      },
    });

    Object.defineProperty(this, '_dependent', {
      enumerable: true,
      get: () => this.__data._dependent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._dependent = new Element(value);
      },
    });

    Object.defineProperty(this, 'dependent', {
      enumerable: true,
      get: () => this.__data.dependent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.dependent = value;
      },
    });

    Object.defineProperty(this, 'relationship', {
      enumerable: true,
      get: () => this.__data.relationship,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.relationship = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'period', {
      enumerable: true,
      get: () => this.__data.period,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.period = new Period(value);
      },
    });

    Object.defineProperty(this, 'payor', {
      enumerable: true,
      get: () => this.__data.payor,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.payor = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'class', {
      enumerable: true,
      get: () => this.__data.class,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CoverageClass = require('./coverageclass.js');
        this.__data.class = Array.isArray(value)
          ? value.map((v) => new CoverageClass(v))
          : [new CoverageClass(value)];
      },
    });

    Object.defineProperty(this, '_order', {
      enumerable: true,
      get: () => this.__data._order,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._order = new Element(value);
      },
    });

    Object.defineProperty(this, 'order', {
      enumerable: true,
      get: () => this.__data.order,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.order = value;
      },
    });

    Object.defineProperty(this, '_network', {
      enumerable: true,
      get: () => this.__data._network,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._network = new Element(value);
      },
    });

    Object.defineProperty(this, 'network', {
      enumerable: true,
      get: () => this.__data.network,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.network = value;
      },
    });

    Object.defineProperty(this, 'costToBeneficiary', {
      enumerable: true,
      get: () => this.__data.costToBeneficiary,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CoverageCostToBeneficiary = require('./coveragecosttobeneficiary.js');
        this.__data.costToBeneficiary = Array.isArray(value)
          ? value.map((v) => new CoverageCostToBeneficiary(v))
          : [new CoverageCostToBeneficiary(value)];
      },
    });

    Object.defineProperty(this, '_subrogation', {
      enumerable: true,
      get: () => this.__data._subrogation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._subrogation = new Element(value);
      },
    });

    Object.defineProperty(this, 'subrogation', {
      enumerable: true,
      get: () => this.__data.subrogation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.subrogation = value;
      },
    });

    Object.defineProperty(this, 'contract', {
      enumerable: true,
      get: () => this.__data.contract,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.contract = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'Coverage',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'Coverage';
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
      type: this.type && this.type.toJSON(),
      policyHolder: this.policyHolder && this.policyHolder.toJSON(),
      subscriber: this.subscriber && this.subscriber.toJSON(),
      _subscriberId: this._subscriberId && this._subscriberId.toJSON(),
      subscriberId: this.subscriberId,
      beneficiary: this.beneficiary && this.beneficiary.toJSON(),
      _dependent: this._dependent && this._dependent.toJSON(),
      dependent: this.dependent,
      relationship: this.relationship && this.relationship.toJSON(),
      period: this.period && this.period.toJSON(),
      payor: this.payor && this.payor.map((v) => v.toJSON()),
      class: this.class && this.class.map((v) => v.toJSON()),
      _order: this._order && this._order.toJSON(),
      order: this.order,
      _network: this._network && this._network.toJSON(),
      network: this.network,
      costToBeneficiary: this.costToBeneficiary && this.costToBeneficiary.map((v) => v.toJSON()),
      _subrogation: this._subrogation && this._subrogation.toJSON(),
      subrogation: this.subrogation,
      contract: this.contract && this.contract.map((v) => v.toJSON()),
    };
  }
};
