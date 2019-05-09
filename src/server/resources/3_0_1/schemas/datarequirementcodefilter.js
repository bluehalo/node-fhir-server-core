/**
 * @name exports
 * @summary DataRequirementCodeFilter Class
 */
module.exports = class DataRequirementCodeFilter {
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

		Object.defineProperty(this, '_path', {
			enumerable: true,
			get: () => this.__data._path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._path = new Element(value);
			},
		});

		Object.defineProperty(this, 'path', {
			enumerable: true,
			get: () => this.__data.path,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.path = value;
			},
		});

		Object.defineProperty(this, '_valueSetString', {
			enumerable: true,
			get: () => this.__data._valueSetString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueSetString = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueSetString', {
			enumerable: true,
			get: () => this.__data.valueSetString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueSetString = value;
			},
		});

		Object.defineProperty(this, 'valueSetReference', {
			enumerable: true,
			get: () => this.__data.valueSetReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.valueSetReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_valueCode', {
			enumerable: true,
			get: () => this.__data._valueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueCode = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueCode', {
			enumerable: true,
			get: () => this.__data.valueCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueCode = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'valueCoding', {
			enumerable: true,
			get: () => this.__data.valueCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.valueCoding = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, 'valueCodeableConcept', {
			enumerable: true,
			get: () => this.__data.valueCodeableConcept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.valueCodeableConcept = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'DataRequirementCodeFilter',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'DataRequirementCodeFilter';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_path: this._path && this._path.toJSON(),
			path: this.path,
			_valueSetString: this._valueSetString && this._valueSetString.toJSON(),
			valueSetString: this.valueSetString,
			valueSetReference: this.valueSetReference && this.valueSetReference.toJSON(),
			_valueCode: this._valueCode && this._valueCode.toJSON(),
			valueCode: this.valueCode,
			valueCoding: this.valueCoding && this.valueCoding.map(v => v.toJSON()),
			valueCodeableConcept: this.valueCodeableConcept && this.valueCodeableConcept.map(v => v.toJSON()),
		};
	}
};
