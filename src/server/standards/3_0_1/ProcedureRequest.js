const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ProcedureRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcedureRequest';
		Object.assign(this, opt);
	}

	// This is a ProcedureRequest resource
	static get __resourceType() {
		return 'ProcedureRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ProcedureRequest = new_value;
	}

	// Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Protocol or definition followed by this request.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Plan/proposal/order fulfilled by this request.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The request takes the place of the referenced completed or terminated request(s).
	get replaces() {
		return this.__replaces;
	}

	set replaces(new_value) {
		const Reference = require('./Reference');
		this.__replaces = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A shared identifier common to all procedure or diagnostic requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.
	get requisition() {
		return this.__requisition;
	}

	set requisition(new_value) {
		const Identifier = require('./Identifier');
		this.__requisition = new Identifier(new_value);
	}

	// The status of the order.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Whether the request is a proposal, plan, an original order or a reflex order.
	get intent() {
		return this.__intent;
	}

	set intent(new_value) {
		this.__intent = new_value;
	}

	// Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// Set this to true if the record is saying that the procedure should NOT be performed.
	get doNotPerform() {
		return this.__doNotPerform;
	}

	set doNotPerform(new_value) {
		this.__doNotPerform = new_value;
	}

	// A code that classifies the procedure for searching, sorting and display purposes (e.g. \'Surgical Procedure\').
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A code that identifies a particular procedure, diagnostic investigation, or panel of investigations, that have been requested.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// An encounter or episode of care that provides additional information about the healthcare context in which this request is made.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The date/time at which the diagnostic testing should occur.
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

	// The date/time at which the diagnostic testing should occur.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// The date/time at which the diagnostic testing should occur.
	get occurrenceTiming() {
		return this.__occurrenceTiming;
	}

	set occurrenceTiming(new_value) {
		const Timing = require('./Timing');
		this.__occurrenceTiming = new Timing(new_value);
	}

	// If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example \'pain\', \'on flare-up\', etc.
	get asNeededBoolean() {
		return this.__asNeededBoolean;
	}

	set asNeededBoolean(new_value) {
		this.__asNeededBoolean = new_value;
	}

	// If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example \'pain\', \'on flare-up\', etc.
	get asNeededCodeableConcept() {
		return this.__asNeededCodeableConcept;
	}

	set asNeededCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// When the request transitioned to being actionable.
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
		const ProcedureRequestRequester = require('./ProcedureRequestRequester');
		this.__requester = new ProcedureRequestRequester(new_value);
	}

	// Desired type of performer for doing the diagnostic testing.
	get performerType() {
		return this.__performerType;
	}

	set performerType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__performerType = new CodeableConcept(new_value);
	}

	// The desired perfomer for doing the diagnostic testing.  For example, the surgeon, dermatopathologist, endoscopist, etc.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// An explanation or justification for why this diagnostic investigation is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates another resource that provides a justification for why this diagnostic investigation is being requested.   May relate to the resources referred to in supportingInformation.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as \'ask at order entry questions (AOEs)\'.  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
	get supportingInfo() {
		return this.__supportingInfo;
	}

	set supportingInfo(new_value) {
		const Reference = require('./Reference');
		this.__supportingInfo = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// One or more specimens that the laboratory procedure will use.
	get specimen() {
		return this.__specimen;
	}

	set specimen(new_value) {
		const Reference = require('./Reference');
		this.__specimen = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Anatomic location where the procedure should be performed. This is the target site.
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Any other notes and comments made about the service request. For example, letting provider know that \'patient hates needles\' or other provider instructions.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Key events in the history of the request.
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
			requisition: this.__requisition && this.__requisition.toJSON(),
			status: this.__status,
			intent: this.__intent,
			priority: this.__priority,
			doNotPerform: this.__doNotPerform,
			category: this.__category && this.__category.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			occurrenceTiming: this.__occurrenceTiming && this.__occurrenceTiming.toJSON(),
			asNeededBoolean: this.__asNeededBoolean,
			asNeededCodeableConcept: this.__asNeededCodeableConcept && this.__asNeededCodeableConcept.toJSON(),
			authoredOn: this.__authoredOn,
			requester: this.__requester && this.__requester.toJSON(),
			performerType: this.__performerType && this.__performerType.toJSON(),
			performer: this.__performer && this.__performer.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			supportingInfo: this.__supportingInfo && this.__supportingInfo.map(v => v.toJSON()),
			specimen: this.__specimen && this.__specimen.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			relevantHistory: this.__relevantHistory && this.__relevantHistory.map(v => v.toJSON()),
		});
	}
}

module.exports = ProcedureRequest;
