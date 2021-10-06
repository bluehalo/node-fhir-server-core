/**
 * @name exports
 * @summary MedicationDispense Class
 */
module.exports = class MedicationDispense {
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

    Object.defineProperty(this, 'partOf', {
      enumerable: true,
      get: () => this.__data.partOf,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.partOf = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
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

    Object.defineProperty(this, 'statusReasonCodeableConcept', {
      enumerable: true,
      get: () => this.__data.statusReasonCodeableConcept,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.statusReasonCodeableConcept = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'statusReasonReference', {
      enumerable: true,
      get: () => this.__data.statusReasonReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.statusReasonReference = new Reference(value);
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

    Object.defineProperty(this, 'medicationCodeableConcept', {
      enumerable: true,
      get: () => this.__data.medicationCodeableConcept,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.medicationCodeableConcept = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'medicationReference', {
      enumerable: true,
      get: () => this.__data.medicationReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.medicationReference = new Reference(value);
      },
    });

    Object.defineProperty(this, 'subject', {
      enumerable: true,
      get: () => this.__data.subject,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.subject = new Reference(value);
      },
    });

    Object.defineProperty(this, 'context', {
      enumerable: true,
      get: () => this.__data.context,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.context = new Reference(value);
      },
    });

    Object.defineProperty(this, 'supportingInformation', {
      enumerable: true,
      get: () => this.__data.supportingInformation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.supportingInformation = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'performer', {
      enumerable: true,
      get: () => this.__data.performer,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let MedicationDispensePerformer = require('./medicationdispenseperformer.js');
        this.__data.performer = Array.isArray(value)
          ? value.map((v) => new MedicationDispensePerformer(v))
          : [new MedicationDispensePerformer(value)];
      },
    });

    Object.defineProperty(this, 'location', {
      enumerable: true,
      get: () => this.__data.location,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.location = new Reference(value);
      },
    });

    Object.defineProperty(this, 'authorizingPrescription', {
      enumerable: true,
      get: () => this.__data.authorizingPrescription,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.authorizingPrescription = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
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

    Object.defineProperty(this, 'daysSupply', {
      enumerable: true,
      get: () => this.__data.daysSupply,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Quantity = require('./quantity.js');
        this.__data.daysSupply = new Quantity(value);
      },
    });

    Object.defineProperty(this, '_whenPrepared', {
      enumerable: true,
      get: () => this.__data._whenPrepared,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._whenPrepared = new Element(value);
      },
    });

    Object.defineProperty(this, 'whenPrepared', {
      enumerable: true,
      get: () => this.__data.whenPrepared,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.whenPrepared = value;
      },
    });

    Object.defineProperty(this, '_whenHandedOver', {
      enumerable: true,
      get: () => this.__data._whenHandedOver,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._whenHandedOver = new Element(value);
      },
    });

    Object.defineProperty(this, 'whenHandedOver', {
      enumerable: true,
      get: () => this.__data.whenHandedOver,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.whenHandedOver = value;
      },
    });

    Object.defineProperty(this, 'destination', {
      enumerable: true,
      get: () => this.__data.destination,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.destination = new Reference(value);
      },
    });

    Object.defineProperty(this, 'receiver', {
      enumerable: true,
      get: () => this.__data.receiver,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.receiver = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'note', {
      enumerable: true,
      get: () => this.__data.note,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Annotation = require('./annotation.js');
        this.__data.note = Array.isArray(value)
          ? value.map((v) => new Annotation(v))
          : [new Annotation(value)];
      },
    });

    Object.defineProperty(this, 'dosageInstruction', {
      enumerable: true,
      get: () => this.__data.dosageInstruction,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Dosage = require('./dosage.js');
        this.__data.dosageInstruction = Array.isArray(value)
          ? value.map((v) => new Dosage(v))
          : [new Dosage(value)];
      },
    });

    Object.defineProperty(this, 'substitution', {
      enumerable: true,
      get: () => this.__data.substitution,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let MedicationDispenseSubstitution = require('./medicationdispensesubstitution.js');
        this.__data.substitution = new MedicationDispenseSubstitution(value);
      },
    });

    Object.defineProperty(this, 'detectedIssue', {
      enumerable: true,
      get: () => this.__data.detectedIssue,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.detectedIssue = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'eventHistory', {
      enumerable: true,
      get: () => this.__data.eventHistory,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.eventHistory = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'MedicationDispense',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'MedicationDispense';
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
      partOf: this.partOf && this.partOf.map((v) => v.toJSON()),
      _status: this._status && this._status.toJSON(),
      status: this.status,
      statusReasonCodeableConcept:
        this.statusReasonCodeableConcept && this.statusReasonCodeableConcept.toJSON(),
      statusReasonReference: this.statusReasonReference && this.statusReasonReference.toJSON(),
      category: this.category && this.category.toJSON(),
      medicationCodeableConcept:
        this.medicationCodeableConcept && this.medicationCodeableConcept.toJSON(),
      medicationReference: this.medicationReference && this.medicationReference.toJSON(),
      subject: this.subject && this.subject.toJSON(),
      context: this.context && this.context.toJSON(),
      supportingInformation:
        this.supportingInformation && this.supportingInformation.map((v) => v.toJSON()),
      performer: this.performer && this.performer.map((v) => v.toJSON()),
      location: this.location && this.location.toJSON(),
      authorizingPrescription:
        this.authorizingPrescription && this.authorizingPrescription.map((v) => v.toJSON()),
      type: this.type && this.type.toJSON(),
      quantity: this.quantity && this.quantity.toJSON(),
      daysSupply: this.daysSupply && this.daysSupply.toJSON(),
      _whenPrepared: this._whenPrepared && this._whenPrepared.toJSON(),
      whenPrepared: this.whenPrepared,
      _whenHandedOver: this._whenHandedOver && this._whenHandedOver.toJSON(),
      whenHandedOver: this.whenHandedOver,
      destination: this.destination && this.destination.toJSON(),
      receiver: this.receiver && this.receiver.map((v) => v.toJSON()),
      note: this.note && this.note.map((v) => v.toJSON()),
      dosageInstruction: this.dosageInstruction && this.dosageInstruction.map((v) => v.toJSON()),
      substitution: this.substitution && this.substitution.toJSON(),
      detectedIssue: this.detectedIssue && this.detectedIssue.map((v) => v.toJSON()),
      eventHistory: this.eventHistory && this.eventHistory.map((v) => v.toJSON()),
    };
  }
};
