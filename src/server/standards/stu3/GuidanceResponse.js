const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Annotation = require('./Annotation');
const DataRequirement = require('./DataRequirement');

class GuidanceResponse extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'GuidanceResponse';
	}

	// This is a GuidanceResponse resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['GuidanceResponse'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
	get requestId () {
		return this._requestId;
	}

	set requestId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field requestId`);
		}
		this._requestId = new_value;
	}

	// Allows a service to provide a unique, business identifier for the response.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// A reference to the knowledge module that was invoked.
	get module () {
		return this._module;
	}

	set module ( new_value ) {
		this._module = new Reference(new_value);
	}

	// The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['success', 'data-requested', 'data-required', 'in-progress', 'failure', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The patient for which the request was processed.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// Allows the context of the guidance response to be provided if available. In a service context, this would likely be unavailable.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Indicates when the guidance response was processed.
	get occurrenceDateTime () {
		return this._occurrenceDateTime;
	}

	set occurrenceDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this._occurrenceDateTime = new_value;
	}

	// Provides a reference to the device that performed the guidance.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = new Reference(new_value);
	}

	// Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
	get reasonCodeableConcept () {
		return this._reasonCodeableConcept;
	}

	set reasonCodeableConcept ( new_value ) {
		this._reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = new Reference(new_value);
	}

	// Provides a mechanism to communicate additional information about the response.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
	get evaluationMessage () {
		return this._evaluationMessage;
	}

	set evaluationMessage ( new_value ) {
		this._evaluationMessage = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
	get outputParameters () {
		return this._outputParameters;
	}

	set outputParameters ( new_value ) {
		this._outputParameters = new Reference(new_value);
	}

	// The actions, if any, produced by the evaluation of the artifact.
	get result () {
		return this._result;
	}

	set result ( new_value ) {
		this._result = new Reference(new_value);
	}

	// If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
	get dataRequirement () {
		return this._dataRequirement;
	}

	set dataRequirement ( new_value ) {
		this._dataRequirement = Array.isArray(new_value) ? new_value.map(val => new DataRequirement(val)) : [new DataRequirement(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			dataRequirement: this._dataRequirement
		});
	}

}

module.exports = GuidanceResponse;
