/**
 * @name exports
 * @summary MarketingStatus Class
 */
module.exports = class MarketingStatus {
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

		Object.defineProperty(this, 'country', {
			enumerable: true,
			get: () => this.__data.country,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.country = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.jurisdiction = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.status = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'dateRange', {
			enumerable: true,
			get: () => this.__data.dateRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.dateRange = new Period(value);
			},
		});

		Object.defineProperty(this, '_restoreDate', {
			enumerable: true,
			get: () => this.__data._restoreDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._restoreDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'restoreDate', {
			enumerable: true,
			get: () => this.__data.restoreDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.restoreDate = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'MarketingStatus',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'MarketingStatus';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			country: this.country && this.country.toJSON(),
			jurisdiction: this.jurisdiction && this.jurisdiction.toJSON(),
			status: this.status && this.status.toJSON(),
			dateRange: this.dateRange && this.dateRange.toJSON(),
			_restoreDate: this._restoreDate && this._restoreDate.toJSON(),
			restoreDate: this.restoreDate,
		};
	}
};
