/**
 * @name exports
 * @summary Invoice Class
 */
module.exports = class Invoice {
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

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, '_cancelledReason', {
			enumerable: true,
			get: () => this.__data._cancelledReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._cancelledReason = new Element(value);
			},
		});

		Object.defineProperty(this, 'cancelledReason', {
			enumerable: true,
			get: () => this.__data.cancelledReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.cancelledReason = value;
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

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
			},
		});

		Object.defineProperty(this, 'recipient', {
			enumerable: true,
			get: () => this.__data.recipient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.recipient = new Reference(value);
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
			},
		});

		Object.defineProperty(this, 'participant', {
			enumerable: true,
			get: () => this.__data.participant,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InvoiceParticipant = require('./invoiceparticipant.js');
				this.__data.participant = Array.isArray(value)
					? value.map(v => new InvoiceParticipant(v))
					: [new InvoiceParticipant(value)];
			},
		});

		Object.defineProperty(this, 'issuer', {
			enumerable: true,
			get: () => this.__data.issuer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.issuer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'account', {
			enumerable: true,
			get: () => this.__data.account,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.account = new Reference(value);
			},
		});

		Object.defineProperty(this, 'lineItem', {
			enumerable: true,
			get: () => this.__data.lineItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InvoiceLineItem = require('./invoicelineitem.js');
				this.__data.lineItem = Array.isArray(value)
					? value.map(v => new InvoiceLineItem(v))
					: [new InvoiceLineItem(value)];
			},
		});

		Object.defineProperty(this, 'totalPriceComponent', {
			enumerable: true,
			get: () => this.__data.totalPriceComponent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InvoiceLineItemPriceComponent = require('./invoicelineitempricecomponent.js');
				this.__data.totalPriceComponent = Array.isArray(value)
					? value.map(v => new InvoiceLineItemPriceComponent(v))
					: [new InvoiceLineItemPriceComponent(value)];
			},
		});

		Object.defineProperty(this, 'totalNet', {
			enumerable: true,
			get: () => this.__data.totalNet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.totalNet = new Money(value);
			},
		});

		Object.defineProperty(this, 'totalGross', {
			enumerable: true,
			get: () => this.__data.totalGross,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.totalGross = new Money(value);
			},
		});

		Object.defineProperty(this, '_paymentTerms', {
			enumerable: true,
			get: () => this.__data._paymentTerms,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._paymentTerms = new Element(value);
			},
		});

		Object.defineProperty(this, 'paymentTerms', {
			enumerable: true,
			get: () => this.__data.paymentTerms,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.paymentTerms = value;
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Invoice',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Invoice';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_cancelledReason: this._cancelledReason && this._cancelledReason.toJSON(),
			cancelledReason: this.cancelledReason,
			type: this.type && this.type.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			recipient: this.recipient && this.recipient.toJSON(),
			_date: this._date && this._date.toJSON(),
			date: this.date,
			participant: this.participant && this.participant.map(v => v.toJSON()),
			issuer: this.issuer && this.issuer.toJSON(),
			account: this.account && this.account.toJSON(),
			lineItem: this.lineItem && this.lineItem.map(v => v.toJSON()),
			totalPriceComponent: this.totalPriceComponent && this.totalPriceComponent.map(v => v.toJSON()),
			totalNet: this.totalNet && this.totalNet.toJSON(),
			totalGross: this.totalGross && this.totalGross.toJSON(),
			_paymentTerms: this._paymentTerms && this._paymentTerms.toJSON(),
			paymentTerms: this.paymentTerms,
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
