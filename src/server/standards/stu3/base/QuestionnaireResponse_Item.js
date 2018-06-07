const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const QuestionnaireResponse_Answer = require('./QuestionnaireResponse_Answer');

class QuestionnaireResponse_Item extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'QuestionnaireResponse_Item';
	}

	// The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
	get linkId () {
		return this._linkId;
	}

	set linkId ( new_value ) {
		this._linkId = new_value;
	}

	// A reference to an [[[ElementDefinition]]] that provides the details for the item.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new_value;
	}

	// Text that is displayed above the contents of the group or as the text of the question being answered.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// More specific subject this section's answers are about, details the subject given in QuestionnaireResponse.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The respondent's answer(s) to the question.
	get answer () {
		return this._answer;
	}

	set answer ( new_value ) {
		this._answer = Array.isArray(new_value) ? new_value.map(val => new QuestionnaireResponse_Answer(val)) : [new QuestionnaireResponse_Answer(new_value)];
	}

	// Questions or sub-groups nested beneath a question or group.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new QuestionnaireResponse_Item(val)) : [new QuestionnaireResponse_Item(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			linkId: this._linkId,
			definition: this._definition,
			text: this._text,
			subject: this._subject,
			answer: this._answer,
			item: this._item
		});
	}

}

module.exports = QuestionnaireResponse_Item;
