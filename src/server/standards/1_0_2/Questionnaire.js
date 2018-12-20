const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Questionnaire extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Questionnaire';
		Object.assign(this, opt);
	}

	// This is a Questionnaire resource
	static get __resourceType() {
		return 'Questionnaire';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Questionnaire = new_value;
	}

	// This records identifiers associated with this question set that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The version number assigned by the publisher for business reasons.  It may remain the same when the resource is updated.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// The lifecycle status of the questionnaire as a whole.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The date that this questionnaire was last changed.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Organization or person responsible for developing and maintaining the questionnaire.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// Identifies the types of subjects that can be the subject of the questionnaire.
	get subjectType() {
		return this.__subjectType;
	}

	set subjectType(new_value) {
		this.__subjectType = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A collection of related questions (or further groupings of questions).
	get group() {
		return this.__group;
	}

	set group(new_value) {
		const QuestionnaireGroup = require('./QuestionnaireGroup');
		this.__group = new QuestionnaireGroup(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			version: this.__version,
			status: this.__status,
			date: this.__date,
			publisher: this.__publisher,
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			subjectType: this.__subjectType,
			group: this.__group && this.__group.toJSON(),
		});
	}
}

module.exports = Questionnaire;
