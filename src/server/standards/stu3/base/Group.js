const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Group_Characteristic = require('./Group_Characteristic');
const Group_Member = require('./Group_Member');

class Group extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Group';
	}

	// This is a Group resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Group'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A unique business identifier for this group.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// Identifies the broad classification of the kind of resources the group includes.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['person', 'animal', 'practitioner', 'device', 'medication', 'substance'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
	get actual () {
		return this._actual;
	}

	set actual ( new_value ) {
		this._actual = new_value;
	}

	// Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// A label assigned to the group for human identification and communication.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A count of the number of resource instances that are part of the group.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field quantity`);
		}
		this._quantity = new_value;
	}

	// Identifies the traits shared by members of the group.
	get characteristic () {
		return this._characteristic;
	}

	set characteristic ( new_value ) {
		this._characteristic = Array.isArray(new_value) ? new_value.map(val => new Group_Characteristic(val)) : [new Group_Characteristic(new_value)];
	}

	// Identifies the resource instances that are members of the group.
	get member () {
		return this._member;
	}

	set member ( new_value ) {
		this._member = Array.isArray(new_value) ? new_value.map(val => new Group_Member(val)) : [new Group_Member(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			active: this._active,
			type: this._type,
			actual: this._actual,
			code: this._code,
			name: this._name,
			quantity: this._quantity,
			characteristic: this._characteristic,
			member: this._member
		});
	}

}

module.exports = Group;
