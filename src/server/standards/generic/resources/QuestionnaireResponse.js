const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const Attachment = require('../types/Attachment');
const Coding = require('../types/Coding');
const Quantity = require('../types/Quantity');

class Answer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// value[x]		0..1		Single-valued answer to the question
	// Questionnaire Answer Codes (Example)
	// valueBoolean			boolean
	set valueBoolean(valueBoolean) {
		this._valueBoolean = valueBoolean;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}

	// valueDecimal			decimal
	set valueDecimal(valueDecimal) {
		this._valueDecimal = valueDecimal;
	}

	get valueDecimal() {
		return this._valueDecimal;
	}

	// valueInteger			integer
	set valueInteger(valueInteger) {
		this._valueInteger = valueInteger;
	}

	get valueInteger() {
		return this._valueInteger;
	}

	// valueDate			date
	set valueDate(valueDate) {
		this._valueDate = valueDate;
	}

	get valueDate() {
		return this._valueDate;
	}

	// valueDateTime			dateTime
	set valueDateTime(valueDateTime) {
		this._valueDateTime = valueDateTime;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	// valueTime			time
	set valueTime(valueTime) {
		this._valueTime = valueTime;
	}

	get valueTime() {
		return this._valueTime;
	}

	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueUri			uri
	set valueUri(valueUri) {
		this._valueUri = valueUri;
	}

	get valueUri() {
		return this._valueUri;
	}

	// valueAttachment			Attachment
	set valueAttachment(valueAttachment) {
		this._valueAttachment = new Attachment(valueAttachment);
	}

	get valueAttachment() {
		return this._valueAttachment;
	}

	// valueCoding			Coding
	set valueCoding(valueCoding) {
		this._valueCoding = new Coding(valueCoding);
	}

	get valueCoding() {
		return this._valueCoding;
	}

	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueReference			Reference
	set valueReference(valueReference) {
		this._valueReference = new Reference(valueReference);
	}

	get valueReference() {
		return this._valueReference;
	}

	// item		0..*	see item	Nested groups and questions
	set item(item) {
		this._item = [].concat(item);
	}

	get item() {
		return this._item;
	}

	toJSON() {
		return {
			valueBoolean: this._valueBoolean,
			valueDecimal: this._valueDecimal,
			valueInteger: this._valueInteger,
			valueDate: this._valueDate,
			valueDateTime: this._valueDateTime,
			valueTime: this._valueTime,
			valueString: this._valueString,
			valueUri: this._valueUri,
			valueAttachment: this._valueAttachment,
			valueCoding: this._valueCoding,
			valueQuantity: this._valueQuantity,
			valueReference: this._valueReference,
			item: this._item,
		};
	}
}

class Item {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// linkId		1..1	string	Pointer to specific item from Questionnaire
	set linkId(linkId) {
		this._linkId = linkId;
	}

	get linkId() {
		return this._linkId;
	}

	// definition		0..1	uri	ElementDefinition - details for the item
	set definition(definition) {
		this._definition = definition;
	}

	get definition() {
		return this._definition;
	}

	// text		0..1	string	Name for group or question text
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// subject		0..1	Reference(Any)	The subject this group's answers are about
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// item		0..*	see item	Nested questionnaire response items
	set item(item) {
		this._item = [].concat(item);
	}

	get item() {
		return this._item;
	}

	// answer		0..*	BackboneElement	The response(s) to the question
	set answer(answer) {
		if (Array.isArray(answer)) {
			this._answer = answer.map((i) => new Answer(i));
		} else {
			this._answer = [new Answer(answer)];
		}
	}

	get answer() {
		return this._answer;
	}

	toJSON() {
		return {
			linkId: this._linkId,
			definition: this._definition,
			text: this._text,
			subject: this._subject,
			item: this._item,
			answer: this._answer,
		};
	}
}

class QuestionnaireResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'QuestionnaireResponse';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Unique id for this set of answers
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// basedOn	Σ	0..*	Reference(ReferralRequest | CarePlan | ProcedureRequest)	Request fulfilled by this QuestionnaireResponse
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// parent	Σ	0..*	Reference(Observation | Procedure)	Part of this action
	set parent(parent) {
		if (Array.isArray(parent)) {
			this._parent = parent.map((i) => new Reference(i));
		} else {
			this._parent = [new Reference(parent)];
		}
	}

	get parent() {
		return this._parent;
	}

	// questionnaire	Σ	0..1	Reference(Questionnaire)	Form being answered
	set questionnaire(questionnaire) {
		this._questionnaire = new Reference(questionnaire);
	}

	get questionnaire() {
		return this._questionnaire;
	}

	// status	?!Σ	1..1	code	in-progress | completed | amended | entered-in-error | stopped
	// QuestionnaireResponseStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// subject	Σ	0..1	Reference(Any)	The subject of the questions
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode during which questionnaire was completed
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// authored	Σ	0..1	dateTime	Date the answers were gathered
	set authored(authored) {
		this._authored = authored;
	}

	get authored() {
		return this._authored;
	}

	// author	Σ	0..1	Reference(Device | Practitioner | Patient | RelatedPerson)	Person who received and recorded the answers
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	// source	Σ	0..1	Reference(Patient | Practitioner | RelatedPerson)	The person who answered the questions
	set source(source) {
		this._source = new Reference(source);
	}

	get source() {
		return this._source;
	}

	// item	I	0..*	BackboneElement	Groups and questions
	// + Nested item can't be beneath both item and answer
	set item(item) {
		if (Array.isArray(item)) {
			this._item = item.map((i) => new Item(i));
		} else {
			this._item = [new Item(item)];
		}
	}

	get item() {
		return this._item;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			basedOn: this._basedOn,
			parent: this._parent,
			questionnaire: this._questionnaire,
			status: this._status,
			subject: this._subject,
			context: this._context,
			authored: this._authored,
			author: this._author,
			source: this._source,
			item: this._item,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.QuestionnaireResponse = QuestionnaireResponse;
module.exports.Item = Item;
module.exports.Answer = Answer;
