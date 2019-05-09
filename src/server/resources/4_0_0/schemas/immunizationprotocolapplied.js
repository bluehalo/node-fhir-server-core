/**
 * @name exports
 * @summary ImmunizationProtocolApplied Class
 */
module.exports = class ImmunizationProtocolApplied {
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

		Object.defineProperty(this, 'targetDisease', {
			enumerable: true,
			get: () => this.__data.targetDisease,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.targetDisease = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_doseNumberPositiveInt', {
			enumerable: true,
			get: () => this.__data._doseNumberPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doseNumberPositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'doseNumberPositiveInt', {
			enumerable: true,
			get: () => this.__data.doseNumberPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doseNumberPositiveInt = value;
			},
		});

		Object.defineProperty(this, '_doseNumberString', {
			enumerable: true,
			get: () => this.__data._doseNumberString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._doseNumberString = new Element(value);
			},
		});

		Object.defineProperty(this, 'doseNumberString', {
			enumerable: true,
			get: () => this.__data.doseNumberString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.doseNumberString = value;
			},
		});

		Object.defineProperty(this, '_seriesDosesPositiveInt', {
			enumerable: true,
			get: () => this.__data._seriesDosesPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._seriesDosesPositiveInt = new Element(value);
			},
		});

		Object.defineProperty(this, 'seriesDosesPositiveInt', {
			enumerable: true,
			get: () => this.__data.seriesDosesPositiveInt,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.seriesDosesPositiveInt = value;
			},
		});

		Object.defineProperty(this, '_seriesDosesString', {
			enumerable: true,
			get: () => this.__data._seriesDosesString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._seriesDosesString = new Element(value);
			},
		});

		Object.defineProperty(this, 'seriesDosesString', {
			enumerable: true,
			get: () => this.__data.seriesDosesString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.seriesDosesString = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ImmunizationProtocolApplied',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ImmunizationProtocolApplied';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_series: this._series && this._series.toJSON(),
			series: this.series,
			authority: this.authority && this.authority.toJSON(),
			targetDisease: this.targetDisease && this.targetDisease.map(v => v.toJSON()),
			_doseNumberPositiveInt: this._doseNumberPositiveInt && this._doseNumberPositiveInt.toJSON(),
			doseNumberPositiveInt: this.doseNumberPositiveInt,
			_doseNumberString: this._doseNumberString && this._doseNumberString.toJSON(),
			doseNumberString: this.doseNumberString,
			_seriesDosesPositiveInt: this._seriesDosesPositiveInt && this._seriesDosesPositiveInt.toJSON(),
			seriesDosesPositiveInt: this.seriesDosesPositiveInt,
			_seriesDosesString: this._seriesDosesString && this._seriesDosesString.toJSON(),
			seriesDosesString: this.seriesDosesString,
		};
	}
};
