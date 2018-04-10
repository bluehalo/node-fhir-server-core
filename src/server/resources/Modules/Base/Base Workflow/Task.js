const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');

class Output {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	CodeableConcept	Label for output
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// value[x]		1..1	*	Result of output
	toJSON() {
		return {
			type: this._type,
		};
	}
}

class Input {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	CodeableConcept	Label for the input
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// value[x]		1..1	*	Content to use in performing the task
	toJSON() {
		return {
			type: this._type,
		};
	}
}

class Restriction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// repetitions		0..1	positiveInt	How many times to repeat
	set repetitions(repetitions) {
		this._repetitions = repetitions;
	}

	get repetitions() {
		return this._repetitions;
	}

	// period		0..1	Period	When fulfillment sought
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// recipient		0..*	Reference(Patient | Practitioner | RelatedPerson | Group | Organization)	For whom is fulfillment sought?
	set recipient(recipient) {
		if (Array.isArray(recipient)) {
			this._recipient = recipient.map((i) => new Reference(i));
		} else {
			this._recipient = [new Reference(recipient)];
		}
	}

	get recipient() {
		return this._recipient;
	}

	toJSON() {
		return {
			repetitions: this._repetitions,
			period: this._period,
			recipient: this._recipient,
		};
	}
}

class Requester {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// agent	Σ	1..1	Reference(Device | Organization | Patient | Practitioner | RelatedPerson)	Individual asking for task
	set agent(agent) {
		this._agent = new Reference(agent);
	}

	get agent() {
		return this._agent;
	}

	// onBehalfOf		0..1	Reference(Organization)	Organization individual is acting for
	set onBehalfOf(onBehalfOf) {
		this._onBehalfOf = new Reference(onBehalfOf);
	}

	get onBehalfOf() {
		return this._onBehalfOf;
	}

	toJSON() {
		return {
			agent: this._agent,
			onBehalfOf: this._onBehalfOf,
		};
	}
}

class Task extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Task';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Task Instance Identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// definition[x]	Σ	0..1		Formal definition of task
	// definitionUri			uri
	set definitionUri(definitionUri) {
		this._definitionUri = definitionUri;
	}

	get definitionUri() {
		return this._definitionUri;
	}

	// definitionReference			Reference
	set definitionReference(definitionReference) {
		this._definitionReference = new Reference(definitionReference);
	}

	get definitionReference() {
		return this._definitionReference;
	}

	// basedOn	Σ	0..*	Reference(Any)	Request fulfilled by this task
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// groupIdentifier	Σ	0..1	Identifier	Requisition or grouper id
	set groupIdentifier(groupIdentifier) {
		this._groupIdentifier = new Identifier(groupIdentifier);
	}

	get groupIdentifier() {
		return this._groupIdentifier;
	}

	// partOf	Σ	0..*	Reference(Task)	Composite task
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// status	Σ	1..1	code	draft | requested | received | accepted | +
	// TaskStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// statusReason	Σ	0..1	CodeableConcept	Reason for current status
	set statusReason(statusReason) {
		this._statusReason = new CodeableConcept(statusReason);
	}

	get statusReason() {
		return this._statusReason;
	}

	// businessStatus	Σ	0..1	CodeableConcept	E.g. "Specimen collected", "IV prepped"
	set businessStatus(businessStatus) {
		this._businessStatus = new CodeableConcept(businessStatus);
	}

	get businessStatus() {
		return this._businessStatus;
	}

	// intent	Σ	1..1	code	proposal | plan | order +
	// RequestIntent (Required)
	set intent(intent) {
		this._intent = new Code(intent);
	}

	get intent() {
		return this._intent;
	}

	// priority		0..1	code	normal | urgent | asap | stat
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// code	Σ	0..1	CodeableConcept	Task Type
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// description	Σ	0..1	string	Human-readable explanation of task
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// focus	Σ	0..1	Reference(Any)	What task is acting on
	set focus(focus) {
		this._focus = new Reference(focus);
	}

	get focus() {
		return this._focus;
	}

	// for	Σ	0..1	Reference(Any)	Beneficiary of the Task
	set taskFor(taskFor) {
		this._taskFor = new Reference(taskFor);
	}

	get taskFor() {
		return this._taskFor;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Healthcare event during which this task originated
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// executionPeriod	Σ	0..1	Period	Start and end time of execution
	set executionPeriod(executionPeriod) {
		this._executionPeriod = new Period(executionPeriod);
	}

	get executionPeriod() {
		return this._executionPeriod;
	}

	// authoredOn	I	0..1	dateTime	Task Creation Date
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// lastModified	ΣI	0..1	dateTime	Task Last Modified Date
	set lastModified(lastModified) {
		this._lastModified = lastModified;
	}

	get lastModified() {
		return this._lastModified;
	}

	// performerType		0..*	CodeableConcept	requester | dispatcher | scheduler | performer | monitor | manager | acquirer | reviewer
	// TaskPerformerType (Preferred)
	set performerType(performerType) {
		if (Array.isArray(performerType)) {
			this._performerType = performerType.map((i) => new CodeableConcept(i));
		} else {
			this._performerType = [new CodeableConcept(performerType)];
		}
	}

	get performerType() {
		return this._performerType;
	}

	// owner	Σ	0..1	Reference(Device | Organization | Patient | Practitioner | RelatedPerson)	Responsible individual
	set owner(owner) {
		this._owner = new Reference(owner);
	}

	get owner() {
		return this._owner;
	}

	// reason		0..1	CodeableConcept	Why task is needed
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	// note		0..*	Annotation	Comments made about the task
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// relevantHistory		0..*	Reference(Provenance)	Key events in history of the Task
	set relevantHistory(relevantHistory) {
		if (Array.isArray(relevantHistory)) {
			this._relevantHistory = relevantHistory.map((i) => new Reference(i));
		} else {
			this._relevantHistory = [new Reference(relevantHistory)];
		}
	}

	get relevantHistory() {
		return this._relevantHistory;
	}

	// requester	Σ	0..1	BackboneElement	Who is asking for task to be done
	set requester(requester) {
		this._requester = new Requester(requester);
	}

	get requester() {
		return this._requester;
	}

	// restriction		0..1	BackboneElement	Constraints on fulfillment tasks
	set restriction(restriction) {
		this._restriction = new Restriction(restriction);
	}

	get restriction() {
		return this._restriction;
	}

	// input		0..*	BackboneElement	Information used to perform task
	set input(input) {
		if (Array.isArray(input)) {
			this._input = input.map((i) => new Input(i));
		} else {
			this._input = [new Input(input)];
		}
	}

	get input() {
		return this._input;
	}

	// output		0..*	BackboneElement	Information produced as part of task
	set output(output) {
		if (Array.isArray(output)) {
			this._output = output.map((i) => new Output(i));
		} else {
			this._output = [new Output(output)];
		}
	}

	get output() {
		return this._output;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definitionUri: this._definitionUri,
			definitionReference: this._definitionReference,
			basedOn: this._basedOn,
			groupIdentifier: this._groupIdentifier,
			partOf: this._partOf,
			status: this._status,
			statusReason: this._statusReason,
			businessStatus: this._businessStatus,
			intent: this._intent,
			priority: this._priority,
			code: this._code,
			description: this._description,
			focus: this._focus,
			taskFor: this._taskFor,
			context: this._context,
			executionPeriod: this._executionPeriod,
			authoredOn: this._authoredOn,
			lastModified: this._lastModified,
			performerType: this._performerType,
			owner: this._owner,
			reason: this._reason,
			note: this._note,
			relevantHistory: this._relevantHistory,
			requester: this._requester,
			restriction: this._restriction,
			input: this._input,
			output: this._output,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Task = Task;
module.exports.Requester = Requester;
module.exports.Restriction = Restriction;
module.exports.Input = Input;
module.exports.Output = Output;
