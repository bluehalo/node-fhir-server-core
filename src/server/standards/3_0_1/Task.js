const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Task_Requester = require('./Task_Requester');
const Annotation = require('./Annotation');
const Task_Restriction = require('./Task_Restriction');
const Task_Input = require('./Task_Input');
const Task_Output = require('./Task_Output');

class Task extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Task';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Task';
	}

	// This is a Task resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Task'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The business identifier for this task.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
	get definitionUri () {
		return this._definitionUri;
	}

	set definitionUri ( new_value ) {
		this._definitionUri = new_value;
	}

	// A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.
	get definitionReference () {
		return this._definitionReference;
	}

	set definitionReference ( new_value ) {
		this._definitionReference = new Reference(new_value);
	}

	// BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// An identifier that links together multiple tasks and other requests that were created in the same context.
	get groupIdentifier () {
		return this._groupIdentifier;
	}

	set groupIdentifier ( new_value ) {
		this._groupIdentifier = new Identifier(new_value);
	}

	// Task that this particular task is part of.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The current status of the task.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'requested', 'received', 'accepted', 'rejected', 'ready', 'cancelled', 'in-progress', 'on-hold', 'failed', 'completed', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// An explanation as to why this task is held, failed, was refused, etc.
	get statusReason () {
		return this._statusReason;
	}

	set statusReason ( new_value ) {
		this._statusReason = new CodeableConcept(new_value);
	}

	// Contains business-specific nuances of the business state.
	get businessStatus () {
		return this._businessStatus;
	}

	set businessStatus ( new_value ) {
		this._businessStatus = new CodeableConcept(new_value);
	}

	// Indicates the "level" of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc.
	get intent () {
		return this._intent;
	}

	set intent ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field intent`);
		}
		this._intent = new_value;
	}

	// Indicates how quickly the Task should be addressed with respect to other requests.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this._priority = new_value;
	}

	// A name or code (or both) briefly describing what the task involves.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// A free-text description of what is to be performed.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The request being actioned or the resource being manipulated by this task.
	get focus () {
		return this._focus;
	}

	set focus ( new_value ) {
		this._focus = new Reference(new_value);
	}

	// The entity who benefits from the performance of the service specified in the task (e.g., the patient).
	get for () {
		return this._for;
	}

	set for ( new_value ) {
		this._for = new Reference(new_value);
	}

	// The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
	get executionPeriod () {
		return this._executionPeriod;
	}

	set executionPeriod ( new_value ) {
		this._executionPeriod = new Period(new_value);
	}

	// The date and time this task was created.
	get authoredOn () {
		return this._authoredOn;
	}

	set authoredOn ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this._authoredOn = new_value;
	}

	// The date and time of last modification to this task.
	get lastModified () {
		return this._lastModified;
	}

	set lastModified ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lastModified`);
		}
		this._lastModified = new_value;
	}

	// The creator of the task.
	get requester () {
		return this._requester;
	}

	set requester ( new_value ) {
		this._requester = new Task_Requester(new_value);
	}

	// The type of participant that can execute the task.
	get performerType () {
		return this._performerType;
	}

	set performerType ( new_value ) {
		this._performerType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Individual organization or Device currently responsible for task execution.
	get owner () {
		return this._owner;
	}

	set owner ( new_value ) {
		this._owner = new Reference(new_value);
	}

	// A description or code indicating why this task needs to be performed.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new CodeableConcept(new_value);
	}

	// Free-text information captured about the task as it progresses.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.
	get relevantHistory () {
		return this._relevantHistory;
	}

	set relevantHistory ( new_value ) {
		this._relevantHistory = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
	get restriction () {
		return this._restriction;
	}

	set restriction ( new_value ) {
		this._restriction = new Task_Restriction(new_value);
	}

	// Additional information that may be needed in the execution of the task.
	get input () {
		return this._input;
	}

	set input ( new_value ) {
		this._input = Array.isArray(new_value) ? new_value.map(val => new Task_Input(val)) : [new Task_Input(new_value)];
	}

	// Outputs produced by the Task.
	get output () {
		return this._output;
	}

	set output ( new_value ) {
		this._output = Array.isArray(new_value) ? new_value.map(val => new Task_Output(val)) : [new Task_Output(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			definitionUri: this._definitionUri,
			definitionReference: this._definitionReference && this._definitionReference.toJSON(),
			basedOn: this._basedOn && this._basedOn.map(v => v.toJSON()),
			groupIdentifier: this._groupIdentifier && this._groupIdentifier.toJSON(),
			partOf: this._partOf && this._partOf.map(v => v.toJSON()),
			status: this._status,
			statusReason: this._statusReason && this._statusReason.toJSON(),
			businessStatus: this._businessStatus && this._businessStatus.toJSON(),
			intent: this._intent,
			priority: this._priority,
			code: this._code && this._code.toJSON(),
			description: this._description,
			focus: this._focus && this._focus.toJSON(),
			for: this._for && this._for.toJSON(),
			context: this._context && this._context.toJSON(),
			executionPeriod: this._executionPeriod && this._executionPeriod.toJSON(),
			authoredOn: this._authoredOn,
			lastModified: this._lastModified,
			requester: this._requester && this._requester.toJSON(),
			performerType: this._performerType && this._performerType.map(v => v.toJSON()),
			owner: this._owner && this._owner.toJSON(),
			reason: this._reason && this._reason.toJSON(),
			note: this._note && this._note.map(v => v.toJSON()),
			relevantHistory: this._relevantHistory && this._relevantHistory.map(v => v.toJSON()),
			restriction: this._restriction && this._restriction.toJSON(),
			input: this._input && this._input.map(v => v.toJSON()),
			output: this._output && this._output.map(v => v.toJSON())
		});
	}

}

module.exports = Task;
