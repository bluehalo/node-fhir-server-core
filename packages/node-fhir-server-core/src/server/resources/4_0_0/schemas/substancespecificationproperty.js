/**
 * @name exports
 * @summary SubstanceSpecificationProperty Class
 */
module.exports = class SubstanceSpecificationProperty {
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

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.code = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_parameters', {
			enumerable: true,
			get: () => this.__data._parameters,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._parameters = new Element(value);
			},
		});

		Object.defineProperty(this, 'parameters', {
			enumerable: true,
			get: () => this.__data.parameters,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.parameters = value;
			},
		});

		Object.defineProperty(this, 'definingSubstanceReference', {
			enumerable: true,
			get: () => this.__data.definingSubstanceReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.definingSubstanceReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'definingSubstanceCodeableConcept', {
			enumerable: true,
			get: () => this.__data.definingSubstanceCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.definingSubstanceCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'amountQuantity', {
			enumerable: true,
			get: () => this.__data.amountQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.amountQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_amountString', {
			enumerable: true,
			get: () => this.__data._amountString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._amountString = new Element(value);
			},
		});

		Object.defineProperty(this, 'amountString', {
			enumerable: true,
			get: () => this.__data.amountString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.amountString = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecificationProperty',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecificationProperty';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			category: this.category && this.category.toJSON(),
			code: this.code && this.code.toJSON(),
			_parameters: this._parameters && this._parameters.toJSON(),
			parameters: this.parameters,
			definingSubstanceReference: this.definingSubstanceReference && this.definingSubstanceReference.toJSON(),
			definingSubstanceCodeableConcept:
				this.definingSubstanceCodeableConcept && this.definingSubstanceCodeableConcept.toJSON(),
			amountQuantity: this.amountQuantity && this.amountQuantity.toJSON(),
			_amountString: this._amountString && this._amountString.toJSON(),
			amountString: this.amountString,
		};
	}
};
