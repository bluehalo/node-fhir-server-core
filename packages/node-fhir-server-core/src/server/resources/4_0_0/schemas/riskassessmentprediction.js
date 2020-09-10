/**
 * @name exports
 * @summary RiskAssessmentPrediction Class
 */
module.exports = class RiskAssessmentPrediction {
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

		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.outcome = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_probabilityDecimal', {
			enumerable: true,
			get: () => this.__data._probabilityDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._probabilityDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'probabilityDecimal', {
			enumerable: true,
			get: () => this.__data.probabilityDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.probabilityDecimal = value;
			},
		});

		Object.defineProperty(this, 'probabilityRange', {
			enumerable: true,
			get: () => this.__data.probabilityRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.probabilityRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'qualitativeRisk', {
			enumerable: true,
			get: () => this.__data.qualitativeRisk,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.qualitativeRisk = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_relativeRisk', {
			enumerable: true,
			get: () => this.__data._relativeRisk,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._relativeRisk = new Element(value);
			},
		});

		Object.defineProperty(this, 'relativeRisk', {
			enumerable: true,
			get: () => this.__data.relativeRisk,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.relativeRisk = value;
			},
		});

		Object.defineProperty(this, 'whenPeriod', {
			enumerable: true,
			get: () => this.__data.whenPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.whenPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'whenRange', {
			enumerable: true,
			get: () => this.__data.whenRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.whenRange = new Range(value);
			},
		});

		Object.defineProperty(this, '_rationale', {
			enumerable: true,
			get: () => this.__data._rationale,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._rationale = new Element(value);
			},
		});

		Object.defineProperty(this, 'rationale', {
			enumerable: true,
			get: () => this.__data.rationale,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.rationale = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'RiskAssessmentPrediction',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'RiskAssessmentPrediction';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			outcome: this.outcome && this.outcome.toJSON(),
			_probabilityDecimal: this._probabilityDecimal && this._probabilityDecimal.toJSON(),
			probabilityDecimal: this.probabilityDecimal,
			probabilityRange: this.probabilityRange && this.probabilityRange.toJSON(),
			qualitativeRisk: this.qualitativeRisk && this.qualitativeRisk.toJSON(),
			_relativeRisk: this._relativeRisk && this._relativeRisk.toJSON(),
			relativeRisk: this.relativeRisk,
			whenPeriod: this.whenPeriod && this.whenPeriod.toJSON(),
			whenRange: this.whenRange && this.whenRange.toJSON(),
			_rationale: this._rationale && this._rationale.toJSON(),
			rationale: this.rationale,
		};
	}
};
