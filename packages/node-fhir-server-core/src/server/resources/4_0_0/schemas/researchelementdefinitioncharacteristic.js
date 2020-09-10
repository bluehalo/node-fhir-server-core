/**
 * @name exports
 * @summary ResearchElementDefinitionCharacteristic Class
 */
module.exports = class ResearchElementDefinitionCharacteristic {
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

		Object.defineProperty(this, 'unitOfMeasure', {
			enumerable: true,
			get: () => this.__data.unitOfMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.unitOfMeasure = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_studyEffectiveDescription', {
			enumerable: true,
			get: () => this.__data._studyEffectiveDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._studyEffectiveDescription = new Element(value);
			},
		});

		Object.defineProperty(this, 'studyEffectiveDescription', {
			enumerable: true,
			get: () => this.__data.studyEffectiveDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.studyEffectiveDescription = value;
			},
		});

		Object.defineProperty(this, '_studyEffectiveDateTime', {
			enumerable: true,
			get: () => this.__data._studyEffectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._studyEffectiveDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'studyEffectiveDateTime', {
			enumerable: true,
			get: () => this.__data.studyEffectiveDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.studyEffectiveDateTime = value;
			},
		});

		Object.defineProperty(this, 'studyEffectivePeriod', {
			enumerable: true,
			get: () => this.__data.studyEffectivePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.studyEffectivePeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'studyEffectiveDuration', {
			enumerable: true,
			get: () => this.__data.studyEffectiveDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.studyEffectiveDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, 'studyEffectiveTiming', {
			enumerable: true,
			get: () => this.__data.studyEffectiveTiming,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.studyEffectiveTiming = new Timing(value);
			},
		});

		Object.defineProperty(this, 'studyEffectiveTimeFromStart', {
			enumerable: true,
			get: () => this.__data.studyEffectiveTimeFromStart,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.studyEffectiveTimeFromStart = new Duration(value);
			},
		});

		Object.defineProperty(this, '_studyEffectiveGroupMeasure', {
			enumerable: true,
			get: () => this.__data._studyEffectiveGroupMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._studyEffectiveGroupMeasure = new Element(value);
			},
		});

		Object.defineProperty(this, 'studyEffectiveGroupMeasure', {
			enumerable: true,
			get: () => this.__data.studyEffectiveGroupMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.studyEffectiveGroupMeasure = value;
			},
		});

		Object.defineProperty(this, '_participantEffectiveDescription', {
			enumerable: true,
			get: () => this.__data._participantEffectiveDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._participantEffectiveDescription = new Element(value);
			},
		});

		Object.defineProperty(this, 'participantEffectiveDescription', {
			enumerable: true,
			get: () => this.__data.participantEffectiveDescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.participantEffectiveDescription = value;
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

		Object.defineProperty(this, 'participantEffectiveTimeFromStart', {
			enumerable: true,
			get: () => this.__data.participantEffectiveTimeFromStart,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.participantEffectiveTimeFromStart = new Duration(value);
			},
		});

		Object.defineProperty(this, '_participantEffectiveGroupMeasure', {
			enumerable: true,
			get: () => this.__data._participantEffectiveGroupMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._participantEffectiveGroupMeasure = new Element(value);
			},
		});

		Object.defineProperty(this, 'participantEffectiveGroupMeasure', {
			enumerable: true,
			get: () => this.__data.participantEffectiveGroupMeasure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.participantEffectiveGroupMeasure = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ResearchElementDefinitionCharacteristic',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ResearchElementDefinitionCharacteristic';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			definitionCodeableConcept: this.definitionCodeableConcept && this.definitionCodeableConcept.toJSON(),
			_definitionCanonical: this._definitionCanonical && this._definitionCanonical.toJSON(),
			definitionCanonical: this.definitionCanonical,
			definitionExpression: this.definitionExpression && this.definitionExpression.toJSON(),
			definitionDataRequirement: this.definitionDataRequirement && this.definitionDataRequirement.toJSON(),
			usageContext: this.usageContext && this.usageContext.map(v => v.toJSON()),
			_exclude: this._exclude && this._exclude.toJSON(),
			exclude: this.exclude,
			unitOfMeasure: this.unitOfMeasure && this.unitOfMeasure.toJSON(),
			_studyEffectiveDescription: this._studyEffectiveDescription && this._studyEffectiveDescription.toJSON(),
			studyEffectiveDescription: this.studyEffectiveDescription,
			_studyEffectiveDateTime: this._studyEffectiveDateTime && this._studyEffectiveDateTime.toJSON(),
			studyEffectiveDateTime: this.studyEffectiveDateTime,
			studyEffectivePeriod: this.studyEffectivePeriod && this.studyEffectivePeriod.toJSON(),
			studyEffectiveDuration: this.studyEffectiveDuration && this.studyEffectiveDuration.toJSON(),
			studyEffectiveTiming: this.studyEffectiveTiming && this.studyEffectiveTiming.toJSON(),
			studyEffectiveTimeFromStart: this.studyEffectiveTimeFromStart && this.studyEffectiveTimeFromStart.toJSON(),
			_studyEffectiveGroupMeasure: this._studyEffectiveGroupMeasure && this._studyEffectiveGroupMeasure.toJSON(),
			studyEffectiveGroupMeasure: this.studyEffectiveGroupMeasure,
			_participantEffectiveDescription:
				this._participantEffectiveDescription && this._participantEffectiveDescription.toJSON(),
			participantEffectiveDescription: this.participantEffectiveDescription,
			_participantEffectiveDateTime: this._participantEffectiveDateTime && this._participantEffectiveDateTime.toJSON(),
			participantEffectiveDateTime: this.participantEffectiveDateTime,
			participantEffectivePeriod: this.participantEffectivePeriod && this.participantEffectivePeriod.toJSON(),
			participantEffectiveDuration: this.participantEffectiveDuration && this.participantEffectiveDuration.toJSON(),
			participantEffectiveTiming: this.participantEffectiveTiming && this.participantEffectiveTiming.toJSON(),
			participantEffectiveTimeFromStart:
				this.participantEffectiveTimeFromStart && this.participantEffectiveTimeFromStart.toJSON(),
			_participantEffectiveGroupMeasure:
				this._participantEffectiveGroupMeasure && this._participantEffectiveGroupMeasure.toJSON(),
			participantEffectiveGroupMeasure: this.participantEffectiveGroupMeasure,
		};
	}
};
