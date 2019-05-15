/**
 * @name exports
 * @summary EffectEvidenceSynthesisResultsByExposure Class
 */
module.exports = class EffectEvidenceSynthesisResultsByExposure {
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

		Object.defineProperty(this, '_exposureState', {
			enumerable: true,
			get: () => this.__data._exposureState,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._exposureState = new Element(value);
			},
		});

		Object.defineProperty(this, 'exposureState', {
			enumerable: true,
			get: () => this.__data.exposureState,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.exposureState = value;
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

		Object.defineProperty(this, 'riskEvidenceSynthesis', {
			enumerable: true,
			get: () => this.__data.riskEvidenceSynthesis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.riskEvidenceSynthesis = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EffectEvidenceSynthesisResultsByExposure',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EffectEvidenceSynthesisResultsByExposure';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_exposureState: this._exposureState && this._exposureState.toJSON(),
			exposureState: this.exposureState,
			variantState: this.variantState && this.variantState.toJSON(),
			riskEvidenceSynthesis: this.riskEvidenceSynthesis && this.riskEvidenceSynthesis.toJSON(),
		};
	}
};
