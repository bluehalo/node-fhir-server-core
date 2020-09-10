/**
 * @name exports
 * @summary EligibilityResponseInsuranceBenefitBalance Class
 */
module.exports = class EligibilityResponseInsuranceBenefitBalance {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-category
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		Object.defineProperty(this, 'subCategory', {
			enumerable: true,
			get: () => this.__data.subCategory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.subCategory = new CodeableConcept(value);
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-network
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-unit
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-term
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

		Object.defineProperty(this, 'financial', {
			enumerable: true,
			get: () => this.__data.financial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EligibilityResponseInsuranceBenefitBalanceFinancial = require('./eligibilityresponseinsurancebenefitbalancefinancial.js');
				this.__data.financial = Array.isArray(value)
					? value.map(v => new EligibilityResponseInsuranceBenefitBalanceFinancial(v))
					: [new EligibilityResponseInsuranceBenefitBalanceFinancial(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EligibilityResponseInsuranceBenefitBalance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EligibilityResponseInsuranceBenefitBalance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			category: this.category && this.category.toJSON(),
			subCategory: this.subCategory && this.subCategory.toJSON(),
			_excluded: this._excluded && this._excluded.toJSON(),
			excluded: this.excluded,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			network: this.network && this.network.toJSON(),
			unit: this.unit && this.unit.toJSON(),
			term: this.term && this.term.toJSON(),
			financial: this.financial && this.financial.map(v => v.toJSON()),
		};
	}
};
