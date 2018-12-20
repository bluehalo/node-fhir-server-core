const DomainResource = require('./DomainResource');

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

	// Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A care plan that is fulfilled in whole or in part by this care plan.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Completed or terminated care plan whose function is taken by this new care plan.
	get replaces() {
		return this.__replaces;
	}

	set replaces(new_value) {
		const Reference = require('./Reference');
		this.__replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger care plan of which this particular care plan is a component or step.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
	get intent() {
		return this.__intent;
	}

	set intent(new_value) {
		this.__intent = new_value;
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

	// Human-friendly name for the CarePlan.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// A description of the scope and nature of the plan.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Identifies the patient or group whose intended care is described by the plan.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Identifies the original context in which this particular CarePlan was created.
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

	// Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
	get careTeam() {
		return this.__careTeam;
	}

	set careTeam(new_value) {
		const Reference = require('./Reference');
		this.__careTeam = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
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
	get supportingInfo() {
		return this.__supportingInfo;
	}

	set supportingInfo(new_value) {
		const Reference = require('./Reference');
		this.__supportingInfo = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
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
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			replaces: this.__replaces && this.__replaces.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			intent: this.__intent,
			category: this.__category && this.__category.map(v => v.toJSON()),
			title: this.__title,
			description: this.__description,
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			period: this.__period && this.__period.toJSON(),
			author: this.__author && this.__author.map(v => v.toJSON()),
			careTeam: this.__careTeam && this.__careTeam.map(v => v.toJSON()),
			addresses: this.__addresses && this.__addresses.map(v => v.toJSON()),
			supportingInfo: this.__supportingInfo && this.__supportingInfo.map(v => v.toJSON()),
			goal: this.__goal && this.__goal.map(v => v.toJSON()),
			activity: this.__activity && this.__activity.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = CarePlan;
