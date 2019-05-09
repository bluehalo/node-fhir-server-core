/**
 * @name exports
 * @summary EligibilityResponseInsuranceBenefitBalanceFinancial Class
 */
module.exports = class EligibilityResponseInsuranceBenefitBalanceFinancial {
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-type
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

		Object.defineProperty(this, '_allowedUnsignedInt', {
			enumerable: true,
			get: () => this.__data._allowedUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._allowedUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'allowedUnsignedInt', {
			enumerable: true,
			get: () => this.__data.allowedUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.allowedUnsignedInt = value;
			},
		});

		Object.defineProperty(this, '_allowedString', {
			enumerable: true,
			get: () => this.__data._allowedString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._allowedString = new Element(value);
			},
		});

		Object.defineProperty(this, 'allowedString', {
			enumerable: true,
			get: () => this.__data.allowedString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.allowedString = value;
			},
		});

		Object.defineProperty(this, 'allowedMoney', {
			enumerable: true,
			get: () => this.__data.allowedMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.allowedMoney = new Money(value);
			},
		});

		Object.defineProperty(this, '_usedUnsignedInt', {
			enumerable: true,
			get: () => this.__data._usedUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._usedUnsignedInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'usedUnsignedInt', {
			enumerable: true,
			get: () => this.__data.usedUnsignedInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.usedUnsignedInt = value;
			},
		});

		Object.defineProperty(this, 'usedMoney', {
			enumerable: true,
			get: () => this.__data.usedMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.usedMoney = new Money(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'EligibilityResponseInsuranceBenefitBalanceFinancial',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'EligibilityResponseInsuranceBenefitBalanceFinancial';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			_allowedUnsignedInt: this._allowedUnsignedInt && this._allowedUnsignedInt.toJSON(),
			allowedUnsignedInt: this.allowedUnsignedInt,
			_allowedString: this._allowedString && this._allowedString.toJSON(),
			allowedString: this.allowedString,
			allowedMoney: this.allowedMoney && this.allowedMoney.toJSON(),
			_usedUnsignedInt: this._usedUnsignedInt && this._usedUnsignedInt.toJSON(),
			usedUnsignedInt: this.usedUnsignedInt,
			usedMoney: this.usedMoney && this.usedMoney.toJSON(),
		};
	}
};
