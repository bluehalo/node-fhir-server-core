const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const Narrative = require('./Narrative');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const CarePlan_Activity = require('./CarePlan_Activity');
const Annotation = require('./Annotation');

class CarePlan extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CarePlan';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CarePlan';
	}

	// This is a CarePlan resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['CarePlan'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A care plan that is fulfilled in whole or in part by this care plan.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Completed or terminated care plan whose function is taken by this new care plan.
	get replaces () {
		return this._replaces;
	}

	set replaces ( new_value ) {
		this._replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger care plan of which this particular care plan is a component or step.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Text summary of the resource, for human interpretation
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new Narrative(new_value);
	}

	// Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'suspended', 'completed', 'entered-in-error', 'cancelled', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.
	get intent () {
		return this._intent;
	}

	set intent ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['proposal', 'plan', 'order', 'option'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field intent`);
		}
		this._intent = new_value;
	}

	// Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Human-friendly name for the CarePlan.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// A description of the scope and nature of the plan.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Identifies the patient or group whose intended care is described by the plan.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Identifies the original context in which this particular CarePlan was created.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Indicates when the plan did (or is intended to) come into effect and end.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
	get careTeam () {
		return this._careTeam;
	}

	set careTeam ( new_value ) {
		this._careTeam = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
	get addresses () {
		return this._addresses;
	}

	set addresses ( new_value ) {
		this._addresses = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include co-morbidities, recent procedures, limitations, recent assessments, etc.
	get supportingInfo () {
		return this._supportingInfo;
	}

	set supportingInfo ( new_value ) {
		this._supportingInfo = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Describes the intended objective(s) of carrying out the care plan.
	get goal () {
		return this._goal;
	}

	set goal ( new_value ) {
		this._goal = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
	get activity () {
		return this._activity;
	}

	set activity ( new_value ) {
		this._activity = Array.isArray(new_value) ? new_value.map(val => new CarePlan_Activity(val)) : [new CarePlan_Activity(new_value)];
	}

	// General notes about the care plan not covered elsewhere.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			definition: this._definition && this._definition.map(v => v.toJSON()),
			basedOn: this._basedOn && this._basedOn.map(v => v.toJSON()),
			replaces: this._replaces && this._replaces.map(v => v.toJSON()),
			partOf: this._partOf && this._partOf.map(v => v.toJSON()),
			text: this._text && this._text.toJSON(),
			status: this._status,
			intent: this._intent,
			category: this._category && this._category.map(v => v.toJSON()),
			title: this._title,
			description: this._description,
			subject: this._subject && this._subject.toJSON(),
			context: this._context && this._context.toJSON(),
			period: this._period && this._period.toJSON(),
			author: this._author && this._author.map(v => v.toJSON()),
			careTeam: this._careTeam && this._careTeam.map(v => v.toJSON()),
			addresses: this._addresses && this._addresses.map(v => v.toJSON()),
			supportingInfo: this._supportingInfo && this._supportingInfo.map(v => v.toJSON()),
			goal: this._goal && this._goal.map(v => v.toJSON()),
			activity: this._activity && this._activity.map(v => v.toJSON()),
			note: this._note && this._note.map(v => v.toJSON())
		});
	}

}

module.exports = CarePlan;
