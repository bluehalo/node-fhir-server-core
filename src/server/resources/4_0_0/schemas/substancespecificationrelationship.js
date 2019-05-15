/**
 * @name exports
 * @summary SubstanceSpecificationRelationship Class
 */
module.exports = class SubstanceSpecificationRelationship {
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

		Object.defineProperty(this, 'substanceReference', {
			enumerable: true,
			get: () => this.__data.substanceReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.substanceReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'substanceCodeableConcept', {
			enumerable: true,
			get: () => this.__data.substanceCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.substanceCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'relationship', {
			enumerable: true,
			get: () => this.__data.relationship,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.relationship = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_isDefining', {
			enumerable: true,
			get: () => this.__data._isDefining,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._isDefining = new Element(value);
			},
		});

		Object.defineProperty(this, 'isDefining', {
			enumerable: true,
			get: () => this.__data.isDefining,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.isDefining = value;
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

		Object.defineProperty(this, 'amountRange', {
			enumerable: true,
			get: () => this.__data.amountRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.amountRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'amountRatio', {
			enumerable: true,
			get: () => this.__data.amountRatio,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.amountRatio = new Ratio(value);
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

		Object.defineProperty(this, 'amountRatioLowLimit', {
			enumerable: true,
			get: () => this.__data.amountRatioLowLimit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Ratio = require('./ratio.js');
				this.__data.amountRatioLowLimit = new Ratio(value);
			},
		});

		Object.defineProperty(this, 'amountType', {
			enumerable: true,
			get: () => this.__data.amountType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.amountType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'source', {
			enumerable: true,
			get: () => this.__data.source,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.source = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceSpecificationRelationship',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceSpecificationRelationship';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			substanceReference: this.substanceReference && this.substanceReference.toJSON(),
			substanceCodeableConcept: this.substanceCodeableConcept && this.substanceCodeableConcept.toJSON(),
			relationship: this.relationship && this.relationship.toJSON(),
			_isDefining: this._isDefining && this._isDefining.toJSON(),
			isDefining: this.isDefining,
			amountQuantity: this.amountQuantity && this.amountQuantity.toJSON(),
			amountRange: this.amountRange && this.amountRange.toJSON(),
			amountRatio: this.amountRatio && this.amountRatio.toJSON(),
			_amountString: this._amountString && this._amountString.toJSON(),
			amountString: this.amountString,
			amountRatioLowLimit: this.amountRatioLowLimit && this.amountRatioLowLimit.toJSON(),
			amountType: this.amountType && this.amountType.toJSON(),
			source: this.source && this.source.map(v => v.toJSON()),
		};
	}
};
