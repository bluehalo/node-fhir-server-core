const BackboneElement = require('./BackboneElement');

class QuestionnaireGroup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireGroup';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireGroup resource
	static get __resourceType() {
		return 'QuestionnaireGroup';
	}

	// An identifier that is unique within the Questionnaire allowing linkage to the equivalent group in a QuestionnaireResponse resource.
	get linkId() {
		return this.__linkId;
	}

	set linkId(new_value) {
		this.__linkId = new_value;
	}

	// The human-readable name for this section of the questionnaire.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// Identifies a how this group of questions is known in a particular terminology such as LOINC.
	get concept() {
		return this.__concept;
	}

	set concept(new_value) {
		const Coding = require('./Coding');
		this.__concept = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// Additional text for the group, used for display purposes.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
	get required() {
		return this.__required;
	}

	set required(new_value) {
		this.__required = new_value;
	}

	// Whether the group may occur multiple times in the instance, containing multiple sets of answers.
	get repeats() {
		return this.__repeats;
	}

	set repeats(new_value) {
		this.__repeats = new_value;
	}

	// Set of questions within this group. The order of questions within the group is relevant.
	get question() {
		return this.__question;
	}

	set question(new_value) {
		const QuestionnaireGroupQuestion = require('./QuestionnaireGroupQuestion');
		this.__question = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireGroupQuestion(val))
			: [new QuestionnaireGroupQuestion(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			linkId: this.__linkId,
			title: this.__title,
			concept: this.__concept && this.__concept.map(v => v.toJSON()),
			text: this.__text,
			required: this.__required,
			repeats: this.__repeats,
			question: this.__question && this.__question.map(v => v.toJSON()),
		});
	}
}

module.exports = QuestionnaireGroup;
