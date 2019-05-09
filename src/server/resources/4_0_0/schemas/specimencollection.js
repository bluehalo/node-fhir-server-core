/**
 * @name exports
 * @summary SpecimenCollection Class
 */
module.exports = class SpecimenCollection {
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

		Object.defineProperty(this, 'collector', {
			enumerable: true,
			get: () => this.__data.collector,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.collector = new Reference(value);
			},
		});

		Object.defineProperty(this, '_collectedDateTime', {
			enumerable: true,
			get: () => this.__data._collectedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._collectedDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'collectedDateTime', {
			enumerable: true,
			get: () => this.__data.collectedDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.collectedDateTime = value;
			},
		});

		Object.defineProperty(this, 'collectedPeriod', {
			enumerable: true,
			get: () => this.__data.collectedPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.collectedPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, 'duration', {
			enumerable: true,
			get: () => this.__data.duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.duration = new Duration(value);
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

		Object.defineProperty(this, 'method', {
			enumerable: true,
			get: () => this.__data.method,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.method = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'bodySite', {
			enumerable: true,
			get: () => this.__data.bodySite,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.bodySite = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'fastingStatusCodeableConcept', {
			enumerable: true,
			get: () => this.__data.fastingStatusCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.fastingStatusCodeableConcept = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'fastingStatusDuration', {
			enumerable: true,
			get: () => this.__data.fastingStatusDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.fastingStatusDuration = new Duration(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SpecimenCollection',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SpecimenCollection';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			collector: this.collector && this.collector.toJSON(),
			_collectedDateTime: this._collectedDateTime && this._collectedDateTime.toJSON(),
			collectedDateTime: this.collectedDateTime,
			collectedPeriod: this.collectedPeriod && this.collectedPeriod.toJSON(),
			duration: this.duration && this.duration.toJSON(),
			quantity: this.quantity && this.quantity.toJSON(),
			method: this.method && this.method.toJSON(),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			fastingStatusCodeableConcept: this.fastingStatusCodeableConcept && this.fastingStatusCodeableConcept.toJSON(),
			fastingStatusDuration: this.fastingStatusDuration && this.fastingStatusDuration.toJSON(),
		};
	}
};
