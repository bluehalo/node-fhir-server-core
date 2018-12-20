const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ReferralRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ReferralRequest';
		Object.assign(this, opt);
	}

	// This is a ReferralRequest resource
	static get __resourceType() {
		return 'ReferralRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ReferralRequest = new_value;
	}

	// Business identifier that uniquely identifies the referral/care transfer request instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Completed or terminated request(s) whose function is taken by this new request.
	get replaces() {
		return this.__replaces;
	}

	set replaces(new_value) {
		const Reference = require('./Reference');
		this.__replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The business identifier of the logical \'grouping\' request/order that this referral is a part of.
	get groupIdentifier() {
		return this.__groupIdentifier;
	}

	set groupIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__groupIdentifier = new Identifier(new_value);
	}

	// The status of the authorization/intention reflected by the referral request record.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Distinguishes the \'level\' of authorization/demand implicit in this request.
	get intent() {
		return this.__intent;
	}

	set intent(new_value) {
		this.__intent = new_value;
	}

	// An indication of the type of referral (or where applicable the type of transfer of care) request.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// An indication of the urgency of referral (or where applicable the type of transfer of care) request.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
	get serviceRequested() {
		return this.__serviceRequested;
	}

	set serviceRequested(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__serviceRequested = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The patient who is the subject of a referral or transfer of care request.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The encounter at which the request for referral or transfer of care is initiated.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
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

	// The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// Date/DateTime of creation for draft requests and date of activation for active requests.
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

	// The individual who initiated the request and has responsibility for its activation.
	get requester() {
		return this.__requester;
	}

	set requester(new_value) {
		const ReferralRequestRequester = require('./ReferralRequestRequester');
		this.__requester = new ReferralRequestRequester(new_value);
	}

	// Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
	get specialty() {
		return this.__specialty;
	}

	set specialty(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialty = new CodeableConcept(new_value);
	}

	// The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
	get recipient() {
		return this.__recipient;
	}

	set recipient(new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates another resource whose existence justifies this request.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
	get supportingInfo() {
		return this.__supportingInfo;
	}

	set supportingInfo(new_value) {
		const Reference = require('./Reference');
		this.__supportingInfo = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Comments made about the referral request by any of the participants.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.
	get relevantHistory() {
		return this.__relevantHistory;
	}

	set relevantHistory(new_value) {
		const Reference = require('./Reference');
		this.__relevantHistory = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			replaces: this.__replaces && this.__replaces.map(v => v.toJSON()),
			groupIdentifier: this.__groupIdentifier && this.__groupIdentifier.toJSON(),
			status: this.__status,
			intent: this.__intent,
			type: this.__type && this.__type.toJSON(),
			priority: this.__priority,
			serviceRequested: this.__serviceRequested && this.__serviceRequested.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			authoredOn: this.__authoredOn,
			requester: this.__requester && this.__requester.toJSON(),
			specialty: this.__specialty && this.__specialty.toJSON(),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			description: this.__description,
			supportingInfo: this.__supportingInfo && this.__supportingInfo.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			relevantHistory: this.__relevantHistory && this.__relevantHistory.map(v => v.toJSON()),
		});
	}
}

module.exports = ReferralRequest;
