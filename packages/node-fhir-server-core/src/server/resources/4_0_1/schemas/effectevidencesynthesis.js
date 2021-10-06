/**
 * @name exports
 * @summary EffectEvidenceSynthesis Class
 */
module.exports = class EffectEvidenceSynthesis {
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

    Object.defineProperty(this, '_url', {
      enumerable: true,
      get: () => this.__data._url,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._url = new Element(value);
      },
    });

    Object.defineProperty(this, 'url', {
      enumerable: true,
      get: () => this.__data.url,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.url = value;
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

    Object.defineProperty(this, '_version', {
      enumerable: true,
      get: () => this.__data._version,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._version = new Element(value);
      },
    });

    Object.defineProperty(this, 'version', {
      enumerable: true,
      get: () => this.__data.version,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.version = value;
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

    Object.defineProperty(this, '_title', {
      enumerable: true,
      get: () => this.__data._title,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._title = new Element(value);
      },
    });

    Object.defineProperty(this, 'title', {
      enumerable: true,
      get: () => this.__data.title,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.title = value;
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

    Object.defineProperty(this, '_publisher', {
      enumerable: true,
      get: () => this.__data._publisher,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._publisher = new Element(value);
      },
    });

    Object.defineProperty(this, 'publisher', {
      enumerable: true,
      get: () => this.__data.publisher,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.publisher = value;
      },
    });

    Object.defineProperty(this, 'contact', {
      enumerable: true,
      get: () => this.__data.contact,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.contact = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    Object.defineProperty(this, '_description', {
      enumerable: true,
      get: () => this.__data._description,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._description = new Element(value);
      },
    });

    Object.defineProperty(this, 'description', {
      enumerable: true,
      get: () => this.__data.description,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.description = value;
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

    Object.defineProperty(this, 'useContext', {
      enumerable: true,
      get: () => this.__data.useContext,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let UsageContext = require('./usagecontext.js');
        this.__data.useContext = Array.isArray(value)
          ? value.map((v) => new UsageContext(v))
          : [new UsageContext(value)];
      },
    });

    Object.defineProperty(this, 'jurisdiction', {
      enumerable: true,
      get: () => this.__data.jurisdiction,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.jurisdiction = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, '_copyright', {
      enumerable: true,
      get: () => this.__data._copyright,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._copyright = new Element(value);
      },
    });

    Object.defineProperty(this, 'copyright', {
      enumerable: true,
      get: () => this.__data.copyright,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.copyright = value;
      },
    });

    Object.defineProperty(this, '_approvalDate', {
      enumerable: true,
      get: () => this.__data._approvalDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._approvalDate = new Element(value);
      },
    });

    Object.defineProperty(this, 'approvalDate', {
      enumerable: true,
      get: () => this.__data.approvalDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.approvalDate = value;
      },
    });

    Object.defineProperty(this, '_lastReviewDate', {
      enumerable: true,
      get: () => this.__data._lastReviewDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._lastReviewDate = new Element(value);
      },
    });

    Object.defineProperty(this, 'lastReviewDate', {
      enumerable: true,
      get: () => this.__data.lastReviewDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.lastReviewDate = value;
      },
    });

    Object.defineProperty(this, 'effectivePeriod', {
      enumerable: true,
      get: () => this.__data.effectivePeriod,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.effectivePeriod = new Period(value);
      },
    });

    Object.defineProperty(this, 'topic', {
      enumerable: true,
      get: () => this.__data.topic,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.topic = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'author', {
      enumerable: true,
      get: () => this.__data.author,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.author = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    Object.defineProperty(this, 'editor', {
      enumerable: true,
      get: () => this.__data.editor,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.editor = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    Object.defineProperty(this, 'reviewer', {
      enumerable: true,
      get: () => this.__data.reviewer,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.reviewer = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    Object.defineProperty(this, 'endorser', {
      enumerable: true,
      get: () => this.__data.endorser,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactDetail = require('./contactdetail.js');
        this.__data.endorser = Array.isArray(value)
          ? value.map((v) => new ContactDetail(v))
          : [new ContactDetail(value)];
      },
    });

    Object.defineProperty(this, 'relatedArtifact', {
      enumerable: true,
      get: () => this.__data.relatedArtifact,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let RelatedArtifact = require('./relatedartifact.js');
        this.__data.relatedArtifact = Array.isArray(value)
          ? value.map((v) => new RelatedArtifact(v))
          : [new RelatedArtifact(value)];
      },
    });

    Object.defineProperty(this, 'synthesisType', {
      enumerable: true,
      get: () => this.__data.synthesisType,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.synthesisType = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'studyType', {
      enumerable: true,
      get: () => this.__data.studyType,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.studyType = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'population', {
      enumerable: true,
      get: () => this.__data.population,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.population = new Reference(value);
      },
    });

    Object.defineProperty(this, 'exposure', {
      enumerable: true,
      get: () => this.__data.exposure,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.exposure = new Reference(value);
      },
    });

    Object.defineProperty(this, 'exposureAlternative', {
      enumerable: true,
      get: () => this.__data.exposureAlternative,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.exposureAlternative = new Reference(value);
      },
    });

    Object.defineProperty(this, 'outcome', {
      enumerable: true,
      get: () => this.__data.outcome,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.outcome = new Reference(value);
      },
    });

    Object.defineProperty(this, 'sampleSize', {
      enumerable: true,
      get: () => this.__data.sampleSize,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let EffectEvidenceSynthesisSampleSize = require('./effectevidencesynthesissamplesize.js');
        this.__data.sampleSize = new EffectEvidenceSynthesisSampleSize(value);
      },
    });

    Object.defineProperty(this, 'resultsByExposure', {
      enumerable: true,
      get: () => this.__data.resultsByExposure,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let EffectEvidenceSynthesisResultsByExposure = require('./effectevidencesynthesisresultsbyexposure.js');
        this.__data.resultsByExposure = Array.isArray(value)
          ? value.map((v) => new EffectEvidenceSynthesisResultsByExposure(v))
          : [new EffectEvidenceSynthesisResultsByExposure(value)];
      },
    });

    Object.defineProperty(this, 'effectEstimate', {
      enumerable: true,
      get: () => this.__data.effectEstimate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let EffectEvidenceSynthesisEffectEstimate = require('./effectevidencesynthesiseffectestimate.js');
        this.__data.effectEstimate = Array.isArray(value)
          ? value.map((v) => new EffectEvidenceSynthesisEffectEstimate(v))
          : [new EffectEvidenceSynthesisEffectEstimate(value)];
      },
    });

    Object.defineProperty(this, 'certainty', {
      enumerable: true,
      get: () => this.__data.certainty,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let EffectEvidenceSynthesisCertainty = require('./effectevidencesynthesiscertainty.js');
        this.__data.certainty = Array.isArray(value)
          ? value.map((v) => new EffectEvidenceSynthesisCertainty(v))
          : [new EffectEvidenceSynthesisCertainty(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'EffectEvidenceSynthesis',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'EffectEvidenceSynthesis';
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
      _url: this._url && this._url.toJSON(),
      url: this.url,
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      _version: this._version && this._version.toJSON(),
      version: this.version,
      _name: this._name && this._name.toJSON(),
      name: this.name,
      _title: this._title && this._title.toJSON(),
      title: this.title,
      _status: this._status && this._status.toJSON(),
      status: this.status,
      _date: this._date && this._date.toJSON(),
      date: this.date,
      _publisher: this._publisher && this._publisher.toJSON(),
      publisher: this.publisher,
      contact: this.contact && this.contact.map((v) => v.toJSON()),
      _description: this._description && this._description.toJSON(),
      description: this.description,
      note: this.note && this.note.map((v) => v.toJSON()),
      useContext: this.useContext && this.useContext.map((v) => v.toJSON()),
      jurisdiction: this.jurisdiction && this.jurisdiction.map((v) => v.toJSON()),
      _copyright: this._copyright && this._copyright.toJSON(),
      copyright: this.copyright,
      _approvalDate: this._approvalDate && this._approvalDate.toJSON(),
      approvalDate: this.approvalDate,
      _lastReviewDate: this._lastReviewDate && this._lastReviewDate.toJSON(),
      lastReviewDate: this.lastReviewDate,
      effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
      topic: this.topic && this.topic.map((v) => v.toJSON()),
      author: this.author && this.author.map((v) => v.toJSON()),
      editor: this.editor && this.editor.map((v) => v.toJSON()),
      reviewer: this.reviewer && this.reviewer.map((v) => v.toJSON()),
      endorser: this.endorser && this.endorser.map((v) => v.toJSON()),
      relatedArtifact: this.relatedArtifact && this.relatedArtifact.map((v) => v.toJSON()),
      synthesisType: this.synthesisType && this.synthesisType.toJSON(),
      studyType: this.studyType && this.studyType.toJSON(),
      population: this.population && this.population.toJSON(),
      exposure: this.exposure && this.exposure.toJSON(),
      exposureAlternative: this.exposureAlternative && this.exposureAlternative.toJSON(),
      outcome: this.outcome && this.outcome.toJSON(),
      sampleSize: this.sampleSize && this.sampleSize.toJSON(),
      resultsByExposure: this.resultsByExposure && this.resultsByExposure.map((v) => v.toJSON()),
      effectEstimate: this.effectEstimate && this.effectEstimate.map((v) => v.toJSON()),
      certainty: this.certainty && this.certainty.map((v) => v.toJSON()),
    };
  }
};
