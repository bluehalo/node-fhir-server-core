const DomainResource = require('./DomainResource');

class Flag extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Flag';
		Object.assign(this, opt);
	}

	// This is a Flag resource
	static get __resourceType() {
		return 'Flag';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Flag = new_value;
	}

	// Identifier assigned to the flag for external use (outside the FHIR environment).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Supports basic workflow.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The patient, location, group , organization , or practitioner this is about record this flag is associated with.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// This alert is only relevant during the encounter.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The person, organization or device that created the flag.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// The coded value or textual component of the flag to display to the user.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			category: this.__category && this.__category.toJSON(),
			status: this.__status,
			period: this.__period && this.__period.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			author: this.__author && this.__author.toJSON(),
			code: this.__code && this.__code.toJSON(),
		});
	}
}

module.exports = Flag;
