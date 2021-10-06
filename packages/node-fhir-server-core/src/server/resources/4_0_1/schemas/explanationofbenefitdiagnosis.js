/**
 * @name exports
 * @summary ExplanationOfBenefitDiagnosis Class
 */
module.exports = class ExplanationOfBenefitDiagnosis {
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

    Object.defineProperty(this, '_sequence', {
      enumerable: true,
      get: () => this.__data._sequence,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._sequence = new Element(value);
      },
    });

    Object.defineProperty(this, 'sequence', {
      enumerable: true,
      get: () => this.__data.sequence,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.sequence = value;
      },
    });

    Object.defineProperty(this, 'diagnosisCodeableConcept', {
      enumerable: true,
      get: () => this.__data.diagnosisCodeableConcept,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.diagnosisCodeableConcept = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'diagnosisReference', {
      enumerable: true,
      get: () => this.__data.diagnosisReference,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.diagnosisReference = new Reference(value);
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
        this.__data.type = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'onAdmission', {
      enumerable: true,
      get: () => this.__data.onAdmission,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.onAdmission = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'packageCode', {
      enumerable: true,
      get: () => this.__data.packageCode,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.packageCode = new CodeableConcept(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'ExplanationOfBenefitDiagnosis',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'ExplanationOfBenefitDiagnosis';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _sequence: this._sequence && this._sequence.toJSON(),
      sequence: this.sequence,
      diagnosisCodeableConcept:
        this.diagnosisCodeableConcept && this.diagnosisCodeableConcept.toJSON(),
      diagnosisReference: this.diagnosisReference && this.diagnosisReference.toJSON(),
      type: this.type && this.type.map((v) => v.toJSON()),
      onAdmission: this.onAdmission && this.onAdmission.toJSON(),
      packageCode: this.packageCode && this.packageCode.toJSON(),
    };
  }
};
