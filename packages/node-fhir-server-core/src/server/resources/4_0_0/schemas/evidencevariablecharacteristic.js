/**
 * @name exports
 * @summary EvidenceVariableCharacteristic Class
 */
module.exports = class EvidenceVariableCharacteristic {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
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
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
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
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, 'definitionReference', {
			enumerable: true,
			get: () => this.__data.definitionReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.definitionReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_definitionCanonical', {
			enumerable: true,
			get: () => this.__data._definitionCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._definitionCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'definitionCanonical', {
			enumerable: true,
			get: () => this.__data.definitionCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.definitionCanonical = value;
			},
		});

		Object.defineProperty(this, 'definitionCodeableConcept', {
			enumerable: true,
			get: () => this.__data.definitionCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.definitionCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'definitionExpression', {
			enumerable: true,
			get: () => this.__data.definitionExpression,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Expression = require('./expression.js');
				this.__data.definitionExpression = new Expression(value);
			},
		});

		Object.defineProperty(this, 'definitionDataRequirement', {
			enumerable: true,
			get: () => this.__data.definitionDataRequirement,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let DataRequirement = require('./datarequirement.js');
				this.__data.definitionDataRequirement = new DataRequirement(value);
			},
		});

		Object.defineProperty(this, 'definitionTriggerDefinition', {
			enumerable: true,
			get: () => this.__data.definitionTriggerDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let TriggerDefinition = require('./triggerdefinition.js');
				this.__data.definitionTriggerDefinition = new TriggerDefinition(value);
			},
		});

		Object.defineProperty(this, 'usageContext', {
			enumerable: true,
			get: () => this.__data.usageContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.usageContext = Array.isArray(value)
					? value.map(v => new UsageContext(v))
					: [new UsageContext(value)];
			},
		});

		Object.defineProperty(this, '_exclude', {
			enumerable: true,
			get: () => this.__data._exclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exclude = new Element(value);
			},
		});

		Object.defineProperty(this, 'exclude', {
			enumerable: true,
			get: () => this.__data.exclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exclude = value;
			},
		});

		Object.defineProperty(this, '_participantEffectiveDateTime', {
			enumerable: true,
			get: () => this.__data._participantEffectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._participantEffectiveDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'participantEffectiveDateTime', {
			enumerable: true,
			get: () => this.__data.participantEffectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.participantEffectiveDateTime = value;
			},
		});

		Object.defineProperty(this, 'participantEffectivePeriod', {
			enumerable: true,
			get: () => this.__data.participantEffectivePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.participantEffectivePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'participantEffectiveDuration', {
			enumerable: true,
			get: () => this.__data.participantEffectiveDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.participantEffectiveDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, 'participantEffectiveTiming', {
			enumerable: true,
			get: () => this.__data.participantEffectiveTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.participantEffectiveTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'timeFromStart', {
			enumerable: true,
			get: () => this.__data.timeFromStart,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.timeFromStart = new Duration(value);
			},
		});

		Object.defineProperty(this, '_groupMeasure', {
			enumerable: true,
			get: () => this.__data._groupMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._groupMeasure = new Element(value);
			},
		});

		Object.defineProperty(this, 'groupMeasure', {
			enumerable: true,
			get: () => this.__data.groupMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.groupMeasure = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EvidenceVariableCharacteristic',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EvidenceVariableCharacteristic';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			definitionReference: this.definitionReference && this.definitionReference.toJSON(),
			_definitionCanonical: this._definitionCanonical && this._definitionCanonical.toJSON(),
			definitionCanonical: this.definitionCanonical,
			definitionCodeableConcept: this.definitionCodeableConcept && this.definitionCodeableConcept.toJSON(),
			definitionExpression: this.definitionExpression && this.definitionExpression.toJSON(),
			definitionDataRequirement: this.definitionDataRequirement && this.definitionDataRequirement.toJSON(),
			definitionTriggerDefinition: this.definitionTriggerDefinition && this.definitionTriggerDefinition.toJSON(),
			usageContext: this.usageContext && this.usageContext.map(v => v.toJSON()),
			_exclude: this._exclude && this._exclude.toJSON(),
			exclude: this.exclude,
			_participantEffectiveDateTime: this._participantEffectiveDateTime && this._participantEffectiveDateTime.toJSON(),
			participantEffectiveDateTime: this.participantEffectiveDateTime,
			participantEffectivePeriod: this.participantEffectivePeriod && this.participantEffectivePeriod.toJSON(),
			participantEffectiveDuration: this.participantEffectiveDuration && this.participantEffectiveDuration.toJSON(),
			participantEffectiveTiming: this.participantEffectiveTiming && this.participantEffectiveTiming.toJSON(),
			timeFromStart: this.timeFromStart && this.timeFromStart.toJSON(),
			_groupMeasure: this._groupMeasure && this._groupMeasure.toJSON(),
			groupMeasure: this.groupMeasure,
		};
	}
};
