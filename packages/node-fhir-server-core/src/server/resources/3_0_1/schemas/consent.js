/**
 * @name exports
 * @summary Consent Class
 */
module.exports = class Consent {
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
				this.__data.identifier = new Identifier(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-state-codes
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-category
		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = Array.isArray(value)
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

		Object.defineProperty(this, '_dateTime', {
			enumerable: true,
			get: () => this.__data._dateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'dateTime', {
			enumerable: true,
			get: () => this.__data.dateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dateTime = value;
			},
		});

		Object.defineProperty(this, 'consentingParty', {
			enumerable: true,
			get: () => this.__data.consentingParty,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.consentingParty = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'actor', {
			enumerable: true,
			get: () => this.__data.actor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentActor = require('./consentactor.js');
				this.__data.actor = Array.isArray(value) ? value.map(v => new ConsentActor(v)) : [new ConsentActor(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-action
		Object.defineProperty(this, 'action', {
			enumerable: true,
			get: () => this.__data.action,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.action = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
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
				this.__data.organization = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'sourceAttachment', {
			enumerable: true,
			get: () => this.__data.sourceAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.sourceAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'sourceIdentifier', {
			enumerable: true,
			get: () => this.__data.sourceIdentifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.sourceIdentifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'sourceReference', {
			enumerable: true,
			get: () => this.__data.sourceReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.sourceReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'policy', {
			enumerable: true,
			get: () => this.__data.policy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentPolicy = require('./consentpolicy.js');
				this.__data.policy = Array.isArray(value) ? value.map(v => new ConsentPolicy(v)) : [new ConsentPolicy(value)];
			},
		});

		Object.defineProperty(this, '_policyRule', {
			enumerable: true,
			get: () => this.__data._policyRule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._policyRule = new Element(value);
			},
		});

		Object.defineProperty(this, 'policyRule', {
			enumerable: true,
			get: () => this.__data.policyRule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.policyRule = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		Object.defineProperty(this, 'securityLabel', {
			enumerable: true,
			get: () => this.__data.securityLabel,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.securityLabel = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'purpose', {
			enumerable: true,
			get: () => this.__data.purpose,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.purpose = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'dataPeriod', {
			enumerable: true,
			get: () => this.__data.dataPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.dataPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'data', {
			enumerable: true,
			get: () => this.__data.data,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentData = require('./consentdata.js');
				this.__data.data = Array.isArray(value) ? value.map(v => new ConsentData(v)) : [new ConsentData(value)];
			},
		});

		Object.defineProperty(this, 'except', {
			enumerable: true,
			get: () => this.__data.except,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentExcept = require('./consentexcept.js');
				this.__data.except = Array.isArray(value) ? value.map(v => new ConsentExcept(v)) : [new ConsentExcept(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Consent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Consent';
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
			identifier: this.identifier && this.identifier.toJSON(),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			category: this.category && this.category.map(v => v.toJSON()),
			patient: this.patient && this.patient.toJSON(),
			period: this.period && this.period.toJSON(),
			_dateTime: this._dateTime && this._dateTime.toJSON(),
			dateTime: this.dateTime,
			consentingParty: this.consentingParty && this.consentingParty.map(v => v.toJSON()),
			actor: this.actor && this.actor.map(v => v.toJSON()),
			action: this.action && this.action.map(v => v.toJSON()),
			organization: this.organization && this.organization.map(v => v.toJSON()),
			sourceAttachment: this.sourceAttachment && this.sourceAttachment.toJSON(),
			sourceIdentifier: this.sourceIdentifier && this.sourceIdentifier.toJSON(),
			sourceReference: this.sourceReference && this.sourceReference.toJSON(),
			policy: this.policy && this.policy.map(v => v.toJSON()),
			_policyRule: this._policyRule && this._policyRule.toJSON(),
			policyRule: this.policyRule,
			securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
			purpose: this.purpose && this.purpose.map(v => v.toJSON()),
			dataPeriod: this.dataPeriod && this.dataPeriod.toJSON(),
			data: this.data && this.data.map(v => v.toJSON()),
			except: this.except && this.except.map(v => v.toJSON()),
		};
	}
};
