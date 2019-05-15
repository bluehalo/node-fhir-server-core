/**
 * @name exports
 * @summary AuditEventAgent Class
 */
module.exports = class AuditEventAgent {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
		Object.defineProperty(this, 'role', {
			enumerable: true,
			get: () => this.__data.role,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.role = Array.isArray(value) ? value.map(v => new CodeableConcept(v)) : [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'reference', {
			enumerable: true,
			get: () => this.__data.reference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'userId', {
			enumerable: true,
			get: () => this.__data.userId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.userId = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_altId', {
			enumerable: true,
			get: () => this.__data._altId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._altId = new Element(value);
			},
		});

		Object.defineProperty(this, 'altId', {
			enumerable: true,
			get: () => this.__data.altId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.altId = value;
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

		Object.defineProperty(this, '_requestor', {
			enumerable: true,
			get: () => this.__data._requestor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._requestor = new Element(value);
			},
		});

		Object.defineProperty(this, 'requestor', {
			enumerable: true,
			get: () => this.__data.requestor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.requestor = value;
			},
		});

		Object.defineProperty(this, 'location', {
			enumerable: true,
			get: () => this.__data.location,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.location = new Reference(value);
			},
		});

		Object.defineProperty(this, '_policy', {
			enumerable: true,
			get: () => this.__data._policy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._policy = new Element(value);
			},
		});

		Object.defineProperty(this, 'policy', {
			enumerable: true,
			get: () => this.__data.policy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.policy = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicm-405-mediatype
		Object.defineProperty(this, 'media', {
			enumerable: true,
			get: () => this.__data.media,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.media = new Coding(value);
			},
		});

		Object.defineProperty(this, 'network', {
			enumerable: true,
			get: () => this.__data.network,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let AuditEventAgentNetwork = require('./auditeventagentnetwork.js');
				this.__data.network = new AuditEventAgentNetwork(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'purposeOfUse', {
			enumerable: true,
			get: () => this.__data.purposeOfUse,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.purposeOfUse = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'AuditEventAgent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'AuditEventAgent';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			role: this.role && this.role.map(v => v.toJSON()),
			reference: this.reference && this.reference.toJSON(),
			userId: this.userId && this.userId.toJSON(),
			_altId: this._altId && this._altId.toJSON(),
			altId: this.altId,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_requestor: this._requestor && this._requestor.toJSON(),
			requestor: this.requestor,
			location: this.location && this.location.toJSON(),
			_policy: this._policy && this._policy.toJSON(),
			policy: this.policy,
			media: this.media && this.media.toJSON(),
			network: this.network && this.network.toJSON(),
			purposeOfUse: this.purposeOfUse && this.purposeOfUse.map(v => v.toJSON()),
		};
	}
};
