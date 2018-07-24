const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Timing = require('./Timing');
const ProcedureRequest_Requester = require('./ProcedureRequest_Requester');
const Annotation = require('./Annotation');

class ProcedureRequest extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ProcedureRequest';
	}

	// This is a ProcedureRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ProcedureRequest'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Protocol or definition followed by this request.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Plan/proposal/order fulfilled by this request.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The request takes the place of the referenced completed or terminated request(s).
	get replaces () {
		return this._replaces;
	}

	set replaces ( new_value ) {
		this._replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A shared identifier common to all procedure or diagnostic requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
	get requisition () {
		return this._requisition;
	}

	set requisition ( new_value ) {
		this._requisition = new Identifier(new_value);
	}

	// The status of the order.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Whether the request is a proposal, plan, an original order or a reflex order.
	get intent () {
		return this._intent;
	}

	set intent ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field intent`);
		}
		this._intent = new_value;
	}

	// Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this._priority = new_value;
	}

	// Set this to true if the record is saying that the procedure should NOT be performed.
	get doNotPerform () {
		return this._doNotPerform;
	}

	set doNotPerform ( new_value ) {
		this._doNotPerform = new_value;
	}

	// A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A code that identifies a particular procedure, diagnostic investigation, or panel of investigations, that have been requested.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// An encounter or episode of care that provides additional information about the healthcare context in which this request is made.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The date/time at which the diagnostic testing should occur.
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

	// The date/time at which the diagnostic testing should occur.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// The date/time at which the diagnostic testing should occur.
	get occurrenceTiming () {
		return this._occurrenceTiming;
	}

	set occurrenceTiming ( new_value ) {
		this._occurrenceTiming = new Timing(new_value);
	}

	// If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
	get asNeededBoolean () {
		return this._asNeededBoolean;
	}

	set asNeededBoolean ( new_value ) {
		this._asNeededBoolean = new_value;
	}

	// If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
	get asNeededCodeableConcept () {
		return this._asNeededCodeableConcept;
	}

	set asNeededCodeableConcept ( new_value ) {
		this._asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// When the request transitioned to being actionable.
	get authoredOn () {
		return this._authoredOn;
	}

	set authoredOn ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this._authoredOn = new_value;
	}

	// The individual who initiated the request and has responsibility for its activation.
	get requester () {
		return this._requester;
	}

	set requester ( new_value ) {
		this._requester = new ProcedureRequest_Requester(new_value);
	}

	// Desired type of performer for doing the diagnostic testing.
	get performerType () {
		return this._performerType;
	}

	set performerType ( new_value ) {
		this._performerType = new CodeableConcept(new_value);
	}

	// The desired perfomer for doing the diagnostic testing.  For example, the surgeon, dermatopathologist, endoscopist, etc.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = new Reference(new_value);
	}

	// An explanation or justification for why this diagnostic investigation is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates another resource that provides a justification for why this diagnostic investigation is being requested.   May relate to the resources referred to in supportingInformation.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
	get supportingInfo () {
		return this._supportingInfo;
	}

	set supportingInfo ( new_value ) {
		this._supportingInfo = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// One or more specimens that the laboratory procedure will use.
	get specimen () {
		return this._specimen;
	}

	set specimen ( new_value ) {
		this._specimen = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Anatomic location where the procedure should be performed. This is the target site.
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Any other notes and comments made about the service request. For example, letting provider know that "patient hates needles" or other provider instructions.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Key events in the history of the request.
	get relevantHistory () {
		return this._relevantHistory;
	}

	set relevantHistory ( new_value ) {
		this._relevantHistory = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			replaces: this._replaces,
			requisition: this._requisition,
			status: this._status,
			intent: this._intent,
			priority: this._priority,
			doNotPerform: this._doNotPerform,
			category: this._category,
			code: this._code,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			asNeededBoolean: this._asNeededBoolean,
			asNeededCodeableConcept: this._asNeededCodeableConcept,
			authoredOn: this._authoredOn,
			requester: this._requester,
			performerType: this._performerType,
			performer: this._performer,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			supportingInfo: this._supportingInfo,
			specimen: this._specimen,
			bodySite: this._bodySite,
			note: this._note,
			relevantHistory: this._relevantHistory
		});
	}

}

module.exports = ProcedureRequest;
