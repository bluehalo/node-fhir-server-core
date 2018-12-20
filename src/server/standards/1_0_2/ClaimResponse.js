const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

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

	// Original request resource referrence.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
	get ruleset() {
		return this.__ruleset;
	}

	set ruleset(new_value) {
		const Coding = require('./Coding');
		this.__ruleset = new Coding(new_value);
	}

	// The style (standard) and version of the original material which was converted into this resource.
	get originalRuleset() {
		return this.__originalRuleset;
	}

	set originalRuleset(new_value) {
		const Coding = require('./Coding');
		this.__originalRuleset = new Coding(new_value);
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
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
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

	// Transaction status: error, complete.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		this.__outcome = new_value;
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
		const Coding = require('./Coding');
		this.__payeeType = new Coding(new_value);
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
		const Quantity = require('./Quantity');
		this.__totalCost = new Quantity(new_value);
	}

	// The amount of deductible applied which was not allocated to any particular service line.
	get unallocDeductable() {
		return this.__unallocDeductable;
	}

	set unallocDeductable(new_value) {
		const Quantity = require('./Quantity');
		this.__unallocDeductable = new Quantity(new_value);
	}

	// Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).
	get totalBenefit() {
		return this.__totalBenefit;
	}

	set totalBenefit(new_value) {
		const Quantity = require('./Quantity');
		this.__totalBenefit = new Quantity(new_value);
	}

	// Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
	get paymentAdjustment() {
		return this.__paymentAdjustment;
	}

	set paymentAdjustment(new_value) {
		const Quantity = require('./Quantity');
		this.__paymentAdjustment = new Quantity(new_value);
	}

	// Reason for the payment adjustment.
	get paymentAdjustmentReason() {
		return this.__paymentAdjustmentReason;
	}

	set paymentAdjustmentReason(new_value) {
		const Coding = require('./Coding');
		this.__paymentAdjustmentReason = new Coding(new_value);
	}

	// Estimated payment data.
	get paymentDate() {
		return this.__paymentDate;
	}

	set paymentDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field paymentDate`);
		}
		this.__paymentDate = new_value;
	}

	// Payable less any payment adjustment.
	get paymentAmount() {
		return this.__paymentAmount;
	}

	set paymentAmount(new_value) {
		const Quantity = require('./Quantity');
		this.__paymentAmount = new Quantity(new_value);
	}

	// Payment identifier.
	get paymentRef() {
		return this.__paymentRef;
	}

	set paymentRef(new_value) {
		const Identifier = require('./Identifier');
		this.__paymentRef = new Identifier(new_value);
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
		const Coding = require('./Coding');
		this.__form = new Coding(new_value);
	}

	// Note text.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const ClaimResponseNote = require('./ClaimResponseNote');
		this.__note = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseNote(val))
			: [new ClaimResponseNote(new_value)];
	}

	// Financial instrument by which payment information for health care.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const ClaimResponseCoverage = require('./ClaimResponseCoverage');
		this.__coverage = Array.isArray(new_value)
			? new_value.map(val => new ClaimResponseCoverage(val))
			: [new ClaimResponseCoverage(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			request: this.__request && this.__request.toJSON(),
			ruleset: this.__ruleset && this.__ruleset.toJSON(),
			originalRuleset: this.__originalRuleset && this.__originalRuleset.toJSON(),
			created: this.__created,
			organization: this.__organization && this.__organization.toJSON(),
			requestProvider: this.__requestProvider && this.__requestProvider.toJSON(),
			requestOrganization: this.__requestOrganization && this.__requestOrganization.toJSON(),
			outcome: this.__outcome,
			disposition: this.__disposition,
			payeeType: this.__payeeType && this.__payeeType.toJSON(),
			item: this.__item && this.__item.map(v => v.toJSON()),
			addItem: this.__addItem && this.__addItem.map(v => v.toJSON()),
			error: this.__error && this.__error.map(v => v.toJSON()),
			totalCost: this.__totalCost && this.__totalCost.toJSON(),
			unallocDeductable: this.__unallocDeductable && this.__unallocDeductable.toJSON(),
			totalBenefit: this.__totalBenefit && this.__totalBenefit.toJSON(),
			paymentAdjustment: this.__paymentAdjustment && this.__paymentAdjustment.toJSON(),
			paymentAdjustmentReason: this.__paymentAdjustmentReason && this.__paymentAdjustmentReason.toJSON(),
			paymentDate: this.__paymentDate,
			paymentAmount: this.__paymentAmount && this.__paymentAmount.toJSON(),
			paymentRef: this.__paymentRef && this.__paymentRef.toJSON(),
			reserved: this.__reserved && this.__reserved.toJSON(),
			form: this.__form && this.__form.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
			coverage: this.__coverage && this.__coverage.map(v => v.toJSON()),
		});
	}
}

module.exports = ClaimResponse;
