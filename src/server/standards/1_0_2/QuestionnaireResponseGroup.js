const BackboneElement = require('./BackboneElement');

class QuestionnaireResponseGroup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireResponseGroup';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireResponseGroup resource
	static get __resourceType() {
		return 'QuestionnaireResponseGroup';
	}

	// Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.
	get linkId() {
		return this.__linkId;
	}

	set linkId(new_value) {
		this.__linkId = new_value;
	}

	// Text that is displayed above the contents of the group.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// Additional text for the group, used for display purposes.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// More specific subject this section\'s answers are about, details the subject given in QuestionnaireResponse.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Set of questions within this group. The order of questions within the group is relevant.
	get question() {
		return this.__question;
	}

	set question(new_value) {
		const QuestionnaireResponseGroupQuestion = require('./QuestionnaireResponseGroupQuestion');
		this.__question = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireResponseGroupQuestion(val))
			: [new QuestionnaireResponseGroupQuestion(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			linkId: this.__linkId,
			title: this.__title,
			text: this.__text,
			subject: this.__subject && this.__subject.toJSON(),
			question: this.__question && this.__question.map(v => v.toJSON()),
		});
	}
}

module.exports = QuestionnaireResponseGroup;
