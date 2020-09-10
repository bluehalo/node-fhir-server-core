/**
 * @name exports
 * @summary NutritionOrderSupplement Class
 */
module.exports = class NutritionOrderSupplement {
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

		Object.defineProperty(this, '_productName', {
			enumerable: true,
			get: () => this.__data._productName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._productName = new Element(value);
			},
		});

		Object.defineProperty(this, 'productName', {
			enumerable: true,
			get: () => this.__data.productName,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.productName = value;
			},
		});

		Object.defineProperty(this, 'schedule', {
			enumerable: true,
			get: () => this.__data.schedule,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Timing = require('./timing.js');
				this.__data.schedule = Array.isArray(value) ? value.map(v => new Timing(v)) : [new Timing(value)];
			},
		});

		Object.defineProperty(this, 'quantity', {
			enumerable: true,
			get: () => this.__data.quantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.quantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, '_instruction', {
			enumerable: true,
			get: () => this.__data._instruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instruction = new Element(value);
			},
		});

		Object.defineProperty(this, 'instruction', {
			enumerable: true,
			get: () => this.__data.instruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instruction = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'NutritionOrderSupplement',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'NutritionOrderSupplement';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			type: this.type && this.type.toJSON(),
			_productName: this._productName && this._productName.toJSON(),
			productName: this.productName,
			schedule: this.schedule && this.schedule.map(v => v.toJSON()),
			quantity: this.quantity && this.quantity.toJSON(),
			_instruction: this._instruction && this._instruction.toJSON(),
			instruction: this.instruction,
		};
	}
};
