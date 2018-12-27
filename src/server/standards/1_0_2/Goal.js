const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');

class Goal extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Goal';
		Object.assign(this, opt);
	}

	// This is a Goal resource
	static get __resourceType() {
		return 'Goal';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Goal = new_value;
	}

	// This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Identifies the patient, group or organization for whom the goal is being established.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The date or event after which the goal should begin being pursued.
	get startDate() {
		return this.__startDate;
	}

	set startDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field startDate`);
		}
		this.__startDate = new_value;
	}

	// The date or event after which the goal should begin being pursued.
	get startCodeableConcept() {
		return this.__startCodeableConcept;
	}

	set startCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__startCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates either the date or the duration after start by which the goal should be met.
	get targetDate() {
		return this.__targetDate;
	}

	set targetDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field targetDate`);
		}
		this.__targetDate = new_value;
	}

	// Indicates either the date or the duration after start by which the goal should be met.
	get targetQuantity() {
		return this.__targetQuantity;
	}

	set targetQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__targetQuantity = new Quantity(new_value);
	}

	// Indicates a category the goal falls within.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Human-readable description of a specific desired objective of care.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Indicates whether the goal has been reached and is still considered relevant.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
	get statusDate() {
		return this.__statusDate;
	}

	set statusDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field statusDate`);
		}
		this.__statusDate = new_value;
	}

	// Captures the reason for the current status.
	get statusReason() {
		return this.__statusReason;
	}

	set statusReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__statusReason = new CodeableConcept(new_value);
	}

	// Indicates whose goal this is - patient goal, practitioner goal, etc.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	// The identified conditions and other health record elements that are intended to be addressed by the goal.
	get addresses() {
		return this.__addresses;
	}

	set addresses(new_value) {
		const Reference = require('./Reference');
		this.__addresses = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Any comments related to the goal.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const GoalOutcome = require('./GoalOutcome');
		this.__outcome = Array.isArray(new_value)
			? new_value.map(val => new GoalOutcome(val))
			: [new GoalOutcome(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			startDate: this.__startDate,
			startCodeableConcept: this.__startCodeableConcept && this.__startCodeableConcept.toJSON(),
			targetDate: this.__targetDate,
			targetQuantity: this.__targetQuantity && this.__targetQuantity.toJSON(),
			category: this.__category && this.__category.map(v => v.toJSON()),
			description: this.__description,
			status: this.__status,
			statusDate: this.__statusDate,
			statusReason: this.__statusReason && this.__statusReason.toJSON(),
			author: this.__author && this.__author.toJSON(),
			priority: this.__priority && this.__priority.toJSON(),
			addresses: this.__addresses && this.__addresses.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			outcome: this.__outcome && this.__outcome.map(v => v.toJSON()),
		});
	}
}

module.exports = Goal;
