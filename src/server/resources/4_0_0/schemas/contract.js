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

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
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

		Object.defineProperty(this, 'legalState', {
			enumerable: true,
			get: () => this.__data.legalState,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.legalState = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data.instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.instantiatesCanonical = new Reference(value);
			},
		});

		Object.defineProperty(this, '_instantiatesUri', {
			enumerable: true,
			get: () => this.__data._instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesUri', {
			enumerable: true,
			get: () => this.__data.instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesUri = value;
			},
		});

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

		Object.defineProperty(this, 'expirationType', {
			enumerable: true,
			get: () => this.__data.expirationType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.expirationType = new CodeableConcept(value);
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

		Object.defineProperty(this, 'site', {
			enumerable: true,
			get: () => this.__data.site,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.site = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_title', {
			enumerable: true,
			get: () => this.__data._title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._title = new Element(value);
			},
		});

		Object.defineProperty(this, 'title', {
			enumerable: true,
			get: () => this.__data.title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.title = value;
			},
		});

		Object.defineProperty(this, '_subtitle', {
			enumerable: true,
			get: () => this.__data._subtitle,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subtitle = new Element(value);
			},
		});

		Object.defineProperty(this, 'subtitle', {
			enumerable: true,
			get: () => this.__data.subtitle,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subtitle = value;
			},
		});

		Object.defineProperty(this, '_alias', {
			enumerable: true,
			get: () => this.__data._alias,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._alias = new Element(value);
			},
		});

		Object.defineProperty(this, 'alias', {
			enumerable: true,
			get: () => this.__data.alias,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.alias = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'author', {
			enumerable: true,
			get: () => this.__data.author,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.author = new Reference(value);
			},
		});

		Object.defineProperty(this, 'scope', {
			enumerable: true,
			get: () => this.__data.scope,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.scope = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'topicCodeableConcept', {
			enumerable: true,
			get: () => this.__data.topicCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.topicCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'topicReference', {
			enumerable: true,
			get: () => this.__data.topicReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.topicReference = new Reference(value);
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

		Object.defineProperty(this, 'contentDefinition', {
			enumerable: true,
			get: () => this.__data.contentDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContractContentDefinition = require('./contractcontentdefinition.js');
				this.__data.contentDefinition = new ContractContentDefinition(value);
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

		Object.defineProperty(this, 'supportingInfo', {
			enumerable: true,
			get: () => this.__data.supportingInfo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.supportingInfo = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'relevantHistory', {
			enumerable: true,
			get: () => this.__data.relevantHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.relevantHistory = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'legallyBindingAttachment', {
			enumerable: true,
			get: () => this.__data.legallyBindingAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.legallyBindingAttachment = new Attachment(value);
			},
		});

		Object.defineProperty(this, 'legallyBindingReference', {
			enumerable: true,
			get: () => this.__data.legallyBindingReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.legallyBindingReference = new Reference(value);
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
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_url: this._url && this._url.toJSON(),
			url: this.url,
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			legalState: this.legalState && this.legalState.toJSON(),
			instantiatesCanonical: this.instantiatesCanonical && this.instantiatesCanonical.toJSON(),
			_instantiatesUri: this._instantiatesUri && this._instantiatesUri.toJSON(),
			instantiatesUri: this.instantiatesUri,
			contentDerivative: this.contentDerivative && this.contentDerivative.toJSON(),
			_issued: this._issued && this._issued.toJSON(),
			issued: this.issued,
			applies: this.applies && this.applies.toJSON(),
			expirationType: this.expirationType && this.expirationType.toJSON(),
			subject: this.subject && this.subject.map(v => v.toJSON()),
			authority: this.authority && this.authority.map(v => v.toJSON()),
			domain: this.domain && this.domain.map(v => v.toJSON()),
			site: this.site && this.site.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_title: this._title && this._title.toJSON(),
			title: this.title,
			_subtitle: this._subtitle && this._subtitle.toJSON(),
			subtitle: this.subtitle,
			_alias: this._alias && this._alias.toJSON(),
			alias: this.alias,
			author: this.author && this.author.toJSON(),
			scope: this.scope && this.scope.toJSON(),
			topicCodeableConcept: this.topicCodeableConcept && this.topicCodeableConcept.toJSON(),
			topicReference: this.topicReference && this.topicReference.toJSON(),
			type: this.type && this.type.toJSON(),
			subType: this.subType && this.subType.map(v => v.toJSON()),
			contentDefinition: this.contentDefinition && this.contentDefinition.toJSON(),
			term: this.term && this.term.map(v => v.toJSON()),
			supportingInfo: this.supportingInfo && this.supportingInfo.map(v => v.toJSON()),
			relevantHistory: this.relevantHistory && this.relevantHistory.map(v => v.toJSON()),
			signer: this.signer && this.signer.map(v => v.toJSON()),
			friendly: this.friendly && this.friendly.map(v => v.toJSON()),
			legal: this.legal && this.legal.map(v => v.toJSON()),
			rule: this.rule && this.rule.map(v => v.toJSON()),
			legallyBindingAttachment: this.legallyBindingAttachment && this.legallyBindingAttachment.toJSON(),
			legallyBindingReference: this.legallyBindingReference && this.legallyBindingReference.toJSON(),
		};
	}
};
