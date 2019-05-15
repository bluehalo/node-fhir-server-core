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

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.performer = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, 'policyRule', {
			enumerable: true,
			get: () => this.__data.policyRule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.policyRule = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'verification', {
			enumerable: true,
			get: () => this.__data.verification,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentVerification = require('./consentverification.js');
				this.__data.verification = Array.isArray(value)
					? value.map(v => new ConsentVerification(v))
					: [new ConsentVerification(value)];
			},
		});

		Object.defineProperty(this, 'provision', {
			enumerable: true,
			get: () => this.__data.provision,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConsentProvision = require('./consentprovision.js');
				this.__data.provision = new ConsentProvision(value);
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
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			scope: this.scope && this.scope.toJSON(),
			category: this.category && this.category.map(v => v.toJSON()),
			patient: this.patient && this.patient.toJSON(),
			_dateTime: this._dateTime && this._dateTime.toJSON(),
			dateTime: this.dateTime,
			performer: this.performer && this.performer.map(v => v.toJSON()),
			organization: this.organization && this.organization.map(v => v.toJSON()),
			sourceAttachment: this.sourceAttachment && this.sourceAttachment.toJSON(),
			sourceReference: this.sourceReference && this.sourceReference.toJSON(),
			policy: this.policy && this.policy.map(v => v.toJSON()),
			policyRule: this.policyRule && this.policyRule.toJSON(),
			verification: this.verification && this.verification.map(v => v.toJSON()),
			provision: this.provision && this.provision.toJSON(),
		};
	}
};
