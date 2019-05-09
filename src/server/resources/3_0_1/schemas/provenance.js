/**
 * @name exports
 * @summary Provenance Class
 */
module.exports = class Provenance {
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

		Object.defineProperty(this, 'target', {
			enumerable: true,
			get: () => this.__data.target,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.target = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
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

		Object.defineProperty(this, '_recorded', {
			enumerable: true,
			get: () => this.__data._recorded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._recorded = new Element(value);
			},
		});

		Object.defineProperty(this, 'recorded', {
			enumerable: true,
			get: () => this.__data.recorded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.recorded = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		Object.defineProperty(this, 'reason', {
			enumerable: true,
			get: () => this.__data.reason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.reason = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/provenance-activity-type
		Object.defineProperty(this, 'activity', {
			enumerable: true,
			get: () => this.__data.activity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.activity = new Coding(value);
			},
		});

		Object.defineProperty(this, 'agent', {
			enumerable: true,
			get: () => this.__data.agent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProvenanceAgent = require('./provenanceagent.js');
				this.__data.agent = Array.isArray(value)
					? value.map(v => new ProvenanceAgent(v))
					: [new ProvenanceAgent(value)];
			},
		});

		Object.defineProperty(this, 'entity', {
			enumerable: true,
			get: () => this.__data.entity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ProvenanceEntity = require('./provenanceentity.js');
				this.__data.entity = Array.isArray(value)
					? value.map(v => new ProvenanceEntity(v))
					: [new ProvenanceEntity(value)];
			},
		});

		Object.defineProperty(this, 'signature', {
			enumerable: true,
			get: () => this.__data.signature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Signature = require('./signature.js');
				this.__data.signature = Array.isArray(value) ? value.map(v => new Signature(v)) : [new Signature(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Provenance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Provenance';
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
			target: this.target && this.target.map(v => v.toJSON()),
			period: this.period && this.period.toJSON(),
			_recorded: this._recorded && this._recorded.toJSON(),
			recorded: this.recorded,
			_policy: this._policy && this._policy.toJSON(),
			policy: this.policy,
			location: this.location && this.location.toJSON(),
			reason: this.reason && this.reason.map(v => v.toJSON()),
			activity: this.activity && this.activity.toJSON(),
			agent: this.agent && this.agent.map(v => v.toJSON()),
			entity: this.entity && this.entity.map(v => v.toJSON()),
			signature: this.signature && this.signature.map(v => v.toJSON()),
		};
	}
};
