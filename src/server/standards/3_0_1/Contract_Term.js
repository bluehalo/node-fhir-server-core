const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Period = require('./Period');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Coding = require('./Coding');
const Contract_Agent1 = require('./Contract_Agent1');
const Contract_ValuedItem1 = require('./Contract_ValuedItem1');

class Contract_Term extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Contract_Term';
	}

	// Unique identifier for this particular Contract Provision.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// When this Contract Provision was issued.
	get issued () {
		return this._issued;
	}

	set issued ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this._issued = new_value;
	}

	// Relevant time or time-period when this Contract Provision is applicable.
	get applies () {
		return this._applies;
	}

	set applies ( new_value ) {
		this._applies = new Period(new_value);
	}

	// Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.
	get subType () {
		return this._subType;
	}

	set subType ( new_value ) {
		this._subType = new CodeableConcept(new_value);
	}

	// The matter of concern in the context of this provision of the agrement.
	get topic () {
		return this._topic;
	}

	set topic ( new_value ) {
		this._topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Action stipulated by this Contract Provision.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Reason or purpose for the action stipulated by this Contract Provision.
	get actionReason () {
		return this._actionReason;
	}

	set actionReason ( new_value ) {
		this._actionReason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A set of security labels that define which terms are controlled by this condition.
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
		this._agent = Array.isArray(new_value) ? new_value.map(val => new Contract_Agent1(val)) : [new Contract_Agent1(new_value)];
	}

	// Human readable form of this Contract Provision.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// Contract Provision Valued Item List.
	get valuedItem () {
		return this._valuedItem;
	}

	set valuedItem ( new_value ) {
		this._valuedItem = Array.isArray(new_value) ? new_value.map(val => new Contract_ValuedItem1(val)) : [new Contract_ValuedItem1(new_value)];
	}

	// Nested group of Contract Provisions.
	get group () {
		return this._group;
	}

	set group ( new_value ) {
		this._group = Array.isArray(new_value) ? new_value.map(val => new Contract_Term(val)) : [new Contract_Term(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier && this._identifier.toJSON(),
			issued: this._issued,
			applies: this._applies && this._applies.toJSON(),
			type: this._type && this._type.toJSON(),
			subType: this._subType && this._subType.toJSON(),
			topic: this._topic && this._topic.map(v => v.toJSON()),
			action: this._action && this._action.map(v => v.toJSON()),
			actionReason: this._actionReason && this._actionReason.map(v => v.toJSON()),
			securityLabel: this._securityLabel && this._securityLabel.map(v => v.toJSON()),
			agent: this._agent && this._agent.map(v => v.toJSON()),
			text: this._text,
			valuedItem: this._valuedItem && this._valuedItem.map(v => v.toJSON()),
			group: this._group && this._group.map(v => v.toJSON())
		});
	}

}

module.exports = Contract_Term;
