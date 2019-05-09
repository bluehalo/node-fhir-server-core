/**
 * @name exports
 * @summary ProvenanceAgent Class
 */
module.exports = class ProvenanceAgent {
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

		Object.defineProperty(this, '_whoUri', {
			enumerable: true,
			get: () => this.__data._whoUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._whoUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'whoUri', {
			enumerable: true,
			get: () => this.__data.whoUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.whoUri = value;
			},
		});

		Object.defineProperty(this, 'whoReference', {
			enumerable: true,
			get: () => this.__data.whoReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.whoReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_onBehalfOfUri', {
			enumerable: true,
			get: () => this.__data._onBehalfOfUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._onBehalfOfUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'onBehalfOfUri', {
			enumerable: true,
			get: () => this.__data.onBehalfOfUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.onBehalfOfUri = value;
			},
		});

		Object.defineProperty(this, 'onBehalfOfReference', {
			enumerable: true,
			get: () => this.__data.onBehalfOfReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.onBehalfOfReference = new Reference(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-RoleLinkType
		Object.defineProperty(this, 'relatedAgentType', {
			enumerable: true,
			get: () => this.__data.relatedAgentType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.relatedAgentType = new CodeableConcept(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ProvenanceAgent',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ProvenanceAgent';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			role: this.role && this.role.map(v => v.toJSON()),
			_whoUri: this._whoUri && this._whoUri.toJSON(),
			whoUri: this.whoUri,
			whoReference: this.whoReference && this.whoReference.toJSON(),
			_onBehalfOfUri: this._onBehalfOfUri && this._onBehalfOfUri.toJSON(),
			onBehalfOfUri: this.onBehalfOfUri,
			onBehalfOfReference: this.onBehalfOfReference && this.onBehalfOfReference.toJSON(),
			relatedAgentType: this.relatedAgentType && this.relatedAgentType.toJSON(),
		};
	}
};
