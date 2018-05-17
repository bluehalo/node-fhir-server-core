const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Coding = require('./Coding');
const Contract_Agent = require('./Contract_Agent');
const Contract_Signer = require('./Contract_Signer');
const Contract_ValuedItem = require('./Contract_ValuedItem');
const Contract_Term = require('./Contract_Term');
const Attachment = require('./Attachment');
const Contract_Friendly = require('./Contract_Friendly');
const Contract_Legal = require('./Contract_Legal');
const Contract_Rule = require('./Contract_Rule');

class Contract extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract';
	}

	// This is a Contract resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Contract'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Unique identifier for this Contract.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// When this  Contract was issued.
	get issued () {
		return this._issued;
	}

	set issued ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this._issued = new_value;
	}

	// Relevant time or time-period when this Contract is applicable.
	get applies () {
		return this._applies;
	}

	set applies ( new_value ) {
		this._applies = new Period(new_value);
	}

	// The target entity impacted by or of interest to parties to the agreement.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The matter of concern in the context of this agreement.
	get topic () {
		return this._topic;
	}

	set topic ( new_value ) {
		this._topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
	get authority () {
		return this._authority;
	}

	set authority ( new_value ) {
		this._authority = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
	get domain () {
		return this._domain;
	}

	set domain ( new_value ) {
		this._domain = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.
	get subType () {
		return this._subType;
	}

	set subType ( new_value ) {
		this._subType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Action stipulated by this Contract.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Reason for action stipulated by this Contract.
	get actionReason () {
		return this._actionReason;
	}

	set actionReason ( new_value ) {
		this._actionReason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The type of decision made by a grantor with respect to an offer made by a grantee.
	get decisionType () {
		return this._decisionType;
	}

	set decisionType ( new_value ) {
		this._decisionType = new CodeableConcept(new_value);
	}

	// The minimal content derived from the basal information source at a specific stage in its lifecycle.
	get contentDerivative () {
		return this._contentDerivative;
	}

	set contentDerivative ( new_value ) {
		this._contentDerivative = new CodeableConcept(new_value);
	}

	// A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.
	get securityLabel () {
		return this._securityLabel;
	}

	set securityLabel ( new_value ) {
		this._securityLabel = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
	get agent () {
		return this._agent;
	}

	set agent ( new_value ) {
		this._agent = Array.isArray(new_value) ? new_value.map(val => new Contract_Agent(val)) : [new Contract_Agent(new_value)];
	}

	// Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.
	get signer () {
		return this._signer;
	}

	set signer ( new_value ) {
		this._signer = Array.isArray(new_value) ? new_value.map(val => new Contract_Signer(val)) : [new Contract_Signer(new_value)];
	}

	// Contract Valued Item List.
	get valuedItem () {
		return this._valuedItem;
	}

	set valuedItem ( new_value ) {
		this._valuedItem = Array.isArray(new_value) ? new_value.map(val => new Contract_ValuedItem(val)) : [new Contract_ValuedItem(new_value)];
	}

	// One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
	get term () {
		return this._term;
	}

	set term ( new_value ) {
		this._term = Array.isArray(new_value) ? new_value.map(val => new Contract_Term(val)) : [new Contract_Term(new_value)];
	}

	// Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
	get bindingAttachment () {
		return this._bindingAttachment;
	}

	set bindingAttachment ( new_value ) {
		this._bindingAttachment = new Attachment(new_value);
	}

	// Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
	get bindingReference () {
		return this._bindingReference;
	}

	set bindingReference ( new_value ) {
		this._bindingReference = new Reference(new_value);
	}

	// The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
	get friendly () {
		return this._friendly;
	}

	set friendly ( new_value ) {
		this._friendly = Array.isArray(new_value) ? new_value.map(val => new Contract_Friendly(val)) : [new Contract_Friendly(new_value)];
	}

	// List of Legal expressions or representations of this Contract.
	get legal () {
		return this._legal;
	}

	set legal ( new_value ) {
		this._legal = Array.isArray(new_value) ? new_value.map(val => new Contract_Legal(val)) : [new Contract_Legal(new_value)];
	}

	// List of Computable Policy Rule Language Representations of this Contract.
	get rule () {
		return this._rule;
	}

	set rule ( new_value ) {
		this._rule = Array.isArray(new_value) ? new_value.map(val => new Contract_Rule(val)) : [new Contract_Rule(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			issued: this._issued,
			applies: this._applies,
			subject: this._subject,
			topic: this._topic,
			authority: this._authority,
			domain: this._domain,
			type: this._type,
			subType: this._subType,
			action: this._action,
			actionReason: this._actionReason,
			decisionType: this._decisionType,
			contentDerivative: this._contentDerivative,
			securityLabel: this._securityLabel,
			agent: this._agent,
			signer: this._signer,
			valuedItem: this._valuedItem,
			term: this._term,
			bindingAttachment: this._bindingAttachment,
			bindingReference: this._bindingReference,
			friendly: this._friendly,
			legal: this._legal,
			rule: this._rule
		});
	}

}

module.exports = Contract;
