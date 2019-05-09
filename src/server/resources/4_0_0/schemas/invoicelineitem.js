/**
 * @name exports
 * @summary InvoiceLineItem Class
 */
module.exports = class InvoiceLineItem {
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

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
			},
		});

		Object.defineProperty(this, 'chargeItemReference', {
			enumerable: true,
			get: () => this.__data.chargeItemReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.chargeItemReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'chargeItemCodeableConcept', {
			enumerable: true,
			get: () => this.__data.chargeItemCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.chargeItemCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'priceComponent', {
			enumerable: true,
			get: () => this.__data.priceComponent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InvoiceLineItemPriceComponent = require('./invoicelineitempricecomponent.js');
				this.__data.priceComponent = Array.isArray(value)
					? value.map(v => new InvoiceLineItemPriceComponent(v))
					: [new InvoiceLineItemPriceComponent(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'InvoiceLineItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'InvoiceLineItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			chargeItemReference: this.chargeItemReference && this.chargeItemReference.toJSON(),
			chargeItemCodeableConcept: this.chargeItemCodeableConcept && this.chargeItemCodeableConcept.toJSON(),
			priceComponent: this.priceComponent && this.priceComponent.map(v => v.toJSON()),
		};
	}
};
