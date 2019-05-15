/**
 * @name exports
 * @summary SpecimenDefinitionTypeTestedHandling Class
 */
module.exports = class SpecimenDefinitionTypeTestedHandling {
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

		Object.defineProperty(this, 'temperatureQualifier', {
			enumerable: true,
			get: () => this.__data.temperatureQualifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.temperatureQualifier = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'temperatureRange', {
			enumerable: true,
			get: () => this.__data.temperatureRange,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Range = require('./range.js');
				this.__data.temperatureRange = new Range(value);
			},
		});

		Object.defineProperty(this, 'maxDuration', {
			enumerable: true,
			get: () => this.__data.maxDuration,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Duration = require('./duration.js');
				this.__data.maxDuration = new Duration(value);
			},
		});

		Object.defineProperty(this, '_instruction', {
			enumerable: true,
			get: () => this.__data._instruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instruction = new Element(value);
			},
		});

		Object.defineProperty(this, 'instruction', {
			enumerable: true,
			get: () => this.__data.instruction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instruction = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SpecimenDefinitionTypeTestedHandling',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SpecimenDefinitionTypeTestedHandling';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			temperatureQualifier: this.temperatureQualifier && this.temperatureQualifier.toJSON(),
			temperatureRange: this.temperatureRange && this.temperatureRange.toJSON(),
			maxDuration: this.maxDuration && this.maxDuration.toJSON(),
			_instruction: this._instruction && this._instruction.toJSON(),
			instruction: this.instruction,
		};
	}
};
