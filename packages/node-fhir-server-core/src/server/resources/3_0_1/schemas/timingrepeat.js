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

		Object.defineProperty(this, 'boundsDuration', {
			enumerable: true,
			get: () => this.__data.boundsDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.boundsDuration = new Duration(value);
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

		Object.defineProperty(this, '_countMax', {
			enumerable: true,
			get: () => this.__data._countMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._countMax = new Element(value);
			},
		});

		Object.defineProperty(this, 'countMax', {
			enumerable: true,
			get: () => this.__data.countMax,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.countMax = value;
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

		Object.defineProperty(this, '_durationUnit', {
			enumerable: true,
			get: () => this.__data._durationUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._durationUnit = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		Object.defineProperty(this, 'durationUnit', {
			enumerable: true,
			get: () => this.__data.durationUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.durationUnit = value;
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

		Object.defineProperty(this, '_periodUnit', {
			enumerable: true,
			get: () => this.__data._periodUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._periodUnit = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		Object.defineProperty(this, 'periodUnit', {
			enumerable: true,
			get: () => this.__data.periodUnit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.periodUnit = value;
			},
		});

		Object.defineProperty(this, '_dayOfWeek', {
			enumerable: true,
			get: () => this.__data._dayOfWeek,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._dayOfWeek = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/days-of-week
		Object.defineProperty(this, 'dayOfWeek', {
			enumerable: true,
			get: () => this.__data.dayOfWeek,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.dayOfWeek = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_timeOfDay', {
			enumerable: true,
			get: () => this.__data._timeOfDay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._timeOfDay = new Element(value);
			},
		});

		Object.defineProperty(this, 'timeOfDay', {
			enumerable: true,
			get: () => this.__data.timeOfDay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.timeOfDay = Array.isArray(value) ? value.map(v => v) : [value];
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

				this.__data.when = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_offset', {
			enumerable: true,
			get: () => this.__data._offset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._offset = new Element(value);
			},
		});

		Object.defineProperty(this, 'offset', {
			enumerable: true,
			get: () => this.__data.offset,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.offset = value;
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
			boundsDuration: this.boundsDuration && this.boundsDuration.toJSON(),
			boundsRange: this.boundsRange && this.boundsRange.toJSON(),
			boundsPeriod: this.boundsPeriod && this.boundsPeriod.toJSON(),
			_count: this._count && this._count.toJSON(),
			count: this.count,
			_countMax: this._countMax && this._countMax.toJSON(),
			countMax: this.countMax,
			_duration: this._duration && this._duration.toJSON(),
			duration: this.duration,
			_durationMax: this._durationMax && this._durationMax.toJSON(),
			durationMax: this.durationMax,
			_durationUnit: this._durationUnit && this._durationUnit.toJSON(),
			durationUnit: this.durationUnit,
			_frequency: this._frequency && this._frequency.toJSON(),
			frequency: this.frequency,
			_frequencyMax: this._frequencyMax && this._frequencyMax.toJSON(),
			frequencyMax: this.frequencyMax,
			_period: this._period && this._period.toJSON(),
			period: this.period,
			_periodMax: this._periodMax && this._periodMax.toJSON(),
			periodMax: this.periodMax,
			_periodUnit: this._periodUnit && this._periodUnit.toJSON(),
			periodUnit: this.periodUnit,
			_dayOfWeek: this._dayOfWeek && this._dayOfWeek.toJSON(),
			dayOfWeek: this.dayOfWeek,
			_timeOfDay: this._timeOfDay && this._timeOfDay.toJSON(),
			timeOfDay: this.timeOfDay,
			_when: this._when && this._when.toJSON(),
			when: this.when,
			_offset: this._offset && this._offset.toJSON(),
			offset: this.offset,
		};
	}
};
