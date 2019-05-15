/**
 * @name exports
 * @summary ClinicalImpressionFinding Class
 */
module.exports = class ClinicalImpressionFinding {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		Object.defineProperty(this, 'itemCodeableConcept', {
			enumerable: true,
			get: () => this.__data.itemCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.itemCodeableConcept = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		Object.defineProperty(this, 'itemReference', {
			enumerable: true,
			get: () => this.__data.itemReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.itemReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_basis', {
			enumerable: true,
			get: () => this.__data._basis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._basis = new Element(value);
			},
		});

		Object.defineProperty(this, 'basis', {
			enumerable: true,
			get: () => this.__data.basis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.basis = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClinicalImpressionFinding',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClinicalImpressionFinding';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			itemCodeableConcept: this.itemCodeableConcept && this.itemCodeableConcept.toJSON(),
			itemReference: this.itemReference && this.itemReference.toJSON(),
			_basis: this._basis && this._basis.toJSON(),
			basis: this.basis,
		};
	}
};
