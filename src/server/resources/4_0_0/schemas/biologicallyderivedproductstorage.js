/**
 * @name exports
 * @summary BiologicallyDerivedProductStorage Class
 */
module.exports = class BiologicallyDerivedProductStorage {
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

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_temperature', {
			enumerable: true,
			get: () => this.__data._temperature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._temperature = new Element(value);
			},
		});

		Object.defineProperty(this, 'temperature', {
			enumerable: true,
			get: () => this.__data.temperature,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.temperature = value;
			},
		});

		Object.defineProperty(this, '_scale', {
			enumerable: true,
			get: () => this.__data._scale,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._scale = new Element(value);
			},
		});

		Object.defineProperty(this, 'scale', {
			enumerable: true,
			get: () => this.__data.scale,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.scale = value;
			},
		});

		Object.defineProperty(this, 'duration', {
			enumerable: true,
			get: () => this.__data.duration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Period = require('./period.js');
				this.__data.duration = new Period(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'BiologicallyDerivedProductStorage',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'BiologicallyDerivedProductStorage';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_temperature: this._temperature && this._temperature.toJSON(),
			temperature: this.temperature,
			_scale: this._scale && this._scale.toJSON(),
			scale: this.scale,
			duration: this.duration && this.duration.toJSON(),
		};
	}
};
