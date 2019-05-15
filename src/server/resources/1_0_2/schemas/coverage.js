/**
 * @name exports
 * @summary Coverage Class
 */
module.exports = class Coverage {
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

		Object.defineProperty(this, 'issuer', {
			enumerable: true,
			get: () => this.__data.issuer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.issuer = new Reference(value);
			},
		});

		Object.defineProperty(this, 'bin', {
			enumerable: true,
			get: () => this.__data.bin,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.bin = new Identifier(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCoverageTypeCode
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.type = new Coding(value);
			},
		});

		Object.defineProperty(this, 'subscriberId', {
			enumerable: true,
			get: () => this.__data.subscriberId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.subscriberId = new Identifier(value);
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

		Object.defineProperty(this, '_group', {
			enumerable: true,
			get: () => this.__data._group,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._group = new Element(value);
			},
		});

		Object.defineProperty(this, 'group', {
			enumerable: true,
			get: () => this.__data.group,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.group = value;
			},
		});

		Object.defineProperty(this, '_plan', {
			enumerable: true,
			get: () => this.__data._plan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._plan = new Element(value);
			},
		});

		Object.defineProperty(this, 'plan', {
			enumerable: true,
			get: () => this.__data.plan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.plan = value;
			},
		});

		Object.defineProperty(this, '_subPlan', {
			enumerable: true,
			get: () => this.__data._subPlan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._subPlan = new Element(value);
			},
		});

		Object.defineProperty(this, 'subPlan', {
			enumerable: true,
			get: () => this.__data.subPlan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.subPlan = value;
			},
		});

		Object.defineProperty(this, '_dependent', {
			enumerable: true,
			get: () => this.__data._dependent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dependent = new Element(value);
			},
		});

		Object.defineProperty(this, 'dependent', {
			enumerable: true,
			get: () => this.__data.dependent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dependent = value;
			},
		});

		Object.defineProperty(this, '_sequence', {
			enumerable: true,
			get: () => this.__data._sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'sequence', {
			enumerable: true,
			get: () => this.__data.sequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sequence = value;
			},
		});

		Object.defineProperty(this, 'subscriber', {
			enumerable: true,
			get: () => this.__data.subscriber,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subscriber = new Reference(value);
			},
		});

		Object.defineProperty(this, 'network', {
			enumerable: true,
			get: () => this.__data.network,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.network = new Identifier(value);
			},
		});

		Object.defineProperty(this, 'contract', {
			enumerable: true,
			get: () => this.__data.contract,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.contract = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Coverage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Coverage';
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
			issuer: this.issuer && this.issuer.toJSON(),
			bin: this.bin && this.bin.toJSON(),
			period: this.period && this.period.toJSON(),
			type: this.type && this.type.toJSON(),
			subscriberId: this.subscriberId && this.subscriberId.toJSON(),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_group: this._group && this._group.toJSON(),
			group: this.group,
			_plan: this._plan && this._plan.toJSON(),
			plan: this.plan,
			_subPlan: this._subPlan && this._subPlan.toJSON(),
			subPlan: this.subPlan,
			_dependent: this._dependent && this._dependent.toJSON(),
			dependent: this.dependent,
			_sequence: this._sequence && this._sequence.toJSON(),
			sequence: this.sequence,
			subscriber: this.subscriber && this.subscriber.toJSON(),
			network: this.network && this.network.toJSON(),
			contract: this.contract && this.contract.map(v => v.toJSON()),
		};
	}
};
