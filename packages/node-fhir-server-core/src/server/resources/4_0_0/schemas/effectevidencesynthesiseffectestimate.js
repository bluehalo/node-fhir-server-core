/**
 * @name exports
 * @summary EffectEvidenceSynthesisEffectEstimate Class
 */
module.exports = class EffectEvidenceSynthesisEffectEstimate {
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

		Object.defineProperty(this, 'variantState', {
			enumerable: true,
			get: () => this.__data.variantState,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.variantState = new CodeableConcept(value);
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

		Object.defineProperty(this, 'precisionEstimate', {
			enumerable: true,
			get: () => this.__data.precisionEstimate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EffectEvidenceSynthesisEffectEstimatePrecisionEstimate = require('./effectevidencesynthesiseffectestimateprecisionestimate.js');
				this.__data.precisionEstimate = Array.isArray(value)
					? value.map(v => new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(v))
					: [new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EffectEvidenceSynthesisEffectEstimate',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EffectEvidenceSynthesisEffectEstimate';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			type: this.type && this.type.toJSON(),
			variantState: this.variantState && this.variantState.toJSON(),
			_value: this._value && this._value.toJSON(),
			value: this.value,
			unitOfMeasure: this.unitOfMeasure && this.unitOfMeasure.toJSON(),
			precisionEstimate: this.precisionEstimate && this.precisionEstimate.map(v => v.toJSON()),
		};
	}
};
