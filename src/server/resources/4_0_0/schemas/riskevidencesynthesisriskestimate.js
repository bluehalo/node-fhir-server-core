/**
 * @name exports
 * @summary RiskEvidenceSynthesisRiskEstimate Class
 */
module.exports = class RiskEvidenceSynthesisRiskEstimate {
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

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_value', {
			enumerable: true,
			get: () => this.__data._value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._value = new Element(value);
			},
		});

		Object.defineProperty(this, 'value', {
			enumerable: true,
			get: () => this.__data.value,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.value = value;
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

		Object.defineProperty(this, '_denominatorCount', {
			enumerable: true,
			get: () => this.__data._denominatorCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._denominatorCount = new Element(value);
			},
		});

		Object.defineProperty(this, 'denominatorCount', {
			enumerable: true,
			get: () => this.__data.denominatorCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.denominatorCount = value;
			},
		});

		Object.defineProperty(this, '_numeratorCount', {
			enumerable: true,
			get: () => this.__data._numeratorCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numeratorCount = new Element(value);
			},
		});

		Object.defineProperty(this, 'numeratorCount', {
			enumerable: true,
			get: () => this.__data.numeratorCount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numeratorCount = value;
			},
		});

		Object.defineProperty(this, 'precisionEstimate', {
			enumerable: true,
			get: () => this.__data.precisionEstimate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let RiskEvidenceSynthesisRiskEstimatePrecisionEstimate = require('./riskevidencesynthesisriskestimateprecisionestimate.js');
				this.__data.precisionEstimate = Array.isArray(value)
					? value.map(v => new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(v))
					: [new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'RiskEvidenceSynthesisRiskEstimate',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'RiskEvidenceSynthesisRiskEstimate';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			type: this.type && this.type.toJSON(),
			_value: this._value && this._value.toJSON(),
			value: this.value,
			unitOfMeasure: this.unitOfMeasure && this.unitOfMeasure.toJSON(),
			_denominatorCount: this._denominatorCount && this._denominatorCount.toJSON(),
			denominatorCount: this.denominatorCount,
			_numeratorCount: this._numeratorCount && this._numeratorCount.toJSON(),
			numeratorCount: this.numeratorCount,
			precisionEstimate: this.precisionEstimate && this.precisionEstimate.map(v => v.toJSON()),
		};
	}
};
