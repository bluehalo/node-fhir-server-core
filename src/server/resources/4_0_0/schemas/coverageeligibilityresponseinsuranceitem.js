/**
 * @name exports
 * @summary CoverageEligibilityResponseInsuranceItem Class
 */
module.exports = class CoverageEligibilityResponseInsuranceItem {
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

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'productOrService', {
			enumerable: true,
			get: () => this.__data.productOrService,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.productOrService = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'modifier', {
			enumerable: true,
			get: () => this.__data.modifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.modifier = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'provider', {
			enumerable: true,
			get: () => this.__data.provider,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.provider = new Reference(value);
			},
		});

		Object.defineProperty(this, '_excluded', {
			enumerable: true,
			get: () => this.__data._excluded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._excluded = new Element(value);
			},
		});

		Object.defineProperty(this, 'excluded', {
			enumerable: true,
			get: () => this.__data.excluded,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.excluded = value;
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

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, 'network', {
			enumerable: true,
			get: () => this.__data.network,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.network = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'unit', {
			enumerable: true,
			get: () => this.__data.unit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.unit = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'term', {
			enumerable: true,
			get: () => this.__data.term,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.term = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'benefit', {
			enumerable: true,
			get: () => this.__data.benefit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityResponseInsuranceItemBenefit = require('./coverageeligibilityresponseinsuranceitembenefit.js');
				this.__data.benefit = Array.isArray(value)
					? value.map(v => new CoverageEligibilityResponseInsuranceItemBenefit(v))
					: [new CoverageEligibilityResponseInsuranceItemBenefit(value)];
			},
		});

		Object.defineProperty(this, '_authorizationRequired', {
			enumerable: true,
			get: () => this.__data._authorizationRequired,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._authorizationRequired = new Element(value);
			},
		});

		Object.defineProperty(this, 'authorizationRequired', {
			enumerable: true,
			get: () => this.__data.authorizationRequired,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.authorizationRequired = value;
			},
		});

		Object.defineProperty(this, 'authorizationSupporting', {
			enumerable: true,
			get: () => this.__data.authorizationSupporting,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.authorizationSupporting = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_authorizationUrl', {
			enumerable: true,
			get: () => this.__data._authorizationUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._authorizationUrl = new Element(value);
			},
		});

		Object.defineProperty(this, 'authorizationUrl', {
			enumerable: true,
			get: () => this.__data.authorizationUrl,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.authorizationUrl = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageEligibilityResponseInsuranceItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageEligibilityResponseInsuranceItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			category: this.category && this.category.toJSON(),
			productOrService: this.productOrService && this.productOrService.toJSON(),
			modifier: this.modifier && this.modifier.map(v => v.toJSON()),
			provider: this.provider && this.provider.toJSON(),
			_excluded: this._excluded && this._excluded.toJSON(),
			excluded: this.excluded,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			network: this.network && this.network.toJSON(),
			unit: this.unit && this.unit.toJSON(),
			term: this.term && this.term.toJSON(),
			benefit: this.benefit && this.benefit.map(v => v.toJSON()),
			_authorizationRequired: this._authorizationRequired && this._authorizationRequired.toJSON(),
			authorizationRequired: this.authorizationRequired,
			authorizationSupporting: this.authorizationSupporting && this.authorizationSupporting.map(v => v.toJSON()),
			_authorizationUrl: this._authorizationUrl && this._authorizationUrl.toJSON(),
			authorizationUrl: this.authorizationUrl,
		};
	}
};
