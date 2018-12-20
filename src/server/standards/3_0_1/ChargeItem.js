const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ChargeItem extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ChargeItem';
		Object.assign(this, opt);
	}

	// This is a ChargeItem resource
	static get __resourceType() {
		return 'ChargeItem';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ChargeItem = new_value;
	}

	// Identifiers assigned to this event performer or other systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// References the source of pricing information, rules of application for the code this ChargeItem uses.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field definition`);
		}
		this.__definition = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The current state of the ChargeItem.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// ChargeItems can be grouped to larger ChargeItems covering the whole set.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code that identifies the charge, like a billing code.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The individual or set of individuals the action is being or was performed on.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The encounter or episode of care that establishes the context for this event.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Date/time(s) or duration when the charged service was applied.
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

	// Date/time(s) or duration when the charged service was applied.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// Date/time(s) or duration when the charged service was applied.
	get occurrenceTiming() {
		return this.__occurrenceTiming;
	}

	set occurrenceTiming(new_value) {
		const Timing = require('./Timing');
		this.__occurrenceTiming = new Timing(new_value);
	}

	// Indicates who or what performed or participated in the charged service.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const ChargeItemParticipant = require('./ChargeItemParticipant');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new ChargeItemParticipant(val))
			: [new ChargeItemParticipant(new_value)];
	}

	// The organization requesting the service.
	get performingOrganization() {
		return this.__performingOrganization;
	}

	set performingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__performingOrganization = new Reference(new_value);
	}

	// The organization performing the service.
	get requestingOrganization() {
		return this.__requestingOrganization;
	}

	set requestingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__requestingOrganization = new Reference(new_value);
	}

	// Quantity of which the charge item has been serviced.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// The anatomical location where the related service has been applied.
	get bodysite() {
		return this.__bodysite;
	}

	set bodysite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodysite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Factor overriding the factor determined by the rules associated with the code.
	get factorOverride() {
		return this.__factorOverride;
	}

	set factorOverride(new_value) {
		this.__factorOverride = new_value;
	}

	// Total price of the charge overriding the list price associated with the code.
	get priceOverride() {
		return this.__priceOverride;
	}

	set priceOverride(new_value) {
		const Money = require('./Money');
		this.__priceOverride = new Money(new_value);
	}

	// If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.
	get overrideReason() {
		return this.__overrideReason;
	}

	set overrideReason(new_value) {
		this.__overrideReason = new_value;
	}

	// The device, practitioner, etc. who entered the charge item.
	get enterer() {
		return this.__enterer;
	}

	set enterer(new_value) {
		const Reference = require('./Reference');
		this.__enterer = new Reference(new_value);
	}

	// Date the charge item was entered.
	get enteredDate() {
		return this.__enteredDate;
	}

	set enteredDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field enteredDate`);
		}
		this.__enteredDate = new_value;
	}

	// Describes why the event occurred in coded or textual form.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicated the rendered service that caused this charge.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const Reference = require('./Reference');
		this.__service = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Account into which this ChargeItems belongs.
	get account() {
		return this.__account;
	}

	set account(new_value) {
		const Reference = require('./Reference');
		this.__account = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Comments made about the event by the performer, subject or other participants.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Further information supporting the this charge.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			definition: this.__definition,
			status: this.__status,
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			occurrenceTiming: this.__occurrenceTiming && this.__occurrenceTiming.toJSON(),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			performingOrganization: this.__performingOrganization && this.__performingOrganization.toJSON(),
			requestingOrganization: this.__requestingOrganization && this.__requestingOrganization.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			bodysite: this.__bodysite && this.__bodysite.map(v => v.toJSON()),
			factorOverride: this.__factorOverride,
			priceOverride: this.__priceOverride && this.__priceOverride.toJSON(),
			overrideReason: this.__overrideReason,
			enterer: this.__enterer && this.__enterer.toJSON(),
			enteredDate: this.__enteredDate,
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			service: this.__service && this.__service.map(v => v.toJSON()),
			account: this.__account && this.__account.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
		});
	}
}

module.exports = ChargeItem;
