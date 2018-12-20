const DomainResource = require('./DomainResource');
const IdScalar = require('./scalars/Id.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class GuidanceResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GuidanceResponse';
		Object.assign(this, opt);
	}

	// This is a GuidanceResponse resource
	static get __resourceType() {
		return 'GuidanceResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__GuidanceResponse = new_value;
	}

	// The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
	get requestId() {
		return this.__requestId;
	}

	set requestId(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field requestId`);
		}
		this.__requestId = new_value;
	}

	// Allows a service to provide a unique, business identifier for the response.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A reference to the knowledge module that was invoked.
	get module() {
		return this.__module;
	}

	set module(new_value) {
		const Reference = require('./Reference');
		this.__module = new Reference(new_value);
	}

	// The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The patient for which the request was processed.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Allows the context of the guidance response to be provided if available. In a service context, this would likely be unavailable.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Indicates when the guidance response was processed.
	get occurrenceDateTime() {
		return this.__occurrenceDateTime;
	}

	set occurrenceDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this.__occurrenceDateTime = new_value;
	}

	// Provides a reference to the device that performed the guidance.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
	}

	// Provides a mechanism to communicate additional information about the response.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
	get evaluationMessage() {
		return this.__evaluationMessage;
	}

	set evaluationMessage(new_value) {
		const Reference = require('./Reference');
		this.__evaluationMessage = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
	get outputParameters() {
		return this.__outputParameters;
	}

	set outputParameters(new_value) {
		const Reference = require('./Reference');
		this.__outputParameters = new Reference(new_value);
	}

	// The actions, if any, produced by the evaluation of the artifact.
	get result() {
		return this.__result;
	}

	set result(new_value) {
		const Reference = require('./Reference');
		this.__result = new Reference(new_value);
	}

	// If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
	get dataRequirement() {
		return this.__dataRequirement;
	}

	set dataRequirement(new_value) {
		const DataRequirement = require('./DataRequirement');
		this.__dataRequirement = Array.isArray(new_value)
			? new_value.map(val => new DataRequirement(val))
			: [new DataRequirement(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			requestId: this.__requestId,
			identifier: this.__identifier && this.__identifier.toJSON(),
			module: this.__module && this.__module.toJSON(),
			status: this.__status,
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			performer: this.__performer && this.__performer.toJSON(),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
			evaluationMessage: this.__evaluationMessage && this.__evaluationMessage.map(v => v.toJSON()),
			outputParameters: this.__outputParameters && this.__outputParameters.toJSON(),
			result: this.__result && this.__result.toJSON(),
			dataRequirement: this.__dataRequirement && this.__dataRequirement.map(v => v.toJSON()),
		});
	}
}

module.exports = GuidanceResponse;
