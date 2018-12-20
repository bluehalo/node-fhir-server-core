const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Contract extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Contract';
		Object.assign(this, opt);
	}

	// This is a Contract resource
	static get __resourceType() {
		return 'Contract';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Contract = new_value;
	}

	// Unique identifier for this Contract.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The status of the resource instance.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// When this  Contract was issued.
	get issued() {
		return this.__issued;
	}

	set issued(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this.__issued = new_value;
	}

	// Relevant time or time-period when this Contract is applicable.
	get applies() {
		return this.__applies;
	}

	set applies(new_value) {
		const Period = require('./Period');
		this.__applies = new Period(new_value);
	}

	// The target entity impacted by or of interest to parties to the agreement.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The matter of concern in the context of this agreement.
	get topic() {
		return this.__topic;
	}

	set topic(new_value) {
		const Reference = require('./Reference');
		this.__topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
	get authority() {
		return this.__authority;
	}

	set authority(new_value) {
		const Reference = require('./Reference');
		this.__authority = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
	get domain() {
		return this.__domain;
	}

	set domain(new_value) {
		const Reference = require('./Reference');
		this.__domain = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.
	get subType() {
		return this.__subType;
	}

	set subType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Action stipulated by this Contract.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Reason for action stipulated by this Contract.
	get actionReason() {
		return this.__actionReason;
	}

	set actionReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__actionReason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The type of decision made by a grantor with respect to an offer made by a grantee.
	get decisionType() {
		return this.__decisionType;
	}

	set decisionType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__decisionType = new CodeableConcept(new_value);
	}

	// The minimal content derived from the basal information source at a specific stage in its lifecycle.
	get contentDerivative() {
		return this.__contentDerivative;
	}

	set contentDerivative(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__contentDerivative = new CodeableConcept(new_value);
	}

	// A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel() {
		return this.__securityLabel;
	}

	set securityLabel(new_value) {
		const Coding = require('./Coding');
		this.__securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
	get agent() {
		return this.__agent;
	}

	set agent(new_value) {
		const ContractAgent = require('./ContractAgent');
		this.__agent = Array.isArray(new_value)
			? new_value.map(val => new ContractAgent(val))
			: [new ContractAgent(new_value)];
	}

	// Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
	get signer() {
		return this.__signer;
	}

	set signer(new_value) {
		const ContractSigner = require('./ContractSigner');
		this.__signer = Array.isArray(new_value)
			? new_value.map(val => new ContractSigner(val))
			: [new ContractSigner(new_value)];
	}

	// Contract Valued Item List.
	get valuedItem() {
		return this.__valuedItem;
	}

	set valuedItem(new_value) {
		const ContractValuedItem = require('./ContractValuedItem');
		this.__valuedItem = Array.isArray(new_value)
			? new_value.map(val => new ContractValuedItem(val))
			: [new ContractValuedItem(new_value)];
	}

	// One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
	get term() {
		return this.__term;
	}

	set term(new_value) {
		const ContractTerm = require('./ContractTerm');
		this.__term = Array.isArray(new_value)
			? new_value.map(val => new ContractTerm(val))
			: [new ContractTerm(new_value)];
	}

	// Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \'source of truth\' and which would be the basis for legal action related to enforcement of this Contract.
	get bindingAttachment() {
		return this.__bindingAttachment;
	}

	set bindingAttachment(new_value) {
		const Attachment = require('./Attachment');
		this.__bindingAttachment = new Attachment(new_value);
	}

	// Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \'source of truth\' and which would be the basis for legal action related to enforcement of this Contract.
	get bindingReference() {
		return this.__bindingReference;
	}

	set bindingReference(new_value) {
		const Reference = require('./Reference');
		this.__bindingReference = new Reference(new_value);
	}

	// The \'patient friendly language\' versionof the Contract in whole or in parts. \'Patient friendly language\' means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
	get friendly() {
		return this.__friendly;
	}

	set friendly(new_value) {
		const ContractFriendly = require('./ContractFriendly');
		this.__friendly = Array.isArray(new_value)
			? new_value.map(val => new ContractFriendly(val))
			: [new ContractFriendly(new_value)];
	}

	// List of Legal expressions or representations of this Contract.
	get legal() {
		return this.__legal;
	}

	set legal(new_value) {
		const ContractLegal = require('./ContractLegal');
		this.__legal = Array.isArray(new_value)
			? new_value.map(val => new ContractLegal(val))
			: [new ContractLegal(new_value)];
	}

	// List of Computable Policy Rule Language Representations of this Contract.
	get rule() {
		return this.__rule;
	}

	set rule(new_value) {
		const ContractRule = require('./ContractRule');
		this.__rule = Array.isArray(new_value)
			? new_value.map(val => new ContractRule(val))
			: [new ContractRule(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			issued: this.__issued,
			applies: this.__applies && this.__applies.toJSON(),
			subject: this.__subject && this.__subject.map(v => v.toJSON()),
			topic: this.__topic && this.__topic.map(v => v.toJSON()),
			authority: this.__authority && this.__authority.map(v => v.toJSON()),
			domain: this.__domain && this.__domain.map(v => v.toJSON()),
			type: this.__type && this.__type.toJSON(),
			subType: this.__subType && this.__subType.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
			actionReason: this.__actionReason && this.__actionReason.map(v => v.toJSON()),
			decisionType: this.__decisionType && this.__decisionType.toJSON(),
			contentDerivative: this.__contentDerivative && this.__contentDerivative.toJSON(),
			securityLabel: this.__securityLabel && this.__securityLabel.map(v => v.toJSON()),
			agent: this.__agent && this.__agent.map(v => v.toJSON()),
			signer: this.__signer && this.__signer.map(v => v.toJSON()),
			valuedItem: this.__valuedItem && this.__valuedItem.map(v => v.toJSON()),
			term: this.__term && this.__term.map(v => v.toJSON()),
			bindingAttachment: this.__bindingAttachment && this.__bindingAttachment.toJSON(),
			bindingReference: this.__bindingReference && this.__bindingReference.toJSON(),
			friendly: this.__friendly && this.__friendly.map(v => v.toJSON()),
			legal: this.__legal && this.__legal.map(v => v.toJSON()),
			rule: this.__rule && this.__rule.map(v => v.toJSON()),
		});
	}
}

module.exports = Contract;
