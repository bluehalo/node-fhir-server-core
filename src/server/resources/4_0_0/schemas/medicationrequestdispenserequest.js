/**
 * @name exports
 * @summary MedicationRequestDispenseRequest Class
 */
module.exports = class MedicationRequestDispenseRequest {
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

		Object.defineProperty(this, 'initialFill', {
			enumerable: true,
			get: () => this.__data.initialFill,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let MedicationRequestDispenseRequestInitialFill = require('./medicationrequestdispenserequestinitialfill.js');
				this.__data.initialFill = new MedicationRequestDispenseRequestInitialFill(value);
			},
		});

		Object.defineProperty(this, 'dispenseInterval', {
			enumerable: true,
			get: () => this.__data.dispenseInterval,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.dispenseInterval = new Duration(value);
			},
		});

		Object.defineProperty(this, 'validityPeriod', {
			enumerable: true,
			get: () => this.__data.validityPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.validityPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_numberOfRepeatsAllowed', {
			enumerable: true,
			get: () => this.__data._numberOfRepeatsAllowed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numberOfRepeatsAllowed = new Element(value);
			},
		});

		Object.defineProperty(this, 'numberOfRepeatsAllowed', {
			enumerable: true,
			get: () => this.__data.numberOfRepeatsAllowed,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numberOfRepeatsAllowed = value;
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

		Object.defineProperty(this, 'expectedSupplyDuration', {
			enumerable: true,
			get: () => this.__data.expectedSupplyDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.expectedSupplyDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, 'performer', {
			enumerable: true,
			get: () => this.__data.performer,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.performer = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MedicationRequestDispenseRequest',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MedicationRequestDispenseRequest';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			initialFill: this.initialFill && this.initialFill.toJSON(),
			dispenseInterval: this.dispenseInterval && this.dispenseInterval.toJSON(),
			validityPeriod: this.validityPeriod && this.validityPeriod.toJSON(),
			_numberOfRepeatsAllowed: this._numberOfRepeatsAllowed && this._numberOfRepeatsAllowed.toJSON(),
			numberOfRepeatsAllowed: this.numberOfRepeatsAllowed,
			quantity: this.quantity && this.quantity.toJSON(),
			expectedSupplyDuration: this.expectedSupplyDuration && this.expectedSupplyDuration.toJSON(),
			performer: this.performer && this.performer.toJSON(),
		};
	}
};
