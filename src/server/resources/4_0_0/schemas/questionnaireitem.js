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

		Object.defineProperty(this, '_enableBehavior', {
			enumerable: true,
			get: () => this.__data._enableBehavior,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._enableBehavior = new Element(value);
			},
		});

		Object.defineProperty(this, 'enableBehavior', {
			enumerable: true,
			get: () => this.__data.enableBehavior,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.enableBehavior = value;
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

		Object.defineProperty(this, '_answerValueSet', {
			enumerable: true,
			get: () => this.__data._answerValueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerValueSet = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerValueSet', {
			enumerable: true,
			get: () => this.__data.answerValueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerValueSet = value;
			},
		});

		Object.defineProperty(this, 'answerOption', {
			enumerable: true,
			get: () => this.__data.answerOption,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let QuestionnaireItemAnswerOption = require('./questionnaireitemansweroption.js');
				this.__data.answerOption = Array.isArray(value)
					? value.map(v => new QuestionnaireItemAnswerOption(v))
					: [new QuestionnaireItemAnswerOption(value)];
			},
		});

		Object.defineProperty(this, 'initial', {
			enumerable: true,
			get: () => this.__data.initial,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let QuestionnaireItemInitial = require('./questionnaireiteminitial.js');
				this.__data.initial = Array.isArray(value)
					? value.map(v => new QuestionnaireItemInitial(v))
					: [new QuestionnaireItemInitial(value)];
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
			_enableBehavior: this._enableBehavior && this._enableBehavior.toJSON(),
			enableBehavior: this.enableBehavior,
			_required: this._required && this._required.toJSON(),
			required: this.required,
			_repeats: this._repeats && this._repeats.toJSON(),
			repeats: this.repeats,
			_readOnly: this._readOnly && this._readOnly.toJSON(),
			readOnly: this.readOnly,
			_maxLength: this._maxLength && this._maxLength.toJSON(),
			maxLength: this.maxLength,
			_answerValueSet: this._answerValueSet && this._answerValueSet.toJSON(),
			answerValueSet: this.answerValueSet,
			answerOption: this.answerOption && this.answerOption.map(v => v.toJSON()),
			initial: this.initial && this.initial.map(v => v.toJSON()),
			item: this.item && this.item.map(v => v.toJSON()),
		};
	}
};
