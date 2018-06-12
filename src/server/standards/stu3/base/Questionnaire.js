const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const ContactDetail = require('./ContactDetail');
const Coding = require('./Coding');
const Questionnaire_Item = require('./Questionnaire_Item');

class Questionnaire extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Questionnaire';
	}

	// This is a Questionnaire resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Questionnaire'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this questionnaire is (or will be) published. The URL SHOULD include the major version of the questionnaire. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the questionnaire.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this questionnaire. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the questionnaire was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the questionnaire.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// A free text natural language description of the questionnaire from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Explaination of why this questionnaire is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
	get approvalDate () {
		return this._approvalDate;
	}

	set approvalDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field approvalDate`);
		}
		this._approvalDate = new_value;
	}

	// The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn't change the original approval date.
	get lastReviewDate () {
		return this._lastReviewDate;
	}

	set lastReviewDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lastReviewDate`);
		}
		this._lastReviewDate = new_value;
	}

	// The period during which the questionnaire content was or is planned to be in active use.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate questionnaire instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the questionnaire is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// An identifier for this question or group of questions in a particular terminology such as LOINC.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The types of subjects that can be the subject of responses created for the questionnaire.
	get subjectType () {
		return this._subjectType;
	}

	set subjectType ( new_value ) {
		this._subjectType = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A particular question, question grouping or display text that is part of the questionnaire.
	get item () {
		return this._item;
	}

	set item ( new_value ) {
		this._item = Array.isArray(new_value) ? new_value.map(val => new Questionnaire_Item(val)) : [new Questionnaire_Item(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			item: this._item
		});
	}

}

module.exports = Questionnaire;
