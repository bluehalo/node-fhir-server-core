/**
 * @name exports
 * @summary TimingRepeat Class
 */
module.exports = class TimingRepeat {
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

		Object.defineProperty(this, 'boundsQuantity', {
			enumerable: true,
			get: () => this.__data.boundsQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.boundsQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'boundsRange', {
			enumerable: true,
			get: () => this.__data.boundsRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.boundsRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'boundsPeriod', {
			enumerable: true,
			get: () => this.__data.boundsPeriod,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.boundsPeriod = new Period(value);
			},
		});

		Object.defineProperty(this, '_count', {
			enumerable: true,
			get: () => this.__data._count,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._count = new Element(value);
			},
		});

		Object.defineProperty(this, 'count', {
			enumerable: true,
			get: () => this.__data.count,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.count = value;
			},
		});

		Object.defineProperty(this, '_duration', {
			enumerable: true,
			get: () => this.__data._duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._duration = new Element(value);
			},
		});

		Object.defineProperty(this, 'duration', {
			enumerable: true,
			get: () => this.__data.duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.duration = value;
			},
		});

		Object.defineProperty(this, '_durationMax', {
			enumerable: true,
			get: () => this.__data._durationMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._durationMax = new Element(value);
			},
		});

		Object.defineProperty(this, 'durationMax', {
			enumerable: true,
			get: () => this.__data.durationMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.durationMax = value;
			},
		});

		Object.defineProperty(this, '_durationUnits', {
			enumerable: true,
			get: () => this.__data._durationUnits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._durationUnits = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		Object.defineProperty(this, 'durationUnits', {
			enumerable: true,
			get: () => this.__data.durationUnits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.durationUnits = value;
			},
		});

		Object.defineProperty(this, '_frequency', {
			enumerable: true,
			get: () => this.__data._frequency,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._frequency = new Element(value);
			},
		});

		Object.defineProperty(this, 'frequency', {
			enumerable: true,
			get: () => this.__data.frequency,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.frequency = value;
			},
		});

		Object.defineProperty(this, '_frequencyMax', {
			enumerable: true,
			get: () => this.__data._frequencyMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._frequencyMax = new Element(value);
			},
		});

		Object.defineProperty(this, 'frequencyMax', {
			enumerable: true,
			get: () => this.__data.frequencyMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.frequencyMax = value;
			},
		});

		Object.defineProperty(this, '_period', {
			enumerable: true,
			get: () => this.__data._period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._period = new Element(value);
			},
		});

		Object.defineProperty(this, 'period', {
			enumerable: true,
			get: () => this.__data.period,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.period = value;
			},
		});

		Object.defineProperty(this, '_periodMax', {
			enumerable: true,
			get: () => this.__data._periodMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._periodMax = new Element(value);
			},
		});

		Object.defineProperty(this, 'periodMax', {
			enumerable: true,
			get: () => this.__data.periodMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.periodMax = value;
			},
		});

		Object.defineProperty(this, '_periodUnits', {
			enumerable: true,
			get: () => this.__data._periodUnits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._periodUnits = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		Object.defineProperty(this, 'periodUnits', {
			enumerable: true,
			get: () => this.__data.periodUnits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.periodUnits = value;
			},
		});

		Object.defineProperty(this, '_when', {
			enumerable: true,
			get: () => this.__data._when,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._when = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-timing
		Object.defineProperty(this, 'when', {
			enumerable: true,
			get: () => this.__data.when,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.when = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'TimingRepeat',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'TimingRepeat';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			boundsQuantity: this.boundsQuantity && this.boundsQuantity.toJSON(),
			boundsRange: this.boundsRange && this.boundsRange.toJSON(),
			boundsPeriod: this.boundsPeriod && this.boundsPeriod.toJSON(),
			_count: this._count && this._count.toJSON(),
			count: this.count,
			_duration: this._duration && this._duration.toJSON(),
			duration: this.duration,
			_durationMax: this._durationMax && this._durationMax.toJSON(),
			durationMax: this.durationMax,
			_durationUnits: this._durationUnits && this._durationUnits.toJSON(),
			durationUnits: this.durationUnits,
			_frequency: this._frequency && this._frequency.toJSON(),
			frequency: this.frequency,
			_frequencyMax: this._frequencyMax && this._frequencyMax.toJSON(),
			frequencyMax: this.frequencyMax,
			_period: this._period && this._period.toJSON(),
			period: this.period,
			_periodMax: this._periodMax && this._periodMax.toJSON(),
			periodMax: this.periodMax,
			_periodUnits: this._periodUnits && this._periodUnits.toJSON(),
			periodUnits: this.periodUnits,
			_when: this._when && this._when.toJSON(),
			when: this.when,
		};
	}
};
