const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class QuestionnaireResponseItem extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireResponseItem';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireResponseItem resource
	static get __resourceType() {
		return 'QuestionnaireResponseItem';
	}

	// The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
	get linkId() {
		return this.__linkId;
	}

	set linkId(new_value) {
		this.__linkId = new_value;
	}

	// A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field definition`);
		}
		this.__definition = new_value;
	}

	// Text that is displayed above the contents of the group or as the text of the question being answered.
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

	// The respondent\'s answer(s) to the question.
	get answer() {
		return this.__answer;
	}

	set answer(new_value) {
		const QuestionnaireResponseItemAnswer = require('./QuestionnaireResponseItemAnswer');
		this.__answer = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireResponseItemAnswer(val))
			: [new QuestionnaireResponseItemAnswer(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			linkId: this.__linkId,
			definition: this.__definition,
			text: this.__text,
			subject: this.__subject && this.__subject.toJSON(),
			answer: this.__answer && this.__answer.map(v => v.toJSON()),
		});
	}
}

module.exports = QuestionnaireResponseItem;
