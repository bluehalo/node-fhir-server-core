const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Task extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Task';
		Object.assign(this, opt);
	}

	// This is a Task resource
	static get __resourceType() {
		return 'Task';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Task = new_value;
	}

	// The business identifier for this task.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
	get definitionUri() {
		return this.__definitionUri;
	}

	set definitionUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field definitionUri`);
		}
		this.__definitionUri = new_value;
	}

	// A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
	get definitionReference() {
		return this.__definitionReference;
	}

	set definitionReference(new_value) {
		const Reference = require('./Reference');
		this.__definitionReference = new Reference(new_value);
	}

	// BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a \'request\' resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the \'request\' resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// An identifier that links together multiple tasks and other requests that were created in the same context.
	get groupIdentifier() {
		return this.__groupIdentifier;
	}

	set groupIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__groupIdentifier = new Identifier(new_value);
	}

	// Task that this particular task is part of.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The current status of the task.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// An explanation as to why this task is held, failed, was refused, etc.
	get statusReason() {
		return this.__statusReason;
	}

	set statusReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__statusReason = new CodeableConcept(new_value);
	}

	// Contains business-specific nuances of the business state.
	get businessStatus() {
		return this.__businessStatus;
	}

	set businessStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__businessStatus = new CodeableConcept(new_value);
	}

	// Indicates the \'level\' of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc.
	get intent() {
		return this.__intent;
	}

	set intent(new_value) {
		this.__intent = new_value;
	}

	// Indicates how quickly the Task should be addressed with respect to other requests.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// A name or code (or both) briefly describing what the task involves.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A free-text description of what is to be performed.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The request being actioned or the resource being manipulated by this task.
	get focus() {
		return this.__focus;
	}

	set focus(new_value) {
		const Reference = require('./Reference');
		this.__focus = new Reference(new_value);
	}

	// The entity who benefits from the performance of the service specified in the task (e.g., the patient).
	get for() {
		return this.__for;
	}

	set for(new_value) {
		const Reference = require('./Reference');
		this.__for = new Reference(new_value);
	}

	// The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
	get executionPeriod() {
		return this.__executionPeriod;
	}

	set executionPeriod(new_value) {
		const Period = require('./Period');
		this.__executionPeriod = new Period(new_value);
	}

	// The date and time this task was created.
	get authoredOn() {
		return this.__authoredOn;
	}

	set authoredOn(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this.__authoredOn = new_value;
	}

	// The date and time of last modification to this task.
	get lastModified() {
		return this.__lastModified;
	}

	set lastModified(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastModified`);
		}
		this.__lastModified = new_value;
	}

	// The creator of the task.
	get requester() {
		return this.__requester;
	}

	set requester(new_value) {
		const TaskRequester = require('./TaskRequester');
		this.__requester = new TaskRequester(new_value);
	}

	// The type of participant that can execute the task.
	get performerType() {
		return this.__performerType;
	}

	set performerType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__performerType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Individual organization or Device currently responsible for task execution.
	get owner() {
		return this.__owner;
	}

	set owner(new_value) {
		const Reference = require('./Reference');
		this.__owner = new Reference(new_value);
	}

	// A description or code indicating why this task needs to be performed.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	// Free-text information captured about the task as it progresses.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.
	get relevantHistory() {
		return this.__relevantHistory;
	}

	set relevantHistory(new_value) {
		const Reference = require('./Reference');
		this.__relevantHistory = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
	get restriction() {
		return this.__restriction;
	}

	set restriction(new_value) {
		const TaskRestriction = require('./TaskRestriction');
		this.__restriction = new TaskRestriction(new_value);
	}

	// Additional information that may be needed in the execution of the task.
	get input() {
		return this.__input;
	}

	set input(new_value) {
		const TaskInput = require('./TaskInput');
		this.__input = Array.isArray(new_value) ? new_value.map(val => new TaskInput(val)) : [new TaskInput(new_value)];
	}

	// Outputs produced by the Task.
	get output() {
		return this.__output;
	}

	set output(new_value) {
		const TaskOutput = require('./TaskOutput');
		this.__output = Array.isArray(new_value) ? new_value.map(val => new TaskOutput(val)) : [new TaskOutput(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definitionUri: this.__definitionUri,
			definitionReference: this.__definitionReference && this.__definitionReference.toJSON(),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			groupIdentifier: this.__groupIdentifier && this.__groupIdentifier.toJSON(),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			statusReason: this.__statusReason && this.__statusReason.toJSON(),
			businessStatus: this.__businessStatus && this.__businessStatus.toJSON(),
			intent: this.__intent,
			priority: this.__priority,
			code: this.__code && this.__code.toJSON(),
			description: this.__description,
			focus: this.__focus && this.__focus.toJSON(),
			for: this.__for && this.__for.toJSON(),
			context: this.__context && this.__context.toJSON(),
			executionPeriod: this.__executionPeriod && this.__executionPeriod.toJSON(),
			authoredOn: this.__authoredOn,
			lastModified: this.__lastModified,
			requester: this.__requester && this.__requester.toJSON(),
			performerType: this.__performerType && this.__performerType.map(v => v.toJSON()),
			owner: this.__owner && this.__owner.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
			relevantHistory: this.__relevantHistory && this.__relevantHistory.map(v => v.toJSON()),
			restriction: this.__restriction && this.__restriction.toJSON(),
			input: this.__input && this.__input.map(v => v.toJSON()),
			output: this.__output && this.__output.map(v => v.toJSON()),
		});
	}
}

module.exports = Task;
