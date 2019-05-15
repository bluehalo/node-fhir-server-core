/**
 * @name exports
 * @summary QuestionnaireItem Class
 */
module.exports = class QuestionnaireItem {
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

		Object.defineProperty(this, '_linkId', {
			enumerable: true,
			get: () => this.__data._linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._linkId = new Element(value);
			},
		});

		Object.defineProperty(this, 'linkId', {
			enumerable: true,
			get: () => this.__data.linkId,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.linkId = value;
			},
		});

		Object.defineProperty(this, '_definition', {
			enumerable: true,
			get: () => this.__data._definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._definition = new Element(value);
			},
		});

		Object.defineProperty(this, 'definition', {
			enumerable: true,
			get: () => this.__data.definition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.definition = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		Object.defineProperty(this, 'code', {
			enumerable: true,
			get: () => this.__data.code,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.code = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
			},
		});

		Object.defineProperty(this, '_prefix', {
			enumerable: true,
			get: () => this.__data._prefix,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._prefix = new Element(value);
			},
		});

		Object.defineProperty(this, 'prefix', {
			enumerable: true,
			get: () => this.__data.prefix,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.prefix = value;
			},
		});

		Object.defineProperty(this, '_text', {
			enumerable: true,
			get: () => this.__data._text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._text = new Element(value);
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.text = value;
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/item-type
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

		Object.defineProperty(this, 'enableWhen', {
			enumerable: true,
			get: () => this.__data.enableWhen,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let QuestionnaireItemEnableWhen = require('./questionnaireitemenablewhen.js');
				this.__data.enableWhen = Array.isArray(value)
					? value.map(v => new QuestionnaireItemEnableWhen(v))
					: [new QuestionnaireItemEnableWhen(value)];
			},
		});

		Object.defineProperty(this, '_required', {
			enumerable: true,
			get: () => this.__data._required,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._required = new Element(value);
			},
		});

		Object.defineProperty(this, 'required', {
			enumerable: true,
			get: () => this.__data.required,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.required = value;
			},
		});

		Object.defineProperty(this, '_repeats', {
			enumerable: true,
			get: () => this.__data._repeats,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._repeats = new Element(value);
			},
		});

		Object.defineProperty(this, 'repeats', {
			enumerable: true,
			get: () => this.__data.repeats,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.repeats = value;
			},
		});

		Object.defineProperty(this, '_readOnly', {
			enumerable: true,
			get: () => this.__data._readOnly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._readOnly = new Element(value);
			},
		});

		Object.defineProperty(this, 'readOnly', {
			enumerable: true,
			get: () => this.__data.readOnly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.readOnly = value;
			},
		});

		Object.defineProperty(this, '_maxLength', {
			enumerable: true,
			get: () => this.__data._maxLength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._maxLength = new Element(value);
			},
		});

		Object.defineProperty(this, 'maxLength', {
			enumerable: true,
			get: () => this.__data.maxLength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.maxLength = value;
			},
		});

		Object.defineProperty(this, 'options', {
			enumerable: true,
			get: () => this.__data.options,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.options = new Reference(value);
			},
		});

		Object.defineProperty(this, 'option', {
			enumerable: true,
			get: () => this.__data.option,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let QuestionnaireItemOption = require('./questionnaireitemoption.js');
				this.__data.option = Array.isArray(value)
					? value.map(v => new QuestionnaireItemOption(v))
					: [new QuestionnaireItemOption(value)];
			},
		});

		Object.defineProperty(this, '_initialBoolean', {
			enumerable: true,
			get: () => this.__data._initialBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialBoolean = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialBoolean', {
			enumerable: true,
			get: () => this.__data.initialBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialBoolean = value;
			},
		});

		Object.defineProperty(this, '_initialDecimal', {
			enumerable: true,
			get: () => this.__data._initialDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialDecimal = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialDecimal', {
			enumerable: true,
			get: () => this.__data.initialDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialDecimal = value;
			},
		});

		Object.defineProperty(this, '_initialInteger', {
			enumerable: true,
			get: () => this.__data._initialInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialInteger = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialInteger', {
			enumerable: true,
			get: () => this.__data.initialInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialInteger = value;
			},
		});

		Object.defineProperty(this, '_initialDate', {
			enumerable: true,
			get: () => this.__data._initialDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialDate = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialDate', {
			enumerable: true,
			get: () => this.__data.initialDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialDate = value;
			},
		});

		Object.defineProperty(this, '_initialDateTime', {
			enumerable: true,
			get: () => this.__data._initialDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialDateTime = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialDateTime', {
			enumerable: true,
			get: () => this.__data.initialDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialDateTime = value;
			},
		});

		Object.defineProperty(this, '_initialTime', {
			enumerable: true,
			get: () => this.__data._initialTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialTime = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialTime', {
			enumerable: true,
			get: () => this.__data.initialTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialTime = value;
			},
		});

		Object.defineProperty(this, '_initialString', {
			enumerable: true,
			get: () => this.__data._initialString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialString = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialString', {
			enumerable: true,
			get: () => this.__data.initialString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialString = value;
			},
		});

		Object.defineProperty(this, '_initialUri', {
			enumerable: true,
			get: () => this.__data._initialUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._initialUri = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialUri', {
			enumerable: true,
			get: () => this.__data.initialUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.initialUri = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialAttachment', {
			enumerable: true,
			get: () => this.__data.initialAttachment,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Attachment = require('./attachment.js');
				this.__data.initialAttachment = new Attachment(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialCoding', {
			enumerable: true,
			get: () => this.__data.initialCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.initialCoding = new Coding(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialQuantity', {
			enumerable: true,
			get: () => this.__data.initialQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.initialQuantity = new Quantity(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		Object.defineProperty(this, 'initialReference', {
			enumerable: true,
			get: () => this.__data.initialReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.initialReference = new Reference(value);
			},
		});

		Object.defineProperty(this, 'item', {
			enumerable: true,
			get: () => this.__data.item,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let QuestionnaireItem = require('./questionnaireitem.js');
				this.__data.item = Array.isArray(value)
					? value.map(v => new QuestionnaireItem(v))
					: [new QuestionnaireItem(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'QuestionnaireItem',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'QuestionnaireItem';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_linkId: this._linkId && this._linkId.toJSON(),
			linkId: this.linkId,
			_definition: this._definition && this._definition.toJSON(),
			definition: this.definition,
			code: this.code && this.code.map(v => v.toJSON()),
			_prefix: this._prefix && this._prefix.toJSON(),
			prefix: this.prefix,
			_text: this._text && this._text.toJSON(),
			text: this.text,
			_type: this._type && this._type.toJSON(),
			type: this.type,
			enableWhen: this.enableWhen && this.enableWhen.map(v => v.toJSON()),
			_required: this._required && this._required.toJSON(),
			required: this.required,
			_repeats: this._repeats && this._repeats.toJSON(),
			repeats: this.repeats,
			_readOnly: this._readOnly && this._readOnly.toJSON(),
			readOnly: this.readOnly,
			_maxLength: this._maxLength && this._maxLength.toJSON(),
			maxLength: this.maxLength,
			options: this.options && this.options.toJSON(),
			option: this.option && this.option.map(v => v.toJSON()),
			_initialBoolean: this._initialBoolean && this._initialBoolean.toJSON(),
			initialBoolean: this.initialBoolean,
			_initialDecimal: this._initialDecimal && this._initialDecimal.toJSON(),
			initialDecimal: this.initialDecimal,
			_initialInteger: this._initialInteger && this._initialInteger.toJSON(),
			initialInteger: this.initialInteger,
			_initialDate: this._initialDate && this._initialDate.toJSON(),
			initialDate: this.initialDate,
			_initialDateTime: this._initialDateTime && this._initialDateTime.toJSON(),
			initialDateTime: this.initialDateTime,
			_initialTime: this._initialTime && this._initialTime.toJSON(),
			initialTime: this.initialTime,
			_initialString: this._initialString && this._initialString.toJSON(),
			initialString: this.initialString,
			_initialUri: this._initialUri && this._initialUri.toJSON(),
			initialUri: this.initialUri,
			initialAttachment: this.initialAttachment && this.initialAttachment.toJSON(),
			initialCoding: this.initialCoding && this.initialCoding.toJSON(),
			initialQuantity: this.initialQuantity && this.initialQuantity.toJSON(),
			initialReference: this.initialReference && this.initialReference.toJSON(),
			item: this.item && this.item.map(v => v.toJSON()),
		};
	}
};
