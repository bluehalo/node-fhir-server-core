const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Timing = require('./Timing');
const DeviceRequest_Requester = require('./DeviceRequest_Requester');
const Annotation = require('./Annotation');

class DeviceRequest extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DeviceRequest';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DeviceRequest';
	}

	// This is a DeviceRequest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DeviceRequest'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this order by the orderer or by the receiver.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
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
	get priorRequest () {
		return this._priorRequest;
	}

	set priorRequest ( new_value ) {
		this._priorRequest = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Composite request this is part of.
	get groupIdentifier () {
		return this._groupIdentifier;
	}

	set groupIdentifier ( new_value ) {
		this._groupIdentifier = new Identifier(new_value);
	}

	// The status of the request.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Whether the request is a proposal, plan, an original order or a reflex order.
	get intent () {
		return this._intent;
	}

	set intent ( new_value ) {
		this._intent = new CodeableConcept(new_value);
	}

	// Indicates how quickly the {{title}} should be addressed with respect to other requests.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this._priority = new_value;
	}

	// The details of the device to be used.
	get codeReference () {
		return this._codeReference;
	}

	set codeReference ( new_value ) {
		this._codeReference = new Reference(new_value);
	}

	// The details of the device to be used.
	get codeCodeableConcept () {
		return this._codeCodeableConcept;
	}

	set codeCodeableConcept ( new_value ) {
		this._codeCodeableConcept = new CodeableConcept(new_value);
	}

	// The patient who will use the device.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// An encounter that provides additional context in which this request is made.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
	get occurrenceDateTime () {
		return this._occurrenceDateTime;
	}

	set occurrenceDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this._occurrenceDateTime = new_value;
	}

	// The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
	get occurrenceTiming () {
		return this._occurrenceTiming;
	}

	set occurrenceTiming ( new_value ) {
		this._occurrenceTiming = new Timing(new_value);
	}

	// When the request transitioned to being actionable.
	get authoredOn () {
		return this._authoredOn;
	}

	set authoredOn ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this._authoredOn = new_value;
	}

	// The individual who initiated the request and has responsibility for its activation.
	get requester () {
		return this._requester;
	}

	set requester ( new_value ) {
		this._requester = new DeviceRequest_Requester(new_value);
	}

	// Desired type of performer for doing the diagnostic testing.
	get performerType () {
		return this._performerType;
	}

	set performerType ( new_value ) {
		this._performerType = new CodeableConcept(new_value);
	}

	// The desired perfomer for doing the diagnostic testing.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = new Reference(new_value);
	}

	// Reason or justification for the use of this device.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Reason or justification for the use of this device.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject's the device will be used ( i.e. the target site).
	get supportingInfo () {
		return this._supportingInfo;
	}

	set supportingInfo ( new_value ) {
		this._supportingInfo = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
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
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			definition: this._definition && this._definition.map(v => v.toJSON()),
			basedOn: this._basedOn && this._basedOn.map(v => v.toJSON()),
			priorRequest: this._priorRequest && this._priorRequest.map(v => v.toJSON()),
			groupIdentifier: this._groupIdentifier && this._groupIdentifier.toJSON(),
			status: this._status,
			intent: this._intent && this._intent.toJSON(),
			priority: this._priority,
			codeReference: this._codeReference && this._codeReference.toJSON(),
			codeCodeableConcept: this._codeCodeableConcept && this._codeCodeableConcept.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			context: this._context && this._context.toJSON(),
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod && this._occurrencePeriod.toJSON(),
			occurrenceTiming: this._occurrenceTiming && this._occurrenceTiming.toJSON(),
			authoredOn: this._authoredOn,
			requester: this._requester && this._requester.toJSON(),
			performerType: this._performerType && this._performerType.toJSON(),
			performer: this._performer && this._performer.toJSON(),
			reasonCode: this._reasonCode && this._reasonCode.map(v => v.toJSON()),
			reasonReference: this._reasonReference && this._reasonReference.map(v => v.toJSON()),
			supportingInfo: this._supportingInfo && this._supportingInfo.map(v => v.toJSON()),
			note: this._note && this._note.map(v => v.toJSON()),
			relevantHistory: this._relevantHistory && this._relevantHistory.map(v => v.toJSON())
		});
	}

}

module.exports = DeviceRequest;
