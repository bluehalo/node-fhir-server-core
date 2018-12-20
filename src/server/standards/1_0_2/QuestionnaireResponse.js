const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class QuestionnaireResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'QuestionnaireResponse';
		Object.assign(this, opt);
	}

	// This is a QuestionnaireResponse resource
	static get __resourceType() {
		return 'QuestionnaireResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__QuestionnaireResponse = new_value;
	}

	// A business identifier assigned to a particular completed (or partially completed) questionnaire.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Indicates the Questionnaire resource that defines the form for which answers are being provided.
	get questionnaire() {
		return this.__questionnaire;
	}

	set questionnaire(new_value) {
		const Reference = require('./Reference');
		this.__questionnaire = new Reference(new_value);
	}

	// The lifecycle status of the questionnaire response as a whole.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// The date and/or time that this version of the questionnaire response was authored.
	get authored() {
		return this.__authored;
	}

	set authored(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field authored`);
		}
		this.__authored = new_value;
	}

	// The person who answered the questions about the subject.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// Encounter during which this set of questionnaire response were collected. When there were multiple encounters, this is the one considered most relevant to the context of the answers.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// A group of questions to a possibly similarly grouped set of questions in the questionnaire response.
	get group() {
		return this.__group;
	}

	set group(new_value) {
		const QuestionnaireResponseGroup = require('./QuestionnaireResponseGroup');
		this.__group = new QuestionnaireResponseGroup(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			questionnaire: this.__questionnaire && this.__questionnaire.toJSON(),
			status: this.__status,
			subject: this.__subject && this.__subject.toJSON(),
			author: this.__author && this.__author.toJSON(),
			authored: this.__authored,
			source: this.__source && this.__source.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			group: this.__group && this.__group.toJSON(),
		});
	}
}

module.exports = QuestionnaireResponse;
