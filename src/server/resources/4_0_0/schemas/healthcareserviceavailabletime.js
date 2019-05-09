/**
 * @name exports
 * @summary HealthcareServiceAvailableTime Class
 */
module.exports = class HealthcareServiceAvailableTime {
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

		Object.defineProperty(this, '_daysOfWeek', {
			enumerable: true,
			get: () => this.__data._daysOfWeek,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._daysOfWeek = new Element(value);
			},
		});

		Object.defineProperty(this, 'daysOfWeek', {
			enumerable: true,
			get: () => this.__data.daysOfWeek,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.daysOfWeek = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_allDay', {
			enumerable: true,
			get: () => this.__data._allDay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._allDay = new Element(value);
			},
		});

		Object.defineProperty(this, 'allDay', {
			enumerable: true,
			get: () => this.__data.allDay,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.allDay = value;
			},
		});

		Object.defineProperty(this, '_availableStartTime', {
			enumerable: true,
			get: () => this.__data._availableStartTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._availableStartTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'availableStartTime', {
			enumerable: true,
			get: () => this.__data.availableStartTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.availableStartTime = value;
			},
		});

		Object.defineProperty(this, '_availableEndTime', {
			enumerable: true,
			get: () => this.__data._availableEndTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._availableEndTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'availableEndTime', {
			enumerable: true,
			get: () => this.__data.availableEndTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.availableEndTime = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'HealthcareServiceAvailableTime',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'HealthcareServiceAvailableTime';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_daysOfWeek: this._daysOfWeek && this._daysOfWeek.toJSON(),
			daysOfWeek: this.daysOfWeek,
			_allDay: this._allDay && this._allDay.toJSON(),
			allDay: this.allDay,
			_availableStartTime: this._availableStartTime && this._availableStartTime.toJSON(),
			availableStartTime: this.availableStartTime,
			_availableEndTime: this._availableEndTime && this._availableEndTime.toJSON(),
			availableEndTime: this.availableEndTime,
		};
	}
};
