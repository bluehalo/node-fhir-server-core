/**
 * @name exports
 * @summary ClaimResponse Class
 */
module.exports = class ClaimResponse {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/fm-status
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

		Object.defineProperty(this, 'patient', {
			enumerable: true,
			get: () => this.__data.patient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.patient = new Reference(value);
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

		Object.defineProperty(this, 'insurer', {
			enumerable: true,
			get: () => this.__data.insurer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.insurer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'requestProvider', {
			enumerable: true,
			get: () => this.__data.requestProvider,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.requestProvider = new Reference(value);
			},
		});

		Object.defineProperty(this, 'requestOrganization', {
			enumerable: true,
			get: () => this.__data.requestOrganization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.requestOrganization = new Reference(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		Object.defineProperty(this, 'outcome', {
			enumerable: true,
			get: () => this.__data.outcome,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.outcome = new CodeableConcept(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		Object.defineProperty(this, 'payeeType', {
			enumerable: true,
			get: () => this.__data.payeeType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.payeeType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'item', {
			enumerable: true,
			get: () => this.__data.item,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseItem = require('./claimresponseitem.js');
				this.__data.item = Array.isArray(value)
					? value.map(v => new ClaimResponseItem(v))
					: [new ClaimResponseItem(value)];
			},
		});

		Object.defineProperty(this, 'addItem', {
			enumerable: true,
			get: () => this.__data.addItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseAddItem = require('./claimresponseadditem.js');
				this.__data.addItem = Array.isArray(value)
					? value.map(v => new ClaimResponseAddItem(v))
					: [new ClaimResponseAddItem(value)];
			},
		});

		Object.defineProperty(this, 'error', {
			enumerable: true,
			get: () => this.__data.error,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseError = require('./claimresponseerror.js');
				this.__data.error = Array.isArray(value)
					? value.map(v => new ClaimResponseError(v))
					: [new ClaimResponseError(value)];
			},
		});

		Object.defineProperty(this, 'totalCost', {
			enumerable: true,
			get: () => this.__data.totalCost,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.totalCost = new Money(value);
			},
		});

		Object.defineProperty(this, 'unallocDeductable', {
			enumerable: true,
			get: () => this.__data.unallocDeductable,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.unallocDeductable = new Money(value);
			},
		});

		Object.defineProperty(this, 'totalBenefit', {
			enumerable: true,
			get: () => this.__data.totalBenefit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.totalBenefit = new Money(value);
			},
		});

		Object.defineProperty(this, 'payment', {
			enumerable: true,
			get: () => this.__data.payment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponsePayment = require('./claimresponsepayment.js');
				this.__data.payment = new ClaimResponsePayment(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		Object.defineProperty(this, 'reserved', {
			enumerable: true,
			get: () => this.__data.reserved,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.reserved = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/forms
		Object.defineProperty(this, 'form', {
			enumerable: true,
			get: () => this.__data.form,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.form = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'processNote', {
			enumerable: true,
			get: () => this.__data.processNote,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseProcessNote = require('./claimresponseprocessnote.js');
				this.__data.processNote = Array.isArray(value)
					? value.map(v => new ClaimResponseProcessNote(v))
					: [new ClaimResponseProcessNote(value)];
			},
		});

		Object.defineProperty(this, 'communicationRequest', {
			enumerable: true,
			get: () => this.__data.communicationRequest,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.communicationRequest = Array.isArray(value)
					? value.map(v => new Reference(v))
					: [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'insurance', {
			enumerable: true,
			get: () => this.__data.insurance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimResponseInsurance = require('./claimresponseinsurance.js');
				this.__data.insurance = Array.isArray(value)
					? value.map(v => new ClaimResponseInsurance(v))
					: [new ClaimResponseInsurance(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ClaimResponse',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ClaimResponse';
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
			patient: this.patient && this.patient.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			insurer: this.insurer && this.insurer.toJSON(),
			requestProvider: this.requestProvider && this.requestProvider.toJSON(),
			requestOrganization: this.requestOrganization && this.requestOrganization.toJSON(),
			request: this.request && this.request.toJSON(),
			outcome: this.outcome && this.outcome.toJSON(),
			_disposition: this._disposition && this._disposition.toJSON(),
			disposition: this.disposition,
			payeeType: this.payeeType && this.payeeType.toJSON(),
			item: this.item && this.item.map(v => v.toJSON()),
			addItem: this.addItem && this.addItem.map(v => v.toJSON()),
			error: this.error && this.error.map(v => v.toJSON()),
			totalCost: this.totalCost && this.totalCost.toJSON(),
			unallocDeductable: this.unallocDeductable && this.unallocDeductable.toJSON(),
			totalBenefit: this.totalBenefit && this.totalBenefit.toJSON(),
			payment: this.payment && this.payment.toJSON(),
			reserved: this.reserved && this.reserved.toJSON(),
			form: this.form && this.form.toJSON(),
			processNote: this.processNote && this.processNote.map(v => v.toJSON()),
			communicationRequest: this.communicationRequest && this.communicationRequest.map(v => v.toJSON()),
			insurance: this.insurance && this.insurance.map(v => v.toJSON()),
		};
	}
};
