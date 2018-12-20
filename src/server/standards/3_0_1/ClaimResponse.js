const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ClaimResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponse';
		Object.assign(this, opt);
	}

	// This is a ClaimResponse resource
	static get __resourceType() {
		return 'ClaimResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ClaimResponse = new_value;
	}

	// The Response business identifier.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Patient Resource.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The date when the enclosed suite of services were performed or completed.
	get created() {
		return this.__created;
	}

	set created(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// The Insurer who produced this adjudicated response.
	get insurer() {
		return this.__insurer;
	}

	set insurer(new_value) {
		const Reference = require('./Reference');
		this.__insurer = new Reference(new_value);
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider() {
		return this.__requestProvider;
	}

	set requestProvider(new_value) {
		const Reference = require('./Reference');
		this.__requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization() {
		return this.__requestOrganization;
	}

	set requestOrganization(new_value) {
		const Reference = require('./Reference');
		this.__requestOrganization = new Reference(new_value);
	}

	// Original request resource referrence.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Processing outcome errror, partial or complete processing.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition() {
		return this.__disposition;
	}

	set disposition(new_value) {
		this.__disposition = new_value;
	}

	// Party to be reimbursed: Subscriber, provider, other.
	get payeeType() {
		return this.__payeeType;
	}

	set payeeType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__payeeType = new CodeableConcept(new_value);
	}

	// The first tier service adjudications for submitted services.
	get item() {
		return this.__item;
	}

	set item(new_value) {
		const ClaimResponseItem = require('./ClaimResponseItem');
		this.__item = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseItem(val))
			: [new ClaimResponseItem(new_value)];
	}

	// The first tier service adjudications for payor added services.
	get addItem() {
		return this.__addItem;
	}

	set addItem(new_value) {
		const ClaimResponseAddItem = require('./ClaimResponseAddItem');
		this.__addItem = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseAddItem(val))
			: [new ClaimResponseAddItem(new_value)];
	}

	// Mutually exclusive with Services Provided (Item).
	get error() {
		return this.__error;
	}

	set error(new_value) {
		const ClaimResponseError = require('./ClaimResponseError');
		this.__error = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseError(val))
			: [new ClaimResponseError(new_value)];
	}

	// The total cost of the services reported.
	get totalCost() {
		return this.__totalCost;
	}

	set totalCost(new_value) {
		const Money = require('./Money');
		this.__totalCost = new Money(new_value);
	}

	// The amount of deductible applied which was not allocated to any particular service line.
	get unallocDeductable() {
		return this.__unallocDeductable;
	}

	set unallocDeductable(new_value) {
		const Money = require('./Money');
		this.__unallocDeductable = new Money(new_value);
	}

	// Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
	get totalBenefit() {
		return this.__totalBenefit;
	}

	set totalBenefit(new_value) {
		const Money = require('./Money');
		this.__totalBenefit = new Money(new_value);
	}

	// Payment details for the claim if the claim has been paid.
	get payment() {
		return this.__payment;
	}

	set payment(new_value) {
		const ClaimResponsePayment = require('./ClaimResponsePayment');
		this.__payment = new ClaimResponsePayment(new_value);
	}

	// Status of funds reservation (For provider, for Patient, None).
	get reserved() {
		return this.__reserved;
	}

	set reserved(new_value) {
		const Coding = require('./Coding');
		this.__reserved = new Coding(new_value);
	}

	// The form to be used for printing the content.
	get form() {
		return this.__form;
	}

	set form(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Note text.
	get processNote() {
		return this.__processNote;
	}

	set processNote(new_value) {
		const ClaimResponseProcessNote = require('./ClaimResponseProcessNote');
		this.__processNote = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseProcessNote(val))
			: [new ClaimResponseProcessNote(new_value)];
	}

	// Request for additional supporting or authorizing information, such as: documents, images or resources.
	get communicationRequest() {
		return this.__communicationRequest;
	}

	set communicationRequest(new_value) {
		const Reference = require('./Reference');
		this.__communicationRequest = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Financial instrument by which payment information for health care.
	get insurance() {
		return this.__insurance;
	}

	set insurance(new_value) {
		const ClaimResponseInsurance = require('./ClaimResponseInsurance');
		this.__insurance = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseInsurance(val))
			: [new ClaimResponseInsurance(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			created: this.__created,
			insurer: this.__insurer && this.__insurer.toJSON(),
			requestProvider: this.__requestProvider && this.__requestProvider.toJSON(),
			requestOrganization: this.__requestOrganization && this.__requestOrganization.toJSON(),
			request: this.__request && this.__request.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			disposition: this.__disposition,
			payeeType: this.__payeeType && this.__payeeType.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
			addItem: this.__addItem && this.__addItem.map(v => v.toJSON()),
			error: this.__error && this.__error.map(v => v.toJSON()),
			totalCost: this.__totalCost && this.__totalCost.toJSON(),
			unallocDeductable: this.__unallocDeductable && this.__unallocDeductable.toJSON(),
			totalBenefit: this.__totalBenefit && this.__totalBenefit.toJSON(),
			payment: this.__payment && this.__payment.toJSON(),
			reserved: this.__reserved && this.__reserved.toJSON(),
			form: this.__form && this.__form.toJSON(),
			processNote: this.__processNote && this.__processNote.map(v => v.toJSON()),
			communicationRequest: this.__communicationRequest && this.__communicationRequest.map(v => v.toJSON()),
			insurance: this.__insurance && this.__insurance.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponse;
