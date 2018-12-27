const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class CarePlan extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CarePlan';
		Object.assign(this, opt);
	}

	// This is a CarePlan resource
	static get __resourceType() {
		return 'CarePlan';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__CarePlan = new_value;
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

	// Identifies the patient or group whose intended care is described by the plan.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Identifies the context in which this particular CarePlan is defined.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Indicates when the plan did (or is intended to) come into effect and end.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the most recent date on which the plan has been revised.
	get modified() {
		return this.__modified;
	}

	set modified(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field modified`);
		}
		this.__modified = new_value;
	}

	// Identifies what \'kind\' of plan this is to support differentiation between multiple co-existing plans; e.g. \'Home health\', \'psychiatric\', \'asthma\', \'disease management\', \'wellness plan\', etc.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A description of the scope and nature of the plan.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
	get addresses() {
		return this.__addresses;
	}

	set addresses(new_value) {
		const Reference = require('./Reference');
		this.__addresses = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies portions of the patient\'s record that specifically influenced the formation of the plan.  These might include co-morbidities, recent procedures, limitations, recent assessments, etc.
	get support() {
		return this.__support;
	}

	set support(new_value) {
		const Reference = require('./Reference');
		this.__support = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies CarePlans with some sort of formal relationship to the current plan.
	get relatedPlan() {
		return this.__relatedPlan;
	}

	set relatedPlan(new_value) {
		const CarePlanRelatedPlan = require('./CarePlanRelatedPlan');
		this.__relatedPlan = Array.isArray(new_value)
			? new_value.map(val => new CarePlanRelatedPlan(val))
			: [new CarePlanRelatedPlan(new_value)];
	}

	// Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const CarePlanParticipant = require('./CarePlanParticipant');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new CarePlanParticipant(val))
			: [new CarePlanParticipant(new_value)];
	}

	// Describes the intended objective(s) of carrying out the care plan.
	get goal() {
		return this.__goal;
	}

	set goal(new_value) {
		const Reference = require('./Reference');
		this.__goal = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
	get activity() {
		return this.__activity;
	}

	set activity(new_value) {
		const CarePlanActivity = require('./CarePlanActivity');
		this.__activity = Array.isArray(new_value)
			? new_value.map(val => new CarePlanActivity(val))
			: [new CarePlanActivity(new_value)];
	}

	// General notes about the care plan not covered elsewhere.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = new Annotation(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			status: this.__status,
			context: this.__context && this.__context.toJSON(),
			period: this.__period && this.__period.toJSON(),
			author: this.__author && this.__author.map(v => v.toJSON()),
			modified: this.__modified,
			category: this.__category && this.__category.map(v => v.toJSON()),
			description: this.__description,
			addresses: this.__addresses && this.__addresses.map(v => v.toJSON()),
			support: this.__support && this.__support.map(v => v.toJSON()),
			relatedPlan: this.__relatedPlan && this.__relatedPlan.map(v => v.toJSON()),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			goal: this.__goal && this.__goal.map(v => v.toJSON()),
			activity: this.__activity && this.__activity.map(v => v.toJSON()),
			note: this.__note && this.__note.toJSON(),
		});
	}
}

module.exports = CarePlan;
