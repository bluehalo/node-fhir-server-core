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
		// valueSetReference: http://hl7.org/fhir/ValueSet/provenance-agent-role
		Object.defineProperty(this, 'role', {
			enumerable: true,
			get: () => this.__data.role,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.role = new Coding(value);
			},
		});

		Object.defineProperty(this, 'actor', {
			enumerable: true,
			get: () => this.__data.actor,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.actor = new Reference(value);
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

		Object.defineProperty(this, 'relatedAgent', {
			enumerable: true,
			get: () => this.__data.relatedAgent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProvenanceAgentRelatedAgent = require('./provenanceagentrelatedagent.js');
				this.__data.relatedAgent = Array.isArray(value)
					? value.map(v => new ProvenanceAgentRelatedAgent(v))
					: [new ProvenanceAgentRelatedAgent(value)];
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
			role: this.role && this.role.toJSON(),
			actor: this.actor && this.actor.toJSON(),
			userId: this.userId && this.userId.toJSON(),
			relatedAgent: this.relatedAgent && this.relatedAgent.map(v => v.toJSON()),
		};
	}
};
