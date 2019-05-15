/**
 * @name exports
 * @summary ContractTermAssetValuedItem Class
 */
module.exports = class ContractTermAssetValuedItem {
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

		Object.defineProperty(this, 'entityCodeableConcept', {
			enumerable: true,
			get: () => this.__data.entityCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.entityCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'entityReference', {
			enumerable: true,
			get: () => this.__data.entityReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.entityReference = new Reference(value);
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
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_effectiveTime', {
			enumerable: true,
			get: () => this.__data._effectiveTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._effectiveTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'effectiveTime', {
			enumerable: true,
			get: () => this.__data.effectiveTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.effectiveTime = value;
			},
		});

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'unitPrice', {
			enumerable: true,
			get: () => this.__data.unitPrice,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.unitPrice = new Money(value);
			},
		});

		Object.defineProperty(this, '_factor', {
			enumerable: true,
			get: () => this.__data._factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._factor = new Element(value);
			},
		});

		Object.defineProperty(this, 'factor', {
			enumerable: true,
			get: () => this.__data.factor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.factor = value;
			},
		});

		Object.defineProperty(this, '_points', {
			enumerable: true,
			get: () => this.__data._points,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._points = new Element(value);
			},
		});

		Object.defineProperty(this, 'points', {
			enumerable: true,
			get: () => this.__data.points,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.points = value;
			},
		});

		Object.defineProperty(this, 'net', {
			enumerable: true,
			get: () => this.__data.net,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.net = new Money(value);
			},
		});

		Object.defineProperty(this, '_payment', {
			enumerable: true,
			get: () => this.__data._payment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._payment = new Element(value);
			},
		});

		Object.defineProperty(this, 'payment', {
			enumerable: true,
			get: () => this.__data.payment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.payment = value;
			},
		});

		Object.defineProperty(this, '_paymentDate', {
			enumerable: true,
			get: () => this.__data._paymentDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._paymentDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'paymentDate', {
			enumerable: true,
			get: () => this.__data.paymentDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.paymentDate = value;
			},
		});

		Object.defineProperty(this, 'responsible', {
			enumerable: true,
			get: () => this.__data.responsible,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.responsible = new Reference(value);
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

		Object.defineProperty(this, '_linkId', {
			enumerable: true,
			get: () => this.__data._linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._linkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'linkId', {
			enumerable: true,
			get: () => this.__data.linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.linkId = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_securityLabelNumber', {
			enumerable: true,
			get: () => this.__data._securityLabelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._securityLabelNumber = new Element(value);
			},
		});

		Object.defineProperty(this, 'securityLabelNumber', {
			enumerable: true,
			get: () => this.__data.securityLabelNumber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.securityLabelNumber = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ContractTermAssetValuedItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ContractTermAssetValuedItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			entityCodeableConcept: this.entityCodeableConcept && this.entityCodeableConcept.toJSON(),
			entityReference: this.entityReference && this.entityReference.toJSON(),
			identifier: this.identifier && this.identifier.toJSON(),
			_effectiveTime: this._effectiveTime && this._effectiveTime.toJSON(),
			effectiveTime: this.effectiveTime,
			quantity: this.quantity && this.quantity.toJSON(),
			unitPrice: this.unitPrice && this.unitPrice.toJSON(),
			_factor: this._factor && this._factor.toJSON(),
			factor: this.factor,
			_points: this._points && this._points.toJSON(),
			points: this.points,
			net: this.net && this.net.toJSON(),
			_payment: this._payment && this._payment.toJSON(),
			payment: this.payment,
			_paymentDate: this._paymentDate && this._paymentDate.toJSON(),
			paymentDate: this.paymentDate,
			responsible: this.responsible && this.responsible.toJSON(),
			recipient: this.recipient && this.recipient.toJSON(),
			_linkId: this._linkId && this._linkId.toJSON(),
			linkId: this.linkId,
			_securityLabelNumber: this._securityLabelNumber && this._securityLabelNumber.toJSON(),
			securityLabelNumber: this.securityLabelNumber,
		};
	}
};
