/**
 * @name exports
 * @summary SupplyRequest Class
 */
module.exports = class SupplyRequest {
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

    Object.defineProperty(this, 'category', {
      enumerable: true,
      get: () => this.__data.category,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.category = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, '_priority', {
      enumerable: true,
      get: () => this.__data._priority,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._priority = new Element(value);
      },
    });

    Object.defineProperty(this, 'priority', {
      enumerable: true,
      get: () => this.__data.priority,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.priority = value;
      },
    });

    Object.defineProperty(this, 'itemCodeableConcept', {
      enumerable: true,
      get: () => this.__data.itemCodeableConcept,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.itemCodeableConcept = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'itemReference', {
      enumerable: true,
      get: () => this.__data.itemReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.itemReference = new Reference(value);
      },
    });

    Object.defineProperty(this, 'quantity', {
      enumerable: true,
      get: () => this.__data.quantity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Quantity = require('./quantity.js');
        this.__data.quantity = new Quantity(value);
      },
    });

    Object.defineProperty(this, 'parameter', {
      enumerable: true,
      get: () => this.__data.parameter,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let SupplyRequestParameter = require('./supplyrequestparameter.js');
        this.__data.parameter = Array.isArray(value)
          ? value.map((v) => new SupplyRequestParameter(v))
          : [new SupplyRequestParameter(value)];
      },
    });

    Object.defineProperty(this, '_occurrenceDateTime', {
      enumerable: true,
      get: () => this.__data._occurrenceDateTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._occurrenceDateTime = new Element(value);
      },
    });

    Object.defineProperty(this, 'occurrenceDateTime', {
      enumerable: true,
      get: () => this.__data.occurrenceDateTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.occurrenceDateTime = value;
      },
    });

    Object.defineProperty(this, 'occurrencePeriod', {
      enumerable: true,
      get: () => this.__data.occurrencePeriod,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.occurrencePeriod = new Period(value);
      },
    });

    Object.defineProperty(this, 'occurrenceTiming', {
      enumerable: true,
      get: () => this.__data.occurrenceTiming,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Timing = require('./timing.js');
        this.__data.occurrenceTiming = new Timing(value);
      },
    });

    Object.defineProperty(this, '_authoredOn', {
      enumerable: true,
      get: () => this.__data._authoredOn,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._authoredOn = new Element(value);
      },
    });

    Object.defineProperty(this, 'authoredOn', {
      enumerable: true,
      get: () => this.__data.authoredOn,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.authoredOn = value;
      },
    });

    Object.defineProperty(this, 'requester', {
      enumerable: true,
      get: () => this.__data.requester,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.requester = new Reference(value);
      },
    });

    Object.defineProperty(this, 'supplier', {
      enumerable: true,
      get: () => this.__data.supplier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.supplier = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'reasonCode', {
      enumerable: true,
      get: () => this.__data.reasonCode,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.reasonCode = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'reasonReference', {
      enumerable: true,
      get: () => this.__data.reasonReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.reasonReference = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'deliverFrom', {
      enumerable: true,
      get: () => this.__data.deliverFrom,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.deliverFrom = new Reference(value);
      },
    });

    Object.defineProperty(this, 'deliverTo', {
      enumerable: true,
      get: () => this.__data.deliverTo,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.deliverTo = new Reference(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'SupplyRequest',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'SupplyRequest';
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
      category: this.category && this.category.toJSON(),
      _priority: this._priority && this._priority.toJSON(),
      priority: this.priority,
      itemCodeableConcept: this.itemCodeableConcept && this.itemCodeableConcept.toJSON(),
      itemReference: this.itemReference && this.itemReference.toJSON(),
      quantity: this.quantity && this.quantity.toJSON(),
      parameter: this.parameter && this.parameter.map((v) => v.toJSON()),
      _occurrenceDateTime: this._occurrenceDateTime && this._occurrenceDateTime.toJSON(),
      occurrenceDateTime: this.occurrenceDateTime,
      occurrencePeriod: this.occurrencePeriod && this.occurrencePeriod.toJSON(),
      occurrenceTiming: this.occurrenceTiming && this.occurrenceTiming.toJSON(),
      _authoredOn: this._authoredOn && this._authoredOn.toJSON(),
      authoredOn: this.authoredOn,
      requester: this.requester && this.requester.toJSON(),
      supplier: this.supplier && this.supplier.map((v) => v.toJSON()),
      reasonCode: this.reasonCode && this.reasonCode.map((v) => v.toJSON()),
      reasonReference: this.reasonReference && this.reasonReference.map((v) => v.toJSON()),
      deliverFrom: this.deliverFrom && this.deliverFrom.toJSON(),
      deliverTo: this.deliverTo && this.deliverTo.toJSON(),
    };
  }
};
