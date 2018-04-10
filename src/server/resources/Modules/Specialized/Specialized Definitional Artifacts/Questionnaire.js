const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Period = require('./types/Period');
const UsageContext = require('./types/UsageContext');
const CodeableConcept = require('./types/CodeableConcept');
const ContactDetail = require('./types/ContactDetail');
const Coding = require('./types/Coding');
const Reference = require('./types/Reference');
const Attachment = require('./types/Attachment');
const Quantity = require('./types/Quantity');

class EnableWhen {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// question		1..1	string	Question that determines whether item is enabled
	set question(question) {
		this._question = question;
	}

	get question() {
		return this._question;
	}

	// hasAnswer	I	0..1	boolean	Enable when answered or not
	set hasAnswer(hasAnswer) {
		this._hasAnswer = hasAnswer;
	}

	get hasAnswer() {
		return this._hasAnswer;
	}

	// answer[x]	I	0..1		Value question must have
	// Questionnaire Answer Codes (Example)
	// answerBoolean			boolean
	set answerBoolean(answerBoolean) {
		this._answerBoolean = answerBoolean;
	}

	get answerBoolean() {
		return this._answerBoolean;
	}

	// answerDecimal			decimal
	set answerDecimal(answerDecimal) {
		this._answerDecimal = answerDecimal;
	}

	get answerDecimal() {
		return this._answerDecimal;
	}

	// answerInteger			integer
	set answerInteger(answerInteger) {
		this._answerInteger = answerInteger;
	}

	get answerInteger() {
		return this._answerInteger;
	}

	// answerDate			date
	set answerDate(answerDate) {
		this._answerDate = answerDate;
	}

	get answerDate() {
		return this._answerDate;
	}

	// answerDateTime			dateTime
	set answerDateTime(answerDateTime) {
		this._answerDateTime = answerDateTime;
	}

	get answerDateTime() {
		return this._answerDateTime;
	}

	// answerTime			time
	set answerTime(answerTime) {
		this._answerTime = answerTime;
	}

	get answerTime() {
		return this._answerTime;
	}

	// answerString			string
	set answerString(answerString) {
		this._answerString = answerString;
	}

	get answerString() {
		return this._answerString;
	}

	// answerUri			uri
	set answerUri(answerUri) {
		this._answerUri = answerUri;
	}

	get answerUri() {
		return this._answerUri;
	}

	// answerAttachment			Attachment
	set answerAttachment(answerAttachment) {
		this._answerAttachment = new Attachment(answerAttachment);
	}

	get answerAttachment() {
		return this._answerAttachment;
	}

	// answerCoding			Coding
	set answerCoding(answerCoding) {
		this._answerCoding = new Coding(answerCoding);
	}

	get answerCoding() {
		return this._answerCoding;
	}

	// answerQuantity			Quantity
	set answerQuantity(answerQuantity) {
		this._answerQuantity = new Quantity(answerQuantity);
	}

	get answerQuantity() {
		return this._answerQuantity;
	}

	// answerReference			Reference
	set answerReference(answerReference) {
		this._answerReference = new Reference(answerReference);
	}

	get answerReference() {
		return this._answerReference;
	}

	toJSON() {
		return {
			question: this._question,
			hasAnswer: this._hasAnswer,
			answerBoolean: this._answerBoolean,
			answerDecimal: this._answerDecimal,
			answerInteger: this._answerInteger,
			answerDate: this._answerDate,
			answerDateTime: this._answerDateTime,
			answerTime: this._answerTime,
			answerString: this._answerString,
			answerUri: this._answerUri,
			answerAttachment: this._answerAttachment,
			answerCoding: this._answerCoding,
			answerQuantity: this._answerQuantity,
			answerReference: this._answerReference,
		};
	}
}

class Option {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// value[x]		1..1		Answer value
	// Questionnaire Answer Codes (Example)
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

	// valueCoding			Coding
	set valueCoding(valueCoding) {
		this._valueCoding = new Coding(valueCoding);
	}

	get valueCoding() {
		return this._valueCoding;
	}

	toJSON() {
		return {
			valueInteger: this._valueInteger,
			valueDate: this._valueDate,
			valueTime: this._valueTime,
			valueString: this._valueString,
			valueCoding: this._valueCoding,
		};
	}
}

class Item {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// linkId		1..1	string	Unique id for item in questionnaire
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

	// code	ΣI	0..*	Coding	Corresponding concept for this item in a terminology
	// Questionnaire Question Codes (Example)
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new Coding(i));
		} else {
			this._code = [new Coding(code)];
		}
	}

	get code() {
		return this._code;
	}

	// prefix		0..1	string	E.g. "1(a)", "2.5.3"
	set prefix(prefix) {
		this._prefix = prefix;
	}

	get prefix() {
		return this._prefix;
	}

	// text	Σ	0..1	string	Primary text for the item
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// type		1..1	code	group | display | boolean | decimal | integer | date | dateTime +
	// QuestionnaireItemType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// required	I	0..1	boolean	Whether the item must be included in data results
	set required(required) {
		this._required = required;
	}

	get required() {
		return this._required;
	}

	// repeats	I	0..1	boolean	Whether the item may repeat
	set repeats(repeats) {
		this._repeats = repeats;
	}

	get repeats() {
		return this._repeats;
	}

	// readOnly	I	0..1	boolean	Don't allow human editing
	set readOnly(readOnly) {
		this._readOnly = readOnly;
	}

	get readOnly() {
		return this._readOnly;
	}

	// maxLength	I	0..1	integer	No more than this many characters
	set maxLength(maxLength) {
		this._maxLength = maxLength;
	}

	get maxLength() {
		return this._maxLength;
	}

	// options	I	0..1	Reference(ValueSet)	Valueset containing permitted answers
	set options(options) {
		this._options = new Reference(options);
	}

	get options() {
		return this._options;
	}

	// initial[x]	I	0..1		Default value when item is first rendered
	// Questionnaire Answer Codes (Example)
	// initialBoolean			boolean
	set initialBoolean(initialBoolean) {
		this._initialBoolean = initialBoolean;
	}

	get initialBoolean() {
		return this._initialBoolean;
	}

	// initialDecimal			decimal
	set initialDecimal(initialDecimal) {
		this._initialDecimal = initialDecimal;
	}

	get initialDecimal() {
		return this._initialDecimal;
	}

	// initialInteger			integer
	set initialInteger(initialInteger) {
		this._initialInteger = initialInteger;
	}

	get initialInteger() {
		return this._initialInteger;
	}

	// initialDate			date
	set initialDate(initialDate) {
		this._initialDate = initialDate;
	}

	get initialDate() {
		return this._initialDate;
	}

	// initialDateTime			dateTime
	set initialDateTime(initialDateTime) {
		this._initialDateTime = initialDateTime;
	}

	get initialDateTime() {
		return this._initialDateTime;
	}

	// initialTime			time
	set initialTime(initialTime) {
		this._initialTime = initialTime;
	}

	get initialTime() {
		return this._initialTime;
	}

	// initialString			string
	set initialString(initialString) {
		this._initialString = initialString;
	}

	get initialString() {
		return this._initialString;
	}

	// initialUri			uri
	set initialUri(initialUri) {
		this._initialUri = initialUri;
	}

	get initialUri() {
		return this._initialUri;
	}

	// initialAttachment			Attachment
	set initialAttachment(initialAttachment) {
		this._initialAttachment = new Attachment(initialAttachment);
	}

	get initialAttachment() {
		return this._initialAttachment;
	}

	// initialCoding			Coding
	set initialCoding(initialCoding) {
		this._initialCoding = new Coding(initialCoding);
	}

	get initialCoding() {
		return this._initialCoding;
	}

	// initialQuantity			Quantity
	set initialQuantity(initialQuantity) {
		this._initialQuantity = new Quantity(initialQuantity);
	}

	get initialQuantity() {
		return this._initialQuantity;
	}

	// initialReference			Reference
	set initialReference(initialReference) {
		this._initialReference = new Reference(initialReference);
	}

	get initialReference() {
		return this._initialReference;
	}

	// item	I	0..*	see item	Nested questionnaire items
	set item(item) {
		this._item = [].concat(item);
	}

	get item() {
		return this._item;
	}

	// enableWhen	?!ΣI	0..*	BackboneElement	Only allow data when
	// + enableWhen must contain either a 'answer' or a 'hasAnswer' element
	set enableWhen(enableWhen) {
		if (Array.isArray(enableWhen)) {
			this._enableWhen = enableWhen.map((i) => new EnableWhen(i));
		} else {
			this._enableWhen = [new EnableWhen(enableWhen)];
		}
	}

	get enableWhen() {
		return this._enableWhen;
	}

	// option	I	0..*	BackboneElement	Permitted answer
	set option(option) {
		if (Array.isArray(option)) {
			this._option = option.map((i) => new Option(i));
		} else {
			this._option = [new Option(option)];
		}
	}

	get option() {
		return this._option;
	}

	toJSON() {
		return {
			linkId: this._linkId,
			definition: this._definition,
			code: this._code,
			prefix: this._prefix,
			text: this._text,
			type: this._type,
			required: this._required,
			repeats: this._repeats,
			readOnly: this._readOnly,
			maxLength: this._maxLength,
			options: this._options,
			initialBoolean: this._initialBoolean,
			initialDecimal: this._initialDecimal,
			initialInteger: this._initialInteger,
			initialDate: this._initialDate,
			initialDateTime: this._initialDateTime,
			initialTime: this._initialTime,
			initialString: this._initialString,
			initialUri: this._initialUri,
			initialAttachment: this._initialAttachment,
			initialCoding: this._initialCoding,
			initialQuantity: this._initialQuantity,
			initialReference: this._initialReference,
			item: this._item,
			enableWhen: this._enableWhen,
			option: this._option,
		};
	}
}

class Questionnaire extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Questionnaire';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this questionnaire (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the questionnaire
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the questionnaire
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this questionnaire (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this questionnaire (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// experimental	?!Σ	0..1	boolean	For testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// date	Σ	0..1	dateTime	Date this was last changed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	string	Name of the publisher (organization or individual)
	set publisher(publisher) {
		this._publisher = publisher;
	}

	get publisher() {
		return this._publisher;
	}

	// description		0..1	markdown	Natural language description of the questionnaire
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this questionnaire is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// approvalDate		0..1	date	When the questionnaire was approved by publisher
	set approvalDate(approvalDate) {
		this._approvalDate = approvalDate;
	}

	get approvalDate() {
		return this._approvalDate;
	}

	// lastReviewDate		0..1	date	When the questionnaire was last reviewed
	set lastReviewDate(lastReviewDate) {
		this._lastReviewDate = lastReviewDate;
	}

	get lastReviewDate() {
		return this._lastReviewDate;
	}

	// effectivePeriod	Σ	0..1	Period	When the questionnaire is expected to be used
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// useContext	Σ	0..*	UsageContext	Context the content is intended to support
	set useContext(useContext) {
		if (Array.isArray(useContext)) {
			this._useContext = useContext.map((i) => new UsageContext(i));
		} else {
			this._useContext = [new UsageContext(useContext)];
		}
	}

	get useContext() {
		return this._useContext;
	}

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for questionnaire (if applicable)
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// contact	Σ	0..*	ContactDetail	Contact details for the publisher
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// code	Σ	0..*	Coding	Concept that represents the overall questionnaire
	// Questionnaire Question Codes (Example)
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new Coding(i));
		} else {
			this._code = [new Coding(code)];
		}
	}

	get code() {
		return this._code;
	}

	// subjectType	Σ	0..*	code	Resource that can be subject of QuestionnaireResponse
	// ResourceType (Required)
	set subjectType(subjectType) {
		if (Array.isArray(subjectType)) {
			this._subjectType = subjectType.map((i) => new Code(i));
		} else {
			this._subjectType = [new Code(subjectType)];
		}
	}

	get subjectType() {
		return this._subjectType;
	}

	// item	I	0..*	BackboneElement	Questions and sections within the Questionnaire
	// + Read-only can't be specified for "display" items
	// + Default values can't be specified for groups or display items
	// + Required and repeat aren't permitted for display items
	// + Only 'choice' items can have options
	// + A question cannot have both option and options
	// + Display items cannot have a "code" asserted
	// + Maximum length can only be declared for simple question types
	// + Group items must have nested items, display items cannot have nested items
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
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			description: this._description,
			purpose: this._purpose,
			approvalDate: this._approvalDate,
			lastReviewDate: this._lastReviewDate,
			effectivePeriod: this._effectivePeriod,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			contact: this._contact,
			copyright: this._copyright,
			code: this._code,
			subjectType: this._subjectType,
			item: this._item,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Questionnaire = Questionnaire;
module.exports.Item = Item;
module.exports.Option = Option;
module.exports.EnableWhen = EnableWhen;
