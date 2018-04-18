const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Annotation = require('../types/Annotation');
const DataRequirement = require('../types/DataRequirement');

class GuidanceResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'GuidanceResponse';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// requestId	Σ	0..1	id	The id of the request associated with this response, if any
	set requestId(requestId) {
		this._requestId = requestId;
	}

	get requestId() {
		return this._requestId;
	}

	// identifier	Σ	0..1	Identifier	Business identifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// module	Σ	1..1	Reference(ServiceDefinition)	A reference to a knowledge module
	set module(module) {
		this._module = new Reference(module);
	}

	get module() {
		return this._module;
	}

	// status	?!Σ	1..1	code	success | data-requested | data-required | in-progress | failure | entered-in-error
	// GuidanceResponseStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// subject		0..1	Reference(Patient | Group)	Patient the request was performed for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context		0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode during which the response was returned
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrenceDateTime		0..1	dateTime	When the guidance response was processed
	set occurrenceDateTime(occurrenceDateTime) {
		this._occurrenceDateTime = occurrenceDateTime;
	}

	get occurrenceDateTime() {
		return this._occurrenceDateTime;
	}

	// performer		0..1	Reference(Device)	Device returning the guidance
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// reason[x]		0..1		Reason for the response
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// reasonReference			Reference
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// note		0..*	Annotation	Additional notes about the response
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

	// evaluationMessage		0..*	Reference(OperationOutcome)	Messages resulting from the evaluation of the artifact or artifacts
	set evaluationMessage(evaluationMessage) {
		if (Array.isArray(evaluationMessage)) {
			this._evaluationMessage = evaluationMessage.map((i) => new Reference(i));
		} else {
			this._evaluationMessage = [new Reference(evaluationMessage)];
		}
	}

	get evaluationMessage() {
		return this._evaluationMessage;
	}

	// outputParameters		0..1	Reference(Parameters)	The output parameters of the evaluation, if any
	set outputParameters(outputParameters) {
		this._outputParameters = new Reference(outputParameters);
	}

	get outputParameters() {
		return this._outputParameters;
	}

	// result		0..1	Reference(CarePlan | RequestGroup)	Proposed actions, if any
	set result(result) {
		this._result = new Reference(result);
	}

	get result() {
		return this._result;
	}

	// dataRequirement		0..*	DataRequirement	Additional required data
	set dataRequirement(dataRequirement) {
		if (Array.isArray(dataRequirement)) {
			this._dataRequirement = dataRequirement.map((i) => new DataRequirement(i));
		} else {
			this._dataRequirement = [new DataRequirement(dataRequirement)];
		}
	}

	get dataRequirement() {
		return this._dataRequirement;
	}

	toJSON() {
		const json = {
			requestId: this._requestId,
			identifier: this._identifier,
			module: this._module,
			status: this._status,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			performer: this._performer,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			note: this._note,
			evaluationMessage: this._evaluationMessage,
			outputParameters: this._outputParameters,
			result: this._result,
			dataRequirement: this._dataRequirement,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.GuidanceResponse = GuidanceResponse;
