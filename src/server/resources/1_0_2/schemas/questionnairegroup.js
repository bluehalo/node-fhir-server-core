/**
 * @name exports
 * @summary QuestionnaireGroup Class
 */
module.exports = class QuestionnaireGroup {
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

		Object.defineProperty(this, '_title', {
			enumerable: true,
			get: () => this.__data._title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._title = new Element(value);
			},
		});

		Object.defineProperty(this, 'title', {
			enumerable: true,
			get: () => this.__data.title,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.title = value;
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		Object.defineProperty(this, 'concept', {
			enumerable: true,
			get: () => this.__data.concept,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Coding = require('./coding.js');
				this.__data.concept = Array.isArray(value) ? value.map(v => new Coding(v)) : [new Coding(value)];
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

		Object.defineProperty(this, 'question', {
			enumerable: true,
			get: () => this.__data.question,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let QuestionnaireGroupQuestion = require('./questionnairegroupquestion.js');
				this.__data.question = Array.isArray(value)
					? value.map(v => new QuestionnaireGroupQuestion(v))
					: [new QuestionnaireGroupQuestion(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'QuestionnaireGroup',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'QuestionnaireGroup';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_linkId: this._linkId && this._linkId.toJSON(),
			linkId: this.linkId,
			_title: this._title && this._title.toJSON(),
			title: this.title,
			concept: this.concept && this.concept.map(v => v.toJSON()),
			_text: this._text && this._text.toJSON(),
			text: this.text,
			_required: this._required && this._required.toJSON(),
			required: this.required,
			_repeats: this._repeats && this._repeats.toJSON(),
			repeats: this.repeats,
			question: this.question && this.question.map(v => v.toJSON()),
		};
	}
};
