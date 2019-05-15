/**
 * @name exports
 * @summary ExplanationOfBenefit Class
 */
module.exports = class ExplanationOfBenefit {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/explanationofbenefit-status
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-type
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-subtype
		Object.defineProperty(this, 'subType', {
			enumerable: true,
			get: () => this.__data.subType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subType = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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

		Object.defineProperty(this, 'billablePeriod', {
			enumerable: true,
			get: () => this.__data.billablePeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.billablePeriod = new Period(value);
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

		Object.defineProperty(this, 'enterer', {
			enumerable: true,
			get: () => this.__data.enterer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.enterer = new Reference(value);
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

		Object.defineProperty(this, 'provider', {
			enumerable: true,
			get: () => this.__data.provider,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.provider = new Reference(value);
			},
		});

		Object.defineProperty(this, 'organization', {
			enumerable: true,
			get: () => this.__data.organization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.organization = new Reference(value);
			},
		});

		Object.defineProperty(this, 'referral', {
			enumerable: true,
			get: () => this.__data.referral,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.referral = new Reference(value);
			},
		});

		Object.defineProperty(this, 'facility', {
			enumerable: true,
			get: () => this.__data.facility,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.facility = new Reference(value);
			},
		});

		Object.defineProperty(this, 'claim', {
			enumerable: true,
			get: () => this.__data.claim,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.claim = new Reference(value);
			},
		});

		Object.defineProperty(this, 'claimResponse', {
			enumerable: true,
			get: () => this.__data.claimResponse,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.claimResponse = new Reference(value);
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

		Object.defineProperty(this, 'related', {
			enumerable: true,
			get: () => this.__data.related,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitRelated = require('./explanationofbenefitrelated.js');
				this.__data.related = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitRelated(v))
					: [new ExplanationOfBenefitRelated(value)];
			},
		});

		Object.defineProperty(this, 'prescription', {
			enumerable: true,
			get: () => this.__data.prescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.prescription = new Reference(value);
			},
		});

		Object.defineProperty(this, 'originalPrescription', {
			enumerable: true,
			get: () => this.__data.originalPrescription,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.originalPrescription = new Reference(value);
			},
		});

		Object.defineProperty(this, 'payee', {
			enumerable: true,
			get: () => this.__data.payee,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitPayee = require('./explanationofbenefitpayee.js');
				this.__data.payee = new ExplanationOfBenefitPayee(value);
			},
		});

		Object.defineProperty(this, 'information', {
			enumerable: true,
			get: () => this.__data.information,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitInformation = require('./explanationofbenefitinformation.js');
				this.__data.information = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitInformation(v))
					: [new ExplanationOfBenefitInformation(value)];
			},
		});

		Object.defineProperty(this, 'careTeam', {
			enumerable: true,
			get: () => this.__data.careTeam,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitCareTeam = require('./explanationofbenefitcareteam.js');
				this.__data.careTeam = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitCareTeam(v))
					: [new ExplanationOfBenefitCareTeam(value)];
			},
		});

		Object.defineProperty(this, 'diagnosis', {
			enumerable: true,
			get: () => this.__data.diagnosis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitDiagnosis = require('./explanationofbenefitdiagnosis.js');
				this.__data.diagnosis = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitDiagnosis(v))
					: [new ExplanationOfBenefitDiagnosis(value)];
			},
		});

		Object.defineProperty(this, 'procedure', {
			enumerable: true,
			get: () => this.__data.procedure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitProcedure = require('./explanationofbenefitprocedure.js');
				this.__data.procedure = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitProcedure(v))
					: [new ExplanationOfBenefitProcedure(value)];
			},
		});

		Object.defineProperty(this, '_precedence', {
			enumerable: true,
			get: () => this.__data._precedence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._precedence = new Element(value);
			},
		});

		Object.defineProperty(this, 'precedence', {
			enumerable: true,
			get: () => this.__data.precedence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.precedence = value;
			},
		});

		Object.defineProperty(this, 'insurance', {
			enumerable: true,
			get: () => this.__data.insurance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitInsurance = require('./explanationofbenefitinsurance.js');
				this.__data.insurance = new ExplanationOfBenefitInsurance(value);
			},
		});

		Object.defineProperty(this, 'accident', {
			enumerable: true,
			get: () => this.__data.accident,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitAccident = require('./explanationofbenefitaccident.js');
				this.__data.accident = new ExplanationOfBenefitAccident(value);
			},
		});

		Object.defineProperty(this, 'employmentImpacted', {
			enumerable: true,
			get: () => this.__data.employmentImpacted,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.employmentImpacted = new Period(value);
			},
		});

		Object.defineProperty(this, 'hospitalization', {
			enumerable: true,
			get: () => this.__data.hospitalization,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.hospitalization = new Period(value);
			},
		});

		Object.defineProperty(this, 'item', {
			enumerable: true,
			get: () => this.__data.item,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitItem = require('./explanationofbenefititem.js');
				this.__data.item = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitItem(v))
					: [new ExplanationOfBenefitItem(value)];
			},
		});

		Object.defineProperty(this, 'addItem', {
			enumerable: true,
			get: () => this.__data.addItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitAddItem = require('./explanationofbenefitadditem.js');
				this.__data.addItem = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitAddItem(v))
					: [new ExplanationOfBenefitAddItem(value)];
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

				let ExplanationOfBenefitPayment = require('./explanationofbenefitpayment.js');
				this.__data.payment = new ExplanationOfBenefitPayment(value);
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

				let ExplanationOfBenefitProcessNote = require('./explanationofbenefitprocessnote.js');
				this.__data.processNote = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitProcessNote(v))
					: [new ExplanationOfBenefitProcessNote(value)];
			},
		});

		Object.defineProperty(this, 'benefitBalance', {
			enumerable: true,
			get: () => this.__data.benefitBalance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExplanationOfBenefitBenefitBalance = require('./explanationofbenefitbenefitbalance.js');
				this.__data.benefitBalance = Array.isArray(value)
					? value.map(v => new ExplanationOfBenefitBenefitBalance(v))
					: [new ExplanationOfBenefitBenefitBalance(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExplanationOfBenefit',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExplanationOfBenefit';
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
			type: this.type && this.type.toJSON(),
			subType: this.subType && this.subType.map(v => v.toJSON()),
			patient: this.patient && this.patient.toJSON(),
			billablePeriod: this.billablePeriod && this.billablePeriod.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			enterer: this.enterer && this.enterer.toJSON(),
			insurer: this.insurer && this.insurer.toJSON(),
			provider: this.provider && this.provider.toJSON(),
			organization: this.organization && this.organization.toJSON(),
			referral: this.referral && this.referral.toJSON(),
			facility: this.facility && this.facility.toJSON(),
			claim: this.claim && this.claim.toJSON(),
			claimResponse: this.claimResponse && this.claimResponse.toJSON(),
			outcome: this.outcome && this.outcome.toJSON(),
			_disposition: this._disposition && this._disposition.toJSON(),
			disposition: this.disposition,
			related: this.related && this.related.map(v => v.toJSON()),
			prescription: this.prescription && this.prescription.toJSON(),
			originalPrescription: this.originalPrescription && this.originalPrescription.toJSON(),
			payee: this.payee && this.payee.toJSON(),
			information: this.information && this.information.map(v => v.toJSON()),
			careTeam: this.careTeam && this.careTeam.map(v => v.toJSON()),
			diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSON()),
			procedure: this.procedure && this.procedure.map(v => v.toJSON()),
			_precedence: this._precedence && this._precedence.toJSON(),
			precedence: this.precedence,
			insurance: this.insurance && this.insurance.toJSON(),
			accident: this.accident && this.accident.toJSON(),
			employmentImpacted: this.employmentImpacted && this.employmentImpacted.toJSON(),
			hospitalization: this.hospitalization && this.hospitalization.toJSON(),
			item: this.item && this.item.map(v => v.toJSON()),
			addItem: this.addItem && this.addItem.map(v => v.toJSON()),
			totalCost: this.totalCost && this.totalCost.toJSON(),
			unallocDeductable: this.unallocDeductable && this.unallocDeductable.toJSON(),
			totalBenefit: this.totalBenefit && this.totalBenefit.toJSON(),
			payment: this.payment && this.payment.toJSON(),
			form: this.form && this.form.toJSON(),
			processNote: this.processNote && this.processNote.map(v => v.toJSON()),
			benefitBalance: this.benefitBalance && this.benefitBalance.map(v => v.toJSON()),
		};
	}
};
