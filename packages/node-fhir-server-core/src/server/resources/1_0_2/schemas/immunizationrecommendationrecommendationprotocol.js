/**
 * @name exports
 * @summary ImmunizationRecommendationRecommendationProtocol Class
 */
module.exports = class ImmunizationRecommendationRecommendationProtocol {
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

		Object.defineProperty(this, '_doseSequence', {
			enumerable: true,
			get: () => this.__data._doseSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doseSequence = new Element(value);
			},
		});

		Object.defineProperty(this, 'doseSequence', {
			enumerable: true,
			get: () => this.__data.doseSequence,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doseSequence = value;
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

		Object.defineProperty(this, 'authority', {
			enumerable: true,
			get: () => this.__data.authority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.authority = new Reference(value);
			},
		});

		Object.defineProperty(this, '_series', {
			enumerable: true,
			get: () => this.__data._series,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._series = new Element(value);
			},
		});

		Object.defineProperty(this, 'series', {
			enumerable: true,
			get: () => this.__data.series,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.series = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImmunizationRecommendationRecommendationProtocol',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImmunizationRecommendationRecommendationProtocol';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_doseSequence: this._doseSequence && this._doseSequence.toJSON(),
			doseSequence: this.doseSequence,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			authority: this.authority && this.authority.toJSON(),
			_series: this._series && this._series.toJSON(),
			series: this.series,
		};
	}
};
