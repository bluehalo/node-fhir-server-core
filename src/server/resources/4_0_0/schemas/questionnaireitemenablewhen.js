/**
 * @name exports
 * @summary QuestionnaireItemEnableWhen Class
 */
module.exports = class QuestionnaireItemEnableWhen {
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

		Object.defineProperty(this, '_question', {
			enumerable: true,
			get: () => this.__data._question,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._question = new Element(value);
			},
		});

		Object.defineProperty(this, 'question', {
			enumerable: true,
			get: () => this.__data.question,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.question = value;
			},
		});

		Object.defineProperty(this, '_operator', {
			enumerable: true,
			get: () => this.__data._operator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._operator = new Element(value);
			},
		});

		Object.defineProperty(this, 'operator', {
			enumerable: true,
			get: () => this.__data.operator,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.operator = value;
			},
		});

		Object.defineProperty(this, '_answerBoolean', {
			enumerable: true,
			get: () => this.__data._answerBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerBoolean = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerBoolean', {
			enumerable: true,
			get: () => this.__data.answerBoolean,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerBoolean = value;
			},
		});

		Object.defineProperty(this, '_answerDecimal', {
			enumerable: true,
			get: () => this.__data._answerDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerDecimal = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerDecimal', {
			enumerable: true,
			get: () => this.__data.answerDecimal,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerDecimal = value;
			},
		});

		Object.defineProperty(this, '_answerInteger', {
			enumerable: true,
			get: () => this.__data._answerInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerInteger = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerInteger', {
			enumerable: true,
			get: () => this.__data.answerInteger,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerInteger = value;
			},
		});

		Object.defineProperty(this, '_answerDate', {
			enumerable: true,
			get: () => this.__data._answerDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerDate', {
			enumerable: true,
			get: () => this.__data.answerDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerDate = value;
			},
		});

		Object.defineProperty(this, '_answerDateTime', {
			enumerable: true,
			get: () => this.__data._answerDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerDateTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerDateTime', {
			enumerable: true,
			get: () => this.__data.answerDateTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerDateTime = value;
			},
		});

		Object.defineProperty(this, '_answerTime', {
			enumerable: true,
			get: () => this.__data._answerTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerTime = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerTime', {
			enumerable: true,
			get: () => this.__data.answerTime,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerTime = value;
			},
		});

		Object.defineProperty(this, '_answerString', {
			enumerable: true,
			get: () => this.__data._answerString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._answerString = new Element(value);
			},
		});

		Object.defineProperty(this, 'answerString', {
			enumerable: true,
			get: () => this.__data.answerString,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.answerString = value;
			},
		});

		Object.defineProperty(this, 'answerCoding', {
			enumerable: true,
			get: () => this.__data.answerCoding,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.answerCoding = new Coding(value);
			},
		});

		Object.defineProperty(this, 'answerQuantity', {
			enumerable: true,
			get: () => this.__data.answerQuantity,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Quantity = require('./quantity.js');
				this.__data.answerQuantity = new Quantity(value);
			},
		});

		Object.defineProperty(this, 'answerReference', {
			enumerable: true,
			get: () => this.__data.answerReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.answerReference = new Reference(value);
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'QuestionnaireItemEnableWhen',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'QuestionnaireItemEnableWhen';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_question: this._question && this._question.toJSON(),
			question: this.question,
			_operator: this._operator && this._operator.toJSON(),
			operator: this.operator,
			_answerBoolean: this._answerBoolean && this._answerBoolean.toJSON(),
			answerBoolean: this.answerBoolean,
			_answerDecimal: this._answerDecimal && this._answerDecimal.toJSON(),
			answerDecimal: this.answerDecimal,
			_answerInteger: this._answerInteger && this._answerInteger.toJSON(),
			answerInteger: this.answerInteger,
			_answerDate: this._answerDate && this._answerDate.toJSON(),
			answerDate: this.answerDate,
			_answerDateTime: this._answerDateTime && this._answerDateTime.toJSON(),
			answerDateTime: this.answerDateTime,
			_answerTime: this._answerTime && this._answerTime.toJSON(),
			answerTime: this.answerTime,
			_answerString: this._answerString && this._answerString.toJSON(),
			answerString: this.answerString,
			answerCoding: this.answerCoding && this.answerCoding.toJSON(),
			answerQuantity: this.answerQuantity && this.answerQuantity.toJSON(),
			answerReference: this.answerReference && this.answerReference.toJSON(),
		};
	}
};
