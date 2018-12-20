const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class DetectedIssue extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DetectedIssue';
		Object.assign(this, opt);
	}

	// This is a DetectedIssue resource
	static get __resourceType() {
		return 'DetectedIssue';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DetectedIssue = new_value;
	}

	// Indicates the patient whose record the detected issue is associated with.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Identifies the general type of issue identified.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
	get severity() {
		return this.__severity;
	}

	set severity(new_value) {
		this.__severity = new_value;
	}

	// Indicates the resource representing the current activity or proposed activity that is potentially problematic.
	get implicated() {
		return this.__implicated;
	}

	set implicated(new_value) {
		const Reference = require('./Reference');
		this.__implicated = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A textual explanation of the detected issue.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		this.__detail = new_value;
	}

	// The date or date-time when the detected issue was initially identified.
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

	// Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// Business identifier associated with the detected issue record.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field reference`);
		}
		this.__reference = new_value;
	}

	// Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
	get mitigation() {
		return this.__mitigation;
	}

	set mitigation(new_value) {
		const DetectedIssueMitigation = require('./DetectedIssueMitigation');
		this.__mitigation = Array.isArray(new_value)
			? new_value.map(val => new DetectedIssueMitigation(val))
			: [new DetectedIssueMitigation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			patient: this.__patient && this.__patient.toJSON(),
			category: this.__category && this.__category.toJSON(),
			severity: this.__severity,
			implicated: this.__implicated && this.__implicated.map(v => v.toJSON()),
			detail: this.__detail,
			date: this.__date,
			author: this.__author && this.__author.toJSON(),
			identifier: this.__identifier && this.__identifier.toJSON(),
			reference: this.__reference,
			mitigation: this.__mitigation && this.__mitigation.map(v => v.toJSON()),
		});
	}
}

module.exports = DetectedIssue;
