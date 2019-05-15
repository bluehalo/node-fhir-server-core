/**
 * @name exports
 * @summary LocationPosition Class
 */
module.exports = class LocationPosition {
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

		Object.defineProperty(this, '_longitude', {
			enumerable: true,
			get: () => this.__data._longitude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._longitude = new Element(value);
			},
		});

		Object.defineProperty(this, 'longitude', {
			enumerable: true,
			get: () => this.__data.longitude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.longitude = value;
			},
		});

		Object.defineProperty(this, '_latitude', {
			enumerable: true,
			get: () => this.__data._latitude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._latitude = new Element(value);
			},
		});

		Object.defineProperty(this, 'latitude', {
			enumerable: true,
			get: () => this.__data.latitude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.latitude = value;
			},
		});

		Object.defineProperty(this, '_altitude', {
			enumerable: true,
			get: () => this.__data._altitude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._altitude = new Element(value);
			},
		});

		Object.defineProperty(this, 'altitude', {
			enumerable: true,
			get: () => this.__data.altitude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.altitude = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'LocationPosition',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'LocationPosition';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_longitude: this._longitude && this._longitude.toJSON(),
			longitude: this.longitude,
			_latitude: this._latitude && this._latitude.toJSON(),
			latitude: this.latitude,
			_altitude: this._altitude && this._altitude.toJSON(),
			altitude: this.altitude,
		};
	}
};
