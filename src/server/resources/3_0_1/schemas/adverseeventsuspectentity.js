/**
 * @name exports
 * @summary AdverseEventSuspectEntity Class
 */
module.exports = class AdverseEventSuspectEntity {
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

		Object.defineProperty(this, 'instance', {
			enumerable: true,
			get: () => this.__data.instance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.instance = new Reference(value);
			},
		});

		Object.defineProperty(this, '_causality', {
			enumerable: true,
			get: () => this.__data._causality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._causality = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality
		Object.defineProperty(this, 'causality', {
			enumerable: true,
			get: () => this.__data.causality,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.causality = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
		Object.defineProperty(this, 'causalityAssessment', {
			enumerable: true,
			get: () => this.__data.causalityAssessment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.causalityAssessment = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_causalityProductRelatedness', {
			enumerable: true,
			get: () => this.__data._causalityProductRelatedness,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._causalityProductRelatedness = new Element(value);
			},
		});

		Object.defineProperty(this, 'causalityProductRelatedness', {
			enumerable: true,
			get: () => this.__data.causalityProductRelatedness,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.causalityProductRelatedness = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-method
		Object.defineProperty(this, 'causalityMethod', {
			enumerable: true,
			get: () => this.__data.causalityMethod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.causalityMethod = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'causalityAuthor', {
			enumerable: true,
			get: () => this.__data.causalityAuthor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.causalityAuthor = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/adverse-event-causality-result
		Object.defineProperty(this, 'causalityResult', {
			enumerable: true,
			get: () => this.__data.causalityResult,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.causalityResult = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AdverseEventSuspectEntity',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AdverseEventSuspectEntity';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			instance: this.instance && this.instance.toJSON(),
			_causality: this._causality && this._causality.toJSON(),
			causality: this.causality,
			causalityAssessment: this.causalityAssessment && this.causalityAssessment.toJSON(),
			_causalityProductRelatedness: this._causalityProductRelatedness && this._causalityProductRelatedness.toJSON(),
			causalityProductRelatedness: this.causalityProductRelatedness,
			causalityMethod: this.causalityMethod && this.causalityMethod.toJSON(),
			causalityAuthor: this.causalityAuthor && this.causalityAuthor.toJSON(),
			causalityResult: this.causalityResult && this.causalityResult.toJSON(),
		};
	}
};
