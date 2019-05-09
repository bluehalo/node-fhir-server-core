/**
 * @name exports
 * @summary CoverageCostToBeneficiary Class
 */
module.exports = class CoverageCostToBeneficiary {
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

		Object.defineProperty(this, 'valueQuantity', {
			enumerable: true,
			get: () => this.__data.valueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.valueQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'valueMoney', {
			enumerable: true,
			get: () => this.__data.valueMoney,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Money = require('./money.js');
				this.__data.valueMoney = new Money(value);
			},
		});

		Object.defineProperty(this, 'exception', {
			enumerable: true,
			get: () => this.__data.exception,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CoverageCostToBeneficiaryException = require('./coveragecosttobeneficiaryexception.js');
				this.__data.exception = Array.isArray(value)
					? value.map(v => new CoverageCostToBeneficiaryException(v))
					: [new CoverageCostToBeneficiaryException(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'CoverageCostToBeneficiary',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'CoverageCostToBeneficiary';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
			valueMoney: this.valueMoney && this.valueMoney.toJSON(),
			exception: this.exception && this.exception.map(v => v.toJSON()),
		};
	}
};
