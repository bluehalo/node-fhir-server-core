/**
 * @name exports
 * @summary Claim Class
 */
module.exports = class Claim {
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

		Object.defineProperty(this, '_use', {
			enumerable: true,
			get: () => this.__data._use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._use = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-use
		Object.defineProperty(this, 'use', {
			enumerable: true,
			get: () => this.__data.use,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.use = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.priority = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		Object.defineProperty(this, 'fundsReserve', {
			enumerable: true,
			get: () => this.__data.fundsReserve,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.fundsReserve = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'related', {
			enumerable: true,
			get: () => this.__data.related,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimRelated = require('./claimrelated.js');
				this.__data.related = Array.isArray(value) ? value.map(v => new ClaimRelated(v)) : [new ClaimRelated(value)];
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

				let ClaimPayee = require('./claimpayee.js');
				this.__data.payee = new ClaimPayee(value);
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

		Object.defineProperty(this, 'careTeam', {
			enumerable: true,
			get: () => this.__data.careTeam,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimCareTeam = require('./claimcareteam.js');
				this.__data.careTeam = Array.isArray(value) ? value.map(v => new ClaimCareTeam(v)) : [new ClaimCareTeam(value)];
			},
		});

		Object.defineProperty(this, 'information', {
			enumerable: true,
			get: () => this.__data.information,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimInformation = require('./claiminformation.js');
				this.__data.information = Array.isArray(value)
					? value.map(v => new ClaimInformation(v))
					: [new ClaimInformation(value)];
			},
		});

		Object.defineProperty(this, 'diagnosis', {
			enumerable: true,
			get: () => this.__data.diagnosis,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimDiagnosis = require('./claimdiagnosis.js');
				this.__data.diagnosis = Array.isArray(value)
					? value.map(v => new ClaimDiagnosis(v))
					: [new ClaimDiagnosis(value)];
			},
		});

		Object.defineProperty(this, 'procedure', {
			enumerable: true,
			get: () => this.__data.procedure,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimProcedure = require('./claimprocedure.js');
				this.__data.procedure = Array.isArray(value)
					? value.map(v => new ClaimProcedure(v))
					: [new ClaimProcedure(value)];
			},
		});

		Object.defineProperty(this, 'insurance', {
			enumerable: true,
			get: () => this.__data.insurance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimInsurance = require('./claiminsurance.js');
				this.__data.insurance = Array.isArray(value)
					? value.map(v => new ClaimInsurance(v))
					: [new ClaimInsurance(value)];
			},
		});

		Object.defineProperty(this, 'accident', {
			enumerable: true,
			get: () => this.__data.accident,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimAccident = require('./claimaccident.js');
				this.__data.accident = new ClaimAccident(value);
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

				let ClaimItem = require('./claimitem.js');
				this.__data.item = Array.isArray(value) ? value.map(v => new ClaimItem(v)) : [new ClaimItem(value)];
			},
		});

		Object.defineProperty(this, 'total', {
			enumerable: true,
			get: () => this.__data.total,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.total = new Money(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Claim',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Claim';
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
			_use: this._use && this._use.toJSON(),
			use: this.use,
			patient: this.patient && this.patient.toJSON(),
			billablePeriod: this.billablePeriod && this.billablePeriod.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			enterer: this.enterer && this.enterer.toJSON(),
			insurer: this.insurer && this.insurer.toJSON(),
			provider: this.provider && this.provider.toJSON(),
			organization: this.organization && this.organization.toJSON(),
			priority: this.priority && this.priority.toJSON(),
			fundsReserve: this.fundsReserve && this.fundsReserve.toJSON(),
			related: this.related && this.related.map(v => v.toJSON()),
			prescription: this.prescription && this.prescription.toJSON(),
			originalPrescription: this.originalPrescription && this.originalPrescription.toJSON(),
			payee: this.payee && this.payee.toJSON(),
			referral: this.referral && this.referral.toJSON(),
			facility: this.facility && this.facility.toJSON(),
			careTeam: this.careTeam && this.careTeam.map(v => v.toJSON()),
			information: this.information && this.information.map(v => v.toJSON()),
			diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSON()),
			procedure: this.procedure && this.procedure.map(v => v.toJSON()),
			insurance: this.insurance && this.insurance.map(v => v.toJSON()),
			accident: this.accident && this.accident.toJSON(),
			employmentImpacted: this.employmentImpacted && this.employmentImpacted.toJSON(),
			hospitalization: this.hospitalization && this.hospitalization.toJSON(),
			item: this.item && this.item.map(v => v.toJSON()),
			total: this.total && this.total.toJSON(),
		};
	}
};
