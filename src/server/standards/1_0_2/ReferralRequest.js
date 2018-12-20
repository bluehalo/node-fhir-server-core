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

	// The workflow status of the referral or transfer of care request.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
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

	// Date/DateTime of creation for draft requests and date of activation for active requests.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// An indication of the type of referral (or where applicable the type of transfer of care) request.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
	get specialty() {
		return this.__specialty;
	}

	set specialty(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialty = new CodeableConcept(new_value);
	}

	// An indication of the urgency of referral (or where applicable the type of transfer of care) request.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	// The patient who is the subject of a referral or transfer of care request.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The healthcare provider or provider organization who/which initiated the referral/transfer of care request. Can also be  Patient (a self referral).
	get requester() {
		return this.__requester;
	}

	set requester(new_value) {
		const Reference = require('./Reference');
		this.__requester = new Reference(new_value);
	}

	// The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
	get recipient() {
		return this.__recipient;
	}

	set recipient(new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The encounter at which the request for referral or transfer of care is initiated.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// Date/DateTime the request for referral or transfer of care is sent by the author.
	get dateSent() {
		return this.__dateSent;
	}

	set dateSent(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateSent`);
		}
		this.__dateSent = new_value;
	}

	// Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	// The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
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

	// Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
	get fulfillmentTime() {
		return this.__fulfillmentTime;
	}

	set fulfillmentTime(new_value) {
		const Period = require('./Period');
		this.__fulfillmentTime = new Period(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			status: this.__status,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			date: this.__date,
			type: this.__type && this.__type.toJSON(),
			specialty: this.__specialty && this.__specialty.toJSON(),
			priority: this.__priority && this.__priority.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			requester: this.__requester && this.__requester.toJSON(),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
			encounter: this.__encounter && this.__encounter.toJSON(),
			dateSent: this.__dateSent,
			reason: this.__reason && this.__reason.toJSON(),
			description: this.__description,
			serviceRequested: this.__serviceRequested && this.__serviceRequested.map(v => v.toJSON()),
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
			fulfillmentTime: this.__fulfillmentTime && this.__fulfillmentTime.toJSON(),
		});
	}
}

module.exports = ReferralRequest;
