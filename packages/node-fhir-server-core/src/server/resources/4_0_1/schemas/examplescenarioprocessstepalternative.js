/**
 * @name exports
 * @summary ExampleScenarioProcessStepAlternative Class
 */
module.exports = class ExampleScenarioProcessStepAlternative {
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

    Object.defineProperty(this, 'step', {
      enumerable: true,
      get: () => this.__data.step,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ExampleScenarioProcessStep = require('./examplescenarioprocessstep.js');
        this.__data.step = Array.isArray(value)
          ? value.map((v) => new ExampleScenarioProcessStep(v))
          : [new ExampleScenarioProcessStep(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'ExampleScenarioProcessStepAlternative',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'ExampleScenarioProcessStepAlternative';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _title: this._title && this._title.toJSON(),
      title: this.title,
      _description: this._description && this._description.toJSON(),
      description: this.description,
      step: this.step && this.step.map((v) => v.toJSON()),
    };
  }
};
