const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ContractTerm extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ContractTerm';
		Object.assign(this, opt);
	}

	// This is a ContractTerm resource
	static get __resourceType() {
		return 'ContractTerm';
	}

	// Unique identifier for this particular Contract Provision.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// When this Contract Provision was issued.
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

	// Relevant time or time-period when this Contract Provision is applicable.
	get applies() {
		return this.__applies;
	}

	set applies(new_value) {
		const Period = require('./Period');
		this.__applies = new Period(new_value);
	}

	// Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.
	get subType() {
		return this.__subType;
	}

	set subType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subType = new CodeableConcept(new_value);
	}

	// The matter of concern in the context of this provision of the agrement.
	get topic() {
		return this.__topic;
	}

	set topic(new_value) {
		const Reference = require('./Reference');
		this.__topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Action stipulated by this Contract Provision.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Reason or purpose for the action stipulated by this Contract Provision.
	get actionReason() {
		return this.__actionReason;
	}

	set actionReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__actionReason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A set of security labels that define which terms are controlled by this condition.
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
		const ContractTermAgent = require('./ContractTermAgent');
		this.__agent = Array.isArray(new_value)
			? new_value.map(val => new ContractTermAgent(val))
			: [new ContractTermAgent(new_value)];
	}

	// Human readable form of this Contract Provision.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// Contract Provision Valued Item List.
	get valuedItem() {
		return this.__valuedItem;
	}

	set valuedItem(new_value) {
		const ContractTermValuedItem = require('./ContractTermValuedItem');
		this.__valuedItem = Array.isArray(new_value)
			? new_value.map(val => new ContractTermValuedItem(val))
			: [new ContractTermValuedItem(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			issued: this.__issued,
			applies: this.__applies && this.__applies.toJSON(),
			type: this.__type && this.__type.toJSON(),
			subType: this.__subType && this.__subType.toJSON(),
			topic: this.__topic && this.__topic.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
			actionReason: this.__actionReason && this.__actionReason.map(v => v.toJSON()),
			securityLabel: this.__securityLabel && this.__securityLabel.map(v => v.toJSON()),
			agent: this.__agent && this.__agent.map(v => v.toJSON()),
			text: this.__text,
			valuedItem: this.__valuedItem && this.__valuedItem.map(v => v.toJSON()),
		});
	}
}

module.exports = ContractTerm;
