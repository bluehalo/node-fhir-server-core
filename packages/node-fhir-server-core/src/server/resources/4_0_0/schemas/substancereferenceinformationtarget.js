/**
 * @name exports
 * @summary SubstanceReferenceInformationTarget Class
 */
module.exports = class SubstanceReferenceInformationTarget {
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

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.target = new Identifier(value);
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

		Object.defineProperty(this, 'interaction', {
			enumerable: true,
			get: () => this.__data.interaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.interaction = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'organism', {
			enumerable: true,
			get: () => this.__data.organism,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.organism = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'organismType', {
			enumerable: true,
			get: () => this.__data.organismType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.organismType = new CodeableConcept(value);
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
			value: 'SubstanceReferenceInformationTarget',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceReferenceInformationTarget';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			target: this.target && this.target.toJSON(),
			type: this.type && this.type.toJSON(),
			interaction: this.interaction && this.interaction.toJSON(),
			organism: this.organism && this.organism.toJSON(),
			organismType: this.organismType && this.organismType.toJSON(),
			amountQuantity: this.amountQuantity && this.amountQuantity.toJSON(),
			amountRange: this.amountRange && this.amountRange.toJSON(),
			_amountString: this._amountString && this._amountString.toJSON(),
			amountString: this.amountString,
			amountType: this.amountType && this.amountType.toJSON(),
			source: this.source && this.source.map(v => v.toJSON()),
		};
	}
};
