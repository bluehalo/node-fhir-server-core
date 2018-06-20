const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Timing = require('./Timing');
const ChargeItem_Participant = require('./ChargeItem_Participant');
const Quantity = require('./Quantity');
const Money = require('./Money');
const Annotation = require('./Annotation');

class ChargeItem extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ChargeItem';
	}

	// This is a ChargeItem resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ChargeItem'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers assigned to this event performer or other systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// References the source of pricing information, rules of application for the code this ChargeItem uses.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The current state of the ChargeItem.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['planned', 'billable', 'not-billable', 'aborted', 'billed', 'entered-in-error', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// ChargeItems can be grouped to larger ChargeItems covering the whole set.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code that identifies the charge, like a billing code.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The individual or set of individuals the action is being or was performed on.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter or episode of care that establishes the context for this event.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Date/time(s) or duration when the charged service was applied.
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

	// Date/time(s) or duration when the charged service was applied.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// Date/time(s) or duration when the charged service was applied.
	get occurrenceTiming () {
		return this._occurrenceTiming;
	}

	set occurrenceTiming ( new_value ) {
		this._occurrenceTiming = new Timing(new_value);
	}

	// Indicates who or what performed or participated in the charged service.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new ChargeItem_Participant(val)) : [new ChargeItem_Participant(new_value)];
	}

	// The organization requesting the service.
	get performingOrganization () {
		return this._performingOrganization;
	}

	set performingOrganization ( new_value ) {
		this._performingOrganization = new Reference(new_value);
	}

	// The organization performing the service.
	get requestingOrganization () {
		return this._requestingOrganization;
	}

	set requestingOrganization ( new_value ) {
		this._requestingOrganization = new Reference(new_value);
	}

	// Quantity of which the charge item has been serviced.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// The anatomical location where the related service has been applied.
	get bodysite () {
		return this._bodysite;
	}

	set bodysite ( new_value ) {
		this._bodysite = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Factor overriding the factor determined by the rules associated with the code.
	get factorOverride () {
		return this._factorOverride;
	}

	set factorOverride ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field factorOverride`);
		}
		this._factorOverride = new_value;
	}

	// Total price of the charge overriding the list price associated with the code.
	get priceOverride () {
		return this._priceOverride;
	}

	set priceOverride ( new_value ) {
		this._priceOverride = new Money(new_value);
	}

	// If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.
	get overrideReason () {
		return this._overrideReason;
	}

	set overrideReason ( new_value ) {
		this._overrideReason = new_value;
	}

	// The device, practitioner, etc. who entered the charge item.
	get enterer () {
		return this._enterer;
	}

	set enterer ( new_value ) {
		this._enterer = new Reference(new_value);
	}

	// Date the charge item was entered.
	get enteredDate () {
		return this._enteredDate;
	}

	set enteredDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field enteredDate`);
		}
		this._enteredDate = new_value;
	}

	// Describes why the event occurred in coded or textual form.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicated the rendered service that caused this charge.
	get service () {
		return this._service;
	}

	set service ( new_value ) {
		this._service = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Account into which this ChargeItems belongs.
	get account () {
		return this._account;
	}

	set account ( new_value ) {
		this._account = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Comments made about the event by the performer, subject or other participants.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Further information supporting the this charge.
	get supportingInformation () {
		return this._supportingInformation;
	}

	set supportingInformation ( new_value ) {
		this._supportingInformation = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			definition: this._definition,
			status: this._status,
			partOf: this._partOf,
			code: this._code,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			participant: this._participant,
			performingOrganization: this._performingOrganization,
			requestingOrganization: this._requestingOrganization,
			quantity: this._quantity,
			bodysite: this._bodysite,
			factorOverride: this._factorOverride,
			priceOverride: this._priceOverride,
			overrideReason: this._overrideReason,
			enterer: this._enterer,
			enteredDate: this._enteredDate,
			reason: this._reason,
			service: this._service,
			account: this._account,
			note: this._note,
			supportingInformation: this._supportingInformation
		});
	}

}

module.exports = ChargeItem;
