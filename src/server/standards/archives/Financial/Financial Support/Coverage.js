const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');

class Grouping {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// group	Σ	0..1	string	An identifier for the group
	set group(group) {
		this._group = group;
	}

	get group() {
		return this._group;
	}

	// groupDisplay	Σ	0..1	string	Display text for an identifier for the group
	set groupDisplay(groupDisplay) {
		this._groupDisplay = groupDisplay;
	}

	get groupDisplay() {
		return this._groupDisplay;
	}

	// subGroup	Σ	0..1	string	An identifier for the subsection of the group
	set subGroup(subGroup) {
		this._subGroup = subGroup;
	}

	get subGroup() {
		return this._subGroup;
	}

	// subGroupDisplay	Σ	0..1	string	Display text for the subsection of the group
	set subGroupDisplay(subGroupDisplay) {
		this._subGroupDisplay = subGroupDisplay;
	}

	get subGroupDisplay() {
		return this._subGroupDisplay;
	}

	// plan	Σ	0..1	string	An identifier for the plan
	set plan(plan) {
		this._plan = plan;
	}

	get plan() {
		return this._plan;
	}

	// planDisplay	Σ	0..1	string	Display text for the plan
	set planDisplay(planDisplay) {
		this._planDisplay = planDisplay;
	}

	get planDisplay() {
		return this._planDisplay;
	}

	// subPlan	Σ	0..1	string	An identifier for the subsection of the plan
	set subPlan(subPlan) {
		this._subPlan = subPlan;
	}

	get subPlan() {
		return this._subPlan;
	}

	// subPlanDisplay	Σ	0..1	string	Display text for the subsection of the plan
	set subPlanDisplay(subPlanDisplay) {
		this._subPlanDisplay = subPlanDisplay;
	}

	get subPlanDisplay() {
		return this._subPlanDisplay;
	}

	// class	Σ	0..1	string	An identifier for the class
	set groupingClass(groupingClass) {
		this._groupingClass = groupingClass;
	}

	get groupingClass() {
		return this._groupingClass;
	}

	// classDisplay	Σ	0..1	string	Display text for the class
	set classDisplay(classDisplay) {
		this._classDisplay = classDisplay;
	}

	get classDisplay() {
		return this._classDisplay;
	}

	// subClass	Σ	0..1	string	An identifier for the subsection of the class
	set subClass(subClass) {
		this._subClass = subClass;
	}

	get subClass() {
		return this._subClass;
	}

	// subClassDisplay	Σ	0..1	string	Display text for the subsection of the subclass
	set subClassDisplay(subClassDisplay) {
		this._subClassDisplay = subClassDisplay;
	}

	get subClassDisplay() {
		return this._subClassDisplay;
	}

	toJSON() {
		return {
			group: this._group,
			groupDisplay: this._groupDisplay,
			subGroup: this._subGroup,
			subGroupDisplay: this._subGroupDisplay,
			plan: this._plan,
			planDisplay: this._planDisplay,
			subPlan: this._subPlan,
			subPlanDisplay: this._subPlanDisplay,
			groupingClass: this._groupingClass,
			classDisplay: this._classDisplay,
			subClass: this._subClass,
			subClassDisplay: this._subClassDisplay,
		};
	}
}

class Coverage extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Coverage';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	The primary coverage ID
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	active | cancelled | draft | entered-in-error
	// Financial Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	0..1	CodeableConcept	Type of coverage such as medical or accident
	// Coverage Type and Self-Pay Codes (Preferred)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// policyHolder	Σ	0..1	Reference(Patient | RelatedPerson | Organization)	Owner of the policy
	set policyHolder(policyHolder) {
		this._policyHolder = new Reference(policyHolder);
	}

	get policyHolder() {
		return this._policyHolder;
	}

	// subscriber	Σ	0..1	Reference(Patient | RelatedPerson)	Subscriber to the policy
	set subscriber(subscriber) {
		this._subscriber = new Reference(subscriber);
	}

	get subscriber() {
		return this._subscriber;
	}

	// subscriberId	Σ	0..1	string	ID assigned to the Subscriber
	set subscriberId(subscriberId) {
		this._subscriberId = subscriberId;
	}

	get subscriberId() {
		return this._subscriberId;
	}

	// beneficiary	Σ	0..1	Reference(Patient)	Plan Beneficiary
	set beneficiary(beneficiary) {
		this._beneficiary = new Reference(beneficiary);
	}

	get beneficiary() {
		return this._beneficiary;
	}

	// relationship		0..1	CodeableConcept	Beneficiary relationship to the Subscriber
	// Policyholder Relationship Codes (Example)
	set relationship(relationship) {
		this._relationship = new CodeableConcept(relationship);
	}

	get relationship() {
		return this._relationship;
	}

	// period	Σ	0..1	Period	Coverage start and end dates
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// payor	Σ	0..*	Reference(Organization | Patient | RelatedPerson)	Identifier for the plan or agreement issuer
	set payor(payor) {
		if (Array.isArray(payor)) {
			this._payor = payor.map((i) => new Reference(i));
		} else {
			this._payor = [new Reference(payor)];
		}
	}

	get payor() {
		return this._payor;
	}

	// dependent	Σ	0..1	string	Dependent number
	set dependent(dependent) {
		this._dependent = dependent;
	}

	get dependent() {
		return this._dependent;
	}

	// sequence	Σ	0..1	string	The plan instance or sequence counter
	set sequence(sequence) {
		this._sequence = sequence;
	}

	get sequence() {
		return this._sequence;
	}

	// order	Σ	0..1	positiveInt	Relative order of the coverage
	set order(order) {
		this._order = order;
	}

	get order() {
		return this._order;
	}

	// network	Σ	0..1	string	Insurer network
	set network(network) {
		this._network = network;
	}

	get network() {
		return this._network;
	}

	// contract		0..*	Reference(Contract)	Contract details
	set contract(contract) {
		if (Array.isArray(contract)) {
			this._contract = contract.map((i) => new Reference(i));
		} else {
			this._contract = [new Reference(contract)];
		}
	}

	get contract() {
		return this._contract;
	}

	// grouping		0..1	BackboneElement	Additional coverage classifications
	set grouping(grouping) {
		this._grouping = new Grouping(grouping);
	}

	get grouping() {
		return this._grouping;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			policyHolder: this._policyHolder,
			subscriber: this._subscriber,
			subscriberId: this._subscriberId,
			beneficiary: this._beneficiary,
			relationship: this._relationship,
			period: this._period,
			payor: this._payor,
			dependent: this._dependent,
			sequence: this._sequence,
			order: this._order,
			network: this._network,
			contract: this._contract,
			grouping: this._grouping,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Coverage = Coverage;
module.exports.Grouping = Grouping;
