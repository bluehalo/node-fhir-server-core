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

	// The program or plan underwriter or payor.
	get issuer() {
		return this.__issuer;
	}

	set issuer(new_value) {
		const Reference = require('./Reference');
		this.__issuer = new Reference(new_value);
	}

	// Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don\'t have a BIN number for all of their business.
	get bin() {
		return this.__bin;
	}

	set bin(new_value) {
		const Identifier = require('./Identifier');
		this.__bin = new Identifier(new_value);
	}

	// Time period during which the coverage is in force. A missing start date indicates the start date isn\'t known, a missing end date means the coverage is continuing to be in force.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// The id issued to the subscriber.
	get subscriberId() {
		return this.__subscriberId;
	}

	set subscriberId(new_value) {
		const Identifier = require('./Identifier');
		this.__subscriberId = new Identifier(new_value);
	}

	// The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Subscriber Id, Certificate number or Personal Health Number or Case ID.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
	get group() {
		return this.__group;
	}

	set group(new_value) {
		this.__group = new_value;
	}

	// Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
	get plan() {
		return this.__plan;
	}

	set plan(new_value) {
		this.__plan = new_value;
	}

	// Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.
	get subPlan() {
		return this.__subPlan;
	}

	set subPlan(new_value) {
		this.__subPlan = new_value;
	}

	// A unique identifier for a dependent under the coverage.
	get dependent() {
		return this.__dependent;
	}

	set dependent(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dependent`);
		}
		this.__dependent = new_value;
	}

	// An optional counter for a particular instance of the identified coverage which increments upon each renewal.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// The party who \'owns\' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.
	get subscriber() {
		return this.__subscriber;
	}

	set subscriber(new_value) {
		const Reference = require('./Reference');
		this.__subscriber = new Reference(new_value);
	}

	// The identifier for a community of providers.
	get network() {
		return this.__network;
	}

	set network(new_value) {
		const Identifier = require('./Identifier');
		this.__network = new Identifier(new_value);
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
			issuer: this.__issuer && this.__issuer.toJSON(),
			bin: this.__bin && this.__bin.toJSON(),
			period: this.__period && this.__period.toJSON(),
			type: this.__type && this.__type.toJSON(),
			subscriberId: this.__subscriberId && this.__subscriberId.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			group: this.__group,
			plan: this.__plan,
			subPlan: this.__subPlan,
			dependent: this.__dependent,
			sequence: this.__sequence,
			subscriber: this.__subscriber && this.__subscriber.toJSON(),
			network: this.__network && this.__network.toJSON(),
			contract: this.__contract && this.__contract.map(v => v.toJSON()),
		});
	}
}

module.exports = Coverage;
