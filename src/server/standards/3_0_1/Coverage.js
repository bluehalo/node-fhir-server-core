const DomainResource = require('./DomainResource');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class Coverage extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Coverage';
		Object.assign(this, opt);
	}

	// This is a Coverage resource
	static get __resourceType() {
		return 'Coverage';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Coverage = new_value;
	}

	// The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.
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

	// The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The party who \'owns\' the insurance policy,  may be an individual, corporation or the subscriber\'s employer.
	get policyHolder() {
		return this.__policyHolder;
	}

	set policyHolder(new_value) {
		const Reference = require('./Reference');
		this.__policyHolder = new Reference(new_value);
	}

	// The party who has signed-up for or \'owns\' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
	get subscriber() {
		return this.__subscriber;
	}

	set subscriber(new_value) {
		const Reference = require('./Reference');
		this.__subscriber = new Reference(new_value);
	}

	// The insurer assigned ID for the Subscriber.
	get subscriberId() {
		return this.__subscriberId;
	}

	set subscriberId(new_value) {
		this.__subscriberId = new_value;
	}

	// The party who benefits from the insurance coverage., the patient when services are provided.
	get beneficiary() {
		return this.__beneficiary;
	}

	set beneficiary(new_value) {
		const Reference = require('./Reference');
		this.__beneficiary = new Reference(new_value);
	}

	// The relationship of beneficiary (patient) to the subscriber.
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__relationship = new CodeableConcept(new_value);
	}

	// Time period during which the coverage is in force. A missing start date indicates the start date isn\'t known, a missing end date means the coverage is continuing to be in force.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
	get payor() {
		return this.__payor;
	}

	set payor(new_value) {
		const Reference = require('./Reference');
		this.__payor = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
	get grouping() {
		return this.__grouping;
	}

	set grouping(new_value) {
		const CoverageGrouping = require('./CoverageGrouping');
		this.__grouping = new CoverageGrouping(new_value);
	}

	// A unique identifier for a dependent under the coverage.
	get dependent() {
		return this.__dependent;
	}

	set dependent(new_value) {
		this.__dependent = new_value;
	}

	// An optional counter for a particular instance of the identified coverage which increments upon each renewal.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		this.__sequence = new_value;
	}

	// The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.
	get order() {
		return this.__order;
	}

	set order(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field order`);
		}
		this.__order = new_value;
	}

	// The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the \'in-network\' rate, otherwise \'out of network\' terms and conditions apply.
	get network() {
		return this.__network;
	}

	set network(new_value) {
		this.__network = new_value;
	}

	// The policy(s) which constitute this insurance coverage.
	get contract() {
		return this.__contract;
	}

	set contract(new_value) {
		const Reference = require('./Reference');
		this.__contract = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			policyHolder: this.__policyHolder && this.__policyHolder.toJSON(),
			subscriber: this.__subscriber && this.__subscriber.toJSON(),
			subscriberId: this.__subscriberId,
			beneficiary: this.__beneficiary && this.__beneficiary.toJSON(),
			relationship: this.__relationship && this.__relationship.toJSON(),
			period: this.__period && this.__period.toJSON(),
			payor: this.__payor && this.__payor.map(v => v.toJSON()),
			grouping: this.__grouping && this.__grouping.toJSON(),
			dependent: this.__dependent,
			sequence: this.__sequence,
			order: this.__order,
			network: this.__network,
			contract: this.__contract && this.__contract.map(v => v.toJSON()),
		});
	}
}

module.exports = Coverage;
