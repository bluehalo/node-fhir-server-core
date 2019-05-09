/**
 * @name exports
 * @summary PaymentReconciliation Class
 */
module.exports = class PaymentReconciliation {
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

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.period = new Period(value);
			},
		});

		Object.defineProperty(this, '_created', {
			enumerable: true,
			get: () => this.__data._created,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._created = new Element(value);
			},
		});

		Object.defineProperty(this, 'created', {
			enumerable: true,
			get: () => this.__data.created,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.created = value;
			},
		});

		Object.defineProperty(this, 'paymentIssuer', {
			enumerable: true,
			get: () => this.__data.paymentIssuer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.paymentIssuer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'request', {
			enumerable: true,
			get: () => this.__data.request,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.request = new Reference(value);
			},
		});

		Object.defineProperty(this, 'requestor', {
			enumerable: true,
			get: () => this.__data.requestor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.requestor = new Reference(value);
			},
		});

		Object.defineProperty(this, '_outcome', {
			enumerable: true,
			get: () => this.__data._outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._outcome = new Element(value);
			},
		});

		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.outcome = value;
			},
		});

		Object.defineProperty(this, '_disposition', {
			enumerable: true,
			get: () => this.__data._disposition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._disposition = new Element(value);
			},
		});

		Object.defineProperty(this, 'disposition', {
			enumerable: true,
			get: () => this.__data.disposition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.disposition = value;
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

		Object.defineProperty(this, 'paymentAmount', {
			enumerable: true,
			get: () => this.__data.paymentAmount,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.paymentAmount = new Money(value);
			},
		});

		Object.defineProperty(this, 'paymentIdentifier', {
			enumerable: true,
			get: () => this.__data.paymentIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.paymentIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'detail', {
			enumerable: true,
			get: () => this.__data.detail,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let PaymentReconciliationDetail = require('./paymentreconciliationdetail.js');
				this.__data.detail = Array.isArray(value)
					? value.map(v => new PaymentReconciliationDetail(v))
					: [new PaymentReconciliationDetail(value)];
			},
		});

		Object.defineProperty(this, 'formCode', {
			enumerable: true,
			get: () => this.__data.formCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.formCode = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'processNote', {
			enumerable: true,
			get: () => this.__data.processNote,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let PaymentReconciliationProcessNote = require('./paymentreconciliationprocessnote.js');
				this.__data.processNote = Array.isArray(value)
					? value.map(v => new PaymentReconciliationProcessNote(v))
					: [new PaymentReconciliationProcessNote(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'PaymentReconciliation',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'PaymentReconciliation';
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
			period: this.period && this.period.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			paymentIssuer: this.paymentIssuer && this.paymentIssuer.toJSON(),
			request: this.request && this.request.toJSON(),
			requestor: this.requestor && this.requestor.toJSON(),
			_outcome: this._outcome && this._outcome.toJSON(),
			outcome: this.outcome,
			_disposition: this._disposition && this._disposition.toJSON(),
			disposition: this.disposition,
			_paymentDate: this._paymentDate && this._paymentDate.toJSON(),
			paymentDate: this.paymentDate,
			paymentAmount: this.paymentAmount && this.paymentAmount.toJSON(),
			paymentIdentifier: this.paymentIdentifier && this.paymentIdentifier.toJSON(),
			detail: this.detail && this.detail.map(v => v.toJSON()),
			formCode: this.formCode && this.formCode.toJSON(),
			processNote: this.processNote && this.processNote.map(v => v.toJSON()),
		};
	}
};
