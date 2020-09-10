/**
 * @name exports
 * @summary EligibilityResponseInsurance Class
 */
module.exports = class EligibilityResponseInsurance {
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

		Object.defineProperty(this, 'coverage', {
			enumerable: true,
			get: () => this.__data.coverage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.coverage = new Reference(value);
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
				this.__data.contract = new Reference(value);
			},
		});

		Object.defineProperty(this, 'benefitBalance', {
			enumerable: true,
			get: () => this.__data.benefitBalance,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let EligibilityResponseInsuranceBenefitBalance = require('./eligibilityresponseinsurancebenefitbalance.js');
				this.__data.benefitBalance = Array.isArray(value)
					? value.map(v => new EligibilityResponseInsuranceBenefitBalance(v))
					: [new EligibilityResponseInsuranceBenefitBalance(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EligibilityResponseInsurance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EligibilityResponseInsurance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			coverage: this.coverage && this.coverage.toJSON(),
			contract: this.contract && this.contract.toJSON(),
			benefitBalance: this.benefitBalance && this.benefitBalance.map(v => v.toJSON()),
		};
	}
};
