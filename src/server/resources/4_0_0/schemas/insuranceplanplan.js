/**
 * @name exports
 * @summary InsurancePlanPlan Class
 */
module.exports = class InsurancePlanPlan {
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

		Object.defineProperty(this, 'generalCost', {
			enumerable: true,
			get: () => this.__data.generalCost,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InsurancePlanPlanGeneralCost = require('./insuranceplanplangeneralcost.js');
				this.__data.generalCost = Array.isArray(value)
					? value.map(v => new InsurancePlanPlanGeneralCost(v))
					: [new InsurancePlanPlanGeneralCost(value)];
			},
		});

		Object.defineProperty(this, 'specificCost', {
			enumerable: true,
			get: () => this.__data.specificCost,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let InsurancePlanPlanSpecificCost = require('./insuranceplanplanspecificcost.js');
				this.__data.specificCost = Array.isArray(value)
					? value.map(v => new InsurancePlanPlanSpecificCost(v))
					: [new InsurancePlanPlanSpecificCost(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'InsurancePlanPlan',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'InsurancePlanPlan';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			coverageArea: this.coverageArea && this.coverageArea.map(v => v.toJSON()),
			network: this.network && this.network.map(v => v.toJSON()),
			generalCost: this.generalCost && this.generalCost.map(v => v.toJSON()),
			specificCost: this.specificCost && this.specificCost.map(v => v.toJSON()),
		};
	}
};
