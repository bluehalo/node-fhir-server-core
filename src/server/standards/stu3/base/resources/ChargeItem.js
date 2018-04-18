const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const Period = require('../types/Period');
const Timing = require('../types/Timing');
const Quantity = require('../types/Quantity');
const Annotation = require('../types/Annotation');

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role		0..1	CodeableConcept	What type of performance was done
	// Procedure Performer Role Codes (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// actor		1..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson)	Individual who was performing
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	toJSON() {
		return {
			role: this._role,
			actor: this._actor,
		};
	}
}

class ChargeItem extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ChargeItem';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Business Identifier for item
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// definition		0..*	uri	Defining information about the code of this charge item
	set definition(definition) {
		this._definition = [].concat(definition);
	}

	get definition() {
		return this._definition;
	}

	// status	?!Σ	1..1	code	planned | billable | not-billable | aborted | billed | entered-in-error | unknown
	// ChargeItemStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// partOf		0..*	Reference(ChargeItem)	Part of referenced ChargeItem
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// code	Σ	1..1	CodeableConcept	A code that identifies the charge, like a billing code
	// ChargeItemCode (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Individual service was done for/to
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter / Episode associated with event
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When the charged service was applied
	// occurrenceDateTime			dateTime
	set occurrenceDateTime(occurrenceDateTime) {
		this._occurrenceDateTime = occurrenceDateTime;
	}

	get occurrenceDateTime() {
		return this._occurrenceDateTime;
	}

	// occurrencePeriod			Period
	set occurrencePeriod(occurrencePeriod) {
		this._occurrencePeriod = new Period(occurrencePeriod);
	}

	get occurrencePeriod() {
		return this._occurrencePeriod;
	}

	// occurrenceTiming			Timing
	set occurrenceTiming(occurrenceTiming) {
		this._occurrenceTiming = new Timing(occurrenceTiming);
	}

	get occurrenceTiming() {
		return this._occurrenceTiming;
	}

	// participant		0..*	BackboneElement	Who performed charged service
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Participant(i));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// performingOrganization		0..1	Reference(Organization)	Organization providing the charged sevice
	set performingOrganization(performingOrganization) {
		this._performingOrganization = new Reference(performingOrganization);
	}

	get performingOrganization() {
		return this._performingOrganization;
	}

	// requestingOrganization		0..1	Reference(Organization)	Organization requesting the charged service
	set requestingOrganization(requestingOrganization) {
		this._requestingOrganization = new Reference(requestingOrganization);
	}

	get requestingOrganization() {
		return this._requestingOrganization;
	}

	// quantity	Σ	0..1	Quantity	Quantity of which the charge item has been serviced
	set quantity(quantity) {
		this._quantity = new Quantity(quantity);
	}

	get quantity() {
		return this._quantity;
	}

	// bodysite	Σ	0..*	CodeableConcept	Anatomical location, if relevant
	// SNOMED CT Body Structures (Example)
	set bodysite(bodysite) {
		if (Array.isArray(bodysite)) {
			this._bodysite = bodysite.map((i) => new CodeableConcept(i));
		} else {
			this._bodysite = [new CodeableConcept(bodysite)];
		}
	}

	get bodysite() {
		return this._bodysite;
	}

	// factorOverride		0..1	decimal	Factor overriding the associated rules
	set factorOverride(factorOverride) {
		this._factorOverride = factorOverride;
	}

	get factorOverride() {
		return this._factorOverride;
	}

	// priceOverride		0..1	Money	Price overriding the associated rules
	set priceOverride(priceOverride) {
		this._priceOverride = priceOverride;
	}

	get priceOverride() {
		return this._priceOverride;
	}

	// overrideReason		0..1	string	Reason for overriding the list price/factor
	set overrideReason(overrideReason) {
		this._overrideReason = overrideReason;
	}

	get overrideReason() {
		return this._overrideReason;
	}

	// enterer	Σ	0..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson)	Individual who was entering
	set enterer(enterer) {
		this._enterer = new Reference(enterer);
	}

	get enterer() {
		return this._enterer;
	}

	// enteredDate	Σ	0..1	dateTime	Date the charge item was entered
	set enteredDate(enteredDate) {
		this._enteredDate = enteredDate;
	}

	get enteredDate() {
		return this._enteredDate;
	}

	// reason		0..*	CodeableConcept	Why was the charged service rendered?
	// ICD-10 Codes (Example)
	set reason(reason) {
		if (Array.isArray(reason)) {
			this._reason = reason.map((i) => new CodeableConcept(i));
		} else {
			this._reason = [new CodeableConcept(reason)];
		}
	}

	get reason() {
		return this._reason;
	}

	// service		0..*	Reference(DiagnosticReport | ImagingStudy | Immunization | MedicationAdministration | MedicationDispense | Observation | Procedure | SupplyDelivery)	Which rendered service is being charged?
	set service(service) {
		if (Array.isArray(service)) {
			this._service = service.map((i) => new Reference(i));
		} else {
			this._service = [new Reference(service)];
		}
	}

	get service() {
		return this._service;
	}

	// account	Σ	0..*	Reference(Account)	Account to place this charge
	set account(account) {
		if (Array.isArray(account)) {
			this._account = account.map((i) => new Reference(i));
		} else {
			this._account = [new Reference(account)];
		}
	}

	get account() {
		return this._account;
	}

	// note		0..*	Annotation	Comments made about the ChargeItem
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// supportingInformation		0..*	Reference(Any)	Further information supporting the this charge
	set supportingInformation(supportingInformation) {
		if (Array.isArray(supportingInformation)) {
			this._supportingInformation = supportingInformation.map((i) => new Reference(i));
		} else {
			this._supportingInformation = [new Reference(supportingInformation)];
		}
	}

	get supportingInformation() {
		return this._supportingInformation;
	}

	toJSON() {
		const json = {
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
			supportingInformation: this._supportingInformation,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ChargeItem = ChargeItem;
module.exports.Participant = Participant;
