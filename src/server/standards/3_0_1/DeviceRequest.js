const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DeviceRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceRequest';
		Object.assign(this, opt);
	}

	// This is a DeviceRequest resource
	static get __resourceType() {
		return 'DeviceRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DeviceRequest = new_value;
	}

	// Identifiers assigned to this order by the orderer or by the receiver.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
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
	get priorRequest() {
		return this.__priorRequest;
	}

	set priorRequest(new_value) {
		const Reference = require('./Reference');
		this.__priorRequest = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Composite request this is part of.
	get groupIdentifier() {
		return this.__groupIdentifier;
	}

	set groupIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__groupIdentifier = new Identifier(new_value);
	}

	// The status of the request.
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
		const CodeableConcept = require('./CodeableConcept');
		this.__intent = new CodeableConcept(new_value);
	}

	// Indicates how quickly the {{title}} should be addressed with respect to other requests.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// The details of the device to be used.
	get codeReference() {
		return this.__codeReference;
	}

	set codeReference(new_value) {
		const Reference = require('./Reference');
		this.__codeReference = new Reference(new_value);
	}

	// The details of the device to be used.
	get codeCodeableConcept() {
		return this.__codeCodeableConcept;
	}

	set codeCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__codeCodeableConcept = new CodeableConcept(new_value);
	}

	// The patient who will use the device.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// An encounter that provides additional context in which this request is made.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
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

	// The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get occurrenceTiming() {
		return this.__occurrenceTiming;
	}

	set occurrenceTiming(new_value) {
		const Timing = require('./Timing');
		this.__occurrenceTiming = new Timing(new_value);
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
		const DeviceRequestRequester = require('./DeviceRequestRequester');
		this.__requester = new DeviceRequestRequester(new_value);
	}

	// Desired type of performer for doing the diagnostic testing.
	get performerType() {
		return this.__performerType;
	}

	set performerType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__performerType = new CodeableConcept(new_value);
	}

	// The desired perfomer for doing the diagnostic testing.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// Reason or justification for the use of this device.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Reason or justification for the use of this device.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject\'s the device will be used ( i.e. the target site).
	get supportingInfo() {
		return this.__supportingInfo;
	}

	set supportingInfo(new_value) {
		const Reference = require('./Reference');
		this.__supportingInfo = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
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
			priorRequest: this.__priorRequest && this.__priorRequest.map(v => v.toJSON()),
			groupIdentifier: this.__groupIdentifier && this.__groupIdentifier.toJSON(),
			status: this.__status,
			intent: this.__intent && this.__intent.toJSON(),
			priority: this.__priority,
			codeReference: this.__codeReference && this.__codeReference.toJSON(),
			codeCodeableConcept: this.__codeCodeableConcept && this.__codeCodeableConcept.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			occurrenceTiming: this.__occurrenceTiming && this.__occurrenceTiming.toJSON(),
			authoredOn: this.__authoredOn,
			requester: this.__requester && this.__requester.toJSON(),
			performerType: this.__performerType && this.__performerType.toJSON(),
			performer: this.__performer && this.__performer.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			supportingInfo: this.__supportingInfo && this.__supportingInfo.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			relevantHistory: this.__relevantHistory && this.__relevantHistory.map(v => v.toJSON()),
		});
	}
}

module.exports = DeviceRequest;
