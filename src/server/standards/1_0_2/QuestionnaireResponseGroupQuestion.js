const BackboneElement = require('./BackboneElement');

class QuestionnaireResponseGroupQuestion extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireResponseGroupQuestion';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireResponseGroupQuestion resource
	static get __resourceType() {
		return 'QuestionnaireResponseGroupQuestion';
	}

	// Identifies the question from the Questionnaire that corresponds to this question in the QuestionnaireResponse resource.
	get linkId() {
		return this.__linkId;
	}

	set linkId(new_value) {
		this.__linkId = new_value;
	}

	// The actual question as shown to the user to prompt them for an answer.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// The respondent\'s answer(s) to the question.
	get answer() {
		return this.__answer;
	}

	set answer(new_value) {
		const QuestionnaireResponseGroupQuestionAnswer = require('./QuestionnaireResponseGroupQuestionAnswer');
		this.__answer = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireResponseGroupQuestionAnswer(val))
			: [new QuestionnaireResponseGroupQuestionAnswer(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			linkId: this.__linkId,
			text: this.__text,
			answer: this.__answer && this.__answer.map(v => v.toJSON()),
		});
	}
}

module.exports = QuestionnaireResponseGroupQuestion;
