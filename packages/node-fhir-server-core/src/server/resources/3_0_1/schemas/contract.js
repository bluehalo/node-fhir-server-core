/**
 * @name exports
 * @summary Contract Class
 */
module.exports = class Contract {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-status
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

		Object.defineProperty(this, '_issued', {
			enumerable: true,
			get: () => this.__data._issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._issued = new Element(value);
			},
		});

		Object.defineProperty(this, 'issued', {
			enumerable: true,
			get: () => this.__data.issued,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.issued = value;
			},
		});

		Object.defineProperty(this, 'applies', {
			enumerable: true,
			get: () => this.__data.applies,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.applies = new Period(value);
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
				this.__data.subject = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'topic', {
			enumerable: true,
			get: () => this.__data.topic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.topic = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'authority', {
			enumerable: true,
			get: () => this.__data.authority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.authority = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'domain', {
			enumerable: true,
			get: () => this.__data.domain,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.domain = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-type
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-subtype
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-action
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'actionReason', {
			enumerable: true,
			get: () => this.__data.actionReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.actionReason = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActConsentDirective
		Object.defineProperty(this, 'decisionType', {
			enumerable: true,
			get: () => this.__data.decisionType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.decisionType = new CodeableConcept(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-content-derivative
		Object.defineProperty(this, 'contentDerivative', {
			enumerable: true,
			get: () => this.__data.contentDerivative,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.contentDerivative = new CodeableConcept(value);
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

		Object.defineProperty(this, 'agent', {
			enumerable: true,
			get: () => this.__data.agent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractAgent = require('./contractagent.js');
				this.__data.agent = Array.isArray(value) ? value.map(v => new ContractAgent(v)) : [new ContractAgent(value)];
			},
		});

		Object.defineProperty(this, 'signer', {
			enumerable: true,
			get: () => this.__data.signer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractSigner = require('./contractsigner.js');
				this.__data.signer = Array.isArray(value) ? value.map(v => new ContractSigner(v)) : [new ContractSigner(value)];
			},
		});

		Object.defineProperty(this, 'valuedItem', {
			enumerable: true,
			get: () => this.__data.valuedItem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractValuedItem = require('./contractvalueditem.js');
				this.__data.valuedItem = Array.isArray(value)
					? value.map(v => new ContractValuedItem(v))
					: [new ContractValuedItem(value)];
			},
		});

		Object.defineProperty(this, 'term', {
			enumerable: true,
			get: () => this.__data.term,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractTerm = require('./contractterm.js');
				this.__data.term = Array.isArray(value) ? value.map(v => new ContractTerm(v)) : [new ContractTerm(value)];
			},
		});

		Object.defineProperty(this, 'bindingAttachment', {
			enumerable: true,
			get: () => this.__data.bindingAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.bindingAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'bindingReference', {
			enumerable: true,
			get: () => this.__data.bindingReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.bindingReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'friendly', {
			enumerable: true,
			get: () => this.__data.friendly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractFriendly = require('./contractfriendly.js');
				this.__data.friendly = Array.isArray(value)
					? value.map(v => new ContractFriendly(v))
					: [new ContractFriendly(value)];
			},
		});

		Object.defineProperty(this, 'legal', {
			enumerable: true,
			get: () => this.__data.legal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractLegal = require('./contractlegal.js');
				this.__data.legal = Array.isArray(value) ? value.map(v => new ContractLegal(v)) : [new ContractLegal(value)];
			},
		});

		Object.defineProperty(this, 'rule', {
			enumerable: true,
			get: () => this.__data.rule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractRule = require('./contractrule.js');
				this.__data.rule = Array.isArray(value) ? value.map(v => new ContractRule(v)) : [new ContractRule(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Contract',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Contract';
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
			_issued: this._issued && this._issued.toJSON(),
			issued: this.issued,
			applies: this.applies && this.applies.toJSON(),
			subject: this.subject && this.subject.map(v => v.toJSON()),
			topic: this.topic && this.topic.map(v => v.toJSON()),
			authority: this.authority && this.authority.map(v => v.toJSON()),
			domain: this.domain && this.domain.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			subType: this.subType && this.subType.map(v => v.toJSON()),
			action: this.action && this.action.map(v => v.toJSON()),
			actionReason: this.actionReason && this.actionReason.map(v => v.toJSON()),
			decisionType: this.decisionType && this.decisionType.toJSON(),
			contentDerivative: this.contentDerivative && this.contentDerivative.toJSON(),
			securityLabel: this.securityLabel && this.securityLabel.map(v => v.toJSON()),
			agent: this.agent && this.agent.map(v => v.toJSON()),
			signer: this.signer && this.signer.map(v => v.toJSON()),
			valuedItem: this.valuedItem && this.valuedItem.map(v => v.toJSON()),
			term: this.term && this.term.map(v => v.toJSON()),
			bindingAttachment: this.bindingAttachment && this.bindingAttachment.toJSON(),
			bindingReference: this.bindingReference && this.bindingReference.toJSON(),
			friendly: this.friendly && this.friendly.map(v => v.toJSON()),
			legal: this.legal && this.legal.map(v => v.toJSON()),
			rule: this.rule && this.rule.map(v => v.toJSON()),
		};
	}
};
