/**
 * @name exports
 * @summary RequestGroupAction Class
 */
module.exports = class RequestGroupAction {
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

    Object.defineProperty(this, '_prefix', {
      enumerable: true,
      get: () => this.__data._prefix,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._prefix = new Element(value);
      },
    });

    Object.defineProperty(this, 'prefix', {
      enumerable: true,
      get: () => this.__data.prefix,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.prefix = value;
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

    Object.defineProperty(this, '_textEquivalent', {
      enumerable: true,
      get: () => this.__data._textEquivalent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._textEquivalent = new Element(value);
      },
    });

    Object.defineProperty(this, 'textEquivalent', {
      enumerable: true,
      get: () => this.__data.textEquivalent,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.textEquivalent = value;
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

    Object.defineProperty(this, 'code', {
      enumerable: true,
      get: () => this.__data.code,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.code = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'documentation', {
      enumerable: true,
      get: () => this.__data.documentation,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let RelatedArtifact = require('./relatedartifact.js');
        this.__data.documentation = Array.isArray(value)
          ? value.map((v) => new RelatedArtifact(v))
          : [new RelatedArtifact(value)];
      },
    });

    Object.defineProperty(this, 'condition', {
      enumerable: true,
      get: () => this.__data.condition,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let RequestGroupActionCondition = require('./requestgroupactioncondition.js');
        this.__data.condition = Array.isArray(value)
          ? value.map((v) => new RequestGroupActionCondition(v))
          : [new RequestGroupActionCondition(value)];
      },
    });

    Object.defineProperty(this, 'relatedAction', {
      enumerable: true,
      get: () => this.__data.relatedAction,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let RequestGroupActionRelatedAction = require('./requestgroupactionrelatedaction.js');
        this.__data.relatedAction = Array.isArray(value)
          ? value.map((v) => new RequestGroupActionRelatedAction(v))
          : [new RequestGroupActionRelatedAction(value)];
      },
    });

    Object.defineProperty(this, '_timingDateTime', {
      enumerable: true,
      get: () => this.__data._timingDateTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._timingDateTime = new Element(value);
      },
    });

    Object.defineProperty(this, 'timingDateTime', {
      enumerable: true,
      get: () => this.__data.timingDateTime,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.timingDateTime = value;
      },
    });

    Object.defineProperty(this, 'timingAge', {
      enumerable: true,
      get: () => this.__data.timingAge,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Age = require('./age.js');
        this.__data.timingAge = new Age(value);
      },
    });

    Object.defineProperty(this, 'timingPeriod', {
      enumerable: true,
      get: () => this.__data.timingPeriod,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Period = require('./period.js');
        this.__data.timingPeriod = new Period(value);
      },
    });

    Object.defineProperty(this, 'timingDuration', {
      enumerable: true,
      get: () => this.__data.timingDuration,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Duration = require('./duration.js');
        this.__data.timingDuration = new Duration(value);
      },
    });

    Object.defineProperty(this, 'timingRange', {
      enumerable: true,
      get: () => this.__data.timingRange,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Range = require('./range.js');
        this.__data.timingRange = new Range(value);
      },
    });

    Object.defineProperty(this, 'timingTiming', {
      enumerable: true,
      get: () => this.__data.timingTiming,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Timing = require('./timing.js');
        this.__data.timingTiming = new Timing(value);
      },
    });

    Object.defineProperty(this, 'participant', {
      enumerable: true,
      get: () => this.__data.participant,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.participant = Array.isArray(value)
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

    Object.defineProperty(this, '_groupingBehavior', {
      enumerable: true,
      get: () => this.__data._groupingBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._groupingBehavior = new Element(value);
      },
    });

    Object.defineProperty(this, 'groupingBehavior', {
      enumerable: true,
      get: () => this.__data.groupingBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.groupingBehavior = value;
      },
    });

    Object.defineProperty(this, '_selectionBehavior', {
      enumerable: true,
      get: () => this.__data._selectionBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._selectionBehavior = new Element(value);
      },
    });

    Object.defineProperty(this, 'selectionBehavior', {
      enumerable: true,
      get: () => this.__data.selectionBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.selectionBehavior = value;
      },
    });

    Object.defineProperty(this, '_requiredBehavior', {
      enumerable: true,
      get: () => this.__data._requiredBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._requiredBehavior = new Element(value);
      },
    });

    Object.defineProperty(this, 'requiredBehavior', {
      enumerable: true,
      get: () => this.__data.requiredBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.requiredBehavior = value;
      },
    });

    Object.defineProperty(this, '_precheckBehavior', {
      enumerable: true,
      get: () => this.__data._precheckBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._precheckBehavior = new Element(value);
      },
    });

    Object.defineProperty(this, 'precheckBehavior', {
      enumerable: true,
      get: () => this.__data.precheckBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.precheckBehavior = value;
      },
    });

    Object.defineProperty(this, '_cardinalityBehavior', {
      enumerable: true,
      get: () => this.__data._cardinalityBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._cardinalityBehavior = new Element(value);
      },
    });

    Object.defineProperty(this, 'cardinalityBehavior', {
      enumerable: true,
      get: () => this.__data.cardinalityBehavior,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.cardinalityBehavior = value;
      },
    });

    Object.defineProperty(this, 'resource', {
      enumerable: true,
      get: () => this.__data.resource,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.resource = new Reference(value);
      },
    });

    Object.defineProperty(this, 'action', {
      enumerable: true,
      get: () => this.__data.action,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let RequestGroupAction = require('./requestgroupaction.js');
        this.__data.action = Array.isArray(value)
          ? value.map((v) => new RequestGroupAction(v))
          : [new RequestGroupAction(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'RequestGroupAction',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'RequestGroupAction';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _prefix: this._prefix && this._prefix.toJSON(),
      prefix: this.prefix,
      _title: this._title && this._title.toJSON(),
      title: this.title,
      _description: this._description && this._description.toJSON(),
      description: this.description,
      _textEquivalent: this._textEquivalent && this._textEquivalent.toJSON(),
      textEquivalent: this.textEquivalent,
      _priority: this._priority && this._priority.toJSON(),
      priority: this.priority,
      code: this.code && this.code.map((v) => v.toJSON()),
      documentation: this.documentation && this.documentation.map((v) => v.toJSON()),
      condition: this.condition && this.condition.map((v) => v.toJSON()),
      relatedAction: this.relatedAction && this.relatedAction.map((v) => v.toJSON()),
      _timingDateTime: this._timingDateTime && this._timingDateTime.toJSON(),
      timingDateTime: this.timingDateTime,
      timingAge: this.timingAge && this.timingAge.toJSON(),
      timingPeriod: this.timingPeriod && this.timingPeriod.toJSON(),
      timingDuration: this.timingDuration && this.timingDuration.toJSON(),
      timingRange: this.timingRange && this.timingRange.toJSON(),
      timingTiming: this.timingTiming && this.timingTiming.toJSON(),
      participant: this.participant && this.participant.map((v) => v.toJSON()),
      type: this.type && this.type.toJSON(),
      _groupingBehavior: this._groupingBehavior && this._groupingBehavior.toJSON(),
      groupingBehavior: this.groupingBehavior,
      _selectionBehavior: this._selectionBehavior && this._selectionBehavior.toJSON(),
      selectionBehavior: this.selectionBehavior,
      _requiredBehavior: this._requiredBehavior && this._requiredBehavior.toJSON(),
      requiredBehavior: this.requiredBehavior,
      _precheckBehavior: this._precheckBehavior && this._precheckBehavior.toJSON(),
      precheckBehavior: this.precheckBehavior,
      _cardinalityBehavior: this._cardinalityBehavior && this._cardinalityBehavior.toJSON(),
      cardinalityBehavior: this.cardinalityBehavior,
      resource: this.resource && this.resource.toJSON(),
      action: this.action && this.action.map((v) => v.toJSON()),
    };
  }
};
