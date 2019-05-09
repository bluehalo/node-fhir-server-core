/**
 * @name exports
 * @summary QuestionnaireItemAnswerOption Class
 */
module.exports = class QuestionnaireItemAnswerOption {
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

		Object.defineProperty(this, '_valueInteger', {
			enumerable: true,
			get: () => this.__data._valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueInteger', {
			enumerable: true,
			get: () => this.__data.valueInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueInteger = value;
			},
		});

		Object.defineProperty(this, '_valueDate', {
			enumerable: true,
			get: () => this.__data._valueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDate', {
			enumerable: true,
			get: () => this.__data.valueDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDate = value;
			},
		});

		Object.defineProperty(this, '_valueTime', {
			enumerable: true,
			get: () => this.__data._valueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueTime', {
			enumerable: true,
			get: () => this.__data.valueTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueTime = value;
			},
		});

		Object.defineProperty(this, '_valueString', {
			enumerable: true,
			get: () => this.__data._valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueString = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueString', {
			enumerable: true,
			get: () => this.__data.valueString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueString = value;
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
				this.__data.valueCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'valueReference', {
			enumerable: true,
			get: () => this.__data.valueReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.valueReference = new Reference(value);
			},
		});

		Object.defineProperty(this, '_initialSelected', {
			enumerable: true,
			get: () => this.__data._initialSelected,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialSelected = new Element(value);
			},
		});

		Object.defineProperty(this, 'initialSelected', {
			enumerable: true,
			get: () => this.__data.initialSelected,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialSelected = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'QuestionnaireItemAnswerOption',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'QuestionnaireItemAnswerOption';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_valueInteger: this._valueInteger && this._valueInteger.toJSON(),
			valueInteger: this.valueInteger,
			_valueDate: this._valueDate && this._valueDate.toJSON(),
			valueDate: this.valueDate,
			_valueTime: this._valueTime && this._valueTime.toJSON(),
			valueTime: this.valueTime,
			_valueString: this._valueString && this._valueString.toJSON(),
			valueString: this.valueString,
			valueCoding: this.valueCoding && this.valueCoding.toJSON(),
			valueReference: this.valueReference && this.valueReference.toJSON(),
			_initialSelected: this._initialSelected && this._initialSelected.toJSON(),
			initialSelected: this.initialSelected,
		};
	}
};
