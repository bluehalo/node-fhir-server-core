/**
 * @name exports
 * @summary CoverageEligibilityResponseInsurance Class
 */
module.exports = class CoverageEligibilityResponseInsurance {
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

		Object.defineProperty(this, '_inforce', {
			enumerable: true,
			get: () => this.__data._inforce,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._inforce = new Element(value);
			},
		});

		Object.defineProperty(this, 'inforce', {
			enumerable: true,
			get: () => this.__data.inforce,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.inforce = value;
			},
		});

		Object.defineProperty(this, 'benefitPeriod', {
			enumerable: true,
			get: () => this.__data.benefitPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.benefitPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'item', {
			enumerable: true,
			get: () => this.__data.item,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageEligibilityResponseInsuranceItem = require('./coverageeligibilityresponseinsuranceitem.js');
				this.__data.item = Array.isArray(value)
					? value.map(v => new CoverageEligibilityResponseInsuranceItem(v))
					: [new CoverageEligibilityResponseInsuranceItem(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageEligibilityResponseInsurance',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageEligibilityResponseInsurance';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			coverage: this.coverage && this.coverage.toJSON(),
			_inforce: this._inforce && this._inforce.toJSON(),
			inforce: this.inforce,
			benefitPeriod: this.benefitPeriod && this.benefitPeriod.toJSON(),
			item: this.item && this.item.map(v => v.toJSON()),
		};
	}
};
