/**
 * @name exports
 * @summary QuestionnaireItemInitial Class
 */
module.exports = class QuestionnaireItemInitial {
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

		Object.defineProperty(this, '_valueBoolean', {
			enumerable: true,
			get: () => this.__data._valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueBoolean', {
			enumerable: true,
			get: () => this.__data.valueBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueBoolean = value;
			},
		});

		Object.defineProperty(this, '_valueDecimal', {
			enumerable: true,
			get: () => this.__data._valueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDecimal', {
			enumerable: true,
			get: () => this.__data.valueDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDecimal = value;
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

		Object.defineProperty(this, '_valueDateTime', {
			enumerable: true,
			get: () => this.__data._valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueDateTime', {
			enumerable: true,
			get: () => this.__data.valueDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueDateTime = value;
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

		Object.defineProperty(this, '_valueUri', {
			enumerable: true,
			get: () => this.__data._valueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueUri', {
			enumerable: true,
			get: () => this.__data.valueUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueUri = value;
			},
		});

		Object.defineProperty(this, 'valueAttachment', {
			enumerable: true,
			get: () => this.__data.valueAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.valueAttachment = new Attachment(value);
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

		Object.defineProperty(this, 'valueQuantity', {
			enumerable: true,
			get: () => this.__data.valueQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.valueQuantity = new Quantity(value);
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

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'QuestionnaireItemInitial',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'QuestionnaireItemInitial';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_valueBoolean: this._valueBoolean && this._valueBoolean.toJSON(),
			valueBoolean: this.valueBoolean,
			_valueDecimal: this._valueDecimal && this._valueDecimal.toJSON(),
			valueDecimal: this.valueDecimal,
			_valueInteger: this._valueInteger && this._valueInteger.toJSON(),
			valueInteger: this.valueInteger,
			_valueDate: this._valueDate && this._valueDate.toJSON(),
			valueDate: this.valueDate,
			_valueDateTime: this._valueDateTime && this._valueDateTime.toJSON(),
			valueDateTime: this.valueDateTime,
			_valueTime: this._valueTime && this._valueTime.toJSON(),
			valueTime: this.valueTime,
			_valueString: this._valueString && this._valueString.toJSON(),
			valueString: this.valueString,
			_valueUri: this._valueUri && this._valueUri.toJSON(),
			valueUri: this.valueUri,
			valueAttachment: this.valueAttachment && this.valueAttachment.toJSON(),
			valueCoding: this.valueCoding && this.valueCoding.toJSON(),
			valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
			valueReference: this.valueReference && this.valueReference.toJSON(),
		};
	}
};
