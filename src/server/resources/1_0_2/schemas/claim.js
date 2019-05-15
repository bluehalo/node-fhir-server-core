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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-type-link
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		Object.defineProperty(this, 'ruleset', {
			enumerable: true,
			get: () => this.__data.ruleset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.ruleset = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		Object.defineProperty(this, 'originalRuleset', {
			enumerable: true,
			get: () => this.__data.originalRuleset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.originalRuleset = new Coding(value);
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

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.target = new Reference(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-use-link
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.priority = new Coding(value);
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

				let Coding = require('./coding.js');
				this.__data.fundsReserve = new Coding(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/fm-conditions
		Object.defineProperty(this, 'condition', {
			enumerable: true,
			get: () => this.__data.condition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.condition = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
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

		Object.defineProperty(this, 'coverage', {
			enumerable: true,
			get: () => this.__data.coverage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimCoverage = require('./claimcoverage.js');
				this.__data.coverage = Array.isArray(value) ? value.map(v => new ClaimCoverage(v)) : [new ClaimCoverage(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-exception
		Object.defineProperty(this, 'exception', {
			enumerable: true,
			get: () => this.__data.exception,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.exception = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_school', {
			enumerable: true,
			get: () => this.__data._school,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._school = new Element(value);
			},
		});

		Object.defineProperty(this, 'school', {
			enumerable: true,
			get: () => this.__data.school,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.school = value;
			},
		});

		Object.defineProperty(this, '_accident', {
			enumerable: true,
			get: () => this.__data._accident,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._accident = new Element(value);
			},
		});

		Object.defineProperty(this, 'accident', {
			enumerable: true,
			get: () => this.__data.accident,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.accident = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		Object.defineProperty(this, 'accidentType', {
			enumerable: true,
			get: () => this.__data.accidentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.accidentType = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/intervention
		Object.defineProperty(this, 'interventionException', {
			enumerable: true,
			get: () => this.__data.interventionException,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.interventionException = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/additionalmaterials
		Object.defineProperty(this, 'additionalMaterials', {
			enumerable: true,
			get: () => this.__data.additionalMaterials,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.additionalMaterials = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'missingTeeth', {
			enumerable: true,
			get: () => this.__data.missingTeeth,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ClaimMissingTeeth = require('./claimmissingteeth.js');
				this.__data.missingTeeth = Array.isArray(value)
					? value.map(v => new ClaimMissingTeeth(v))
					: [new ClaimMissingTeeth(value)];
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
			_type: this._type && this._type.toJSON(),
			type: this.type,
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			ruleset: this.ruleset && this.ruleset.toJSON(),
			originalRuleset: this.originalRuleset && this.originalRuleset.toJSON(),
			_created: this._created && this._created.toJSON(),
			created: this.created,
			target: this.target && this.target.toJSON(),
			provider: this.provider && this.provider.toJSON(),
			organization: this.organization && this.organization.toJSON(),
			_use: this._use && this._use.toJSON(),
			use: this.use,
			priority: this.priority && this.priority.toJSON(),
			fundsReserve: this.fundsReserve && this.fundsReserve.toJSON(),
			enterer: this.enterer && this.enterer.toJSON(),
			facility: this.facility && this.facility.toJSON(),
			prescription: this.prescription && this.prescription.toJSON(),
			originalPrescription: this.originalPrescription && this.originalPrescription.toJSON(),
			payee: this.payee && this.payee.toJSON(),
			referral: this.referral && this.referral.toJSON(),
			diagnosis: this.diagnosis && this.diagnosis.map(v => v.toJSON()),
			condition: this.condition && this.condition.map(v => v.toJSON()),
			patient: this.patient && this.patient.toJSON(),
			coverage: this.coverage && this.coverage.map(v => v.toJSON()),
			exception: this.exception && this.exception.map(v => v.toJSON()),
			_school: this._school && this._school.toJSON(),
			school: this.school,
			_accident: this._accident && this._accident.toJSON(),
			accident: this.accident,
			accidentType: this.accidentType && this.accidentType.toJSON(),
			interventionException: this.interventionException && this.interventionException.map(v => v.toJSON()),
			item: this.item && this.item.map(v => v.toJSON()),
			additionalMaterials: this.additionalMaterials && this.additionalMaterials.map(v => v.toJSON()),
			missingTeeth: this.missingTeeth && this.missingTeeth.map(v => v.toJSON()),
		};
	}
};
