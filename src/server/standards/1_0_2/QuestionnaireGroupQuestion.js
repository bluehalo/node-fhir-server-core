const BackboneElement = require('./BackboneElement');

class QuestionnaireGroupQuestion extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireGroupQuestion';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireGroupQuestion resource
	static get __resourceType() {
		return 'QuestionnaireGroupQuestion';
	}

	// An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a [[[QuestionnaireResponse]]] resource.
	get linkId() {
		return this.__linkId;
	}

	set linkId(new_value) {
		this.__linkId = new_value;
	}

	// Identifies a how this question is known in a particular terminology such as LOINC.
	get concept() {
		return this.__concept;
	}

	set concept(new_value) {
		const Coding = require('./Coding');
		this.__concept = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The actual question as shown to the user to prompt them for an answer.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// The expected format of the answer, e.g. the type of input (string, integer) or whether a (multiple) choice is expected.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
	get required() {
		return this.__required;
	}

	set required(new_value) {
		this.__required = new_value;
	}

	// If true, the question may have more than one answer.
	get repeats() {
		return this.__repeats;
	}

	set repeats(new_value) {
		this.__repeats = new_value;
	}

	// Reference to a value set containing a list of codes representing permitted answers for the question.
	get options() {
		return this.__options;
	}

	set options(new_value) {
		const Reference = require('./Reference');
		this.__options = new Reference(new_value);
	}

	// For a \'choice\' question, identifies one of the permitted answers for the question.
	get option() {
		return this.__option;
	}

	set option(new_value) {
		const Coding = require('./Coding');
		this.__option = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			linkId: this.__linkId,
			concept: this.__concept && this.__concept.map(v => v.toJSON()),
			text: this.__text,
			type: this.__type,
			required: this.__required,
			repeats: this.__repeats,
			options: this.__options && this.__options.toJSON(),
			option: this.__option && this.__option.map(v => v.toJSON()),
		});
	}
}

module.exports = QuestionnaireGroupQuestion;
