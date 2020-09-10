/**
 * @name exports
 * @summary DeviceMetricCalibration Class
 */
module.exports = class DeviceMetricCalibration {
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

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-calibration-type
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, '_state', {
			enumerable: true,
			get: () => this.__data._state,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._state = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-calibration-state
		Object.defineProperty(this, 'state', {
			enumerable: true,
			get: () => this.__data.state,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.state = value;
			},
		});

		Object.defineProperty(this, '_time', {
			enumerable: true,
			get: () => this.__data._time,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._time = new Element(value);
			},
		});

		Object.defineProperty(this, 'time', {
			enumerable: true,
			get: () => this.__data.time,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.time = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DeviceMetricCalibration',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DeviceMetricCalibration';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			_state: this._state && this._state.toJSON(),
			state: this.state,
			_time: this._time && this._time.toJSON(),
			time: this.time,
		};
	}
};
