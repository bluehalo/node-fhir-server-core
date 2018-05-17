const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const ReferralRequest_Requester = require('./ReferralRequest_Requester');
const Annotation = require('./Annotation');

class ReferralRequest extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ReferralRequest';
	}

	// This is a ReferralRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ReferralRequest'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Business identifier that uniquely identifies the referral/care transfer request instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Completed or terminated request(s) whose function is taken by this new request.
	get replaces () {
		return this._replaces;
	}

	set replaces ( new_value ) {
		this._replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The business identifier of the logical "grouping" request/order that this referral is a part of.
	get groupIdentifier () {
		return this._groupIdentifier;
	}

	set groupIdentifier ( new_value ) {
		this._groupIdentifier = new Identifier(new_value);
	}

	// The status of the authorization/intention reflected by the referral request record.
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

	// Distinguishes the "level" of authorization/demand implicit in this request.
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

	// An indication of the type of referral (or where applicable the type of transfer of care) request.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// An indication of the urgency of referral (or where applicable the type of transfer of care) request.
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

	// The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
	get serviceRequested () {
		return this._serviceRequested;
	}

	set serviceRequested ( new_value ) {
		this._serviceRequested = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The patient who is the subject of a referral or transfer of care request.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter at which the request for referral or transfer of care is initiated.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
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

	// The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// Date/DateTime of creation for draft requests and date of activation for active requests.
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
		this._requester = new ReferralRequest_Requester(new_value);
	}

	// Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
	get specialty () {
		return this._specialty;
	}

	set specialty ( new_value ) {
		this._specialty = new CodeableConcept(new_value);
	}

	// The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
	get recipient () {
		return this._recipient;
	}

	set recipient ( new_value ) {
		this._recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates another resource whose existence justifies this request.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
	get supportingInfo () {
		return this._supportingInfo;
	}

	set supportingInfo ( new_value ) {
		this._supportingInfo = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Comments made about the referral request by any of the participants.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
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
			groupIdentifier: this._groupIdentifier,
			status: this._status,
			intent: this._intent,
			type: this._type,
			priority: this._priority,
			serviceRequested: this._serviceRequested,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			authoredOn: this._authoredOn,
			requester: this._requester,
			specialty: this._specialty,
			recipient: this._recipient,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			description: this._description,
			supportingInfo: this._supportingInfo,
			note: this._note,
			relevantHistory: this._relevantHistory
		});
	}

}

module.exports = ReferralRequest;
