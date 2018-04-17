const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Quantity = require('./types/Quantity');
const Range = require('./types/Range');
const Period = require('./types/Period');
const Reference = require('./types/Reference');

class Member {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// entity		1..1	Reference(Patient | Practitioner | Device | Medication | Substance)	Reference to the group member
	set entity(entity) {
		this._entity = new Reference(entity);
	}

	get entity() {
		return this._entity;
	}

	// period		0..1	Period	Period member belonged to the group
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// inactive		0..1	boolean	If member is no longer in group
	set inactive(inactive) {
		this._inactive = inactive;
	}

	get inactive() {
		return this._inactive;
	}

	toJSON() {
		return {
			entity: this._entity,
			period: this._period,
			inactive: this._inactive,
		};
	}
}

class Characteristic {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	CodeableConcept	Kind of characteristic
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// value[x]		1..1		Value held by characteristic
	// valueCodeableConcept			CodeableConcept
	set valueCodeableConcept(valueCodeableConcept) {
		this._valueCodeableConcept = new CodeableConcept(valueCodeableConcept);
	}

	get valueCodeableConcept() {
		return this._valueCodeableConcept;
	}

	// valueBoolean			boolean
	set valueBoolean(valueBoolean) {
		this._valueBoolean = valueBoolean;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}

	// valueQuantity			Quantity
	set valueQuantity(valueQuantity) {
		this._valueQuantity = new Quantity(valueQuantity);
	}

	get valueQuantity() {
		return this._valueQuantity;
	}

	// valueRange			Range
	set valueRange(valueRange) {
		this._valueRange = new Range(valueRange);
	}

	get valueRange() {
		return this._valueRange;
	}

	// exclude	?!	1..1	boolean	Group includes or excludes
	set exclude(exclude) {
		this._exclude = exclude;
	}

	get exclude() {
		return this._exclude;
	}

	// period		0..1	Period	Period over which characteristic is tested
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	toJSON() {
		return {
			code: this._code,
			valueCodeableConcept: this._valueCodeableConcept,
			valueBoolean: this._valueBoolean,
			valueQuantity: this._valueQuantity,
			valueRange: this._valueRange,
			exclude: this._exclude,
			period: this._period,
		};
	}
}

class Group extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Group';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Unique id
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

	// active	Σ	0..1	boolean	Whether this group's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// type	Σ	1..1	code	person | animal | practitioner | device | medication | substance
	// GroupType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// actual	ΣI	1..1	boolean	Descriptive or actual
	set actual(actual) {
		this._actual = actual;
	}

	get actual() {
		return this._actual;
	}

	// code	Σ	0..1	CodeableConcept	Kind of Group members
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// name	Σ	0..1	string	Label for Group
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// quantity	Σ	0..1	unsignedInt	Number of members
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// characteristic		0..*	BackboneElement	Trait of group members
	set characteristic(characteristic) {
		if (Array.isArray(characteristic)) {
			this._characteristic = characteristic.map((i) => new Characteristic(i));
		} else {
			this._characteristic = [new Characteristic(characteristic)];
		}
	}

	get characteristic() {
		return this._characteristic;
	}

	// member	I	0..*	BackboneElement	Who or what is in group
	set member(member) {
		if (Array.isArray(member)) {
			this._member = member.map((i) => new Member(i));
		} else {
			this._member = [new Member(member)];
		}
	}

	get member() {
		return this._member;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			type: this._type,
			actual: this._actual,
			code: this._code,
			name: this._name,
			quantity: this._quantity,
			characteristic: this._characteristic,
			member: this._member,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Group = Group;
module.exports.Characteristic = Characteristic;
module.exports.Member = Member;
