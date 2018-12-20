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

	// The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ProcedureRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
	get parent() {
		return this.__parent;
	}

	set parent(new_value) {
		const Reference = require('./Reference');
		this.__parent = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The Questionnaire that defines and organizes the questions for which answers are being provided.
	get questionnaire() {
		return this.__questionnaire;
	}

	set questionnaire(new_value) {
		const Reference = require('./Reference');
		this.__questionnaire = new Reference(new_value);
	}

	// The position of the questionnaire response within its overall lifecycle.
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

	// The encounter or episode of care with primary association to the questionnaire response.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The date and/or time that this set of answers were last changed.
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

	// Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// The person who answered the questions about the subject.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// A group or question item from the original questionnaire for which answers are provided.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const QuestionnaireResponseItem = require('./QuestionnaireResponseItem');
		this.__item = Array.isArray(new_value)
			? new_value.map(val => new QuestionnaireResponseItem(val))
			: [new QuestionnaireResponseItem(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			parent: this.__parent && this.__parent.map(v => v.toJSON()),
			questionnaire: this.__questionnaire && this.__questionnaire.toJSON(),
			status: this.__status,
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			authored: this.__authored,
			author: this.__author && this.__author.toJSON(),
			source: this.__source && this.__source.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
		});
	}
}

module.exports = QuestionnaireResponse;
