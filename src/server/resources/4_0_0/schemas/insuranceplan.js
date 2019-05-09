/**
 * @name exports
 * @summary InsurancePlan Class
 */
module.exports = class InsurancePlan {
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

		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.type = Array.isArray(value) ? value.map(v => new CodeableConcept(v)) : [new CodeableConcept(value)];
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

		Object.defineProperty(this, 'ownedBy', {
			enumerable: true,
			get: () => this.__data.ownedBy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.ownedBy = new Reference(value);
			},
		});

		Object.defineProperty(this, 'administeredBy', {
			enumerable: true,
			get: () => this.__data.administeredBy,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.administeredBy = new Reference(value);
			},
		});

		Object.defineProperty(this, 'coverageArea', {
			enumerable: true,
			get: () => this.__data.coverageArea,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.coverageArea = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InsurancePlanContact = require('./insuranceplancontact.js');
				this.__data.contact = Array.isArray(value)
					? value.map(v => new InsurancePlanContact(v))
					: [new InsurancePlanContact(value)];
			},
		});

		Object.defineProperty(this, 'endpoint', {
			enumerable: true,
			get: () => this.__data.endpoint,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.endpoint = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'network', {
			enumerable: true,
			get: () => this.__data.network,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.network = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'coverage', {
			enumerable: true,
			get: () => this.__data.coverage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InsurancePlanCoverage = require('./insuranceplancoverage.js');
				this.__data.coverage = Array.isArray(value)
					? value.map(v => new InsurancePlanCoverage(v))
					: [new InsurancePlanCoverage(value)];
			},
		});

		Object.defineProperty(this, 'plan', {
			enumerable: true,
			get: () => this.__data.plan,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InsurancePlanPlan = require('./insuranceplanplan.js');
				this.__data.plan = Array.isArray(value)
					? value.map(v => new InsurancePlanPlan(v))
					: [new InsurancePlanPlan(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'InsurancePlan',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'InsurancePlan';
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
			type: this.type && this.type.map(v => v.toJSON()),
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_alias: this._alias && this._alias.toJSON(),
			alias: this.alias,
			period: this.period && this.period.toJSON(),
			ownedBy: this.ownedBy && this.ownedBy.toJSON(),
			administeredBy: this.administeredBy && this.administeredBy.toJSON(),
			coverageArea: this.coverageArea && this.coverageArea.map(v => v.toJSON()),
			contact: this.contact && this.contact.map(v => v.toJSON()),
			endpoint: this.endpoint && this.endpoint.map(v => v.toJSON()),
			network: this.network && this.network.map(v => v.toJSON()),
			coverage: this.coverage && this.coverage.map(v => v.toJSON()),
			plan: this.plan && this.plan.map(v => v.toJSON()),
		};
	}
};
